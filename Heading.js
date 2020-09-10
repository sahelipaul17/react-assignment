import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
  max-width: 70rem;
  margin: 2rem auto;
  text-align: center;
`;

const H1 = styled.h1`
  font-family: 'Oswald', sans-serif;
  margin-bottom: 1em;
`;


export const Heading = () => {

    return (



       <header>
 
  <div className="navbar">

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mL-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Collections</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Explore</a>
      </li>
    </ul>

      <button className="btn btn-outline-success my-2 my-sm-0" type="submit a photo">Submit a photo</button>

  </div>
 
 <h1>Unsplash</h1>
 <h5>Beautiful,free phtos.</h5>
 <h5>Gifted by the world's most generous community of photographer</h5>
 <span>Search free high-resolution photos</span>
 <input type="text" type="search" placeholder="search free high-resolution photos" value={value} onChange={(e)=>setValue(e.target.value)}/>
 <p>Trending searches: business,computer,nature,love,house</p>
 <button onClick={()=>fetchImages()}> send </button>
 </div>
 </header>

    )

    }   