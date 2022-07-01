import React from "react";
import { FaDatabase } from "react-icons/fa";
import "./Testimonials.css";

const Testimonials = () => {
  return (
    <div className="testimonial">
      <div className="container">
        <div className="outline">
          <div className="content">
            <i>
              <FaDatabase /> Staxx
            </i>
            <p className="body">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
              soluta, temporibus ea est ipsum vero recusandae blanditiis ut
              doloribus excepturi!
            </p>
            <div className="name">
              <p>Jason Ini-Abasi</p>
              <p>CEO, Staxx</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
