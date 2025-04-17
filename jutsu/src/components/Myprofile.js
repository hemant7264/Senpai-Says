import React, { useEffect, useState} from 'react'
import '../style/profile.css'
import '../components/Login.js'
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast, useToast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Myprofile = () => {
    
    const help=JSON.parse(localStorage.getItem('help'));
    const [user, setUser] = useState(null);
    const [form, setForm] = useState(null);
    const getusers = async () =>{
        const response = await fetch('http://localhost:8080/register/'+help.email,{
            method: 'GET',
        })
        const data = await response.json();
        setUser(data);
     }
    
    useState(()=>{
        getusers();
    },[])

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
        <ToastContainer/>
      <div className="b_content">
            <div className="profile-container">
                <div className="visual_information">
                    <div className="outer_pic">
                        <div className="profile_picture">
                            <img src="images/bear.jpg"/>
                        </div>
                    </div>
                </div>
                <div className="user_specs">
                    <div className="user_name">
                        <div className="name_info">
                            <div className="user_id">
                                hyped_pandaaa
                            </div>
                            {user &&(
                            <div className="name">
                                {user.name}
                            </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className="buttons_selection">
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSfIah0j4reVACKFpozBH4IShfWtiRbhGbAhju7nR2OpUtRZnw/viewform?usp=pp_url" target="_blank"><div className="the_button">
                        Give us your feedback
                    </div></a>
                    <Link to="/form"><div className="the_button">
                        Fill preference form
                    </div></Link>
                </div>
                <div className="user_information">
                    <div className="contact_information">
                        <div className="profile_title">
                            User Information: 
                        </div>
                        {user && (
                        <div className="the_info">
                            Name&nbsp;:&nbsp;{user.name}<br/>
                            Email&nbsp;:&nbsp;&nbsp;{user.email}
                        </div>)}
                    </div>
                    <div className="contact_information">
                        <div className="profile_title">
                            Movie Preference: 
                        </div>
                        {form && (
                        <div className="the_info">
                            Your most favourite&nbsp;:&nbsp;&nbsp;{form.first_movie}
                            <br/>Your second favourite&nbsp;:&nbsp;&nbsp;{form.second_movie}
                            <br/>Your third favourite&nbsp;:&nbsp;&nbsp;{form.third_movie}
                            <br/>Genere you want to try&nbsp;:&nbsp;&nbsp;{form.movie_genere}
                        </div>)}
                    </div>
                    <div className="contact_information">
                        <div className="profile_title">
                            Song Preference: 
                        </div>
                        {form && (
                        <div className="the_info">
                            Your most favourite&nbsp;:&nbsp;{form.first_song}
                            <br/>Your second favourite&nbsp;:&nbsp;&nbsp;{form.second_song}
                            <br/>Your third favourite&nbsp;:&nbsp;&nbsp;{form.third_song}
                            <br/>Genere you want to try&nbsp;:&nbsp;&nbsp;{form.song_genere}
                        </div>)}
                    </div>
                    <div className="contact_information">
                        <div className="profile_title">
                            Book Preference: 
                        </div>
                        {form && (
                        <div className="the_info">
                            Your most favourite&nbsp;:&nbsp;&nbsp;{form.first_book}
                            <br/>Your second favourite&nbsp;:&nbsp;&nbsp;{form.second_book}
                            <br/>Your third favourite&nbsp;:&nbsp;&nbsp;{form.third_book}
                            <br/>Genere you want to try&nbsp;:&nbsp;&nbsp;{form.book_genere}
                        </div>)}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Myprofile;
