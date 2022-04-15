import React from "react";
import anime from "animejs"

class Background extends React.Component {
    state = {
      num: 100,
      vw: Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
      vh: Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
    };
    starryNight = () => {
      anime({
        targets: ["#sky .star"],
        opacity: [
          {
            duration: 700,
            value: "0"
          },
          {
            duration: 700,
            value: "1"
          }
        ],
        easing: "linear",
        loop: true,
        delay: (el, i) => 50 * i
      });
    };
    shootingStars = () => {
      anime({
        targets: ["#star .wish"],
        easing: "linear",
        loop: true,
        delay: (el, i) => 2000 * i,
        opacity: [
          {
            duration: 700,
            value: "1"
          }
        ],
        width: [
          {
            value: "150px"
          },
          {
            value: "0px"
          }
        ],
        translateX: 800
      });
    };
    randomRadius = () => {
      return Math.random() * 0.7 + 0.6;
    };
    getRandomX = () => {
      return Math.floor(Math.random() * Math.floor(this.state.vw)).toString();
    };
    getRandomY = () => {
      return Math.floor(Math.random() * Math.floor(this.state.vh)).toString();
    };
    componentDidMount() {
      this.starryNight();
      //this.shootingStars();
    }
    render() {
      const { num } = this.state;
      return (
        <div className="sky">
            <div>
              <svg id="sky">
                {[...Array(num)].map((x, y) => (
                  <circle
                    cx={this.getRandomX()}
                    cy={this.getRandomY()}
                    r={this.randomRadius()}
                    stroke="none"
                    strokeWidth="0"
                    fill="white"
                    key={y}
                    className="star"
                    />
                    ))}
              </svg>
              <div id="star">
                {[...Array(100)].map((x, y) => (
                    <div
                    key={y}
                    className="wish"
                    style={{
                        left: `${this.getRandomY()}px`,
                        top: `${this.getRandomX()}px`
                    }}
                    />
                    ))}
              </div>
            </div>
        </div>
      );
    }
  }

  export default Background;