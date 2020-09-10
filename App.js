import React,{userState,userEffect} from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import {Heading} from './components/Heading';
import {loader} from './components/loader';
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import {ImageBackground} from'./components/ImageBackground';
import './App.css';

import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import IconCamera from 'react-native-vector-icons';

import styled from 'styled-components';
import { createGlobalStyle } from 'react-infinite-scroll-component';



function App() {
const [value,setValue] = userState("")
const [results,setResults] = userstate([])
const fetchImages = (count = 10) =>{
  axios
  fetch('https://api.unsplash.com/photos/?client_id=gQZmE3emLtQQ_iiU2TEERi0BSn71JkoX_UG9ln783tM&query=${value}&orientation=squarish')
  .then(res=>res.json())
  .then(data=>{
    //console.log(data)
    setResults(data.results)
  })
}
  return (
    <div>

       <Heading/>
       <ImageBackground/>
      <InfiniteScroll dataLength={fetchImages.length}
      next={fetchImages}
      hasMore={true}
      loader={<loader/>}>
        <div className="nav">
        <ul class="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Trending <span class="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">New</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Following</a>
      </li>
    </ul>
        </div>
      
      <div className="gallery">
        {
          results.map((items)=>{
            return <img className="item" key={items.id} src={items.urls.regular}/>
          })
        }
      </div>
      </InfiniteScroll>
    </div>
  );
}

export default App;
