import React, { Component } from "react";
import Card from "./components/Card";
import Banner from "./components/Banner";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image from "./assets/photo/image1.jpeg"


const dataBanner = [
    {title:"Happy Travellers",url:"https://www.wanderon.in/svg/cover-travellers.svg"},
    {title:"5 Star Ratings",url:"https://www.wanderon.in/svg/cover-star.svg"},
    {title:"Itineraries",url:"https://www.wanderon.in/svg/cover-destination.svg"},
]

const data = [
  {
    id : 1,
    nom : "Produit1",
    prix : 500,
    imagePath : image
  },
  {
    id : 1,
    nom : "Produit1",
    prix : 500,
    imagePath : image
  },
  {
    id : 1,
    nom : "Produit1",
    prix : 500,
    imagePath : image
  },
  {
    id : 1,
    nom : "Produit1",
    prix : 500,
    imagePath : image
  },
  {
    id : 1,
    nom : "Produit1",
    prix : 500,
    imagePath : image
  },
  {
    id : 1,
    nom : "Produit1",
    prix : 500,
    imagePath : image
  }
]

export default class App extends Component {
  render() {
    return (
      <>
        <Banner data={dataBanner}/>
        <Card title="Trending Trips" datas={data}/>
        <Card title="Weekend Trips" datas={data}/>
        <Card title="Himalayan Escapades" datas={data}/>
        <Card title="Adventure Courses" datas={data}/>
        <Card title="Mode" datas={data}/>
      </>
    )
  }
}
