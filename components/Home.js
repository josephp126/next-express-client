import React from "react";
import Home_data from "../Data/Home_data";
import Link from "next/link";
// import "../Style/Home.css";

const Home = (props) => {
  return (
    <>
      <section id="hero">
        <div className="topbar-blue">
          ShipByMail: Canada's Affordable Global Express Parcel Forwarder
        </div>
        <div className="hero-container">
          <div className="container home mb-2 pb-5">
            <div className="row">
              <div className="maillogo-1 col-md-6 col-sm-12">
                <img
                  className="home-im"
                  src="images/shipbymaillogo-1.png"
                  height="300"
                  alt="logo"
                />
              </div>
              <div className="maillogo-2 col-md-6 ml-5 col-sm-12 ml-auto">
                <img
                  className="home-im"
                  src="images/shipbymaillogo-2.png"
                  height="300"
                  alt="logo"
                />
                <p className="maillogo2-text">3-Day shipping to the USA starts at</p>
              </div>
            </div>
            <div className="carousel-dot">
              <i className="fa fa-circle active"></i>
              <i className="fa fa-circle"></i>
              <i className="fa fa-circle"></i>
            </div>
            <div className="get-quote">
              <div className="quote-title">
                <p>Get Quote</p>
              </div>
              <div className="quote-indexes">
                <div className="country">
                  <p>Country</p>
                  <select>
                    <option>Country</option>
                    <option>Canada</option>
                  </select>
                </div>
                <div className="postal-code">
                  <p>Postal Code</p>
                  <input type="text" placeholder="Postal Code" />
                </div>
                <div className="shipping-weight">
                  <p>Shipping Weight</p>
                  <input type="number" placeholder="0" />
                  <select>
                    <option>Ibs</option>
                    <option>Canada</option>
                  </select>
                </div>
                <div className="shipping-box-dimensions">
                  <p>Shipping Box Dimensions</p>
                  <input type="number" placeholder="0" />
                  <input type="number" placeholder="0" />
                  <input type="number" placeholder="0" />
                  <select>
                    <option>inch</option>
                    <option>Canada</option>
                  </select>
                </div>
                <div className="value">
                  <p>Value(CAD $)</p>
                  <input type="number" placeholder="0" />
                </div>
                <div className="get-quote-link">
                  <p>button</p>
                  <Link href="">
                    <a>
											<span className='get-quote-button'>
												Get Quote
											</span>
										</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <style jsx>{`
        #hero {
          background-color: white;
        }
        .topbar-blue {
          background-color: #1e487c;
          font-size: 18px;
          padding: 10px 0px;
          letter-spacing: 2px;
          text-align: center;
          color: white;
        }
        .maillogo-1 {
          padding-top: 10px;
          text-align: right;
        }
        .maillogo-1 img{
          width: 77%;
        }
        .maillogo-2 {
          padding-top: 20px;
        }
        .maillogo2-text {
          font-size: 28px;
          color: #d80202;
          font-weight: bold;
          margin-left: -50px;
          margin-bottom: 0px;
        }
        .carousel-dot {
          text-align: center;
        }
        .carousel-dot .active {
          color: #1e487c;
        }
        .carousel-dot i{
          margin-right: 10px;
          color: #d80202;
        }
        .quote-indexes {
          display: flex;
          padding: 15px 10px;
          background-color: #1e487c;
        }
        .quote-indexes div {
          margin-right: 10px;
        }
        .quote-indexes p {
          font-size: 14px;
          color: white;
          margin-bottom: 2px;
        }
        .quote-indexes .country select,
        .quote-indexes .postal-code input {
          width: 190px;
          height: 40px;
          border-radius: 2px;
          border: none;
        }
        .quote-indexes .shipping-weight input,
        .quote-indexes .value input,
        .quote-indexes .shipping-weight select{
          width: 90px;
          height: 40px;
          border-radius: 2px;
          border: none;
        }
        .quote-indexes .shipping-weight input {
          margin-right: 4px;
        }
        .quote-indexes .shipping-box-dimensions input,
        .quote-indexes .shipping-box-dimensions select {
          width: 45px;
          height: 40px;
          border-radius: 2px;
          border: none;
        }
        .quote-indexes .shipping-box-dimensions input {
          margin-right: 4px;
        }
        .quote-indexes .shipping-weight {
          margin-right: 30px;
        }
        .quote-indexes .shipping-box-dimensions {
          margin-right: 40px;
        }
        .quote-title p{
          margin-bottom: 0px;
          padding: 5px 30px;
          font-size: 18px;
          color: white;
          border-top-left-radius: 4px;
          border-top-right-radius: 4px;
          background-color: #d80202;
          width: 147px;
        }
        .get-quote-link {
          margin-left: 30px;
        }
        .get-quote-link p {
          visibility: hidden;
          margin-bottom: 8px;
        }
        .get-quote-link a {
          text-decoration: none;
        }
        .get-quote-link span {
          padding: 10px 15px;
          background-color: #d80202;
          color: white;
          border-radius: 5px;
          font-size: 16px;
          font-weight: 600;
        }
        .home-title {
          padding-top: 5px;
          padding-bottom: 20px
          text-align: center;
          font-weight: bolder;
          color: blue;
        }
        .home-im {
          margin: 0%;
          padding: 0;
        }
      `}</style>
    </>
  );
};

export default Home;
