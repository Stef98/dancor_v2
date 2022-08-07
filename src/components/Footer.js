import React from "react";
import "./Footer.css";

import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <section class="social-media">
        <div class="social-media-wrap">
          <div class="website-rights">Dancor Engineering © 2013</div>
          <div class="social-icons">
            <Link
              class="social-icon-link facebook"
              to="//www.facebook.com/dancor.engineering"
              target="_blank"
              aria-label="Facebook"
            >
              <i class="fab fa-facebook-f" />
            </Link>
            <Link
              class="social-icon-link instagram"
              to="//www.instagram.com/dancor.engineering/?hl=en"
              target="_blank"
              aria-label="Instagram"
            >
              <i class="fab fa-instagram" />
            </Link>
          </div>

        </div>

      </section>
    </div>


  );
}

export default Footer;
