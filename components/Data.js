import React from "react";
import Link from 'next/link';

const Data = () => {
  return (
    <section className="split-section bg-gray-lighter">
      <div className="ready-title">
        <h1>Ready to shop from Canada?</h1>
        <p>All you need is a free membership to instantly get your Canadian address</p>
        <Link href="/register">
          <button>SIGN UP NOW</button>
        </Link>
      </div>
      <style jsx>{`
        .ready-title {
          text-align: center;
          padding-bottom: 20px;
        }
        h1 {
          color: #1e487c;
        }
        button {
          background-color: #1e487c;
          padding: 8px 13px;
          border: none;
          border-radius: 4px;
          color: white;
          font-size: 16px;
        }
        .split-section {
          background-color: #f7f2f1;
        }
      `}</style>
    </section>
  );
};

export default Data;
