import React from "react";

const Function = (props) => {
  return (
    <section className="small-section pt-10 pb-80 pb-sm-60 bg-white">
      <div className="container relative">
        <h1 className="function-title mb-40 mb-sm-40">Features</h1>
        <div className="row">
          <div className="col-md-6">
            <div className="col-md-2">
              <img src="images/icon1-h.png" />
            </div>
            <div className="col-md-10">
              <p className="title">
                Express Shipping Savings
              </p>
              <p className="content">
                Save up to 70% on international Shipping and receive your
                parcel between 3-7 Business Days!
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="col-md-2">
              <img src="images/icon5-h.png" />
            </div>
            <div className="col-md-10">
              <p className="title">
                BuyForMe(Assisted Purchase)
              </p>
              <p className="content">
                We are specialists in purchasing the item on your behalf if 
                the merchant doesn't accept your mode of payment.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="col-md-2">
              <img src="images/icon2-h.png" />
            </div>
            <div className="col-md-10">
              <p className="title">
                Tax Free Purchases
              </p>
              <p className="content">
                Save on Canadian states taxes(All BuyForMe purchases are sales-tax free!)
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="col-md-2">
              <img src="images/icon6-h.png" />
            </div>
            <div className="col-md-10">
              <p className="title">
                Consolidation And Repacking
              </p>
              <p className="content">
                We can consolidate and repack to minimize volumetric weight and save you more money!
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="col-md-2">
              <img src="images/icon3-h.png" />
            </div>
            <div className="col-md-10">
              <p className="title">
                Free Storage
              </p>
              <p className="content">
                Our premium membership includes 30 days of free storage at our warehouse, so you can 
                wait until multiple packages arrive, then ship them together.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="col-md-2">
              <img src="images/icon7-h.png" />
            </div>
            <div className="col-md-10">
              <p className="title">
                Customs Declaration
              </p>
              <p className="content">
                Your package will be accompanied with all customs documents to facilitate efficient
                customs clearances.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="col-md-2">
              <img src="images/icon4-h.png" />
            </div>
            <div className="col-md-10">
              <p className="title">
                Customer Service
              </p>
              <p className="content">
                Assistance with any shipping, ordering, returns or exchange issues, we're here for you.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="col-md-2">
              <img src="images/icon8-h.png" />
            </div>
            <div className="col-md-10">
              <p className="title">
                Package Insurance
              </p>
              <p className="content">
                Your package will be insured against damage and loss.
              </p>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .title {
          margin-bottom: 8px;
          font-size: 18px;
          color: #1e487c;
        }
        img {
          margin-top: 10px;
        }
        .function-title {
          text-align: center;
          color: #1e487c;
        }
      `}</style>
    </section>
  );
};

export default Function;
