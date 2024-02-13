import React from "react";
import { Link } from "react-router-dom";
import { IoPaperPlaneSharp } from "react-icons/io5";
import { IoIosPerson } from "react-icons/io";
import { FaFileAlt } from "react-icons/fa";
import { FaCalendarCheck } from "react-icons/fa";
import in1 from "../Images/team-1.jpg";
import { FaPlayCircle } from "react-icons/fa";
import { PiStudentBold } from "react-icons/pi";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Footer } from "./../Footer";

import { FaYoutube } from "react-icons/fa";

const Instructor = () => {
  return (
    <>
      <div>
        <div>
          <div class="container-fluid bg-primary h-75 mb-5  Instructor-header  ">
            <div className="">
              <div class="container py-5">
                <div class="row justify-content-center">
                  <div class="col-lg-10 text-center">
                    <h1 class="display-3 text-white animated slideInDown mt-lg-5">
                      Instructor
                    </h1>
                    <nav aria-label="breadcrumb">
                      <ol class="breadcrumb justify-content-center">
                        <li class="breadcrumb-item">
                          <Link class="text-white text-decoration-none" to="/">
                            Home
                          </Link>
                        </li>

                        <li
                          class="breadcrumb-item text-white active"
                          aria-current="page"
                        >
                          Instructor
                        </li>
                      </ol>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="center-ins  row mx-4  my-5 d-flex align-items-center justify-content-center  ">
          <div className="col-xl-3 col-lg-6 col-md-6 mb-5 ">
            <div className=" box-inst text-center shadow-lg">
              <div className="mb-3">
                <IoPaperPlaneSharp className="icon-ins mb-4" />

                <h2 className="text-center">Online Courses</h2>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-6 col-md-6 mb-5">
            <div className=" box-inst text-center shadow-lg">
              <div className="mb-3">
                <IoIosPerson className="icon-ins mb-4" />

                <h2 className="text-center">Expert Trainer</h2>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-6 col-md-6 mb-5">
            <div className=" box-inst text-center shadow-lg">
              <div className="mb-3">
                <FaFileAlt className="icon-ins mb-4" size="10px" />

                <h2 className="text-center">Get Certificate</h2>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-6 col-md-6 mb-5">
            <div className=" box-inst text-center shadow-lg">
              <div className="mb-3">
                <FaCalendarCheck className="icon-ins mb-4" />

                <h2 className="text-center">Life Time Access</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="instructor my-3">
          <div className="instructor-text d-flex align-items-center justify-content-center flex-column mb-4">
            <p>Instructor</p>
            <h2>Our Expert Instructor</h2>
          </div>
        </div>
        <div className="container row mx-5 d-flex align-items-center justify-content-center">
          <div className="col-lg-4 col-md-6 col-12 mb-5">
            <div className="tp-instructor position-relative">
              <div>
                <img src={in1} alt="" />
              </div>
              <div class="tp-instructor__content d-flex align-items-center justify-content-center my-3 flex-column">
                <span>Instructor</span>
                <h4>
                  <Link to="/instinfo" className="text-decoration-none name">
                    {" "}
                    Ali Reabe
                  </Link>
                </h4>
              </div>
              <div className="d-flex align-items-center gap-5">
                <div className="d-flex gap-2 align-items-center tp-instructor-icons ">
                  <FaPlayCircle size={25} className="icon" />
                  <h3>35 Classes</h3>
                </div>
                <div className="d-flex gap-2 align-items-center tp-instructor-icons ">
                  <PiStudentBold size={25} className="icon" />
                  <h3>291+ Students</h3>
                </div>
              </div>
              <div className="social-inst position-absolute">
                <div className="d-flex flex-column gap-2">
                  <FaFacebookF size={30} className="icons" />
                  <FaLinkedin size={30} className="icons" />
                  <FaYoutube size={30} className="icons" />
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-12 mb-5">
            <div className="tp-instructor position-relative">
              <div>
                <img src={in1} alt="" />
              </div>
              <div class="tp-instructor__content d-flex align-items-center justify-content-center my-3 flex-column">
                <span>Instructor</span>
                <h4>
                  <a href="" className="text-decoration-none name">
                    {" "}
                    Ali Reabe
                  </a>
                </h4>
              </div>
              <div className="d-flex align-items-center gap-5">
                <div className="d-flex gap-2 align-items-center tp-instructor-icons ">
                  <FaPlayCircle size={25} className="icon" />
                  <h3>35 Classes</h3>
                </div>
                <div className="d-flex gap-2 align-items-center tp-instructor-icons ">
                  <PiStudentBold size={25} className="icon" />
                  <h3>291+ Students</h3>
                </div>
              </div>
              <div className="social-inst position-absolute">
                <div className="d-flex flex-column gap-2">
                  <FaFacebookF size={30} className="icons" />
                  <FaLinkedin size={30} className="icons" />
                  <FaYoutube size={30} className="icons" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12 mb-5">
            <div className="tp-instructor position-relative">
              <div>
                <img src={in1} alt="" />
              </div>
              <div class="tp-instructor__content d-flex align-items-center justify-content-center my-3 flex-column">
                <span>Instructor</span>
                <h4>
                  <a href="" className="text-decoration-none name">
                    {" "}
                    Ali Reabe
                  </a>
                </h4>
              </div>
              <div className="d-flex align-items-center gap-5">
                <div className="d-flex gap-2 align-items-center tp-instructor-icons ">
                  <FaPlayCircle size={25} className="icon" />
                  <h3>35 Classes</h3>
                </div>
                <div className="d-flex gap-2 align-items-center tp-instructor-icons ">
                  <PiStudentBold size={25} className="icon" />
                  <h3>291+ Students</h3>
                </div>
              </div>
              <div className="social-inst position-absolute">
                <div className="d-flex flex-column gap-2">
                  <FaFacebookF size={30} className="icons" />
                  <FaLinkedin size={30} className="icons" />
                  <FaYoutube size={30} className="icons" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Instructor;
