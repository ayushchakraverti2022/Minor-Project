from flask import Flask,request,jsonify, render_template 
import pandas as pd 
import numpy as np 
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

tv_series = pd.read_csv('tv_series.csv')
# df = pd.read_csv('similarity.csv')

def recommendrating(genre, lang, rating=6,num=10):
    mov = tv_series[(tv_series['vote_average'] > rating) & (tv_series['genres'] == genre) & (tv_series['original_language'] == lang)]
    IND = list(mov.index[:num])
    result_name = []
    result_poster= []
    for i in IND:
        resultname = mov.loc[i, 'name']
        resulturl = ("https://image.tmdb.org/t/p/w500" + mov.loc[i, 'poster_path'])
        result_name.append(resultname)
        result_poster.append(resulturl)
    return result_name, result_poster

# @app.route('/')
# def index():
#     return render_template('trial.html') 


@app.route('/rating', methods = ['GET'])
def rating_based():
    genre = request.args.get('genre')
    lang = request.args.get('lang')
    rating = request.args.get('rating')
    num = request.args.get('num')
    if genre and lang and rating and num:
        try:
            rating = float(rating)
            num = int(num)
        except ValueError:
            return jsonify({'error': "Rating and Num must be numbers!"})
        result_name, result_poster = recommendrating(genre, lang, float(rating),int(num))
        recommendations = {
            'names': result_name,
            'posters': result_poster
        }
        return (recommendations)
    else:
        return jsonify("Please make valid enteries!")
    
    
if __name__ == '__main__':
    app.run(debug=True)