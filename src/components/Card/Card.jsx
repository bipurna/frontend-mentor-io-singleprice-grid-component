import React from "react";
import "./Card.css";
function Card() {
  return (
    <div className="Card">
      <div className="Card__top">
        <h2>Join our community</h2>
        <p className="Card__top-p-money-back">
          30-day, hassle-free money back guarantee
        </p>
        <p className="Card__top-p-description">
          Gain access to our full library of tutorials along with expert code
          reviews. Perfect for any developers who are serious about honing their
          skills.
        </p>
      </div>
      <div className="Card__bottom">
        <div className="Card__bottom-left">
          <h4>Monthly Subscription</h4>
          <p className="price">
            <span>&dollar;29</span> per month
          </p>
          <p>Full access for less than &dollar;1 a day</p>
          <button>Sign Up</button>
        </div>
        <div className="Card__bottom-right-why">
          <h4>Why Us</h4>
          <div className="Card__Why">
            <p>Tutorials by industry experts</p>
            <p>Peer &amp; expert code review</p>
            <p>Coding exercises</p>
            <p>Access to our GitHub repos</p>
            <p>community forum</p>
            <p>Flashcard decks</p>
            <p>New videos every week</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
