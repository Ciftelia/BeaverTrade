import React from "react";
import "./HomePage.css";

export default function HomePage() {
  return (
    <div className="supercontainer">
      <div className="container">
        <img src={`http://localhost:3000/images/BeaverLogo1.png`}></img>
        <div>
          <h1>Welcome to BeaverTrade!</h1>
          <h3>
            Building a Stronger, More Self-Sufficient Canadian Manufacturing
            Industry
          </h3>
          <p>
            Our platform is designed to connect businesses across Canada,
            fostering collaboration to strengthen domestic manufacturing and
            reduce reliance on imports. By bringing together manufacturers,
            suppliers, and industry partners, we create opportunities for
            networking, resource sharing, and supply chain optimization. Our
            goal is to support local production, drive economic growth, and
            enhance the resilience of Canadian industries. Whether you're
            looking to source materials, expand your operations, or find new
            business partners, our platform provides the tools and connections
            needed to succeed in an increasingly competitive market.
          </p>
        </div>
      </div>
    </div>
  );
}
