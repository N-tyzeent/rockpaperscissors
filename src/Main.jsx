import React, { useState } from "react";
import rock from "./images/icon-rock.svg";
import paper from "./images/icon-paper.svg";
import scissors from "./images/icon-scissors.svg";
import "./Main.css";

const Main = () => {
  const [data, setData] = useState({
    img1: rock,
    img2: paper,
    resultText: "Play",
    score: 0,
  });

  let rps = ["rock", "paper", "scissors"];

  let handlePlay = () => {
    let randomNumber1 = Math.floor(Math.random() * 3);
    let personal = rps[randomNumber1];
    let randomNumber2 = Math.floor(Math.random() * 3);
    let computer = rps[randomNumber2];
    console.log(personal);
    console.log(computer);
    if (personal == computer) {
      if (personal == "rock") {
        setData({ ...data, img1: rock, img2: rock, resultText: "It Is A Tie" });
      } else if (personal == "paper") {
        setData({
          ...data,
          img1: paper,
          img2: paper,
          resultText: "It Is A Tie",
        });
      } else if (personal == "scissors") {
        setData({
          ...data,
          img1: scissors,
          img2: scissors,
          resultText: "It Is A Tie",
        });
      }
    } else if (personal == "paper" && computer == "rock") {
      setData({
        ...data,
        score: data.score + 1,
        img1: paper,
        img2: rock,
        resultText: "You Win",
      });
    } else if (personal == "scissors" && computer == "paper") {
      setData({
        ...data,
        score: data.score + 1,
        img1: scissors,
        img2: paper,
        resultText: "You Win",
      });
    } else if (personal == "rock" && computer == "scissors") {
      setData({
        ...data,
        score: data.score + 1,
        img1: rock,
        img2: scissors,
        resultText: "You Win",
      });
    } else {
      setData({
        ...data,
        score: data.score + 1,
        img1: rock,
        img2: scissors,
        resultText: "You Win",
      });
    }
    if (computer == personal) {
    } else if (computer == "paper" && personal == "rock") {
      setData({
        ...data,
        img1: paper,
        img2: rock,
        resultText: "Computer Won",
      });
    } else if (computer == "scissors" && personal == "paper") {
      setData({
        ...data,
        img1: scissors,
        img2: paper,
        resultText: "Computer Won",
      });
    } else if (computer == "rock" && personal == "scissors") {
      setData({
        ...data,
        img1: rock,
        img2: scissors,
        resultText: "Computer Won",
      });
    }
  };

  return (
    <div className="main">
      <div className="rps-div">
        <h1>
          Rock <br /> Paper <br /> Scissors
        </h1>
        <div>
          <p>score</p>
          <p>{data.score}</p>
        </div>
      </div>

      <div className="result">
        <div>
          <img className="rock" src={data.img1} alt="" /> <p>You Picked</p>
        </div>
        <div>
          <img className="paper" src={data.img2} alt="" />
          <p>The House Picked</p>
        </div>
      </div>

      <div>
        <h1>{data.resultText}</h1>
        <button
          className="btn1"
          onClick={() => {
            handlePlay();
          }}
        >
          PLAY AGAIN
        </button>
      </div>

      <button className="btn2">
        {" "}
        <a
          className="link"
          href="https://www.google.com/search?q=rock+paper+scissors+rules+wikipedia&oq=rock+paper+scissors+rules+wikipedia&aqs=chrome..69i57j0i22i30j0i390l4.2299"
        >
          Rules
        </a>{" "}
      </button>
    </div>
  );
};

export default Main;
