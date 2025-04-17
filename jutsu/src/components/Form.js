import React, { useState } from 'react'
import '../style/formstyles.css';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast, useToast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Preloader from './Preloader';

const Form = () => {

    const help=JSON.parse(localStorage.getItem('help'));
    const use= useNavigate();
    const [form, setForm] = useState({
    first_movie: "",second_movie: "", third_movie: "", movie_genere:"", first_song: "",second_song: "", third_song: "", song_genere:"", 
    first_book: "",second_book: "", third_book: "",book_genere:"",email:help.email
    });
    const [isLoading, setIsLoading] = useState(false);

    let name, value;
    const handleInputs = (e) =>{
        name=e.target.name;
        value=e.target.value;

        setForm({...form, [name]:value})
    }
     const handleSubmit = async (e) =>{
        e.preventDefault();
        const response = await fetch('http://localhost:8080/form',{
            method: 'POST',
            body:JSON.stringify(form),
            headers:{
                'Content-Type':'application/json'
            }
        })
        if(response.ok){
            const data = await response.text();
            toast.success(data,{
                position:toast.POSITION.TOP_CENTER
            });
            window.scrollTo(0,0);
        }
        else{
            const data = await response.text();
            toast.error(data,{
                position:toast.POSITION.TOP_CENTER
            });
        }
        try {
            // create two arrays of inputs
            const inputArray1 = [
              form.first_movie,
              form.second_movie,
              form.third_movie
            ];
            const inputArray2 = [
              form.first_song,
              form.second_song,
              form.third_song
            ];
            setIsLoading(true);
            // send both arrays in parallel
            const [response1, response2] = await Promise.all([
              fetch(`http://localhost:5000/movieapi/movies`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(inputArray1)
              }),
              fetch(`http://localhost:8000/songsapi/songdata`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(inputArray2)
              })
            ]);
            setIsLoading(false);
            use('/movies');
            // get response messages
            const messageData1 = await response1.text();
            const messageData2 = await response2.text();
        
            // set messages to state
            console.log(messageData1+" "+messageData2);
          } catch (error) {
            console.error(error);
          }
     }
  return (
    <div className="top">
        <ToastContainer/>
        {isLoading && <Preloader/>}
        <div className="content1">
            <div className="container">
                <div className="title">Tell Us More</div>
                <div className="content">
                    <form action="#" onSubmit={handleSubmit}>
                        <div className="user-details">
                            <div className="type-title">
                                Enter The Movies You Like
                            </div>
                            <div className="input-box">
                                <span className="details">The movie you like the most</span>
                                <input type="text" name="first_movie" value={form.first} onChange={handleInputs} placeholder="Enter name of the movie" required/>
                            </div>
                            <div className="input-box">
                                <span className="details">Your second favourite movie</span>
                                <input type="text" name="second_movie" value={form.second} onChange={handleInputs} placeholder="Enter name of the movie" required/>
                            </div>
                            <div className="input-box">
                                <span className="details">Your third favourite</span>
                                <input type="text" name="third_movie" value={form.third} onChange={handleInputs} placeholder="Enter name of the movie" required/>
                            </div>
                            <div className="new-title">
                                Choose A New Genre You'd Like To Try
                            </div>
                            <div className="movie-genere">
                                <div className="new-option">
                                    <input type="radio" id="html" name="movie_genere" value="Adventure" onChange={handleInputs}/>
                                    <label htmlFor="html">Adventure</label>
                                </div>
                                <div className="new-option">
                                    <input type="radio" id="html" name="movie_genere" value="Romance" onChange={handleInputs}/>
                                    <label htmlFor="html">Romance</label>
                                </div>
                                <div className="new-option">
                                    <input type="radio" id="html" name="movie_genere" value="Thriller" onChange={handleInputs}/>
                                    <label htmlFor="html">Thriller</label>
                                </div>
                                <div className="new-option">
                                    <input type="radio" id="html" name="movie_genere" value="Horror" onChange={handleInputs}/>
                                    <label htmlFor="html">Horror</label>
                                </div>
                                <div className="new-option">
                                    <input type="radio" id="html" name="movie_genere" value="Sci-Fi" onChange={handleInputs}/>
                                    <label htmlFor="html">Sci-Fi</label>
                                </div>
                            </div>
                            <div className="type-title">
                                Enter The Songs You Like
                            </div>
                            <div className="input-box">
                                <span className="details">The song you like the most</span>
                                <input type="text" name="first_song" value={form.first_song} onChange={handleInputs} placeholder="Enter name of the song" required/>
                            </div>
                            <div className="input-box">
                                <span className="details">Your second favourite song</span>
                                <input type="text" name="second_song" value={form.second_song} onChange={handleInputs} placeholder="Enter name of the song" required/>
                            </div>
                            <div className="input-box">
                                <span className="details">Your third favourite</span>
                                <input type="text" name="third_song" value={form.third_song} onChange={handleInputs} placeholder="Enter name of the song" required/>
                            </div>
                            <div className="new-title">
                                Choose A New Genre You'd Like To Try
                            </div>
                            <div className="movie-genere">
                                <div className="new-option">
                                    <input type="radio" id="html" name="song_genere" value="Pop" onChange={handleInputs}/>
                                    <label htmlFor="html">Pop</label>
                                </div>
                                <div className="new-option">
                                    <input type="radio" id="html" name="song_genere" value="Hip Hop" onChange={handleInputs}/>
                                    <label htmlFor="html">Hip Hop</label>
                                </div>
                                <div className="new-option">
                                    <input type="radio" id="html" name="song_genere" value="Rock" onChange={handleInputs}/>
                                    <label htmlFor="html">Rock</label>
                                </div>
                                <div className="new-option">
                                    <input type="radio" id="html" name="song_genere" value="Country" onChange={handleInputs}/>
                                    <label htmlFor="html">Country</label>
                                </div>
                                <div className="new-option">
                                    <input type="radio" id="html" name="song_genere" value="Electronic" onChange={handleInputs}/>
                                    <label htmlFor="html">Electronic</label>
                                </div>
                            </div>
                            <div className="type-title">
                                Enter The Books You Like
                            </div>
                            <div className="input-box">
                                <span className="details">The book you like the most</span>
                                <input type="text" name="first_book" value={form.first_book} onChange={handleInputs} placeholder="Enter name of the book" required/>
                            </div>
                            <div className="input-box">
                                <span className="details">Your second favourite book</span>
                                <input type="text" name="second_book" value={form.second_book} onChange={handleInputs} placeholder="Enter name of the book" required/>
                            </div>
                            <div className="input-box">
                                <span className="details">Your third favourite</span>
                                <input type="text" name="third_book" value={form.third_book} onChange={handleInputs} placeholder="Enter name of the book" required/>
                            </div>
                        </div>
                        <div className="new-title">
                            Choose A New Genre You'd Like To Try
                        </div>
                        <div className="movie-genere">
                            <div className="new-option">
                                <input type="radio" id="html" name="book_genere" value="Novel" onChange={handleInputs}/>
                                <label htmlFor="html">Novel</label>
                            </div>
                            <div className="new-option">
                                <input type="radio" id="html" name="book_genere" value="Romance" onChange={handleInputs}/>
                                <label htmlFor="html">Romance</label>
                            </div>
                            <div className="new-option">
                                <input type="radio" id="html" name="book_genere" value="Mystery" onChange={handleInputs}/>
                                <label htmlFor="html">Mystery</label>
                            </div>
                            <div className="new-option">
                                <input type="radio" id="html" name="book_genere" value="Horror" onChange={handleInputs}/>
                                <label htmlFor="html">Horror</label>
                            </div>
                            <div className="new-option">
                                <input type="radio" id="html" name="book_genere" value="Fiction" onChange={handleInputs}/>
                                <label htmlFor="html">Fiction</label>
                            </div>
                        </div>
                        <div className="button">
                        <input type="submit" value="Submit"/>
                        </div>
                        <div className="button">
                            <Link to="/myprofile"><input type="button" value="Go Back To Profile"/></Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Form
