import React from "react";
import serviceBanner from "../service-cloud.jpg";
import serviceMain from "../serviceCloudMailUpdated.png";
import './Servicecloud.css';

const ServiceCloud = () => {
  let imageStyle = {
    height: "600px",
    width: "1500px",
    backgroundImage:
    `url(${serviceMain})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    color: "white", 
 };
    return (
      <>
      <div class = "image" style = {imageStyle}></div>
       <section id="service_Cloud">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <h2>What is Salesforce Service Cloud?</h2>
                            <p>
                            Salesforce Service Cloud deals with Improving your customer service and building stronger relations with the help of customer-focused CRM. You can manage your service better and support your employees by automating tasks, streamlining processes, and integrating operations with a wide variety of communication channels. 
                            When implemented properly in association with an expert partner, Service Cloud is a powerful tool to ensure 100% customer satisfaction
                            </p>
                        </div>
                        <div className="col-lg-6">
                            <img src={serviceBanner} alt="Service_Cloud" className="leftToRight"/>
                        </div>
                    </div>
                </div>
            </section>
        </>
      );
      
}
export default ServiceCloud;