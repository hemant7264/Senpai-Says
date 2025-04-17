import '../style/main.css'
import Helmet from 'react'
import React, { Component } from 'react';
import top_movie from '../data/top_movies.json';
import top_song from '../data/top_songs.json';

class Home extends Component {
    componentDidMount() {
        this.sliderIndex = 0;
        this.sliderTimer = setInterval(this.showNextSlide, 3000);
    
        this.setState({
          movieData: top_movie,
          songData: top_song
        });
      }
      
      componentWillUnmount() {
        clearInterval(this.sliderTimer);
      }
      
      showNextSlide = () => {
        let slides = document.querySelectorAll('.slider img');
        slides[this.sliderIndex].classList.remove('active');
        this.sliderIndex = (this.sliderIndex + 1) % slides.length;
        slides[this.sliderIndex].classList.add('active');
      }
    
      makeChanges = (e) => {
        var myDiv = e.target;
        var noteContent = myDiv.querySelector('.the_text');
    
        if (window.innerWidth >= 700) {
            myDiv.classList.add("clicked");
            if (noteContent) {
                noteContent.style.display = 'block';
            }
        }
    
        document.addEventListener("click", function (e) {
            if (!myDiv.contains(e.target) && window.innerWidth >= 700) {
                myDiv.classList.remove("clicked");
                myDiv.classList.remove("overlay");
                if (noteContent) {
                    noteContent.style.display = 'none';
                }
                myDiv.classList.add("notes");
            }
        });
      }
    
