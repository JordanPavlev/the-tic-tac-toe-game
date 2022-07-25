import { createContext, useEffect, useState, useContext } from "react";
import calcBestMove, { calcWinner } from "../helper/calcSquares";
import { ModalContext } from "./ModalContext";


const GameContext = createContext();

const GameState = (props) => {
  const [screen, setScreen] = useState("start"); // start || game
  const [playMode, setPlayMode] = useState("user"); // user || cpu
  const [activeUser, setActiveUser] = useState("x"); // x || o
  const [squares, setSquares] = useState(new Array(9).fill(""));
  const [nextx, setnextx] = useState(false);
  const [winner, setWinner] = useState(null);
  const [winnerLine, setWinnerLine] = useState(null);
  const [ties, setTies] = useState({ x: 0, o: 0 });

  const { showModal, hideModal, setModalMode } = useContext(ModalContext);

  useEffect(() => {
    //check if cpu turn
    let currentUser = nextx ? "o" : "x";
    if (playMode === "cpu" && currentUser !== activeUser && !winner) {
      cpuNextMove(squares);
    }
    checkNoWinner();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nextx, winner, screen]);

  const handleStart = (player) => {
    setPlayMode(player);
    setScreen("game");
  };

  const handleSquareClick = (ix) => {
    if (squares[ix] || winner) {
      return;
    }
    let currentUser = nextx ? "o" : "x";
    if (playMode === "cpu" && currentUser !== activeUser) {
      return;
    }
    let ns = [...squares];
    ns[ix] = !nextx ? "x" : "o";
    setSquares(ns);
    setnextx(!nextx);
    checkWinner(ns);
  };

  const checkWinner = (ns) => {
    const isWinner = calcWinner(ns);
    if (isWinner) {
      setWinner(isWinner.winner);
      setWinnerLine(isWinner.line);
      const nties = { ...ties };
      nties[isWinner.winner] += 1;
      setTies(nties);
      showModal();
      setModalMode("winner");
    }
  };

  const cpuNextMove = (sqrs) => {
    let bestmove = calcBestMove(sqrs, activeUser === "x" ? "o" : "x");
    let ns = [...squares];
    ns[bestmove] = !nextx ? "x" : "o";
    setSquares(ns);
    setnextx(!nextx);
    checkWinner(ns);
  };

  const handleReset = () => {
    setSquares(new Array(9).fill(""));
    setnextx(false);
    setWinner(null);
    setWinnerLine(null);
    setActiveUser("x");
    setTies({ x: 0, o: 0 });
    hideModal();
    setScreen("start");
  };

  const handleNextRound = () => {
    setSquares(new Array(9).fill(""));
    setnextx(winner === "x");
    setWinner(null);
    setWinnerLine(null);
    hideModal();
  };

  const checkNoWinner = () => {
    const moves = squares.filter((sq) => sq === "");
    if (moves.length === 0) {
      setWinner("no");
      showModal();
      setModalMode("winner");
    }
  };

  return (
    <GameContext.Provider
      value={{
        squares,
        winner,
        winnerLine,
        nextx,
        ties,
        screen,
        activeUser,
        playMode,
        handleStart,
        setActiveUser,
        setPlayMode,
        setTies,
        handleSquareClick,
        handleReset,
        handleNextRound,
      }}
    >
      {props.children}
    </GameContext.Provider>
  );
};

export { GameContext, GameState };