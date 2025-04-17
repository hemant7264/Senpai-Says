import React, { useState, useEffect }from 'react'
import '../style/songs.css'

const Songs = () => {

    const help=JSON.parse(localStorage.getItem('help'));
    const [form, setForm] = useState(null);
    const [songData, setSongData] = useState({});

    useEffect(() => {
        fetch('http://localhost:8000/songsapi/song_data')
          .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then(data => {
            setSongData(data);
          })
          .catch(error => console.log(error));
    }, []);

    const getform = async () =>{
        const response = await fetch('http://localhost:8080/form/'+help.email,{
            method: 'GET',
        })
        const data = await response.json();
        setForm(data);
     }
    
        useState(()=>{
            getform();
        },[])
  return (
    <div>
        <div className="content">
            <div className="welcomesenpai">
                Senpai says listen to
            </div>

            <div className="song_suggestions">
                <div className="song_container">
                    <div className="song_info">
                        <div className="song_content">
                            <div className="song_icon">
                                <i className='bx bx-play' ></i>
                            </div>
                            <div className="song_cont">
                                <div className="song_name">{songData.top_song_suggestions?.[0]?.title}</div>
                                <div className="artist_name">{songData.top_song_suggestions?.[0]?.artist}</div>
                            </div>
                        </div>
                        <div className="album_content">
                            <div className="album_icon">
                                <i className='bx bx-album'></i>
                            </div>
                            <div className="album_name">{songData.top_song_suggestions?.[0]?.album}</div>
                        </div>
                        <div className="genere_content">
                            <div className="genere_icon">
                                <i className='bx bx-music'></i>
                            </div>
                            <div className="genere_name">{songData.top_song_suggestions?.[0]?.genere}</div>
                        </div>
                    </div>
                    <div className="song_info">
                        <div className="song_content">
                            <div className="song_icon">
                                <i className='bx bx-play' ></i>
                            </div>
                            <div className="song_cont">
                                <div className="song_name">{songData.top_song_suggestions?.[1]?.title}</div>
                                <div className="artist_name">{songData.top_song_suggestions?.[1]?.artist}</div>
                            </div>
                        </div>
                        <div className="album_content">
                            <div className="album_icon">
                                <i className='bx bx-album'></i>
                            </div>
                            <div className="album_name">{songData.top_song_suggestions?.[1]?.album}</div>
                        </div>
                        <div className="genere_content">
                            <div className="genere_icon">
                                <i className='bx bx-music'></i>
                            </div>
                            <div className="genere_name">{songData.top_song_suggestions?.[1]?.genere}</div>
                        </div>
                    </div>
                    <div className="song_info">
                        <div className="song_content">
                            <div className="song_icon">
                                <i className='bx bx-play' ></i>
                            </div>
                            <div className="song_cont">
                                <div className="song_name">{songData.top_song_suggestions?.[2]?.title}</div>
                                <div className="artist_name">{songData.top_song_suggestions?.[2]?.artist}</div>
                            </div>
                        </div>
                        <div className="album_content">
                            <div className="album_icon">
                                <i className='bx bx-album'></i>
                            </div>
                            <div className="album_name">{songData.top_song_suggestions?.[2]?.album}</div>
                        </div>
                        <div className="genere_content">
                            <div className="genere_icon">
                                <i className='bx bx-music'></i>
                            </div>
                            <div className="genere_name">{songData.top_song_suggestions?.[2]?.genere}</div>
                        </div>
                    </div>
                    <div className="song_info">
                        <div className="song_content">
                            <div className="song_icon">
                                <i className='bx bx-play' ></i>
                            </div>
                            <div className="song_cont">
                                <div className="song_name">{songData.top_song_suggestions?.[3]?.title}</div>
                                <div className="artist_name">{songData.top_song_suggestions?.[3]?.artist}</div>
                            </div>
                        </div>
                        <div className="album_content">
                            <div className="album_icon">
                                <i className='bx bx-album'></i>
                            </div>
                            <div className="album_name">{songData.top_song_suggestions?.[3]?.album}</div>
                        </div>
                        <div className="genere_content">
                            <div className="genere_icon">
                                <i className='bx bx-music'></i>
                            </div>
                            <div className="genere_name">{songData.top_song_suggestions?.[3]?.genere}</div>
                        </div>
                    </div>
                    <div className="song_info">
                        <div className="song_content">
                            <div className="song_icon">
                                <i className='bx bx-play' ></i>
                            </div>
                            <div className="song_cont">
                                <div className="song_name">{songData.top_song_suggestions?.[4]?.title}</div>
                                <div className="artist_name">{songData.top_song_suggestions?.[4]?.artist}</div>
                            </div>
                        </div>
                        <div className="album_content">
                            <div className="album_icon">
                                <i className='bx bx-album'></i>
                            </div>
                            <div className="album_name">{songData.top_song_suggestions?.[4]?.album}</div>
                        </div>
                        <div className="genere_content">
                            <div className="genere_icon">
                                <i className='bx bx-music'></i>
                            </div>
                            <div className="genere_name">{songData.top_song_suggestions?.[4]?.genere}</div>
                        </div>
                    </div>
                </div>
            </div>
            {form && (<div className="welcomesenpai">
                Because You Like:&nbsp;"{form.second_song}"
            </div>
            )}

            <div className="song_suggestions">
                <div className="song_container">
                <div className="song_info">
                        <div className="song_content">
                            <div className="song_icon">
                                <i className='bx bx-play' ></i>
                            </div>
                            <div className="song_cont">
                                <div className="song_name">{songData.top_song_suggestions?.[5]?.title}</div>
                                <div className="artist_name">{songData.top_song_suggestions?.[5]?.artist}</div>
                            </div>
                        </div>
                        <div className="album_content">
                            <div className="album_icon">
                                <i className='bx bx-album'></i>
                            </div>
                            <div className="album_name">{songData.top_song_suggestions?.[5]?.album}</div>
                        </div>
                        <div className="genere_content">
                            <div className="genere_icon">
                                <i className='bx bx-music'></i>
                            </div>
                            <div className="genere_name">{songData.top_song_suggestions?.[5]?.genere}</div>
                        </div>
                    </div>
                    <div className="song_info">
                        <div className="song_content">
                            <div className="song_icon">
                                <i className='bx bx-play' ></i>
                            </div>
                            <div className="song_cont">
                                <div className="song_name">{songData.top_song_suggestions?.[6]?.title}</div>
                                <div className="artist_name">{songData.top_song_suggestions?.[6]?.artist}</div>
                            </div>
                        </div>
                        <div className="album_content">
                            <div className="album_icon">
                                <i className='bx bx-album'></i>
                            </div>
                            <div className="album_name">{songData.top_song_suggestions?.[6]?.album}</div>
                        </div>
                        <div className="genere_content">
                            <div className="genere_icon">
                                <i className='bx bx-music'></i>
                            </div>
                            <div className="genere_name">{songData.top_song_suggestions?.[6]?.genere}</div>
                        </div>
                    </div>
                    <div className="song_info">
                        <div className="song_content">
                            <div className="song_icon">
                                <i className='bx bx-play' ></i>
                            </div>
                            <div className="song_cont">
                                <div className="song_name">{songData.top_song_suggestions?.[7]?.title}</div>
                                <div className="artist_name">{songData.top_song_suggestions?.[7]?.artist}</div>
                            </div>
                        </div>
                        <div className="album_content">
                            <div className="album_icon">
                                <i className='bx bx-album'></i>
                            </div>
                            <div className="album_name">{songData.top_song_suggestions?.[7]?.album}</div>
                        </div>
                        <div className="genere_content">
                            <div className="genere_icon">
                                <i className='bx bx-music'></i>
                            </div>
                            <div className="genere_name">{songData.top_song_suggestions?.[7]?.genere}</div>
                        </div>
                    </div>
                    <div className="song_info">
                        <div className="song_content">
                            <div className="song_icon">
                                <i className='bx bx-play' ></i>
                            </div>
                            <div className="song_cont">
                                <div className="song_name">{songData.top_song_suggestions?.[8]?.title}</div>
                                <div className="artist_name">{songData.top_song_suggestions?.[8]?.artist}</div>
                            </div>
                        </div>
                        <div className="album_content">
                            <div className="album_icon">
                                <i className='bx bx-album'></i>
                            </div>
                            <div className="album_name">{songData.top_song_suggestions?.[8]?.album}</div>
                        </div>
                        <div className="genere_content">
                            <div className="genere_icon">
                                <i className='bx bx-music'></i>
                            </div>
                            <div className="genere_name">{songData.top_song_suggestions?.[8]?.genere}</div>
                        </div>
                    </div>
                    <div className="song_info">
                        <div className="song_content">
                            <div className="song_icon">
                                <i className='bx bx-play' ></i>
                            </div>
                            <div className="song_cont">
                                <div className="song_name">{songData.top_song_suggestions?.[9]?.title}</div>
                                <div className="artist_name">{songData.top_song_suggestions?.[9]?.artist}</div>
                            </div>
                        </div>
                        <div className="album_content">
                            <div className="album_icon">
                                <i className='bx bx-album'></i>
                            </div>
                            <div className="album_name">{songData.top_song_suggestions?.[9]?.album}</div>
                        </div>
                        <div className="genere_content">
                            <div className="genere_icon">
                                <i className='bx bx-music'></i>
                            </div>
                            <div className="genere_name">{songData.top_song_suggestions?.[9]?.genere}</div>
                        </div>
                    </div>
                </div>
            </div>
            {form && (<div className="welcomesenpai">
                Because You Like:&nbsp;"{form.third_song}"
            </div>
            )}
            <div className="song_suggestions">
                <div className="song_container">
                <div className="song_info">
                        <div className="song_content">
                            <div className="song_icon">
                                <i className='bx bx-play' ></i>
                            </div>
                            <div className="song_cont">
                                <div className="song_name">{songData.top_song_suggestions?.[10]?.title}</div>
                                <div className="artist_name">{songData.top_song_suggestions?.[10]?.artist}</div>
                            </div>
                        </div>
                        <div className="album_content">
                            <div className="album_icon">
                                <i className='bx bx-album'></i>
                            </div>
                            <div className="album_name">{songData.top_song_suggestions?.[10]?.album}</div>
                        </div>
                        <div className="genere_content">
                            <div className="genere_icon">
                                <i className='bx bx-music'></i>
                            </div>
                            <div className="genere_name">{songData.top_song_suggestions?.[10]?.genere}</div>
                        </div>
                    </div>
                    <div className="song_info">
                        <div className="song_content">
                            <div className="song_icon">
                                <i className='bx bx-play' ></i>
                            </div>
                            <div className="song_cont">
                                <div className="song_name">{songData.top_song_suggestions?.[11]?.title}</div>
                                <div className="artist_name">{songData.top_song_suggestions?.[11]?.artist}</div>
                            </div>
                        </div>
                        <div className="album_content">
                            <div className="album_icon">
                                <i className='bx bx-album'></i>
                            </div>
                            <div className="album_name">{songData.top_song_suggestions?.[11]?.album}</div>
                        </div>
                        <div className="genere_content">
                            <div className="genere_icon">
                                <i className='bx bx-music'></i>
                            </div>
                            <div className="genere_name">{songData.top_song_suggestions?.[11]?.genere}</div>
                        </div>
                    </div>
                    <div className="song_info">
                        <div className="song_content">
                            <div className="song_icon">
                                <i className='bx bx-play' ></i>
                            </div>
                            <div className="song_cont">
                                <div className="song_name">{songData.top_song_suggestions?.[12]?.title}</div>
                                <div className="artist_name">{songData.top_song_suggestions?.[12]?.artist}</div>
                            </div>
                        </div>
                        <div className="album_content">
                            <div className="album_icon">
                                <i className='bx bx-album'></i>
                            </div>
                            <div className="album_name">{songData.top_song_suggestions?.[12]?.album}</div>
                        </div>
                        <div className="genere_content">
                            <div className="genere_icon">
                                <i className='bx bx-music'></i>
                            </div>
                            <div className="genere_name">{songData.top_song_suggestions?.[12]?.genere}</div>
                        </div>
                    </div>
                    <div className="song_info">
                        <div className="song_content">
                            <div className="song_icon">
                                <i className='bx bx-play' ></i>
                            </div>
                            <div className="song_cont">
                                <div className="song_name">{songData.top_song_suggestions?.[13]?.title}</div>
                                <div className="artist_name">{songData.top_song_suggestions?.[13]?.artist}</div>
                            </div>
                        </div>
                        <div className="album_content">
                            <div className="album_icon">
                                <i className='bx bx-album'></i>
                            </div>
                            <div className="album_name">{songData.top_song_suggestions?.[13]?.album}</div>
                        </div>
                        <div className="genere_content">
                            <div className="genere_icon">
                                <i className='bx bx-music'></i>
                            </div>
                            <div className="genere_name">{songData.top_song_suggestions?.[13]?.genere}</div>
                        </div>
                    </div>
                    <div className="song_info">
                        <div className="song_content">
                            <div className="song_icon">
                                <i className='bx bx-play' ></i>
                            </div>
                            <div className="song_cont">
                                <div className="song_name">{songData.top_song_suggestions?.[14]?.title}</div>
                                <div className="artist_name">{songData.top_song_suggestions?.[14]?.artist}</div>
                            </div>
                        </div>
                        <div className="album_content">
                            <div className="album_icon">
                                <i className='bx bx-album'></i>
                            </div>
                            <div className="album_name">{songData.top_song_suggestions?.[14]?.album}</div>
                        </div>
                        <div className="genere_content">
                            <div className="genere_icon">
                                <i className='bx bx-music'></i>
                            </div>
                            <div className="genere_name">{songData.top_song_suggestions?.[14]?.genere}</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="welcomesenpai">
                Senpai says try these
            </div>
            <div className="song_suggestions">
                <div className="song_container">
                <div className="song_info">
                        <div className="song_content">
                            <div className="song_icon">
                                <i className='bx bx-play' ></i>
                            </div>
                            <div className="song_cont">
                                <div className="song_name">{songData.top_song_suggestions?.[15]?.title}</div>
                                <div className="artist_name">{songData.top_song_suggestions?.[15]?.artist}</div>
                            </div>
                        </div>
                        <div className="album_content">
                            <div className="album_icon">
                                <i className='bx bx-album'></i>
                            </div>
                            <div className="album_name">{songData.top_song_suggestions?.[15]?.album}</div>
                        </div>
                        <div className="genere_content">
                            <div className="genere_icon">
                                <i className='bx bx-music'></i>
                            </div>
                            <div className="genere_name">{songData.top_song_suggestions?.[15]?.genere}</div>
                        </div>
                    </div>
                    <div className="song_info">
                        <div className="song_content">
                            <div className="song_icon">
                                <i className='bx bx-play' ></i>
                            </div>
                            <div className="song_cont">
                                <div className="song_name">{songData.top_song_suggestions?.[16]?.title}</div>
                                <div className="artist_name">{songData.top_song_suggestions?.[16]?.artist}</div>
                            </div>
                        </div>
                        <div className="album_content">
                            <div className="album_icon">
                                <i className='bx bx-album'></i>
                            </div>
                            <div className="album_name">{songData.top_song_suggestions?.[16]?.album}</div>
                        </div>
                        <div className="genere_content">
                            <div className="genere_icon">
                                <i className='bx bx-music'></i>
                            </div>
                            <div className="genere_name">{songData.top_song_suggestions?.[16]?.genere}</div>
                        </div>
                    </div>
                    <div className="song_info">
                        <div className="song_content">
                            <div className="song_icon">
                                <i className='bx bx-play' ></i>
                            </div>
                            <div className="song_cont">
                                <div className="song_name">{songData.top_song_suggestions?.[17]?.title}</div>
                                <div className="artist_name">{songData.top_song_suggestions?.[17]?.artist}</div>
                            </div>
                        </div>
                        <div className="album_content">
                            <div className="album_icon">
                                <i className='bx bx-album'></i>
                            </div>
                            <div className="album_name">{songData.top_song_suggestions?.[17]?.album}</div>
                        </div>
                        <div className="genere_content">
                            <div className="genere_icon">
                                <i className='bx bx-music'></i>
                            </div>
                            <div className="genere_name">{songData.top_song_suggestions?.[17]?.genere}</div>
                        </div>
                    </div>
                    <div className="song_info">
                        <div className="song_content">
                            <div className="song_icon">
                                <i className='bx bx-play' ></i>
                            </div>
                            <div className="song_cont">
                                <div className="song_name">{songData.top_song_suggestions?.[18]?.title}</div>
                                <div className="artist_name">{songData.top_song_suggestions?.[18]?.artist}</div>
                            </div>
                        </div>
                        <div className="album_content">
                            <div className="album_icon">
                                <i className='bx bx-album'></i>
                            </div>
                            <div className="album_name">{songData.top_song_suggestions?.[18]?.album}</div>
                        </div>
                        <div className="genere_content">
                            <div className="genere_icon">
                                <i className='bx bx-music'></i>
                            </div>
                            <div className="genere_name">{songData.top_song_suggestions?.[18]?.genere}</div>
                        </div>
                    </div>
                    <div className="song_info">
                        <div className="song_content">
                            <div className="song_icon">
                                <i className='bx bx-play' ></i>
                            </div>
                            <div className="song_cont">
                                <div className="song_name">{songData.top_song_suggestions?.[19]?.title}</div>
                                <div className="artist_name">{songData.top_song_suggestions?.[19]?.artist}</div>
                            </div>
                        </div>
                        <div className="album_content">
                            <div className="album_icon">
                                <i className='bx bx-album'></i>
                            </div>
                            <div className="album_name">{songData.top_song_suggestions?.[19]?.album}</div>
                        </div>
                        <div className="genere_content">
                            <div className="genere_icon">
                                <i className='bx bx-music'></i>
                            </div>
                            <div className="genere_name">{songData.top_song_suggestions?.[19]?.genere}</div>
                        </div>
                    </div>
                </div>
            </div>   
        </div>

        <footer>
            <div className="footer-content">
                <div className="foot-head">SenpaiSays</div>
                <p>A one stop solution to all your problems related to movie and music suggestions...
                Don't know what to watch or listen to ?<br/>
                Ask Senpai</p>
            </div>
            <ul className="socials">
                <li><a href="#"><i className='bx bxl-facebook-circle'></i></a></li>
                <li><a href="#"><i className='bx bxl-twitter' ></i></a></li>
                <li><a href="#"><i className='bx bxl-youtube' ></i></a></li>
                <li><a href="#"><i className='bx bxl-linkedin-square' ></i></a></li>
                <li><a href="#"><i className='bx bxl-github' ></i></a></li>
            </ul>
            <div className="footer-bottom">
                <p>copyright &copy;2021 <a href="#">foolishdeveloper</a>  </p>
            </div>
        </footer>
    </div>
  )
}

export default Songs
