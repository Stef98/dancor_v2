import React, { useRef } from "react";
import "./ContactUs.css";
import emailjs from 'emailjs-com';
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/emailjs-com@3/dist/email.min.js"></script>


export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_4eu8p6q', 'template_kdfez4c', form.current, 'user_g4jXacaibwpidwRMWAVeq')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (

    <form ref={form} onSubmit={sendEmail}>
      <section className="footer-subscription">
        <div className="address">
          <h3>Contact Us</h3>
          <div class="container">
            <div id="form-main">
              <form class="montform" id="reused_form" >
                <ul className="address-text">
                  <p class="name">
                    <input name="name" type="text" class="feedback-input" required placeholder="Name" id="name" />
                  </p>
                  <p class="email">
                    <input name="email" type="email" required class="feedback-input" id="email" placeholder="Email" />
                  </p>
                  <p class="text">
                    <textarea name="message" class="feedback-input" id="comment" placeholder="Message"></textarea>
                  </p>
                  <div class="submit">
                    <button type="submit" class="button-red">SUBMIT</button>
                    <div class="ease"></div>
                  </div>
                </ul>
              </form>
              {/*
                <div id="error_message" style="width:100%; height:100%; display:none; ">
                  <h4>
                    Error
                  </h4>
                  Sorry there was an error sending your form.
                </div>
                <div id="success_message" style="width:100%; height:100%; display:none; "> <h2>Success! Your Message was Sent Successfully.</h2> </div>
  */}
            </div>
          </div>
        </div>
      </section>
      <div class="spacer"></div>
    </form>


  );
};


export default ContactUs;
