import React from "react";
import { useContext } from "react";

import Oicon from "../XO/Oiconss";
import Xicon from "../XO/Xicons";

import { GameContext } from "../../context/GameContext";

import "./score.scss";

const Win = () => 
{
    const {winner, handleNextRound, handleReset} = useContext(GameContext);

    return (
        <div className="score">
        {winner && winner !== "no" ? (
          <>
            <p>YOU WIN !</p>
            <h3
              className={`score__title ${
                winner === "o" ? "text-yellow" : "text-blue"
              } `}
            >
              {winner === "x" && <Xicon />}
              {winner === "o" && <Oicon />}
              Takes the round
            </h3>
          </>
        ) : (
          <h3 className="score__title text-yellow">NO WINNER !</h3>
        )}
        <div className="score__btns">
          <button className="btn btn-sm" onClick={handleReset}>
            Quit
          </button>
          <button
            className={`btn   btn-sm ${
              winner === "x" ? "btn-yellow" : "btn-blue"
            }`}
            onClick={handleNextRound}
          >
            Next Round
          </button>
        </div>
      </div>
    )
}

export default Win;