import React, {useRef} from "react";
import "./ContactUs.css";
import emailjs from 'emailjs-com';
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/emailjs-com@3/dist/email.min.js"></script>

export function ContactUsDetails() {
    return (
      <div>
        <section className="footer-subscription">
          <p className="footer-subscription-heading"></p>
          <p className="footer-subscription-text"></p>
          <div className="address">
            <h3>Contact</h3>
            <ul className="address-text">
              <li>
                <i class="fas fa-map-marker-alt"></i>
                <a
                  href="https://www.google.com/maps/place/84+4th+Ave,+Northmead,+Benoni,+1501/@-26.17745,28.3134213,17z/data=!3m1!4b1!4m5!3m4!1s0x1e953d9bc0222601:0x8eb7fc6fc2798530!8m2!3d-26.17745!4d28.31561"
                  target="_blank"
                >
                  84 4th Avenue,
                  <br></br>Northmead, Benoni
                </a>
              </li>
              <br></br>
              <li>
                <i class="fas fa-mobile">
                  <span> Johan Ferreira: </span>
                  <a href="tel:072 262 8952">072 262 8952</a>{" "}
                </i>
              </li>
              <br></br>
              <li>
                <i class="fas fa-mobile">
                  <span> Divan Ferreira: </span>
                  <a href="tel:060 977 1885">060 977 1885</a>
                </i>
              </li>
              <br></br>
              <li>
                <i class="far fa-envelope"></i>
                <a href="mailto:dancoreng@gmail.com"> dancoreng@gmail.com</a>
              </li>
            </ul>
          </div>
        </section>
      </div>
    );
  }

  export default ContactUsDetails;