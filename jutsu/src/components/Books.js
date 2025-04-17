import React, { useState, useEffect }from 'react'
import '../style/books.css'

const Books = () => {

    const help=JSON.parse(localStorage.getItem('help'));
    const [bookData, setBookData] = useState({});
    const [form, setForm] = useState(null);
    useEffect(() => {
        fetch('http://localhost:8000/songsapi/book_data')
          .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then(data => {
            setBookData(data);
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
            Senpai says read these
        </div>
        <div className="movierecommendation">
            <div className="book_info">
                <div className="book_name">{bookData.top_suggestions?.[0]?.title}</div>
                <div className="rat">
                <div className="icons"><i className='bx bxs-star-half' ></i></div>
                <div className="book_rating">{bookData.top_suggestions?.[0]?.rating}</div>
                </div>
                <div className="book_author">{bookData.top_suggestions?.[0]?.author}</div>
                <div className="book_description">{bookData.top_suggestions?.[0]?.description}</div>
            </div>
            <div className="book_info">
                <div className="book_name">{bookData.top_suggestions?.[1]?.title}</div>
                <div className="rat">
                <div className="icons"><i className='bx bxs-star-half' ></i></div>
                <div className="book_rating">{bookData.top_suggestions?.[1]?.rating}</div>
                </div>
                <div className="book_author">{bookData.top_suggestions?.[1]?.author}</div>
                <div className="book_description">{bookData.top_suggestions?.[1]?.description}</div>
            </div>
            <div className="book_info">
                <div className="book_name">{bookData.top_suggestions?.[2]?.title}</div>
                <div className="rat">
                <div className="icons"><i className='bx bxs-star-half' ></i></div>
                <div className="book_rating">{bookData.top_suggestions?.[2]?.rating}</div>
                </div>
                <div className="book_author">{bookData.top_suggestions?.[2]?.author}</div>
                <div className="book_description">{bookData.top_suggestions?.[2]?.description}</div>
            </div>
            <div className="book_info">
                <div className="book_name">{bookData.top_suggestions?.[3]?.title}</div>
                <div className="rat">
                <div className="icons"><i className='bx bxs-star-half' ></i></div>
                <div className="book_rating">{bookData.top_suggestions?.[3]?.rating}</div>
                </div>
                <div className="book_author">{bookData.top_suggestions?.[3]?.author}</div>
                <div className="book_description">{bookData.top_suggestions?.[3]?.description}</div>
            </div>
        </div>
        {form && (<div className="welcomesenpai">
            Because you read:&nbsp;"{form.second_book}"
        </div>
        )}
        <div className="movierecommendation">
            <div className="book_info">
                <div className="book_name">{bookData.top_suggestions?.[4]?.title}</div>
                <div className="rat">
                <div className="icons"><i className='bx bxs-star-half' ></i></div>
                <div className="book_rating">{bookData.top_suggestions?.[4]?.rating}</div>
                </div>
                <div className="book_author">{bookData.top_suggestions?.[4]?.author}</div>
                <div className="book_description">{bookData.top_suggestions?.[4]?.description}</div>
            </div>
            <div className="book_info">
                <div className="book_name">{bookData.top_suggestions?.[5]?.title}</div>
                <div className="rat">
                <div className="icons"><i className='bx bxs-star-half' ></i></div>
                <div className="book_rating">{bookData.top_suggestions?.[5]?.rating}</div>
                </div>
                <div className="book_author">{bookData.top_suggestions?.[5]?.author}</div>
                <div className="book_description">{bookData.top_suggestions?.[5]?.description}</div>
            </div>
            <div className="book_info">
                <div className="book_name">{bookData.top_suggestions?.[6]?.title}</div>
                <div className="rat">
                <div className="icons"><i className='bx bxs-star-half' ></i></div>
                <div className="book_rating">{bookData.top_suggestions?.[6]?.rating}</div>
                </div>
                <div className="book_author">{bookData.top_suggestions?.[6]?.author}</div>
                <div className="book_description">{bookData.top_suggestions?.[6]?.description}</div>
            </div>
            <div className="book_info">
                <div className="book_name">{bookData.top_suggestions?.[7]?.title}</div>
                <div className="rat">
                <div className="icons"><i className='bx bxs-star-half' ></i></div>
                <div className="book_rating">{bookData.top_suggestions?.[7]?.rating}</div>
                </div>
                <div className="book_author">{bookData.top_suggestions?.[7]?.author}</div>
                <div className="book_description">{bookData.top_suggestions?.[7]?.description}</div>
            </div>
        </div>
        {form && ( <div className="welcomesenpai">
            Because You Read:&nbsp;"{form.third_book}"
        </div>
        )}
        <div className="movierecommendation">
            <div className="book_info">
                <div className="book_name">{bookData.top_suggestions?.[8]?.title}</div>
                <div className="rat">
                <div className="icons"><i className='bx bxs-star-half' ></i></div>
                <div className="book_rating">{bookData.top_suggestions?.[8]?.rating}</div>
                </div>
                <div className="book_author">{bookData.top_suggestions?.[8]?.author}</div>
                <div className="book_description">{bookData.top_suggestions?.[8]?.description}</div>
            </div>
            <div className="book_info">
                <div className="book_name">{bookData.top_suggestions?.[9]?.title}</div>
                <div className="rat">
                <div className="icons"><i className='bx bxs-star-half' ></i></div>
                <div className="book_rating">{bookData.top_suggestions?.[9]?.rating}</div>
                </div>
                <div className="book_author">{bookData.top_suggestions?.[9]?.author}</div>
                <div className="book_description">{bookData.top_suggestions?.[9]?.description}</div>
            </div>
            <div className="book_info">
                <div className="book_name">{bookData.top_suggestions?.[10]?.title}</div>
                <div className="rat">
                <div className="icons"><i className='bx bxs-star-half' ></i></div>
                <div className="book_rating">{bookData.top_suggestions?.[10]?.rating}</div>
                </div>
                <div className="book_author">{bookData.top_suggestions?.[10]?.author}</div>
                <div className="book_description">{bookData.top_suggestions?.[10]?.description}</div>
            </div>
            <div className="book_info">
                <div className="book_name">{bookData.top_suggestions?.[11]?.title}</div>
                <div className="rat">
                <div className="icons"><i className='bx bxs-star-half' ></i></div>
                <div className="book_rating">{bookData.top_suggestions?.[11]?.rating}</div>
                </div>
                <div className="book_author">{bookData.top_suggestions?.[11]?.author}</div>
                <div className="book_description">{bookData.top_suggestions?.[11]?.description}</div>
            </div>
        </div>

        <div className="welcomesenpai">
            Senapi says try these
        </div>
        <div className="movierecommendation">
            <div className="book_info">
                    <div className="book_name">{bookData.top_suggestions?.[12]?.title}</div>
                    <div className="rat">
                    <div className="icons"><i className='bx bxs-star-half' ></i></div>
                    <div className="book_rating">{bookData.top_suggestions?.[12]?.rating}</div>
                    </div>
                    <div className="book_author">{bookData.top_suggestions?.[12]?.author}</div>
                    <div className="book_description">{bookData.top_suggestions?.[12]?.description}</div>
                </div>
                <div className="book_info">
                    <div className="book_name">{bookData.top_suggestions?.[13]?.title}</div>
                    <div className="rat">
                    <div className="icons"><i className='bx bxs-star-half' ></i></div>
                    <div className="book_rating">{bookData.top_suggestions?.[13]?.rating}</div>
                    </div>
                    <div className="book_author">{bookData.top_suggestions?.[13]?.author}</div>
                    <div className="book_description">{bookData.top_suggestions?.[13]?.description}</div>
                </div>
                <div className="book_info">
                    <div className="book_name">{bookData.top_suggestions?.[14]?.title}</div>
                    <div className="rat">
                    <div className="icons"><i className='bx bxs-star-half' ></i></div>
                    <div className="book_rating">{bookData.top_suggestions?.[14]?.rating}</div>
                    </div>
                    <div className="book_author">{bookData.top_suggestions?.[14]?.author}</div>
                    <div className="book_description">{bookData.top_suggestions?.[14]?.description}</div>
                </div>
                <div className="book_info">
                    <div className="book_name">{bookData.top_suggestions?.[15]?.title}</div>
                    <div className="rat">
                    <div className="icons"><i className='bx bxs-star-half' ></i></div>
                    <div className="book_rating">{bookData.top_suggestions?.[15]?.rating}</div>
                    </div>
                    <div className="book_author">{bookData.top_suggestions?.[15]?.author}</div>
                    <div className="book_description">{bookData.top_suggestions?.[15]?.description}</div>
                </div>
            </div>
        </div>

        <footer>
        <div className="footer-content">
            <div className="foot-head">SenpaiSays</div>
            <p>A one stop solution to all your problems related to movie and music suggestions...<br/>
            Don't know what to watch or listen to ?
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



export default Books;