import requests
import json
import os
import numpy as np
import pandas as pd
import difflib
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

url1 = "https://imdb8.p.rapidapi.com/title/find"

headers = {
	"X-RapidAPI-Key": "c005ff38f3msh26aafb5efb36754p16bf25jsn5adb3811d8f3",
	"X-RapidAPI-Host": "imdb8.p.rapidapi.com"
}

def recommendations(movie_name):
	the_list = []

	movies_data=pd.read_csv('C:\\Users\\HP\\Desktop\\PROJECT  3\\AI MODEL\\movies.csv')
	selected_features = ['genres','keywords','tagline','cast','director']
	for feature in selected_features:
		movies_data[feature] = movies_data[feature].fillna('')
	combined_features = movies_data['genres']+' '+movies_data['keywords']+' '+movies_data['tagline']+' '+movies_data['cast']+' '+movies_data['director']
	vectorizer = TfidfVectorizer()

	feature_vectors = vectorizer.fit_transform(combined_features)
	similarity = cosine_similarity(feature_vectors)
	movies_data.drop_duplicates()

	list_of_all_titles = movies_data['title'].tolist()
	find_close_match = difflib.get_close_matches(movie_name, list_of_all_titles)
	close_match = find_close_match[0]
	index_of_the_movie = movies_data[movies_data.title == close_match]['index'].values[0]
	similarity_score = list(enumerate(similarity[index_of_the_movie]))
	sorted_similar_movies = sorted(similarity_score, key = lambda x:x[1], reverse = True)

	i=1
	for movie in sorted_similar_movies:
		index = movie[0]
		movie_title = movies_data[movies_data.index==index]['title'].values[0]
		if (i<=10):
			the_list.append(movie_title)
			i+=1
			
	return the_list


the_movies = recommendations("Avengers")
print(the_movies)
jsondata = []

for i in range(10):
	querystring = {"q": the_movies[i]}
	response1 = requests.get(url1, headers=headers, params=querystring)
	result = response1.json()["results"]
	id_temp = result[0]["id"]
	movie_id = str(id_temp.split("/")[2])
	print(movie_id) 
	url2 = "https://imdb8.p.rapidapi.com/title/get-overview-details"
	querystring = {"tconst":movie_id,"currentCountry":"US"}
	response2 = requests.get(url2, headers=headers, params=querystring)
	the_result = response2.json()
	try:
		image = the_result[0]["cover"]
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
		ratings = the_result["ratings"]["rating"]
	except KeyError:
		ratings = "N/A"
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
        "ratings": ratings,
        "genere": gen,
        "description": description
    }

	print("\nMOVIE DATA")
	print(image)
	print(name)
	print(year)
	print(ratings)
	print(gen)
	print(description)
	
	jsondata.append(movie_data)

# Specify the path of the directory
directory_path = "C:\\Users\\HP\\Desktop\\PROJECT  3\\AI MODEL\\movie_data"

# Check if the directory exists, if not create it
if not os.path.exists(directory_path):
    os.makedirs(directory_path)

# Create the file inside the directory
filename = "movies_1.json"
filepath = os.path.join(directory_path, filename)

with open(filepath, 'w') as f:
	movie_information = {"top_suggestions": jsondata}
	json.dump(movie_information, f)

print("Status OK")
