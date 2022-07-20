import React from "react";
import { useContext } from "react";
import { GameContext } from "../../context/GameContext";

import Oicon from "../XO/Oiconss";

import Xicon from "../XO/Xicons";

const BoardCard = ({ active, user = "nouser", index }) => {
    const { handleSquareClick } = useContext(GameContext);
    return (
      <div
        className={`card ${active && user === "x" && "shadow-blue"} ${
          active && user === "o" && "shadow-yellow"
        } ${active ? "active" : "shadow-gray"}`}
        onClick={() => handleSquareClick(index)}
      >
        {user === "x" && <Xicon color={active && "dark"} size="lg" />}
        {user === "o" && <Oicon color={active && "dark"} size="lg" />}
      </div>
    );
  };
  
  export default BoardCard;