      constructor(props) {
        super(props);
        this.state = {
          movieData: {},
          songData: {}
        };
      }
    

render() {
    const { movieData } = this.state;
    const { songData } = this.state;
  return (
    <div className="main1234">
          <div className="content">
              <div className="slider-container">
                  <div className="slider">
                      <img src="images/john wick chapter 3.jpeg" alt="Image 1" />
                      <img src="images/inside out.jpeg" alt="Image 2" />
                      <img src="images/transformers.jpeg" alt="Image 3" />
                      <img src="images/ratatouille.jpeg" alt="Image 4" />
                      <img src="images/fordvsferrari.jpeg" alt="Image 5" />
                      <img src="images/everythingeverywhere.jpeg" alt="Image 6" />
                      <img src="images/itaewon.jpeg" alt="Image 7" />
                      <img src="images/endgame.jpeg" alt="Image 8" />
                  </div>
              </div>
              <div className="welcomesenpai1">
                  SenpaiSays
              </div>
              <div className="hellosenpai">
                  Alot of content and still nothing to watch or listen to?
              </div>
              <div className="cards">
                  <div className="notes" onClick={(e) => this.makeChanges(e)} id="cars1">
                      What is SenpaiSays ?
                      <div className="the_text">SenpaiSays is a one-stop platform for movie, song, and book lovers.
                          It offers personalized recommendations based on users' interests and preferences, allowing
                          them to discover new content and broaden their horizons. With an extensive database of movies,
                          songs, and books, SenpaiSays provides accurate and relevant recommendations that cater to all
                          tastes and preferences. The website's user-friendly interface and advanced algorithms make it easy
                          for users to navigate and find new content they are sure to love. Whether users are looking for a new
                          movie to watch, a song to listen to, or a book to read, SenpaiSays has got them covered.
                      </div>
                  </div>
                  <div className="notes" onClick={(e) => this.makeChanges(e)} id="cars2">
                      How Does SenpaiSays work ?
                      <div className="the_text">
                          <div className="step">
                              Takes User Information
                          </div>
                          <div className="step_description">
                              SenpaiSays offers a user-friendly preference form that allows users to specify their interests and
                              preferences. Based on the answers provided, SenpaiSays' advanced algorithms generate personalized
                              recommendations that cater to the users' tastes and preferences.
                          </div>
                          <div className="step">
                              Analyzes User Information
                          </div>
                          <div className="step_description">
                              The movie, song and books preferences that you fill is passed through the advanced algorithms which analyze
                              the preferences and find content similar to the user preferences from the vast dataset the whole webiste uses
                          </div>
                          <div className="step">
                              Displays Result
                          </div>
                          <div className="step_description">
                              The results/recommendations generated are displayed along with the relevant information in order to help the user
                              as much as possible in discovering new content which is easily navigable
                          </div>
                      </div>
                  </div>
                  <div className="notes" onClick={(e) => this.makeChanges(e)} id="cars3">
                      How Do I Become A Part Of The Community ?
                      <div className="the_text">
                          <div className="step_number">
                              <b>Step 1 : </b>Register yourself on the website by giving the relevant information
                          </div>
                          <div className="step_number">
                              <b>Step 2 : </b>Login to the platform and go to your profile and fill the preference form
                          </div>
                          <div className="step_number">
                              <b>Step 3 : </b>Fill the information about your favourtie movies, songs and books as asked and submit the form
                          </div>
                          <div className="step_number">
                              <b>Step 4 : </b>Toggle to books, songs and movies tab in order to view your suggestions. Dont worry even if you
                              logout your suggestions will be saved.
                          </div>
                          <div className="step_number">
                              <b>Step 5 : </b>You can change the recommendations by filling the preference form again and do consider giving us a
                              feeback which is present in the my profile section
                          </div>
                      </div>
                  </div>
              </div>
              <div>
                  <div className="welcomesenpai">
                      Top Movies Of The Month
                  </div>
                  <div className="topmovies">
                        <div className="movie_container">
                            <div className="movimg"><img className="movie_img" src={top_movie.movies?.[0]?.image} /></div>
                            <i className='bx bx-movie-play'></i>
                            <div className="datamov">
                                <div className="movie_name">{movieData.movies?.[0]?.title}</div>
                                <div className="movie_year">{movieData.movies?.[0]?.year}</div>
                                <div className="movie_description">{movieData.movies?.[0]?.description}</div>
                            </div>
                        </div>
                        <div className="movie_container">
                            <div className="movimg"><img className="movie_img" src={top_movie.movies?.[1]?.image} /></div>
                            <i className='bx bx-movie-play'></i>
                            <div className="datamov">
                                <div className="movie_name">{movieData.movies?.[1]?.title}</div>
                                <div className="movie_year">{movieData.movies?.[1]?.year}</div>
                                <div className="movie_description">{movieData.movies?.[1]?.description}</div>
                            </div>
                        </div>
                        <div className="movie_container">
                            <div className="movimg"><img className="movie_img" src={top_movie.movies?.[2]?.image} /></div>
                            <i className='bx bx-movie-play'></i>
                            <div className="datamov">
                                <div className="movie_name">{movieData.movies?.[2]?.title}</div>
                                <div className="movie_year">{movieData.movies?.[2]?.year}</div>
                                <div className="movie_description">{movieData.movies?.[2]?.description}</div>
                            </div>
                        </div>
                        <div className="movie_container">
                            <div className="movimg"><img className="movie_img" src={top_movie.movies?.[3]?.image} /></div>
                            <i className='bx bx-movie-play'></i>
                            <div className="datamov">
                                <div className="movie_name">{movieData.movies?.[3]?.title}</div>
                                <div className="movie_year">{movieData.movies?.[3]?.year}</div>
                                <div className="movie_description">{movieData.movies?.[3]?.description}</div>
                            </div>
                        </div>
                        <div className="movie_container">
                            <div className="movimg"><img className="movie_img" src={top_movie.movies?.[4]?.image} /></div>
                            <i className='bx bx-movie-play'></i>
                            <div className="datamov">
                                <div className="movie_name">{movieData.movies?.[4]?.title}</div>
                                <div className="movie_year">{movieData.movies?.[4]?.year}</div>
                                <div className="movie_description">{movieData.movies?.[4]?.description}</div>
                            </div>
                        </div>
                        <div className="movie_container">
                            <div className="movimg"><img className="movie_img" src={top_movie.movies?.[5]?.image} /></div>
                            <i className='bx bx-movie-play'></i>
                            <div className="datamov">
                                <div className="movie_name">{movieData.movies?.[5]?.title}</div>
                                <div className="movie_year">{movieData.movies?.[5]?.year}</div>
                                <div className="movie_description">{movieData.movies?.[5]?.description}</div>
                            </div>
                        </div>
                        <div className="movie_container">
                            <div className="movimg"><img className="movie_img" src={top_movie.movies?.[6]?.image} /></div>
                            <i className='bx bx-movie-play'></i>
                            <div className="datamov">
                                <div className="movie_name">{movieData.movies?.[6]?.title}</div>
                                <div className="movie_year">{movieData.movies?.[6]?.year}</div>
                                <div className="movie_description">{movieData.movies?.[6]?.description}</div>
                            </div>
                        </div>
                  </div>
              </div>
              <div className="welcomesenpai">
                  Tracks Trending This Month
              </div>
              <div className="suggestsongs">
                  <div className="suggestsongs1" id="leftsongs">
                      <div className="suggests">
                          <div className="playbutton">
                              <i className='bx bx-play-circle'></i>
                          </div>
                          <div className="songinfo">
                              <div className="songname">{songData.songs?.[0]?.songName}</div>
                              <div className="songartist">{songData.songs?.[0]?.songArtist}</div>
                          </div>
                      </div>
                      <div className="suggests">
                          <div className="playbutton">
                              <i className='bx bx-play-circle'></i>
                          </div>
                          <div className="songinfo">
                              <div className="songname">{songData.songs?.[1]?.songName}</div>
                              <div className="songartist">{songData.songs?.[1]?.songArtist}</div>
                          </div>
                      </div>
                      <div className="suggests">
                          <div className="playbutton">
                              <i className='bx bx-play-circle'></i>
                          </div>
                          <div className="songinfo">
                              <div className="songname">{songData.songs?.[2]?.songName}</div>
                              <div className="songartist">{songData.songs?.[2]?.songArtist}</div>
                          </div>
                      </div>
                  </div>
                  <div className="suggestsongs1" id="leftsongs">
                      <div className="suggests">
                          <div className="playbutton">
                              <i className='bx bx-play-circle'></i>
                          </div>
                          <div className="songinfo">
                              <div className="songname">{songData.songs?.[3]?.songName}</div>
                              <div className="songartist">{songData.songs?.[3]?.songArtist}</div>
                          </div>
                      </div>
                      <div className="suggests">
                          <div className="playbutton">
                              <i className='bx bx-play-circle'></i>
                          </div>
                          <div className="songinfo">
                              <div className="songname">{songData.songs?.[4]?.songName}</div>
                              <div className="songartist">{songData.songs?.[4]?.songArtist}</div>
                          </div>
                      </div>
                      <div className="suggests">
                          <div className="playbutton">
                              <i className='bx bx-play-circle'></i>
                          </div>
                          <div className="songinfo">
                              <div className="songname">{songData.songs?.[5]?.songName}</div>
                              <div className="songartist">{songData.songs?.[5]?.songArtist}</div>
                          </div>
                      </div>
                  </div>
                  <div className="suggestsongs1">
                      <div className="suggests">
                          <div className="playbutton">
                              <i className='bx bx-play-circle'></i>
                          </div>
                          <div className="songinfo">
                              <div className="songname">{songData.songs?.[6]?.songName}</div>
                              <div className="songartist">{songData.songs?.[6]?.songArtist}</div>
                          </div>
                      </div>
                      <div className="suggests">
                          <div className="playbutton">
                              <i className='bx bx-play-circle'></i>
                          </div>
                          <div className="songinfo">
                              <div className="songname">{songData.songs?.[7]?.songName}</div>
                              <div className="songartist">{songData.songs?.[7]?.songArtist}</div>
                          </div>
                      </div>
                      <div className="suggests">
                          <div className="playbutton">
                              <i className='bx bx-play-circle'></i>
                          </div>
                          <div className="songinfo">
                              <div className="songname">{songData.songs?.[8]?.songName}</div>
                              <div className="songartist">{songData.songs?.[8]?.songArtist}</div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <footer>
              <div className="footer-content">
                  <div className="foot-head">SenpaiSays</div>
                  <p>A one stop solution to all your problems related to movie and music suggestions...
                      Don't know what to watch or listen to ?
                  <br />Ask Senpai</p>
              </div>
              <ul className="socials">
                  <li><a href="#"><i className='bx bxl-facebook-circle'></i></a></li>
                  <li><a href="#"><i className='bx bxl-twitter'></i></a></li>
                  <li><a href="#"><i className='bx bxl-youtube'></i></a></li>
                  <li><a href="#"><i className='bx bxl-linkedin-square'></i></a></li>
                  <li><a href="#"><i className='bx bxl-github'></i></a></li>
              </ul>
              <div className="footer-bottom">
                  <p>copyright &copy;2021 <a href="#">foolishdeveloper</a></p>
              </div>
          </footer>
          <div>        
        </div>
      </div>
      
  );
}
}

export default Home;
