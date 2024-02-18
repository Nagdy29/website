import React, { useState } from "react";
import { Form, Button, Input, Select, Label } from "semantic-ui-react";
import { Link } from "react-router-dom";

const CheckOut = () => {
  return (
    <>
      <div>
        <div class="container-fluid bg-primary py-5 mb-5 about-header ">
          <div className="">
            <div class="container py-5">
              <div class="row justify-content-center">
                <div class="col-lg-10 text-center">
                  <h1 class="display-3 text-white animated slideInDown">
                    About Us
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
                        About
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="formmmm"></div>
      </div>
    </>
  );
};

export default CheckOut;
