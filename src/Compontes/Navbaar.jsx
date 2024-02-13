import React from "react";
import { Link } from "react-router-dom";
import { BsBookFill } from "react-icons/bs";
import { FaShoppingBag } from "react-icons/fa";

export const Navbaar = () => {
  return (
    <>
      <div className="">
        <nav class="navbar navbar-expand-lg  mb-3  shadow-sm position-fixed w-100  border-opacity-75 top-0">
          <div class="container-fluid">
            <div className="d-flex align-items-center">
              <Link
                class="navbar-brand mx-1 d-flex gap-2 align-items-center"
                to="/"
              >
                <BsBookFill className="icons-head" size={32} />{" "}
                <h2 className="p-head">E-Learing</h2>
              </Link>
            </div>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse mx-5" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <Link class="nav-link " aria-current="page" to="/">
                    <span className="pa-head">Home</span>
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link " aria-current="page" to="/about">
                    <span className="pa-head">About</span>
                  </Link>
                </li>

                <li class="nav-item">
                  <Link class="nav-link " aria-current="page" to="/courses">
                    <span className="pa-head">Courses</span>
                  </Link>
                </li>

                <li class="nav-item">
                  <Link
                    class="nav-link "
                    aria-current="page"
                    to="/instructor
"
                  >
                    <span className="pa-head">Instructor</span>
                  </Link>
                </li>

                <li class="nav-item">
                  <Link class="nav-link " aria-current="page" to="/contact">
                    <span className="pa-head">Contact</span>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="btn-en d-flex gap-4 align-items-center justify-content-center">
              <div className="d-flex gap-4 mx-4 text-decoration-none">
                <Link to="/cart" className="d-flex align-items-center">
                  <div className="shoping-cart text-decoration-none">
                    <FaShoppingBag size={30} />
                  </div>
                </Link>
                <button className="btn-sup">
                  <Link
                    className="text-decoration-none text-white"
                    to="/signup"
                  >
                    SignUp
                  </Link>
                  <div class="arrow-wrapper">
                    <div class="arrow"></div>
                  </div>
                </button>
                <button className="btn btn-outline-success btn-sin  ">
                  <Link className="text-decoration-none text-black" to="/login">
                    {" "}
                    LogIn{" "}
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};
