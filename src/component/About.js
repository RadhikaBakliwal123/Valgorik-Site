import React from "react";
import AboutUsImg from '../aboutMobile.jpg';
import aboutBanner from "../aboutBanner.jpg";

const About = () => {
  let imageStyle = {
    height: "600px",
    width: "1500px",
    backgroundImage:
    `url(${aboutBanner})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    color: "white", 
 };
    return (
        <>
        <div class = "image" style = {imageStyle}></div>
        <section id="about">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <h2>About Our Company</h2>
                <p>
                  Welcome to Valgorik Tech Solutions, a leading IT company specializing in delivering innovative technology solutions to businesses of all sizes. With a team of skilled professionals and a passion for cutting-edge technologies, we strive to empower our clients and help them achieve their digital goals.
                </p>
                <p>
                  At Valgorik Tech Solutions, we offer a wide range of services including web development, mobile app development, cloud solutions, cybersecurity, and IT consulting. Our expertise spans across various industries, allowing us to tailor our solutions to meet the unique needs of each client.
                </p>
                <p>
                  Our mission is to deliver top-notch solutions that drive growth and enhance operational efficiency. We believe in building long-lasting partnerships with our clients by providing exceptional customer service and delivering projects on time and within budget.
                </p>
              </div>
              <div className="col-lg-6">
                <img src={AboutUsImg} alt="Company_aboutUs" className="img-fluid"/>
              </div>
            </div>
          </div>
        </section></>
      );
}
export default About;