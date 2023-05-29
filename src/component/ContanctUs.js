import React from "react";
import styled from "styled-components";
const ContactUs = () => {
  const Wrapper = styled.section`
  padding: 9rem 0 5rem 0`;
    return <Wrapper>
      <h2 className="common-heading">Contact Us</h2>
      <div className="container">
        <div className="contact-form">
          <form action="https://formspree.io/f/mpzeebno" method="POST" className="contact-inputs">
            <input 
              type="text"
              name="username"
              placeholder="username"
              autoComplete="off"
              required
              />
            <input 
              type="email"
              name="Email"
              placeholder="Email"
              autoComplete="off"
              required
              />
            <textarea name="message" cols="30" rows="6" autoComplete="off" required></textarea>

            <input type="submit" value="send"></input>
          </form>
        </div>
      </div>
    </Wrapper>;
}
export default ContactUs;