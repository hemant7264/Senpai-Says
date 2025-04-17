import requests
import numpy as np
import pandas as pd
import difflib
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

url = "https://spotify23.p.rapidapi.com/search/"

headers = {
	"X-RapidAPI-Key": "c005ff38f3msh26aafb5efb36754p16bf25jsn5adb3811d8f3",
	"X-RapidAPI-Host": "spotify23.p.rapidapi.com"
}


def song_recommendations(song_name):
    the_song_list = []

    for i in range(1):
        songs_data=pd.read_csv('C:\\Users\\HP\\Desktop\\PROJECT  3\\model\\songs_normalize.csv')
        selected_features = ['genre','popularity','danceability','artist']
        for feature in selected_features:  
            songs_data[feature] = songs_data[feature].fillna('')
        combined_features = songs_data['genre']+' '+str(songs_data['popularity'])+' '+str(songs_data['danceability'])+' '+songs_data['artist']
        vectorizer = TfidfVectorizer()
        feature_vectors = vectorizer.fit_transform(combined_features)
        similarity = cosine_similarity(feature_vectors)
        songs_data.drop_duplicates()
        list_of_all_titles = songs_data['song'].tolist()
        find_close_match = difflib.get_close_matches(song_name, list_of_all_titles)
        close_match = find_close_match[0]
        index_of_the_song = songs_data[songs_data.song == close_match]['index'].values[0]
        similarity_score = list(enumerate(similarity[index_of_the_song]))
        sorted_similar_songs = sorted(similarity_score, key = lambda x:x[1], reverse = True)

        i=1
        for song in sorted_similar_songs:
            index = song[0]
            song_from_index = songs_data[songs_data.index==index]['song'].values[0]
            genre_from_index = songs_data[songs_data.index==index]['genre'].values[0]
            
            if (i<=2):  
                the_dict = { 0 : song_from_index, 1 : genre_from_index.rsplit(",", 1)[0] }
                the_song_list.append(the_dict)
                i+=1
        
        return the_song_list



def suggest_songs():
    track = song_recommendations("Perfect")
    song_json_data = []

    for l in range(2):
        querystring = {"q":track[l][0],"type":"tracks","offset":"0","limit":"1","numberOfTopResults":"1"}
        response = requests.get(url, headers=headers, params=querystring)
        result = response.json()

        song_name = result["tracks"]["items"][0]["data"]["name"]
        album_name = result["tracks"]["items"][0]["data"]["albumOfTrack"]["name"]
        artist_name = result["tracks"]["items"][0]["data"]["artists"]["items"][0]["profile"]["name"]

        print(song_name)
        print(album_name)
        print(artist_name)
        print(track[l][1].capitalize())

        song_meta = {
            "title": song_name,
            "artist":artist_name,
            "album": album_name,
            "genere": track[l][1].capitalize()
        }

        song_json_data.append(song_meta)
    
    print("META DATA")
    print(song_json_data)

suggest_songs()