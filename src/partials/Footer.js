import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import {
  BiLogoFacebookSquare,
  BiLogoInstagramAlt,
  BiLogoLinkedinSquare,
  BiLogoTwitter,
} from "react-icons/bi";
import locationIcon from "../assets/img/frame23.svg";
import phoneIcon from "../assets/img/frame24.svg";
import mailIcon from "../assets/img/frame25.svg";
const Footer = () => {
  return (
    <>
      <footer className="bg-gray">
        <div className="container font-one py-5">
          <div className="row ">
            <div className="col-6 col-md-2 footer">
              <h6 className="ms-3 py-2 fw-bold">Online Coaching</h6>

              <ul>
                <li className="mb-2">CLAT</li>
                <li className="mb-2">Judiciary</li>
                <li className="mb-2">IPMAT</li>
                <li className="mb-2">CUET [UG]</li>
                <li className="mb-2">NATA</li>
                <li className="mb-2">NID</li>
              </ul>
            </div>
            <div className="col-6 col-md-2">
              <h6 className="ms-3 py-2 fw-bold">Test Series</h6>

              <ul>
                <li className="mb-2">CLAT</li>
                <li className="mb-2">AILET</li>
                <li className="mb-2">Judiciary</li>
                <li className="mb-2">IPMAT</li>
                <li className="mb-2">CUET [UG]</li>
                <li className="mb-2">NATA</li>
              </ul>
            </div>
            <div className="col-6 col-md-2">
              <h6 className="ms-3 py-2 fw-bold">Trending Exams</h6>

              <ul>
                <li className="mb-2">CLAT 2024</li>
                <li className="mb-2">IPMAT 2023</li>
                <li className="mb-2">CUET 2023</li>
                <li className="mb-2">NATA 2023</li>
                <li className="mb-2">NID 2023</li>
                <li className="mb-2">AILET 2024</li>
              </ul>
            </div>
            <div className="col-6 col-md-2">
              <h6 className="ms-3 py-2 fw-bold">Blogs</h6>

              <ul>
                <li className="mb-2">CLAT</li>
                <li className="mb-2">CUET [UG]</li>
                <li className="mb-2">Management</li>
                <li className="mb-2">Architecture</li>
                <li className="mb-2">Design</li>
                <li className="mb-2">Current Affairs</li>
              </ul>
            </div>
            <div className="col-6 col-md-2">
              <h6 className="ms-3 py-2 fw-bold">Scholarship Tests</h6>

              <ul>
                <li className="mb-2">LawPrep</li>
                <li className="mb-2">Judiciary Gold</li>
                <li className="mb-2">Supergrads</li>
                <li className="mb-2">Creative Edge</li>
                <li className="mb-2">LegalEdge GMB</li>
                <li className="mb-2">Monthly Events</li>
              </ul>
            </div>
            <div className="col-6 col-md-2">
              <h6 className="ms-3 py-2 fw-bold">Mentor Tips</h6>

              <ul>
                <li className="mb-2">CLAT Prep Tips</li>
                <li className="mb-2">AILET Prep Tips</li>
                <li className="mb-2">IPMAT Prep Tips</li>
                <li className="mb-2">NATA Prep Tips</li>
                <li className="mb-2">NID Prep Tips</li>
                <li className="mb-2">Judiciary Prep Tips</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container-fluid border py-2 bg-white">
          <div className="py-4 font-one container">
            <div className="row ">
              <div className="col-12 col-md-4">
                <img
                  src="/logo.png"
                  alt="logo"
                  className="logo-icon navbar-brand"
                />
                <h6 className="mt-2">
                  Lorem ipsum dolor sit amet consectetur. Orci erat vestibulum
                  risus at nunc. Sagittis mus interdum auctor elit.
                </h6>
                <div className=" d-flex font-one align-content-center gap-3 justify-content-start pt-2">
                  <BiLogoFacebookSquare  />
                  <BiLogoTwitter  />
                  <BiLogoInstagramAlt  />
                  <BiLogoLinkedinSquare  />
                </div>
              </div>
              <div className="col-12 col-md-4">
                <h5 className="ms-3 fw-bold">Important Link</h5>
                <div className="mt-4 d-flex">
                  <ul>
                    <li className="mb-2">About Us</li>
                    <li className="mb-2">Privacy policy</li>
                    <li className="mb-2">Term and conditions</li>
                    <li className="mb-2">Our Results</li>
                    <li className="mb-2">About</li>
                  </ul>
                  <ul>
                    <li className="mb-2">Blog</li>
                    <li className="mb-2">Daily Updates</li>
                    <li className="mb-2">Refund and Policy</li>
                    <li className="mb-2">Contact Us</li>
                    <li className="mb-2">
                      <a href="#" className="nav-link p-0 ">
                        About
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-12 col-md-4">
                <h5 className=" fw-bold mb-3">Contacts Us</h5>
                <div className=" d-flex  mt-2 align-content-center gap-4 justify-content-start">
                  <img
                    src={locationIcon}
                    className="text-red contact-btn p-1 shadow border"
                  />{" "}
                  <h6>
                    B-61, Sector-B, Shastri Nagar, St. Paul School Road,
                    Jodhpur, Rajasthan
                  </h6>
                </div>
                <div className=" d-flex  mt-2 align-content-center gap-4 justify-content-start">
                  <img
                    src={phoneIcon}
                    className="text-red contact-btn  p-1 shadow border"
                  />{" "}
                  <h6>+91 7665944999</h6>
                </div>
                <div className=" d-flex  mt-2 align-content-center gap-4 justify-content-start">
                  <img
                    src={mailIcon}
                    className="text-red  contact-btn  p-1 shadow border"
                  />{" "}
                  <h6>support@lawpreptutorial.com</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container py-2 d-flex font-one flex-column flex-sm-row justify-content-between mt-2">
          <p>
            © Copyright 2023{" "}
            <Link className="text-red fw-medium text-decoration-none">
              {" "}
              LPT EDTECH PRIVATE LIMITED
            </Link>
            . All Rights Reserved.
          </p>
          <p>
            Design By{" "}
            <Link
              to="https://www.wscubetech.com/"
              className="fw-medium text-dark text-decoration-none"
            >
              WsCube Tech
            </Link>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
