import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we're serious about is food.</p>
            </div>
            <p className="mid">
              Where tradition meets innovation, and India meets Italy
               --Welcome to ypur new favourite destination for global flavours.

              From creamy pastas infused with fragrant masalas to wood-fired pizzas
              topped with tandoori delights , Every dish crafted with love , authenticity,
              and a touch of innovation.
              Pair it with softdrinks, refreshing mocktails, or a soothing cup of 
              masla chai for the perfect balance.


            </p>
            <Link to={"/"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;