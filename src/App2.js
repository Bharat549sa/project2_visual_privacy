import Pacman from "react-pacman";
import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [gameKey, setGameKey] = useState(0); // Unique key to remount the Pacman component
  const [isGameOver, setIsGameOver] = useState(false); // State to track if the game is over

  // Function to reset the game
  const resetGame = () => {
    setIsGameOver(false);
    setGameKey((prevKey) => prevKey + 1); // Change key to remount component
  };

  // This useEffect would simulate game over; you can replace this with your actual logic
  useEffect(() => {
    if (isGameOver) {
      const timer = setTimeout(() => {
        resetGame();
      }, 1000); // Delay before restarting the game
      return () => clearTimeout(timer);
    }
  }, [isGameOver]);

  // Function to simulate game ending
  const handleSimulateGameEnd = () => {
    setIsGameOver(true); // Set game as over
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <h1>Pac-Man</h1>
      <div className="pac-man-container">
        <Pacman key={gameKey} />
      </div>
      {isGameOver && <div className="game-over">Game Over! Restarting...</div>}
      {/* Button to simulate game end for demonstration */}
      <button onClick={handleSimulateGameEnd}>End Game (Simulate)</button>
    </div>
  );
}
