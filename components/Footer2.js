import React from "react";
import Link from 'next/link';

const Footer2 = () => {
  return (
    <footer className="small-section bg-morado footer pb-20 pt-20">
      <div className="container">
        <div className="row align-left">
          <div className="col-sm-6 col-lg-3 col-md-3 col-xs-6 col-sm-3">
            <div className="widget">
              <img className='ship-logo' src='images/ship_logo.png' alt='logo' />
              <div className="widget-body">
                <p>
                  3130-580 Seaborne Ave <br></br>
                  Port Coquitlam, B, c,<br></br>
                  V3B OM3<br></br>
                  CANADA<br></br>
                  Tel: +1 778-727-1427
                </p>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-lg-3 col-xs-6 col-md-3 col-sm-3">
            <div className="widget">
              <div className="widget-body">
                <ul className="clearlist widget-menu">
                  <li>
                    <a
                      onClick={() => {
                        window.location.href = "/faq";
                      }}
                      title=""
                    >
                      How ShipByMail Works
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => {
                        window.location.href = "/faq";
                      }}
                      title=""
                    >
                      Shipping & Pricing
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => {
                        window.location.href = "/faq";
                      }}
                      title=""
                    >
                      FAQ
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => {
                        window.location.href = "/faq";
                      }}
                      title=""
                    >
                      Support
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => {
                        window.location.href = "/faq";
                      }}
                      title=""
                    >
                      Actual vs, Volumetric Weight
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-lg-3 col-xs-6 col-md-3 col-sm-3">
            <div className="widget">
              <div className="widget-body">
                <ul className="clearlist widget-menu">
                  <li>
                    <a
                      onClick={() => {
                        window.location.href = "/faq";
                      }}
                      title=""
                    >
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => {
                        window.location.href = "/faq";
                      }}
                      title=""
                    >
                      About ShipByMail
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => {
                        window.location.href = "/faq";
                      }}
                      title=""
                    >
                      Become a Partner
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => {
                        window.location.href = "/faq";
                      }}
                      title=""
                    >
                      SiteMap
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => {
                        window.location.href = "/faq";
                      }}
                      title=""
                    >
                      Blog
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>         

          <div className="col-sm-6 col-lg-3 col-xs-12 col-md-3 col-sm-3">
            <div className="widget">
              <div className="footer-social-links">
                <p className="social-title">2019 Country Growth Leader</p>
                <img src="images/international_ship.png" />
                <p className="social-subtitle">international Shipping</p>
                <p className="soclal-review">Read our reviews on:</p>
                <div className="row">
                  <a
                    onClick={() => {
                      window.location.href = "https://www.facebook.com/pg/shipbymail/reviews";
                    }}
                    title=""
                    className="facebook-link"
                  >
                    <img src="images/facebook_share1.png" />
                  </a>
                  <a
                    onClick={() => {
                      window.location.href = "https://www.trustpilot.com/review/www.shipbymail.com";
                    }}
                    title=""
                  >
                    <img src="images/trustpilot.png" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row algin-left footer-paypal">
          <div className="col-md-3 col-sm-6">
            <div className="row">
              <div className="col-md-6">
                <a
                  onClick={() => {
                    window.location.href = "https://www.trustpilot.com/review/www.shipbymail.com";
                  }}
                  title=""
                >
                  <img src="images/Canada-post.png" />
                </a>
              </div>
              <div className="col-md-6">
                <a
                  onClick={() => {
                    window.location.href = "https://www.trustpilot.com/review/www.shipbymail.com";
                  }}
                  title=""
                >
                  <img src="images/dhl_logo.gif" />
                </a>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <a
                  onClick={() => {
                    window.location.href = "https://www.trustpilot.com/review/www.shipbymail.com";
                  }}
                  title=""
                >
                  <img src="images/fedex_logo.gif" />
                </a>
              </div>
              <div className="col-md-6">
                <a
                  onClick={() => {
                    window.location.href = "https://www.trustpilot.com/review/www.shipbymail.com";
                  }}
                  title=""
                >
                  <img src="images/TNT-logo.png" />
                </a>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <a
                  onClick={() => {
                    window.location.href = "https://www.trustpilot.com/review/www.shipbymail.com";
                  }}
                  title=""
                >
                  <img src="images/usps_logo.png" />
                </a>
                <a
                  onClick={() => {
                    window.location.href = "https://www.trustpilot.com/review/www.shipbymail.com";
                  }}
                  title=""
                  className="paypal"
                >
                  <img src="images/Paypal-Visa-debit.png" />
                </a>
              </div>
              <div className="col-md-6">
                <a
                  onClick={() => {
                    window.location.href = "https://www.trustpilot.com/review/www.shipbymail.com";
                  }}
                  title=""
                >
                  <img src="images/UPS_logo.png" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="row">
              <div className="col-md-8">
                <h4>BLOG</h4>
              </div>
              <div className="col-md-4">

              </div>
            </div>
            <p>1. Online Shopping from canada saves you money, Really?</p>
            <p>2. Ship To Panama</p>
            <p>3. Ship To Australia</p>
            <p>4. Ship To Argentina</p>
            <p>5. What CAN'T you ship through your Canadian Parcel Forwarders Address?</p>
          </div>
          <div className="col-md-3 col-sm-6 plus">
            <img src="images/plusimg1111111.jpg" />
            <p>
              For every international shipment.<br></br>
              ShipByMail will donate $1 to the Canadian <br></br>
              Red Cross to help where it is needed<br></br>
              most.
            </p>
          </div>
        </div>
      </div>
      <div className="footer-text">
        <h6 className="white">
          2017-2020 ShipByMail.com All Rights Reserved | XML Sitemap
        </h6>
      </div>
      <div className="local-scroll">
        <a href="#top" className="link-to-top">
          <i className="fa fa-chevron-circle-up"></i>
        </a>
      </div>
      <style jsx>{`
        .social-title{
          margin-bottom: 3px;
          color: red;
        }
        .social-subtitle {
          margin-bottom: 0px;
          color: red;
          font-size: 19px;
        }
        .footer-social-links {
          text-align: center;
        }
        .facebook-link {
          margin-right: 15px;
        }
        .soclal-review {
          font-size: 12px;
          color:black;
          margin-top:0px;
          margin-bottom:2px;
        }
        .footer-text {
          background-color: #1e487c;
        }
        .footer-text h6{
          margin-bottom: 0;
        }
        footer {
          padding-bottom: 0;
        }
        .footer-paypal img{
          border-radius: 5px;
        }
        .footer-paypal .row {
          margin-bottom: 10px;
        }
        .footer-paypal .paypal img{
          margin-top: 20px;
        }
        .footer-paypal h4 {
          margin-top: 0;
          margin-bottom: 10px;
        }
        .footer-paypal p {
          margin-top: 0;
          margin-bottom : 4px;
        }
        .footer-paypal .plus {
          text-align: center;
        }
        .footer-text {
          text-align: center;
        }
        footer a {
          cursor: pointer;
        }
      `}</style>
    </footer>
  );
};

export default Footer2;
