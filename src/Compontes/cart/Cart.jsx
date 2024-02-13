import React from "react";
import { Link } from "react-router-dom";
import { Footer } from "../Footer";

const Cart = () => {
  return (
    <>
      <div className="cart">
        <div className=" contact">
          <div class="container-fluid bg-primary py-5 mb-5 cart-header ">
            <div className="">
              <div class="container py-5">
                <div class="row justify-content-center">
                  <div class="col-lg-10 text-center">
                    <h1 class="display-3 text-white animated slideInDown">
                      Shopping Cart
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
                          Cart
                        </li>
                      </ol>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="cart-details my-5 d-flex align-items-center mx-3 fw-bolde ">
          <h2>Your cart is empty</h2>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
