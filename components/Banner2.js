import React from "react";

const Banner2 = (props) => {
  return (
    <section
      className="small-section pt-30 pb-10 bg-white align-center "
      id="logos-bank"
    >
      <div className="banner-title">
        <p>
          Shop Online In Canada And Have Parcels Forwarded To you
        </p>  
      </div>
      <div className="post-prev-img">
        <img src="images/amazon.png" alt="" />
      </div>
      <div className="post-prev-img">
        <img src="images/deciem.png" alt="" />
      </div>
      <div className="post-prev-img">
        <img src="images/ikea.png" alt="" />
      </div>
      <div className="post-prev-img">
        <img src="images/nike.png" alt="" />
      </div>
      <div className="post-prev-img">
        <img src="images/sephora.png" alt="" />
      </div>
      <div className="post-prev-img">
        <img src="images/adidas.png" alt="" />
      </div>
      <style jsx>{`
        .banner-title p{
          text-align: center;
          color: #1e487c;
          font-size: 24px;
          letter-spacing: 1.2px;
          font-weight: 500;
          margin-bottom: 5px;
        }
      `}</style>
    </section>
  );
};

export default Banner2;
