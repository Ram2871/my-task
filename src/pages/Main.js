import React from "react";
import Header from "../partials/Header";
import Footer from "../partials/Footer";
import frame5 from "../assets/img/frame5.svg";
import frame6 from "../assets/img/frame6.svg";
import frame7 from "../assets/img/frame7.svg";
import rectangle94 from "../assets/img/rectangle-94@2x.png";
import rectangle106 from "../assets/img/rectangle-106@2x.png";
import rectangle109 from "../assets/img/rectangle-109@2x.png";
import rectangle110 from "../assets/img/rectangle-110@2x.png";
import rectangle112 from "../assets/img/rectangle-112@2x.png";
import rectangle115 from "../assets/img/rectangle-115@2x.png";
import rectangle116 from "../assets/img/rectangle-116@2x.png";
import rectangle117 from "../assets/img/rectangle-117@2x.png";
import rectangle118 from "../assets/img/rectangle-118@2x.png";
import rectangle119 from "../assets/img/rectangle-119@2x.png";
import rectangle121 from "../assets/img/rectangle-121@2x.png";
import rectangle108 from "../assets/img/rectangle-108@2x.png";
import rectangle107 from "../assets/img/rectangle-107@2x.png";
import rectangle111 from "../assets/img/rectangle-111@2x.png";
import rectangle96 from "../assets/img/rectangle-96@2x.png";
import rectangle98 from "../assets/img/rectangle-98@2x.png";
import rectangle101 from "../assets/img/rectangle-101@2x.png";
import rectangle103 from "../assets/img/rectangle-103@2x.png";
import underLine from "../assets/img/tracedimage-831.svg";
import frame from "../assets/img/frame.png";
import mantor1 from "../assets/img/mantor1.png";
import mantor2 from "../assets/img/mantor2.png";
import mantor3 from "../assets/img/mantor3.png";
import mantor4 from "../assets/img/mantor4.png";
import frame01 from "../assets/img/Frame(0).png";
import frame02 from "../assets/img/Frame (1).png";
import frame03 from "../assets/img/Frame (2).png";
import frame04 from "../assets/img/Frame (3).png";
import frame05 from "../assets/img/Frame (4).png";
import frame06 from "../assets/img/Frame (5).png";
import frame1 from "../assets/img/frame1.png";
import frame8 from "../assets/img/frame8.svg";
import frame13 from "../assets/img/frame13.svg";
import frame10 from "../assets/img/frame10.svg";
import frame11 from "../assets/img/frame11.svg";
import users from "../assets/img/users2.svg";
import banner from "../assets/img/banner.png";
import banner2 from "../assets/img/banner2.png";
import vector from "../assets/img/Vector.png";
import group73 from "../assets/img/group-73.svg";
import courseImg1 from "../assets/img/rectangle-138@2x.png";
import courseImg2 from "../assets/img/rectangle-135@2x.png";
import courseImg3 from "../assets/img/rectangle-133@2x.png";
import courseImg4 from "../assets/img/rectangle-139@2x.png";
import Alumni1 from "../assets/img/Alumni0.png";
import Alumni2 from "../assets/img/Alumni2.png";
import Alumni3 from "../assets/img/Alumni3.png";
import video1 from "../assets/img/video1.png";
import video2 from "../assets/img/video2.png";
import video3 from "../assets/img/video3.png";
import article1 from "../assets/img/article1.png";
import article2 from "../assets/img/article2.png";
import article3 from "../assets/img/article3.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";
import { BiChevronRight } from "react-icons/bi";
const Main = ({ children }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    arrows: false,
  };
  const settings2 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
  };
  const settings3 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
  };
  const settings4 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
  };
  const settings5 = {
    dots: false,
    className: "center",
    centerMode: true,
    infinite: false,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    arrows: false,
  };
  const settings6 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: true,
  };
  return (
    <>
      <Header />
      <main>
        <div className="container-fluid">
          <div className="row">
            <div className="d-none col-8 d-md-block">
              <div className="rectangle-container">
                <img className="group-inner" alt="" src={rectangle94} />
                <img className="rectangle-icon" alt="" src={rectangle106} />
                <img className="group-child1" alt="" src={rectangle109} />
                <img className="group-child2" alt="" src={rectangle110} />
                <img className="group-child3" alt="" src={rectangle112} />
                <img className="group-child4" alt="" src={rectangle115} />
                <img className="group-child5" alt="" src={rectangle116} />
                <img className="group-child6" alt="" src={rectangle117} />
                <img className="group-child7" alt="" src={rectangle118} />
                <img className="group-child8" alt="" src={rectangle119} />
                <img className="group-child9" alt="" src={rectangle121} />
                <div className="group-child10" />
                <div className="group-child11" />
                <div className="group-child12" />
                <div className="group-child13" />
                <img className="group-child14" alt="" src={rectangle108} />
                <img className="group-child15" alt="" src={rectangle107} />
                <img className="group-child16" alt="" src={rectangle111} />
                <img className="group-child17" alt="" src={rectangle96} />
                <img className="group-child18" alt="" src={rectangle98} />
                <div className="group-child19" />
                <div className="group-child20" />
                <img className="group-child21" alt="" src={rectangle101} />
                <img className="group-child22" alt="" src={rectangle103} />
                <div className="group-child23" />
                <div className="group-child24" />
                <div className="suhana-parent">
                  <div className="suhana">Suhana</div>
                  <div className="air-10-wrapper">
                    <b className="air-10">AIR 10</b>
                  </div>
                </div>
                <div className="sahil-gupta-parent">
                  <div className="suhana">Sahil Gupta</div>
                  <div className="air-10-wrapper">
                    <b className="air-10">AIR 16</b>
                  </div>
                </div>
                <div className="sahil-gupta-group">
                  <div className="suhana">Sahil Gupta</div>
                  <div className="air-10-wrapper">
                    <b className="air-10">AIR 9</b>
                  </div>
                </div>
                <div className="anshit-sing-parent">
                  <div className="suhana">{`Anshit Sing `}</div>
                  <div className="air-10-wrapper">
                    <b className="air-10">AIR 9</b>
                  </div>
                </div>
                <div className="dibyank-pandey-parent">
                  <div className="suhana">Dibyank Pandey</div>
                  <div className="air-10-wrapper">
                    <b className="air-10">AIR 6</b>
                  </div>
                </div>
                <div className="manya-sha-parent">
                  <div className="suhana">Manya Sha</div>
                  <div className="air-10-wrapper">
                    <b className="air-10">AIR 6</b>
                  </div>
                </div>
                <div className="manya-sha-group">
                  <div className="suhana">Manya Sha</div>
                  <div className="air-10-wrapper">
                    <b className="air-10">AIR 6</b>
                  </div>
                </div>
                <div className="archita-jain-parent">
                  <div className="suhana">Archita Jain</div>
                  <div className="air-10-wrapper">
                    <b className="air-10">AIR 6</b>
                  </div>
                </div>
                <div className="navda-sharma-parent">
                  <div className="navda-sharma">Navda Sharma</div>
                  <div className="air-10-wrapper">
                    <b className="air-10">AIR 2</b>
                  </div>
                </div>
                <div className="gnanankith-parent">
                  <div className="suhana">Gnanankith</div>
                  <div className="air-10-wrapper">
                    <b className="air-10">AIR 6</b>
                  </div>
                </div>
                <div className="sanghmitra-parent">
                  <div className="navda-sharma">Sanghmitra</div>
                  <div className="air-10-wrapper">
                    <b className="air-10">AIR 3</b>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <img className="image-frame" alt="" src={frame} />
              <div class="card1 border-1 p-3 text-center">
                <div className="mt-3">
                  {" "}
                  <h3 className="fw-bolder"> Book your Free Session </h3>{" "}
                  <img className="underline" alt="" src={underLine} />{" "}
                </div>
                <p className="">
                  Admissions open for Online and Offline Classroom Coaching.
                  Enroll in Free Demo Class Today.
                </p>

                <div className="form-group mb-3 mx-5">
                  <form>
                    <div className="form-outline border rounded mb-4">
                      <input
                        type="text"
                        id="form1Example1"
                        className="form-control"
                      />
                      <label className="form-label" htmlFor="form1Example1">
                        Name
                      </label>
                    </div>
                    <div className="form-outline border rounded mb-4">
                      <input
                        type="email"
                        id="form1Example1"
                        className="form-control"
                      />
                      <label className="form-label" htmlFor="form1Example1">
                        Email Address
                      </label>
                    </div>
                    <div className="form-outline border rounded mb-4">
                      <input
                        type="mobile"
                        id="form1Example1"
                        className="form-control"
                      />
                      <label className="form-label" htmlFor="form1Example1">
                        Mobile Number
                      </label>
                    </div>
                    <div className="form-outline border rounded mb-4">
                      <input
                        type="password"
                        id="form1Example2"
                        className="form-control"
                      />
                      <label className="form-label" htmlFor="form1Example2">
                        Select Course
                      </label>
                    </div>
                    <button
                      type="submit"
                      className="btn btn-danger bg-red btn-block"
                    >
                      Book Demo
                    </button>
                  </form>
                </div>
              </div>
              <img className="image-frame1 " alt="" src={frame1} />
            </div>
          </div>
          <div className="row py-5 bg-gray">
            <div className="container text-center">
              <h1 className="fw-bolder">Free Session </h1>{" "}
              <img className="underline-heading" alt="" src={underLine} />{" "}
              <h5>
                Equipping the Legal Community: Empowering Success with Free
                Programs!
              </h5>
            </div>

            <div className="row px-4">
              <Slider {...settings}>
                <div>
                  <div className="my-card">
                    <div className="row p-3">
                      <h6 className="text-secondary"> THIS SUNDAY</h6>
                      <div className="col-8 fs-4 fw-bold">
                        Scholarship Test Online 2023
                      </div>
                      <div className="col-4">
                        <img className="img-fluid" alt="" src={frame5} />
                      </div>
                      <span className="col-4 border text-center rounded mx-3 p-2 text-red">
                        Register Now
                      </span>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="my-card">
                    <div className="row p-3">
                      <h6 className="text-secondary"> THIS SUNDAY</h6>
                      <div className="col-8 fs-4 fw-bold">
                        Free Demo CLAT 2024
                      </div>
                      <div className="col-4">
                        <img className="img-fluid" alt="" src={frame6} />
                      </div>
                      <span className="col-4 border text-center rounded mx-3 p-2 text-red">
                        Register Now
                      </span>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="my-card">
                    <div className="row p-3">
                      <h6 className="text-secondary"> THIS SUNDAY</h6>
                      <div className="col-8 fs-4 fw-bold">
                        Free Demo CLAT 2024
                      </div>
                      <div className="col-4">
                        <img className="img-fluid" alt="" src={frame7} />
                      </div>
                      <span className="col-4 border text-center rounded mx-3 p-2 text-red">
                        Register Now
                      </span>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="my-card">
                    <div className="row p-3">
                      <h6 className="text-secondary"> THIS SUNDAY</h6>
                      <div className="col-8 fs-4 fw-bold">
                        Scholarship Test Online 2023
                      </div>
                      <div className="col-4">
                        <img className="img-fluid" alt="" src={frame5} />
                      </div>
                      <span className="col-4 border text-center rounded mx-3 p-2 text-red">
                        Register Now
                      </span>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="my-card">
                    <div className="row p-3">
                      <h6 className="text-secondary"> THIS SUNDAY</h6>
                      <div className="col-8 fs-4 fw-bold">
                        Free Demo CLAT 2024
                      </div>
                      <div className="col-4">
                        <img className="img-fluid" alt="" src={frame6} />
                      </div>
                      <span className="col-4 border text-center rounded mx-3 p-2 text-red">
                        Register Now
                      </span>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="my-card">
                    <div className="row p-3">
                      <h6 className="text-secondary"> THIS SUNDAY</h6>
                      <div className="col-8 fs-4 fw-bold">
                        Free Demo CLAT 2024
                      </div>
                      <div className="col-4">
                        <img className="img-fluid" alt="" src={frame7} />
                      </div>
                      <span className="col-4 border text-center rounded mx-3 p-2 text-red">
                        Register Now
                      </span>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="my-card">
                    <div className="row p-3">
                      <h6 className="text-secondary"> THIS SUNDAY</h6>
                      <div className="col-8 fs-4 fw-bold">
                        Scholarship Test Online 2023
                      </div>
                      <div className="col-4">
                        <img className="img-fluid" alt="" src={frame5} />
                      </div>
                      <span className="col-4 border text-center rounded mx-3 p-2 text-red">
                        Register Now
                      </span>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="my-card">
                    <div className="row p-3">
                      <h6 className="text-secondary"> THIS SUNDAY</h6>
                      <div className="col-8 fs-4 fw-bold">
                        Free Demo CLAT 2024
                      </div>
                      <div className="col-4">
                        <img className="img-fluid" alt="" src={frame6} />
                      </div>
                      <span className="col-4 border text-center rounded mx-3 p-2 text-red">
                        Register Now
                      </span>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="my-card">
                    <div className="row p-3">
                      <h6 className="text-secondary"> THIS SUNDAY</h6>
                      <div className="col-8 fs-4 fw-bold">
                        Free Demo CLAT 2024
                      </div>
                      <div className="col-4">
                        <img className="img-fluid" alt="" src={frame7} />
                      </div>
                      <span className="col-4 border text-center rounded mx-3 p-2 text-red">
                        Register Now
                      </span>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="my-card">
                    <div className="row p-3">
                      <h6 className="text-secondary"> THIS SUNDAY</h6>
                      <div className="col-8 fs-4 fw-bold">
                        Scholarship Test Online 2023
                      </div>
                      <div className="col-4">
                        <img className="img-fluid" alt="" src={frame5} />
                      </div>
                      <span className="col-4 border text-center rounded mx-3 p-2 text-red">
                        Register Now
                      </span>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="my-card">
                    <div className="row p-3">
                      <h6 className="text-secondary"> THIS SUNDAY</h6>
                      <div className="col-8 fs-4 fw-bold">
                        Free Demo CLAT 2024
                      </div>
                      <div className="col-4">
                        <img className="img-fluid" alt="" src={frame6} />
                      </div>
                      <span className="col-4 border text-center rounded mx-3 p-2 text-red">
                        Register Now
                      </span>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="my-card">
                    <div className="row p-3">
                      <h6 className="text-secondary"> THIS SUNDAY</h6>
                      <div className="col-8 fs-4 fw-bold">
                        Free Demo CLAT 2024
                      </div>
                      <div className="col-4">
                        <img className="img-fluid" alt="" src={frame7} />
                      </div>
                      <span className="col-4 border text-center rounded mx-3 p-2 text-red">
                        Register Now
                      </span>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
          <div className="row py-5 bg-pink">
            <div className="container text-center">
              <h1 className="fw-bolder">Our Courses</h1>{" "}
              <img className="underline-heading" alt="" src={underLine} />{" "}
              <h5 className="">
                Expand Your Legal Knowledge: Join in Our Courses for Empowered
                Advocacy!
              </h5>
              <div className="row mt-4 justify-content-center text-start">
                <div className="col-md-5 d-flex m-1 course-card ">
                  <div className="me-2">
                    <div className="position-relative">
                      <span className=" btn btn-success course-btn text-capitalize">
                        Online
                      </span>
                      <img
                        className="course-img rounded"
                        alt=""
                        src={courseImg1}
                      />
                    </div>
                  </div>
                  <div className="col">
                    <h6 className="fw-bolder mt-3">
                      CLAT 2024: Online Coaching Program
                    </h6>
                    <p className="">Online Course for CLAT 2024 & other..</p>
                    <div className="d-flex">
                      <div className="d-flex justify-content-between align-items-center">
                        <img className="img-fluid" alt="" src={frame8} />
                        <p className=" mt-3">Live Classes</p>
                      </div>
                      <div className="d-flex justify-content-evenly align-items-center">
                        <img className="img-fluid" alt="" src={frame11} />
                        <p className="mt-3">100+ E-Books</p>
                      </div>
                    </div>
                    <div className="d-flex ">
                      <div className="d-flex justify-content-evenly align-items-center">
                        <img className="img-fluid" alt="" src={frame13} />
                        <p className="mt-3">Demo Classes</p>
                      </div>
                      <div className="d-flex justify-content-evenly align-items-center">
                        <img className="img-fluid" alt="" src={frame10} />
                        <p className="mt-3">150+ Topic Tests</p>
                      </div>
                    </div>

                    <div className="d-flex justify-content-between align-items-baseline border-top">
                      <div className="mt-2">
                        <span className="fs-5 fw-bold">₹68,000</span>
                        <span
                          className="text-decoration-line-through "
                          style={{ fontSize: "12px" }}
                        >
                          ₹115000
                        </span>
                      </div>
                      <div className="mt-3 text-red">
                        Book Demo <BiChevronRight className="fs-4" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-5 d-flex m-1 course-card ">
                  <div className="me-2">
                    <div className="position-relative">
                      <span className=" btn btn-success course-btn text-capitalize">
                        Online
                      </span>
                      <img
                        className="course-img rounded"
                        alt=""
                        src={courseImg2}
                      />
                    </div>
                  </div>
                  <div className="col">
                    <h6 className="fw-bolder mt-3">
                      CLAT 2024: Online Coaching Program
                    </h6>
                    <p className="">Online Course for CLAT 2024 & other..</p>
                    <div className="d-flex">
                      <div className="d-flex justify-content-between align-items-center">
                        <img className="img-fluid" alt="" src={frame8} />
                        <p className=" mt-3">Live Classes</p>
                      </div>
                      <div className="d-flex justify-content-evenly align-items-center">
                        <img className="img-fluid" alt="" src={frame11} />
                        <p className="mt-3">100+ E-Books</p>
                      </div>
                    </div>
                    <div className="d-flex ">
                      <div className="d-flex justify-content-evenly align-items-center">
                        <img className="img-fluid" alt="" src={frame13} />
                        <p className="mt-3">Demo Classes</p>
                      </div>
                      <div className="d-flex justify-content-evenly align-items-center">
                        <img className="img-fluid" alt="" src={frame10} />
                        <p className="mt-3">150+ Topic Tests</p>
                      </div>
                    </div>

                    <div className="d-flex justify-content-between align-items-baseline border-top">
                      <div className="mt-2">
                        <span className="fs-5 fw-bold">₹68,000</span>
                        <span
                          className="text-decoration-line-through "
                          style={{ fontSize: "12px" }}
                        >
                          ₹115000
                        </span>
                      </div>
                      <div className="mt-3 text-red">
                        Book Demo <BiChevronRight className="fs-4" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-5 d-flex m-1 course-card ">
                  <div className="me-2">
                    <div className="position-relative">
                      <span className=" btn btn-success course-btn text-capitalize">
                        Online
                      </span>
                      <img
                        className="course-img rounded"
                        alt=""
                        src={courseImg3}
                      />
                    </div>
                  </div>
                  <div className="col">
                    <h6 className="fw-bolder mt-3">
                      CLAT 2024: Online Coaching Program
                    </h6>
                    <p className="">Online Course for CLAT 2024 & other..</p>
                    <div className="d-flex">
                      <div className="d-flex justify-content-between align-items-center">
                        <img className="img-fluid" alt="" src={frame8} />
                        <p className=" mt-3">Live Classes</p>
                      </div>
                      <div className="d-flex justify-content-evenly align-items-center">
                        <img className="img-fluid" alt="" src={frame11} />
                        <p className="mt-3">100+ E-Books</p>
                      </div>
                    </div>
                    <div className="d-flex ">
                      <div className="d-flex justify-content-evenly align-items-center">
                        <img className="img-fluid" alt="" src={frame13} />
                        <p className="mt-3">Demo Classes</p>
                      </div>
                      <div className="d-flex justify-content-evenly align-items-center">
                        <img className="img-fluid" alt="" src={frame10} />
                        <p className="mt-3">150+ Topic Tests</p>
                      </div>
                    </div>

                    <div className="d-flex justify-content-between align-items-baseline border-top">
                      <div className="mt-2">
                        <span className="fs-5 fw-bold">₹68,000</span>
                        <span
                          className="text-decoration-line-through "
                          style={{ fontSize: "12px" }}
                        >
                          ₹115000
                        </span>
                      </div>
                      <div className="mt-3 text-red">
                        Book Demo <BiChevronRight className="fs-4" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-5  d-flex m-1 course-card ">
                  <div className="me-2">
                    <div className="position-relative">
                      <span className=" btn btn-success course-btn text-capitalize">
                        Online
                      </span>
                      <img
                        className="course-img rounded"
                        alt=""
                        src={courseImg4}
                      />
                    </div>
                  </div>
                  <div className="col">
                    <h6 className="fw-bolder mt-3">
                      CLAT 2024: Online Coaching Program
                    </h6>
                    <p className="">Online Course for CLAT 2024 & other..</p>
                    <div className="d-flex">
                      <div className="d-flex justify-content-between align-items-center">
                        <img className="img-fluid" alt="" src={frame8} />
                        <p className=" mt-3">Live Classes</p>
                      </div>
                      <div className="d-flex justify-content-evenly align-items-center">
                        <img className="img-fluid" alt="" src={frame11} />
                        <p className="mt-3">100+ E-Books</p>
                      </div>
                    </div>
                    <div className="d-flex ">
                      <div className="d-flex justify-content-evenly align-items-center">
                        <img className="img-fluid" alt="" src={frame13} />
                        <p className="mt-3">Demo Classes</p>
                      </div>
                      <div className="d-flex justify-content-evenly align-items-center">
                        <img className="img-fluid" alt="" src={frame10} />
                        <p className="mt-3">150+ Topic Tests</p>
                      </div>
                    </div>

                    <div className="d-flex justify-content-between align-items-baseline border-top">
                      <div className="mt-2">
                        <span className="fs-5 fw-bold">₹68,000</span>
                        <span
                          className="text-decoration-line-through "
                          style={{ fontSize: "12px" }}
                        >
                          ₹115000
                        </span>
                      </div>
                      <div className="mt-3 text-red">
                        Book Demo <BiChevronRight className="fs-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <h1 className="btn text-center fs-5 text-white mt-4 py-1 px-4 border rounded-2 bg-red">
                Explore all Courses <BiChevronRight className="ms-1 fs-3" />
              </h1>
            </div>
          </div>
          <img className="img-fluid" alt="" src={vector} />{" "}
          <div className="row py-5 bg-white">
            <div className="col-5 container">
              <h1 className="fw-bolder ">About Law Prep</h1>{" "}
              <img className="underline-heading" alt="" src={underLine} />{" "}
              <h5>
                Law Prep Tutorial is the ultimate “Getting into Law School”
                Program.
              </h5>
              <div className=" d-flex  mt-2 align-content-center gap-4 justify-content-start">
                <p className="text-red">✔</p>
                <p>
                  Law Prep offers the most comprehensive package towards your
                  preparation for the CLAT exam. A package designed to help you
                  sail through the entrance tests conducted across the country.
                </p>
              </div>
              <div className=" d-flex  mt-2 align-content-center gap-4 justify-content-start">
                <p className="text-red">✔</p>
                <p>
                  It combines the best Entrance Preparation with the best law
                  admissions consulting, advising, teaching, and tutoring.
                </p>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex gap-3">
                  <img className="img-fluid" alt="" src={frame8} />
                  <p className=" mt-3">Live Classes</p>
                </div>
                <div className="d-flex gap-3">
                  <img className="img-fluid" alt="" src={frame10} />
                  <p className="mt-3">5k+ Mock Test</p>
                </div>
                <div className="d-flex gap-3">
                  <img className="img-fluid" alt="" src={users} />
                  <p className="mt-3">25+ Teachers</p>
                </div>
              </div>
              <button className="btn text-center fs-6 mb-4 mt-4 py-1 px-4 border rounded-2">
                Read More <BiChevronRight className="ms-1 fs-3" />
              </button>
            </div>
            <div className="col-5 container">
              <img className="img-fluid" alt="" src={group73} />{" "}
            </div>
          </div>
          <div className="row py-5 bg-pink">
            <div className="container text-center">
              <h1 className="fw-bolder">Learn flexibly</h1>{" "}
              <img className="underline-heading" alt="" src={underLine} />{" "}
              <h5>
                Guiding Your Journey, Inspiring Your Success: Our Mentors, Your
                Pathfinders!
              </h5>
              <div className="row text-start justify-content-center">
                <div className="col-md-3 d-flex justify-content-evenly align-items-center mx-1 my-card ">
                  <div className="">
                    <span className="p-3 bg-opacity-25 bg-danger rounded-circle">
                      <img className="" alt="" src={frame01} />
                    </span>
                  </div>
                  <div className="mt-3">
                    <b className="fs-6">Learn together</b>
                    <p className="course-font">
                      Online Course for CLAT 2025 & other..
                    </p>
                  </div>
                </div>
                <div className="col-md-3 d-flex justify-content-evenly align-items-center mx-1 my-card ">
                  <div className="">
                    <i className="p-3 bg-opacity-25 bg-success rounded-circle">
                      <img className="" alt="" src={frame02} />
                    </i>
                  </div>
                  <div className="mt-3">
                    <b className="fs-6">Learn anything</b>
                    <p className="course-font">
                      Online Course for CLAT 2025 & other..
                    </p>
                  </div>
                </div>
                <div className="col-md-3 d-flex justify-content-evenly align-items-center mx-1 my-card ">
                  <div className="">
                    <i className="p-3 bg-opacity-25 bg-info rounded-circle">
                      <img className="" alt="" src={frame03} />
                    </i>
                  </div>
                  <div className="mt-3">
                    <b className="fs-6">Learn anything</b>
                    <p className="course-font">
                      Online Course for CLAT 2025 & other..
                    </p>
                  </div>
                </div>
                <div className="col-md-3 d-flex justify-content-evenly align-items-center mx-1 my-card ">
                  <div className="">
                    <i className="p-3 bg-opacity-25 bg-success rounded-circle">
                      <img className="" alt="" src={frame04} />
                    </i>
                  </div>
                  <div className="mt-3">
                    <b className="fs-6">Learn with results</b>
                    <p className="course-font">
                      Online Course for CLAT 2025 & other..
                    </p>
                  </div>
                </div>
                <div className="col-md-3 d-flex justify-content-evenly align-items-center mx-1 my-card ">
                  <div className="">
                    <i className="p-3 bg-opacity-25 bg-warning rounded-circle">
                      <img className="" alt="" src={frame05} />
                    </i>
                  </div>
                  <div className="mt-3">
                    <b className="fs-6">Learn from the best</b>
                    <p className="course-font">
                      Online Course for CLAT 2025 & other..
                    </p>
                  </div>
                </div>
                <div className="col-md-3 d-flex justify-content-evenly align-items-center mx-1 my-card ">
                  <div className="">
                    <i className="p-3 bg-violet rounded-circle">
                      <img className="" alt="" src={frame06} />
                    </i>
                  </div>
                  <div className="mt-3">
                    <b className="fs-6">Learn with top institutions</b>
                    <p className="course-font">
                      Online Course for CLAT 2025 & other..
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row py-5 bg-gray">
            <div className="container text-center ">
              <h1 className="fw-bolder">Our Mentors</h1>{" "}
              <img className="underline-heading" alt="" src={underLine} />{" "}
              <h5 className="mb-5">
                Guiding Your Journey, Inspiring Your Success: Our Mentors, Your
                Pathfinders!
              </h5>
              <div className="row mx-4">
                <Slider {...settings2}>
                  <div>
                    <img className="img-fluid rounded" alt="" src={mantor1} />
                  </div>
                  <div>
                    <img className="img-fluid rounded" alt="" src={mantor2} />
                  </div>
                  <div>
                    <img className="img-fluid rounded" alt="" src={mantor3} />
                  </div>
                  <div>
                    <img className="img-fluid rounded" alt="" src={mantor4} />
                  </div>
                  <div>
                    <img className="img-fluid rounded" alt="" src={mantor3} />
                  </div>
                  <div>
                    <img className="img-fluid rounded" alt="" src={mantor1} />
                  </div>
                  <div>
                    <img className="img-fluid rounded" alt="" src={mantor2} />
                  </div>
                  <div>
                    <img className="img-fluid rounded" alt="" src={mantor4} />
                  </div>
                </Slider>
              </div>
            </div>
          </div>
          <div className="row py-5 bg-white">
            <div className="container text-center">
              <h1 className="fw-bolder">Our Result</h1>{" "}
              <img className="underline-heading" alt="" src={underLine} />{" "}
              <h5 className="mb-5">
                Elevating Success, Inspiring Generations: Honoring the Triumphs
                of our Top Alumni!
              </h5>
              <div className="row mx-4">
                <Slider {...settings3}>
                  <div>
                    <img
                      className="img-fluid rounded px-3"
                      alt=""
                      src={banner}
                    />
                  </div>
                  <div>
                    <img
                      className="img-fluid rounded px-3"
                      alt=""
                      src={banner2}
                    />
                  </div>
                  <div>
                    <img
                      className="img-fluid rounded px-3"
                      alt=""
                      src={banner}
                    />
                  </div>
                  <div>
                    <img
                      className="img-fluid rounded px-3"
                      alt=""
                      src={banner2}
                    />
                  </div>
                  <div>
                    <img
                      className="img-fluid rounded px-3"
                      alt=""
                      src={banner}
                    />
                  </div>
                  <div>
                    <img
                      className="img-fluid rounded px-3"
                      alt=""
                      src={banner}
                    />
                  </div>
                  <div>
                    <img
                      className="img-fluid rounded px-3"
                      alt=""
                      src={banner2}
                    />
                  </div>
                  <div>
                    <img
                      className="img-fluid rounded px-3"
                      alt=""
                      src={banner2}
                    />
                  </div>
                </Slider>
              </div>
            </div>
          </div>
          <div className="row py-5 bg-gray">
            <div className="container text-center ">
              <h1 className="fw-bolder">Alumni Diaries</h1>{" "}
              <img className="underline-heading" alt="" src={underLine} />{" "}
              <h5 className="mb-5">
                Stories of Triumph, Legacies of Achievement: Alumni Diaries,
                Inspiring Pathways!
              </h5>
              <div className="row mx-4">
                <Slider {...settings4}>
                  <div>
                    <img
                      className="img-fluid rounded px-3"
                      alt=""
                      src={Alumni1}
                    />
                  </div>
                  <div>
                    <img
                      className="img-fluid rounded px-3"
                      alt=""
                      src={Alumni2}
                    />
                  </div>
                  <div>
                    <img
                      className="img-fluid rounded px-3"
                      alt=""
                      src={Alumni3}
                    />
                  </div>
                  <div>
                    <img
                      className="img-fluid rounded px-3"
                      alt=""
                      src={Alumni1}
                    />
                  </div>
                  <div>
                    <img
                      className="img-fluid rounded px-3"
                      alt=""
                      src={Alumni2}
                    />
                  </div>
                  <div>
                    <img
                      className="img-fluid rounded px-3"
                      alt=""
                      src={Alumni3}
                    />
                  </div>
                  <div>
                    <img
                      className="img-fluid rounded px-3"
                      alt=""
                      src={Alumni2}
                    />
                  </div>
                  <div>
                    <img
                      className="img-fluid rounded px-3"
                      alt=""
                      src={Alumni1}
                    />
                  </div>
                </Slider>
              </div>
            </div>
          </div>
          <div className="row py-5  bg-white border-bottom">
            <div className="container text-center">
              <h1 className="fw-bolder">Our Videos</h1>{" "}
              <img className="underline-heading" alt="" src={underLine} />{" "}
              <h5 className="mb-5">
                Unleash Your Learning: Engaging Videos for Enlightened Minds!
              </h5>
              <div className="row mx-4 text-start">
                <Slider {...settings5}>
                  <div>
                    <img
                      className="img-fluid rounded px-3 "
                      alt=""
                      src={video1}
                    />
                    <p className="fw-bold fs-5 ps-1">
                      Lorem ipsum dolor sit amet consectetur. Enim enim etiam
                    </p>
                  </div>
                  <div>
                    <img
                      className="img-fluid rounded px-3"
                      alt=""
                      src={video2}
                    />
                    <p className="fw-bold fs-5 ps-1">
                      Lorem ipsum dolor sit amet consectetur. Enim enim etiam
                    </p>
                  </div>
                  <div>
                    <img
                      className="img-fluid rounded px-3"
                      alt=""
                      src={video3}
                    />
                    <p className="fw-bold fs-5 ps-1">
                      Lorem ipsum dolor sit amet consectetur. Enim enim etiam
                    </p>
                  </div>
                  <div>
                    <img
                      className="img-fluid rounded px-3"
                      alt=""
                      src={video1}
                    />
                    <p className="fw-bold fs-5 ps-1">
                      Lorem ipsum dolor sit amet consectetur. Enim enim etiam
                    </p>
                  </div>
                  <div>
                    <img
                      className="img-fluid rounded px-3"
                      alt=""
                      src={video2}
                    />
                    <p className="fw-bold fs-5 ps-1">
                      Lorem ipsum dolor sit amet consectetur. Enim enim etiam
                    </p>
                  </div>
                  <div>
                    <img
                      className="img-fluid rounded px-3"
                      alt=""
                      src={video3}
                    />
                    <p className="fw-bold fs-5 ps-1">
                      Lorem ipsum dolor sit amet consectetur. Enim enim etiam
                    </p>
                  </div>
                  <div>
                    <img
                      className="img-fluid rounded px-3"
                      alt=""
                      src={video2}
                    />
                    <p className="fw-bold fs-5 ps-1">
                      Lorem ipsum dolor sit amet consectetur. Enim enim etiam
                    </p>
                  </div>
                  <div>
                    <img
                      className="img-fluid rounded px-3"
                      alt=""
                      src={video1}
                    />
                    <p className="fw-bold fs-5 ps-1">
                      Lorem ipsum dolor sit amet consectetur. Enim enim etiam
                    </p>
                  </div>
                </Slider>
              </div>
              <h1 className="btn text-center fs-5 text-white mt-4 py-1 px-4 border rounded-2 bg-red">
                Explore all Videos <BiChevronRight className="ms-1 fs-3" />
              </h1>
            </div>
          </div>
          <div className="row py-5 bg-white">
            <div className="container text-center ">
              <h1 className="fw-bolder">Latest News & Article</h1>{" "}
              <img className="underline-heading" alt="" src={underLine} />{" "}
              <h5 className="mb-4">
                Stay Informed, Stay Ahead: Latest News & Articles, Your Source
                for Legal Insights!
              </h5>
              <div className="row mx-4 text-start">
                <Slider {...settings6}>
                  <div>
                    <img
                      className="w-100 rounded px-3"
                      alt=""
                      src={article1}
                    />
                  </div>
                  <div>
                    <img
                      className="w-100 rounded px-3"
                      alt=""
                      src={article2}
                    />
                  </div>
                  <div>
                    <img
                      className="w-100 rounded px-3"
                      alt=""
                      src={article3}
                    />
                  </div>
                  <div>
                    <img
                      className="w-100 rounded px-3"
                      alt=""
                      src={article1}
                    />
                  </div>
                  <div>
                    <img
                      className="w-100 rounded px-3"
                      alt=""
                      src={article2}
                    />
                  </div>
                  <div>
                    <img
                      className="w-100 rounded px-3"
                      alt=""
                      src={article3}
                    />
                  </div>
                  <div>
                    <img
                      className="w-100 rounded px-3"
                      alt=""
                      src={article2}
                    />
                  </div>
                  <div>
                    <img
                      className="w-100 rounded px-3"
                      alt=""
                      src={article1}
                    />
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Main;
