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

url = "https://spotify23.p.rapidapi.com/search/"

headers = {
	"X-RapidAPI-Key": "c1aaf0afce3mshc8c0c191e558f00p1dc68djsn71130b3ba10a",
	"X-RapidAPI-Host": "spotify23.p.rapidapi.com"
}

headers1 = {
	"X-RapidAPI-Key": "1aaf0afce3mshc8c0c191e558f00p1dc68djsn71130b3ba10a",
	"X-RapidAPI-Host": "hapi-books.p.rapidapi.com"
}

app = Flask("songsapi")
CORS(app, resources={r"/*": {"origins": ["http://localhost:3000", "http://example.com"]}})

def song_recommendations(song_name):
    the_song_list = []

    for l in range(4):
        songs_data=pd.read_csv('D:\\React.JS\\model\\csvs\\songs_normalize.csv')
        selected_features = ['genre','popularity','danceability','artist']
        for feature in selected_features:  
            songs_data[feature] = songs_data[feature].fillna('')
        combined_features = songs_data['genre']+' '+str(songs_data['popularity'])+' '+str(songs_data['danceability'])+' '+songs_data['artist']
        vectorizer = TfidfVectorizer()
        feature_vectors = vectorizer.fit_transform(combined_features)
        similarity = cosine_similarity(feature_vectors)
        songs_data.drop_duplicates()
        list_of_all_titles = songs_data['song'].tolist()
        find_close_match = difflib.get_close_matches(song_name[l], list_of_all_titles)
        close_match = find_close_match[0]
        index_of_the_song = songs_data[songs_data.song == close_match]['index'].values[0]
        similarity_score = list(enumerate(similarity[index_of_the_song]))
        sorted_similar_songs = sorted(similarity_score, key = lambda x:x[1], reverse = True)

        i=1
        for song in sorted_similar_songs:
            index = song[0]
            song_from_index = songs_data[songs_data.index==index]['song'].values[0]
            genre_from_index = songs_data[songs_data.index==index]['genre'].values[0]
            
            if (i<=6):  
                the_dict = { 0 : song_from_index, 1 : genre_from_index.split(",")[0].strip() }
                the_song_list.append(the_dict)
                i+=1
        
    return the_song_list
    return "This is the songs"

def book_recommendations(book_name):
    the_book_list = []

    for l in range(3):
        books_data=pd.read_csv('D:\\React.JS\\model\\csvs\\books_final.csv')
        selected_features = ['authors','average_rating','ratings_count','publisher']

        for feature in selected_features:
            books_data[feature] = books_data[feature].fillna('')
            
        combined_features = books_data['authors']+' '+books_data['average_rating'].astype(str)+' '+books_data['ratings_count'].astype(str)+' '+books_data['publisher']
        vectorizer = TfidfVectorizer()
        feature_vectors = vectorizer.fit_transform(combined_features)
        similarity = cosine_similarity(feature_vectors)
        books_data.drop_duplicates()

        list_of_all_titles = books_data['title'].tolist()
        find_close_match = difflib.get_close_matches(book_name[l], list_of_all_titles)
        close_match = find_close_match[0]
        index_of_the_book = books_data[books_data.title == close_match]['bookID'].values[0]
        similarity_score = list(enumerate(similarity[index_of_the_book]))
        sorted_similar_books = sorted(similarity_score, key = lambda x:x[1], reverse = True)

        i=1
        for movie in sorted_similar_books:
            index = movie[0]
            book_title = books_data[books_data.index==index]['title'].values[0]
            if (i<=6):
                the_book_list.append(book_title)
                i+=1
    return the_book_list


