import React from "react";
import pic2 from "../setAbout.jpg";
import pic3 from "../banner2.jpg";
const Home = () => {
  return (
    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="d-block w-100" src={pic3} alt="First slide"/>
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src={pic2} alt="Second slide"/>
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src={pic3} alt="Third slide"/>
        </div>
      </div>
      <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );

}
export default Home;