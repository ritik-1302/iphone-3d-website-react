import React from "react";

function SoundSection() {
  const handleLearnMore = () => {
    const element = document.querySelector(".display-section");
    window.scroll({
      top: element?.getBoundingClientRect().bottom,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="sound-section wrapper">
      <div className="body">
        <div className="sound-section-content content">
          <h2 className="title">New Sound System</h2>
          <p className="text">Feel the bass.</p>
          <span className="description">
            From ₹10000/mo. for 24 mo. or ₹100000 before trade.
          </span>
          <ul className="links">
            <li>
              <button className="button">Buy</button>
            </li>
            <li>
              <a className="link" onClick={handleLearnMore}>
                Learn more
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SoundSection;
