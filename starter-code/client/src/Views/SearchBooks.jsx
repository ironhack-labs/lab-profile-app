import React, { useState } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom'
import { networkInterfaces } from 'os';
import { runInNewContext } from 'vm';

function SearchBooks (props) {

  const [book, setBook] = useState("");

  const [result, setResults] = useState([]);

  function handleInputChange (event) {
    const book = event.target.value;
    setBook(book);
    }

  function handleSearchSubmission (event) {
    event.preventDefault();
    axios.get("https://www.googleapis.com/books/v1/volumes?q=" + book + "&key=AIzaSyB-EK_PvmiBu1I5dfiocm49AvrnBJWphWM&maxResults=40")
    .then(data => {
      setResults(data.data.items);
    })
    .catch(err => {
      console.log('Couldnt reach API', err);
    });
  }

    return (
      <div className='container m-5'>

      <h1>Let's search your books</h1>
      <form  onSubmit={handleSearchSubmission}>
        <input className='form-control mt-10' onChange={handleInputChange} placeholder="Search for books..."/>
        <button type='submit' className="btn btn-success m-3">Search Books</button>
        </form>
        {result.map(book => (
         <a target="_blank" href={book.volumeInfo.previewLink}><img src={book.volumeInfo.imageLinks.thumbnail} alt={book.title}/></a> 
        ))
        }
      </div>
    );
}

export default SearchBooks

//https://www.googleapis.com/books/v1/volumes&key=AIzaSyB-EK_PvmiBu1I5dfiocm49AvrnBJWphWM 	
