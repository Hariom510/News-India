import React from 'react'
import { useState, useEffect } from "react";

const Home = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      fetch(`https://inshorts.deta.dev/news?category=all`)
        .then((response) => {
          if (!response.ok) {
            throw new Error(
              `This is an HTTP error: The status is ${response.status}`
            );
          }
          return response.json();
        })
        .then((actualData) => {
          setData(actualData);
          setError(null);
        })
        .catch((err) => {
          setError(err.message);
          setData(null);
        })
        .finally(() => {
          setLoading(false);
        });
    }, []);
  
    return (
      <div className="App">
        <span style={{fontSize: "2rem",lineHeight: "1.3333333333", fontWeight: 'bold'}}>DAILY <span style={{color:'#ff9600',fontSize: "2rem",lineHeight: "1.3333333333", fontWeight: 'bold'}}>NEWS</span></span>
        {loading && <div>A moment please...</div>}
        {error && (
          <div>{`There is a problem fetching the post data - ${error}`}</div>
        )}
        <ul>
          {data &&
            data.data.map(({id,title,content,imageUrl, url }) => (
              <li key={id}>
                <div className='childs'>
                <div className='images'>
                <img src={imageUrl} alt="" />
                </div>
                <p>{title}</p>
                <a className='seePost' href={url}><button className='button'>Read More</button></a>
                </div>
                <br />
              </li>
            ))}
        </ul>
      </div>
    );
  
  }
  
export default Home