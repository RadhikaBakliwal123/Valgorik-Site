import React from "react";
import styled from "styled-components";
import './ContactUs.css';
const ContactUs = () => {
  
  const Wrapper = styled.section``;
  const cardStyle = {
    width : '70%',
    paddingBottom : '20px', 
    marginLeft: '20%',
    marginTop : '3%'
  };

    return <Wrapper>
      <div className="card px-0" style={cardStyle}>
      <div class="card-header" >
        <h2>Contact Us</h2>
      </div>
      <br></br>
      <div className="container">
        <div className="contact-form">
          <form action="https://formspree.io/f/mpzeebno" method="POST">
      
          <div className="form-group row">
            <label for="FirstName" className="col-sm-2 col-form-label"><strong>FirstName</strong></label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="FirstName" name="FirstName" placeholder="FirstName" required/>
            </div>
          </div>
          <div className="form-group row">
            <label for="LastName" className="col-sm-2 col-form-label"><strong>LastName</strong></label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="LastName" name="LastName" placeholder="LastName" required/>
            </div>
          </div>
          <div className="form-group row">
            <label for="inputEmail3" className="col-sm-2 col-form-label"><strong>Email</strong></label>
            <div className="col-sm-10">
              <input type="email" className="form-control" id="inputEmail3" name="email" placeholder="Email" required/>
            </div>
          </div>
          <div className="form-group row">
            <label for="Phonenumber" className="col-sm-2 col-form-label"><strong>Phone</strong></label>
            <div className="col-sm-10">
              <input type="phone" className="form-control" id="PhoneNumber" name="phoneNumber" pattern="^[1-9]\d{9}$" placeholder="1111111111" required/>
            </div>
          </div>
          <div className="form-group row">
            <label for="message" className="col-sm-2 col-form-label"><strong>Message</strong></label>
            <div className="col-sm-10">
              <textarea type="text" className="form-control" id="message" name="message" cols="30" rows="10" placeholder="Enter message Here..." required/>
            </div>
          </div>
          
          <input type="submit" value="send" className="btn btn-info" />
         </form>
        </div>
      </div>
      </div>
    </Wrapper>;
}
export default ContactUs;