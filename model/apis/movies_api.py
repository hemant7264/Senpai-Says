from flask import Flask,request , jsonify
import requests
import json
import os
import numpy as np
import pandas as pd
import difflib
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
from flask_cors import CORS

app = Flask("movieapi")
CORS(app, resources={r"/*": {"origins": ["http://localhost:3000"]}})


url1 = "https://imdb8.p.rapidapi.com/title/find"
url2 = "https://imdb8.p.rapidapi.com/title/get-overview-details"

headers = {
	"X-RapidAPI-Key": "1aaf0afce3mshc8c0c191e558f00p1dc68djsn71130b3ba10a",
	"X-RapidAPI-Host": "imdb8.p.rapidapi.com"
}


#================================== SUGGEST MOVIE CSV ========================================
def recommendations(movie_name):
    the_list = []

    for j in range(3):
        movies_data=pd.read_csv('D:\\React.JS\\model\\csvs\\movies.csv')
        selected_features = ['genres','keywords','tagline','cast','director']
        for feature in selected_features:
            movies_data[feature] = movies_data[feature].fillna('')
        combined_features = movies_data['genres']+' '+movies_data['keywords']+' '+movies_data['tagline']+' '+movies_data['cast']+' '+movies_data['director']
        vectorizer = TfidfVectorizer()

        feature_vectors = vectorizer.fit_transform(combined_features)
        similarity = cosine_similarity(feature_vectors)
        movies_data.drop_duplicates()

        list_of_all_titles = movies_data['title'].tolist()
        find_close_match = difflib.get_close_matches(movie_name[j], list_of_all_titles)
        close_match = find_close_match[0]
        index_of_the_movie = movies_data[movies_data.title == close_match]['index'].values[0]
        similarity_score = list(enumerate(similarity[index_of_the_movie]))
        sorted_similar_movies = sorted(similarity_score, key = lambda x:x[1], reverse = True)

        i = 0
        for movie in sorted_similar_movies:
            index = movie[0]
            movie_title = movies_data[movies_data.index==index]['title'].values[0]
            if (i<6):
                the_list.append(movie_title)
                i+=1
                
    return the_list


@app.route('/movieapi/movies', methods=['POST'])
#================================== WRITE SUGGESTIONS INTO JSON FILE ========================================
def suggest():
    input_data = request.get_json()
    print(input_data)

    the_movies = recommendations(input_data)

    print(the_movies)

    i = 0
    c = 0
    jsondata = []
    while len(jsondata) <= 16:
        if c == 1:
            i = i + 1
            c = 0
        querystring = {"q": the_movies[i]}
        response1 = requests.get(url1, headers=headers, params=querystring)
        result = response1.json()["results"]
        

        if not result: # check if result is empty
            c = 1
            continue # move to the next iteration if empty
        id_temp = result[0]["id"]
        movie_id = str(id_temp.split("/")[2])
        print(movie_id) 
        querystring = {"tconst":movie_id,"currentCountry":"US"}
        response2 = requests.get(url2, headers=headers, params=querystring)
        
        try:
            response2.raise_for_status() # Check if the response is successful
        except requests.exceptions.HTTPError as error:
            print(f"The request returned an error: {error}")
            c = 1
            continue # move to the next iteration if error occurs
        
        try:
            the_result = response2.json()
        except json.decoder.JSONDecodeError as error:
            print(f"There was an error decoding the JSON: {error}")
            c = 1
            continue # move to the next iteration if error occurs
        
        try:
            ratings = float(the_result["ratings"]["rating"])
            print(type(ratings))
            if(ratings < 5):
                c = 1
                continue
        except KeyError:
            ratings = "N/A"
        try:
            image = the_result["title"]["image"]["url"]
        except KeyError:
            image = "N/A"
        try:
            name = the_result["title"]["title"]
        except KeyError:
            name = "N/A"
        try:
            year = the_result["title"]["year"]
        except KeyError:
            year = "N/A"
        try:
            genere_1 = the_result["genres"][0]
        except IndexError:
            genere_1 = "N/A"
        try:
            genere_2 = the_result["genres"][1]
        except IndexError:
            genere_2 = "N/A"
        try:
            genere_3 = the_result["genres"][2]
        except IndexError:
            genere_3 = "N/A"
        try:
            description = the_result["plotOutline"]["text"]
        except KeyError:
            description = "N/A"

        gen = genere_1 +" / "+genere_2+" / "+genere_3

        movie_data = {
            "image": image,
            "title": name,
            "year": year,
            "rating": ratings,
            "genere": gen,
            "description": description
        }

        jsondata.append(movie_data)
        i = i + 1


    # Specify the path of the directory
    directory_path = "D:\\React.JS\\model\\data"
    print("reached_directory")

    # Check if the directory exists, if not create it
    if not os.path.exists(directory_path):
        os.makedirs(directory_path)

    # Create the file inside the directory
    filename = "temp.json"
    filepath = os.path.join(directory_path, filename)
    print(filepath)

    try:
        with open(filepath, 'w') as f:
            movie_information = {"top_suggestions": jsondata}
            print("Inside json")
            json.dump(movie_information, f)
            return "File Created Successfully"
    except Exception as e:
        print("Error creating file:", e)
        return "Error creating file"

# MOVIES SUFFESTIONS READ
@app.route('/movie_data')
def movie_data1():
    with open('D:\\React.JS\\model\\data\\temp.json', 'r') as f:
        data = json.load(f)
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)
