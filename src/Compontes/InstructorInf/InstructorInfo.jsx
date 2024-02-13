import React from "react";
import { Link } from "react-router-dom";
import ins1 from "../Images/team-1.jpg";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";
import { Footer } from "../Footer";

const InstructorInfo = () => {
  return (
    <>
      <div>
        <div>
          <div class="container-fluid bg-primary py-5 mb-5  Instructor-header  ">
            <div className="">
              <div class="container py-5">
                <div class="row justify-content-center">
                  <div class="col-lg-10 text-center">
                    <h1 class="display-3 text-white animated slideInDown">
                      Instructor Profile
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
        <div className="ins-info ">
          <div className="container row  d-flex justify-content-between ">
            <div className="col-xl-4 col-md-6 col-10 mb-3 ins-image bg-white mx-3">
              <img src={ins1} alt="" className="shadow-lg mt-2" />
              <div className="my-5 d-flex align-items-center justify-content-between tilt-inst">
                <h4 className="d-flex gap-2">
                  <FaBriefcase size={25} className="icons" />
                  Job Titlex
                </h4>
                <p className="d-flex">Lead UX Engineer</p>
              </div>
              <div className="my-5 d-flex align-items-center justify-content-between tilt-inst">
                <h4 className="d-flex gap-2">
                  <FaPhoneAlt size={25} className="icons" />
                  Phone{" "}
                </h4>
                <p className="d-flex">+00 365 9852 65</p>
              </div>
              <div className="my-5 d-flex align-items-center justify-content-between tilt-inst">
                <h4 className="d-flex gap-2">
                  <MdMarkEmailUnread size={25} className="icons" />
                  Email{" "}
                </h4>
                <p className="d-flex">epora@mail.com</p>
              </div>
            </div>
            <div className="col-xl-6 col-md-10 col-12 d-flex my-3 instr-info position-relative">
              <div className="d-flex flex-column mx-2">
                <h3 className="fs-2 fw-bold">Jim Séchen</h3>
                <p className="fw-normal">Teaches Art & Designer</p>
              </div>
              <div className="d-flex flex-column mx-5 my-4">
                <p>Follow Us:</p>
                <div className="d-flex gap-2 icons">
                  <FaFacebookF size={25} />
                  <FaLinkedin size={25} />
                  <FaYoutube size={25} />
                </div>
              </div>
              <div className="my-4 ">
                <button className="btn btn-outline-success ">Follow + </button>
                <br />
              </div>

              <div className="my-4 position-absolute inst-dec">
                <h2>Short Bio</h2>
                <p className="mx-auto">
                  Synergistically foster 24/7 leadership rather than scalable
                  platforms. Conveniently visualize installed base products
                  before interactive results. Collaboratively restore corporate
                  experiences and open-source applications. Proactively mesh
                  cooperative growth strategies for covalent opportunities.
                  Competently create efficient markets through best-of-breed
                  potentialities. Compellingly exploit B2B vortals with emerging
                  total linkage. Appropriately pursue strategic leadership whe
                  intermandated ideas. Proactively revolutionize interoperable
                  "outside the box" thinking with fully researched innovation.
                  Dramatically facilitate exceptional architectures and
                  bricks-and-clicks data. Progressively genera extensible
                  e-services for.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default InstructorInfo;