#================================== SONG SUGGESTIONS INTO JSON FILE ========================================
@app.route('/songsapi/songdata', methods=['POST'])
def song_data():
    input_data1 = request.get_json()
    print(input_data1)
    track = song_recommendations(input_data1)
    print(track)

    jsondata = []
    i = 0
    c = 0
    while len(jsondata) <= 20:
        if c == 1:
            i = i + 1
            c = 0
        querystring = {"q":track[i][0],"type":"tracks","offset":"0","limit":"1","numberOfTopResults":"1"}
        print("Check 1")
        response = requests.get(url, headers=headers, params=querystring)
        result = response.json()

        if not result: # check if result is empty
            c = 1
            continue # move to the next iteration if empty
        
        print("Check  2")
        try:
            response.raise_for_status() # Check if the response is successful
        except requests.exceptions.HTTPError as error:
            print(f"The request returned an error: {error}")
            c = 1
            continue # move to the next iteration if error occurs
        
        try:
            the_result = response.json()
        except json.decoder.JSONDecodeError as error:
            print(f"There was an error decoding the JSON: {error}")
            c = 1
            continue # move to the next iteration if error occurs
        print("Check 3")
        try:
            song_name = result["tracks"]["items"][0]["data"]["name"]
        except KeyError:
            image = "N/A"
        try:
            album_name = result["tracks"]["items"][0]["data"]["albumOfTrack"]["name"]
        except KeyError:
            name = "N/A"
        try:
            artist_name = result["tracks"]["items"][0]["data"]["artists"]["items"][0]["profile"]["name"]
        except KeyError:
            year = "N/A"
        
        if track[i][1] =="":
            track[i][1] = "Hip Hop"


        song_meta = {
            "title": song_name,
            "artist": artist_name,
            "album": album_name,
            "genere": track[i][1].capitalize(),
        }

        jsondata.append(song_meta)
        i = i + 1


    # Specify the path of the directory
    directory_path = "D:\\React.JS\\model\\data\\data"
    print("reached_directory")

    # Check if the directory exists, if not create it
    if not os.path.exists(directory_path):
        os.makedirs(directory_path)

    # Create the file inside the directory
    filename = "first_song.json"
    filepath = os.path.join(directory_path, filename)
    print(filepath)

    try:
        with open(filepath, 'w') as f:
            movie_information = {"top_song_suggestions": jsondata}
            print("Inside json")
            json.dump(movie_information, f)
            return "File Created Successfully"
    except Exception as e:
        print("Error creating file:", e)
        return "Error creating file"

    print("Waah Waah")
    return "Ok"

#================================== SONG SUGGESTIONS READ ========================================
@app.route('/songsapi/song_data')
def song_data1():
    with open('D:\\React.JS\\model\\data\\first_song.json', 'r') as f:
        data = json.load(f)
    return jsonify(data)

#================================== BOOK SUGGESTIONS INTO JSON FILE ========================================
@app.route('/songsapi/bookdata', methods=['POST'])
def book_data():
    input_data2 = request.get_json()
    print(input_data2)
    result1 = book_recommendations(input_data2)
    print(result1)
    book_json_data = []
    i = 0
    c = 0
    
    while len(book_json_data) <= 16:
        if c==1:
            i = i + 1
            c = 0
        print("check 0")
        bn = result1[i]
        print(bn)
        a = "+".join(bn.lower().split())
        print(a)
        url = "https://hapi-books.p.rapidapi.com/search/"+a
        response = requests.get(url, headers=headers1)
        result = response.json()

        if not result: # check if result is empty
            c = 1
            continue # move to the next iteration if empty
        print("check 3")
        book_name = result[0]["name"]
        book_rating=result[0]["rating"]
        book_year=result[0]["year"]
        book_author=result[0]["authors"][0]

        book_meta = {
            "title": book_name,
            "author":book_author,
            "description": book_year,
            "rating":book_rating
        }

        book_json_data.append(book_meta)
        i = i + 1
    
    print("META DATA")
    print(book_json_data)

    # Specify the path of the directory
    directory_path = "D:\\React.JS\\model\\data"
    print("reached_directory")

    # Check if the directory exists, if not create it
    if not os.path.exists(directory_path):
        os.makedirs(directory_path)

    # Create the file inside the directory
    filename = "books.json"
    filepath = os.path.join(directory_path, filename)
    print(filepath)

    try:
        with open(filepath, 'w') as f:
            movie_information = {"top_suggestions": book_json_data}
            print("Inside json")
            json.dump(movie_information, f)
            return "File Created Successfully"
    except Exception as e:
        print("Error creating file:", e)
        return "Error creating file"
    return "Ok"


#================================== BOOK SUGGESTIONS INTO JSON FILE ========================================
@app.route('/songsapi/book_data')
def book_data1():
    with open('D:\\React.JS\\model\\data\\books.json', 'r') as f:
        data = json.load(f)
    return jsonify(data)


if __name__ == '__main__':
    app.run(debug=True, port=8000)