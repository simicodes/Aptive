import React from "react";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <div className="container">
        <div className="col-1">
          <div className="content">
            <div>
              <h2>Get in touch</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                soluta, temporibus ea est ipsum vero recusandae blanditiis ut
                doloribus excepturi!
              </p>
            </div>
            <div className="address">
              <p>911 Goldie Street</p>
              <p>Calabar - South</p>
            </div>
            <div className="icons">
              <FaPhone style={{ marginRight: "1rem" }} />
              <p>+234-9065-911-351</p>
            </div>
            <div className="icons">
              <FaEnvelope style={{ marginRight: "1rem" }} />
              <p>support@example</p>
            </div>
            <div className="careers">
              <p>
                Looking for careers?<span> View all job openings</span>
              </p>
            </div>
          </div>
        </div>
        <div className="col-2">
          <form action="">
            <input type="text" placeholder="Full name" />
            <input type="email" placeholder="Email" />
            <input type="phone" placeholder="Phone" />
            <textarea
              name="Message"
              placeholder="Message"
              cols="30"
              rows="10"
            ></textarea>
            <div className="checkbox">
              <input type="checkbox" />
              <p>
                By checking this box, you agree to the{" "}
                <span>Privacy Policy</span> and<span> Cookies Policy</span>.
              </p>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
