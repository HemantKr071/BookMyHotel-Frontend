import useFetch from "../../hooks/useFetch";
import "./featured.css";
import CircularLoader from "../CircularLoader";
import { useState,useEffect } from "react";
const Featured = () => {
  const encodedCities = encodeURIComponent("New Delhi,Gurgaon,Mumbai");
  const url = `https://bookmyhotel-backend.onrender.com/api/hotels/countByCity?cities=${encodedCities}`;
  const  {data,loading,error} =  useFetch(url);
  console.log(data);
  // Arrays of image URLs for each city
  const delhiImages = [
    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/574287045.jpg?k=b033d33b557f822ba8199c78b4ab33dd2940ba3135c57b1967f9185095681069&o=&hp=1",
    "https://media-cdn.tripadvisor.com/media/photo-s/29/c6/32/11/hyatt-regency-delhi.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3ZRajrYYBO-sb8HXbdn3GMUtwfs7hp4-Ppw&s",
    "https://www.telegraph.co.uk/content/dam/Travel/hotels/asia/india/the-claridges-delhi-p.jpg",
    "https://content.jdmagicbox.com/comp/delhi/l2/011pxx11.xx11.181220171810.i2l2/catalogue/bitty-krishna-hotel-resort-delhi-tppnbfknei.jpg"
  ];
  const gurgaonImages = [
    "https://res.cloudinary.com/simplotel/image/upload/x_0,y_117,w_2240,h_1262,c_crop,q_80,fl_progressive/w_900,h_506,f_auto,c_fit/pride-plaza-hotel-new-delhi/_A4A5632_ufudnj",
    "https://www.itchotels.com/content/dam/itchotels/in/umbrella/itc/hotels-listing/hotels-listing-card/itc-grand-bharat.png",
    "https://www.oberoihotels.com/-/media/oberoi-hotels/website-images/the-oberoi-gurgaon/overview/tinified-(1)/togn-exterieor-night.jpg?w=724&extension=webp&hash=adf583dc7341b584e7c5522b8d228905",
    "https://img.traveltriangle.com/blog/wp-content/uploads/2019/11/cover-image-of-Hotels-In-Gurgaon_27th-nov.jpg",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/41/85/52/the-oberoi-gurgaon.jpg?w=600&h=-1&s=1"
  ];
  const mumbaiImages = [
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/1e/e3/50/jw-marriott-hotel-mumbai.jpg?w=1200&h=-1&s=1",
    "https://c1.wallpaperflare.com/preview/549/480/26/taj-mahal-palace-hotel-5-star-hotel-mumbai.jpg",
    "https://www.oberoihotels.com/-/media/oberoi-hotels/website-images/the-oberoi-mumbai/gallery/featured/mumbai-gallery-featured-main-exterior-596x393.jpg",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/ee/2d/9d/jw-marriott-hotel-mumbai.jpg?w=1200&h=-1&s=1",
    "https://assets.gqindia.com/photos/5d395b0b88834900082b2de2/16:9/w_2560%2Cc_limit/The-St.-Regis-Mumbai.jpg"
  ];

  // State for the current image index for each city
  const [delhiIndex, setDelhiIndex] = useState(0);
  const [gurgaonIndex, setGurgaonIndex] = useState(0);
  const [mumbaiIndex, setMumbaiIndex] = useState(0);

  useEffect(() => {
    const delhiInterval = setInterval(() => {
      setDelhiIndex((prev) => (prev + 1) % delhiImages.length);
    }, 3200); // Change Delhi image every 3 seconds

    return () => clearInterval(delhiInterval);
  }, [delhiImages.length]);

  useEffect(() => {
    const gurgaonInterval = setInterval(() => {
      setGurgaonIndex((prev) => (prev + 1) % gurgaonImages.length);
    }, 5300); // Change Gurgaon image every 5 seconds

    return () => clearInterval(gurgaonInterval);
  }, [gurgaonImages.length]);

  useEffect(() => {
    const mumbaiInterval = setInterval(() => {
      setMumbaiIndex((prev) => (prev + 1) % mumbaiImages.length);
    }, 7500); // Change Mumbai image every 7 seconds

    return () => clearInterval(mumbaiInterval);
  }, [mumbaiImages.length]);
  
  
  return (
    <div className="featured">  
     
      {loading ? (
        <div style = {{width:"100%" ,display:"flex",alignItems:"center",justifyContent:"center"}}>
          <CircularLoader/>
       </div>) 
       
       : (
        <> 
        <div className="featuredItem">
        <img
          src={delhiImages[delhiIndex]}
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>New Delhi</h1>
          <h2>{data[0]} properties</h2>
        </div>
      </div>
      
      <div className="featuredItem">
        <img
          src={gurgaonImages[gurgaonIndex]}
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Gurgaon</h1>
          <h2> {data[1]} properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src={mumbaiImages[mumbaiIndex]}
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Mumbai</h1>
          <h2>{data[2]} properties</h2>
        </div>
      </div></>)}
    
    </div>
  );
};

export default Featured;
