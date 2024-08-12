import "./featuredProperties.css";
import useFetch from "../../hooks/useFetch";

const FeaturedProperties = () => {
  const url = `https://bookmyhotel-backend.onrender.com/api/hotels/countByType`;
  const  {data,loading,error} =  useFetch(url);
  return (
    <div className="fp">
      <div className="fpItem">
        <img
          src="https://c4.wallpaperflare.com/wallpaper/857/660/985/living-room-sofa-carpet-interior-wallpaper-preview.jpg"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Hyatt Regency</span>
        <span className="fpCity">Ahmedabad</span>
        <span className="fpPrice">Starting from ₹7000</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://c4.wallpaperflare.com/wallpaper/524/228/970/life-interior-home-room-wallpaper-preview.jpg"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Crown Plaza</span>
        <span className="fpCity">Pune</span>
        <span className="fpPrice">Starting from ₹6500</span>
        <div className="fpRating">
          <button>9.3</button>
          <span>Exceptional</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://watermark.lovepik.com/photo/20211122/large/lovepik-hotel-standard-room-effect-map-picture_500705412.jpg"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Vivanta Hotel</span>
        <span className="fpCity">Hyderabad</span>
        <span className="fpPrice">Starting from ₹4000</span>
        <div className="fpRating">
          <button>8.8</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://c4.wallpaperflare.com/wallpaper/351/299/585/life-room-interior-home-wallpaper-preview.jpg"
          alt=""
          className="fpImg"
        />
        <span className="fpName">The Oberoi Bengaluru</span>
        <span className="fpCity">Banglore</span>
        <span className="fpPrice">Starting from ₹5000</span>
        <div className="fpRating">
          <button>9.3</button>
          <span>Excellent</span>
        </div>
      </div>
    </div>
  );
};


export default FeaturedProperties;

/*<div className="fp">
      {loading ? "Loading" :(
      <>
      {data.map((item)=>{

     
      <div className="fpItem" key = {item._id}>
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1"
          alt=""
          className="fpImg"
        />
        <span className="fpName">{item.name}</span>
        <span className="fpCity">{item.city}</span>
        <span className="fpPrice">Starting from {item.cheapestPrice}</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
       })}
      </>
       )}
    </div>
  );
};*/
