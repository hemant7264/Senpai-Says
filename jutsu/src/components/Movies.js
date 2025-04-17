import React, { useState, useEffect }from 'react'
import '../style/movies.css'
import movie from '../data/movie_suggestions.json';

const Movies = () => {

    const [movieData, setMovieData] = useState({});

    useEffect(() => {
        fetch('http://localhost:5000/movie_data')
          .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then(data => {
            setMovieData(data);
          })
          .catch(error => console.log(error));
      }, []);

  return (
    <div>
      <div className="content">
        <div className="welcomesenpai">
            Senpai says watch these
        </div>
        <div className="movierecommendation">
            <div className="m_movie_info">
                <img  className="m_movie_img" src={movieData.top_suggestions?.[0]?.image}/>
                <div className="m_movie_name">{movieData.top_suggestions?.[0]?.title}</div>
                <div className="m_rat">
                    <div className="m_icons"><i className='bx bxs-star-half' ></i></div>
                    <div className="m_movie_rating">{movieData.top_suggestions?.[0]?.rating}</div>
                </div>
                <div className="m_movie_year">{movieData.top_suggestions?.[0]?.year}</div>
                <div className="m_movie_year">{movieData.top_suggestions?.[0]?.genere}</div>
                <div className="m_movie_description">{movieData.top_suggestions?.[0]?.description}</div>
            </div>
            <div className="m_movie_info">
                <img src={movieData.top_suggestions?.[1]?.image} className="m_movie_img"/>
                <div className="m_movie_name">{movieData.top_suggestions?.[1]?.title}</div>
                <div className="m_rat">
                    <div className="m_icons"><i className='bx bxs-star-half' ></i></div>
                    <div className="m_movie_rating">{movieData.top_suggestions?.[1]?.rating}</div>
                </div>
                <div className="m_movie_year">{movieData.top_suggestions?.[1]?.year}</div>
                <div className="m_movie_year">{movieData.top_suggestions?.[1]?.genere}</div>
                <div className="m_movie_description">{movieData.top_suggestions?.[1]?.description}</div>
            </div>
            <div className="m_movie_info">
                <img src={movieData.top_suggestions?.[2]?.image} className="m_movie_img"/>
                <div className="m_movie_name">{movieData.top_suggestions?.[2]?.title}</div>
                <div className="m_rat">
                    <div className="m_icons"><i className='bx bxs-star-half' ></i></div>
                    <div className="m_movie_rating">{movieData.top_suggestions?.[2]?.rating}</div>
                </div>
                <div className="m_movie_year">{movieData.top_suggestions?.[2]?.year}</div>
                <div className="m_movie_year">{movieData.top_suggestions?.[2]?.genere}</div>
                <div className="m_movie_description">{movieData.top_suggestions?.[2]?.description}</div>
            </div>
            <div className="m_movie_info">
                <img src={movieData.top_suggestions?.[3]?.image} className="m_movie_img"/>
                <div className="m_movie_name">{movieData.top_suggestions?.[3]?.title}</div>
                <div className="m_rat">
                    <div className="m_icons"><i className='bx bxs-star-half' ></i></div>
                    <div className="m_movie_rating">{movieData.top_suggestions?.[3]?.rating}</div>
                </div>
                <div className="m_movie_year">{movieData.top_suggestions?.[3]?.year}</div>
                <div className="m_movie_year">{movieData.top_suggestions?.[3]?.genere}</div>
                <div className="m_movie_description">{movieData.top_suggestions?.[3]?.description}</div>
            </div>
            <div className="m_movie_info">
                <img src={movieData.top_suggestions?.[4]?.image} className="m_movie_img"/>
                <div className="m_movie_name">{movieData.top_suggestions?.[4]?.title}</div>
                <div className="m_rat">
                    <div className="m_icons"><i className='bx bxs-star-half' ></i></div>
                    <div className="m_movie_rating">{movieData.top_suggestions?.[4]?.rating}</div>
                </div>
                <div className="m_movie_year">{movieData.top_suggestions?.[4]?.year}</div>
                <div className="m_movie_year">{movieData.top_suggestions?.[4]?.genere}</div>
                <div className="m_movie_description">{movieData.top_suggestions?.[4]?.description}</div>
            </div>
            <div className="m_movie_info">
                <img src={movieData.top_suggestions?.[5]?.image} className="m_movie_img"/>
                <div className="m_movie_name">{movieData.top_suggestions?.[5]?.title}</div>
                <div className="m_rat">
                    <div className="m_icons"><i className='bx bxs-star-half' ></i></div>
                    <div className="m_movie_rating">{movieData.top_suggestions?.[5]?.rating}</div>
                </div>
                <div className="m_movie_year">{movieData.top_suggestions?.[5]?.year}</div>
                <div className="m_movie_year">{movieData.top_suggestions?.[5]?.genere}</div>
                <div className="m_movie_description">{movieData.top_suggestions?.[5]?.description}</div>
            </div>
            <div className="m_movie_info">
                <img src={movieData.top_suggestions?.[6]?.image} className="m_movie_img"/>
                <div className="m_movie_name">{movieData.top_suggestions?.[6]?.title}</div>
                <div className="m_rat">
                    <div className="m_icons"><i className='bx bxs-star-half' ></i></div>
                    <div className="m_movie_rating">{movieData.top_suggestions?.[6]?.rating}</div>
                </div>
                <div className="m_movie_year">{movieData.top_suggestions?.[6]?.year}</div>
                <div className="m_movie_year">{movieData.top_suggestions?.[6]?.genere}</div>
                <div className="m_movie_description">{movieData.top_suggestions?.[6]?.description}</div>
            </div>
            <div className="m_movie_info">
                <img src={movieData.top_suggestions?.[7]?.image} className="m_movie_img"/>
                <div className="m_movie_name">{movieData.top_suggestions?.[7]?.title}</div>
                <div className="m_rat">
                    <div className="m_icons"><i className='bx bxs-star-half' ></i></div>
                    <div className="m_movie_rating">{movieData.top_suggestions?.[7]?.rating}</div>
                </div>
                <div className="m_movie_year">{movieData.top_suggestions?.[7]?.year}</div>
                <div className="m_movie_year">{movieData.top_suggestions?.[7]?.genere}</div>
                <div className="m_movie_description">{movieData.top_suggestions?.[7]?.description}</div>
            </div>
            <div className="m_movie_info">
                <img src={movieData.top_suggestions?.[8]?.image} className="m_movie_img"/>
                <div className="m_movie_name">{movieData.top_suggestions?.[8]?.title}</div>
                <div className="m_rat">
                    <div className="m_icons"><i className='bx bxs-star-half' ></i></div>
                    <div className="m_movie_rating">{movieData.top_suggestions?.[8]?.rating}</div>
                </div>
                <div className="m_movie_year">{movieData.top_suggestions?.[8]?.year}</div>
                <div className="m_movie_year">{movieData.top_suggestions?.[8]?.genere}</div>
                <div className="m_movie_description">{movieData.top_suggestions?.[8]?.description}</div>
            </div>
            <div className="m_movie_info">
                <img src={movieData.top_suggestions?.[9]?.image} className="m_movie_img"/>
                <div className="m_movie_name">{movieData.top_suggestions?.[9]?.title}</div>
                <div className="m_rat">
                    <div className="m_icons"><i className='bx bxs-star-half' ></i></div>
                    <div className="m_movie_rating">{movieData.top_suggestions?.[9]?.rating}</div>
                </div>
                <div className="m_movie_year">{movieData.top_suggestions?.[9]?.year}</div>
                <div className="m_movie_year">{movieData.top_suggestions?.[9]?.genere}</div>
                <div className="m_movie_description">{movieData.top_suggestions?.[9]?.description}</div>
            </div>
            <div className="m_movie_info">
                <img src={movieData.top_suggestions?.[10]?.image} className="m_movie_img"/>
                <div className="m_movie_name">{movieData.top_suggestions?.[10]?.title}</div>
                <div className="m_rat">
                    <div className="m_icons"><i className='bx bxs-star-half' ></i></div>
                    <div className="m_movie_rating">{movieData.top_suggestions?.[10]?.rating}</div>
                </div>
                <div className="m_movie_year">{movieData.top_suggestions?.[10]?.year}</div>
                <div className="m_movie_year">{movieData.top_suggestions?.[10]?.genere}</div>
                <div className="m_movie_description">{movieData.top_suggestions?.[10]?.description}</div>
            </div>
            <div className="m_movie_info">
                <img src={movieData.top_suggestions?.[11]?.image} className="m_movie_img"/>
                <div className="m_movie_name">{movieData.top_suggestions?.[11]?.title}</div>
                <div className="m_rat">
                    <div className="m_icons"><i className='bx bxs-star-half' ></i></div>
                    <div className="m_movie_rating">{movieData.top_suggestions?.[11]?.rating}</div>
                </div>
                <div className="m_movie_year">{movieData.top_suggestions?.[11]?.year}</div>
                <div className="m_movie_year">{movieData.top_suggestions?.[11]?.genere}</div>
                <div className="m_movie_description">{movieData.top_suggestions?.[11]?.description}</div>
            </div>
            <div className="m_movie_info">
                <img src={movieData.top_suggestions?.[12]?.image} className="m_movie_img"/>
                <div className="m_movie_name">{movieData.top_suggestions?.[12]?.title}</div>
                <div className="m_rat">
                    <div className="m_icons"><i className='bx bxs-star-half' ></i></div>
                    <div className="m_movie_rating">{movieData.top_suggestions?.[12]?.rating}</div>
                </div>
                <div className="m_movie_year">{movieData.top_suggestions?.[12]?.year}</div>
                <div className="m_movie_year">{movieData.top_suggestions?.[12]?.genere}</div>
                <div className="m_movie_description">{movieData.top_suggestions?.[12]?.description}</div>
            </div>
            <div className="m_movie_info">
                <img src={movieData.top_suggestions?.[13]?.image} className="m_movie_img"/>
                <div className="m_movie_name">{movieData.top_suggestions?.[13]?.title}</div>
                <div className="m_rat">
                    <div className="m_icons"><i className='bx bxs-star-half' ></i></div>
                    <div className="m_movie_rating">{movieData.top_suggestions?.[13]?.rating}</div>
                </div>
                <div className="m_movie_year">{movieData.top_suggestions?.[13]?.year}</div>
                <div className="m_movie_year">{movieData.top_suggestions?.[13]?.genere}</div>
                <div className="m_movie_description">{movieData.top_suggestions?.[13]?.description}</div>
            </div>
            <div className="m_movie_info">
                <img src={movieData.top_suggestions?.[14]?.image} className="m_movie_img"/>
                <div className="m_movie_name">{movieData.top_suggestions?.[14]?.title}</div>
                <div className="m_rat">
                    <div className="m_icons"><i className='bx bxs-star-half' ></i></div>
                    <div className="m_movie_rating">{movieData.top_suggestions?.[14]?.rating}</div>
                </div>
                <div className="m_movie_year">{movieData.top_suggestions?.[14]?.year}</div>
                <div className="m_movie_year">{movieData.top_suggestions?.[14]?.genere}</div>
                <div className="m_movie_description">{movieData.top_suggestions?.[14]?.description}</div>
            </div>
            <div className="m_movie_info">
                <img src={movieData.top_suggestions?.[15]?.image} className="m_movie_img"/>
                <div className="m_movie_name">{movieData.top_suggestions?.[15]?.title}</div>
                <div className="m_rat">
                    <div className="m_icons"><i className='bx bxs-star-half' ></i></div>
                    <div className="m_movie_rating">{movieData.top_suggestions?.[15]?.rating}</div>
                </div>
                <div className="m_movie_year">{movieData.top_suggestions?.[15]?.year}</div>
                <div className="m_movie_year">{movieData.top_suggestions?.[15]?.genere}</div>
                <div className="m_movie_description">{movieData.top_suggestions?.[15]?.description}</div>
            </div>
        </div>
        </div>

        <footer>
        <div className="footer-content">
            <div className="foot-head">SenpaiSays</div>
            <p>A one stop solution to all your problems related to movie and music suggestions...
            Don't know what to watch or listen to ?
        <br/>Ask Senpai</p>
        </div>
        <ul className="socials">
            <li><a href="#"><i className='bx bxl-facebook-circle'></i></a></li>
            <li><a href="#"><i className='bx bxl-twitter' ></i></a></li>
            <li><a href="#"><i className='bx bxl-youtube' ></i></a></li>
            <li><a href="#"><i className='bx bxl-linkedin-square' ></i></a></li>
            <li><a href="#"><i className='bx bxl-github' ></i></a></li>
        </ul>
        <div className="footer-bottom">
            <p>copyright &copy;2021 <a href="#">foolishdeveloper</a></p>
        </div>
        </footer>
    </div>
  )
}

export default Movies;
