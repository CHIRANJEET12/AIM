import { useState, useEffect, useRef } from "react";

interface format {
  actualWord: string;
}

export default function App() {
  const words = [
    "apple",
    "grape",
    "flame",
    "plant",
    "crane",
    "spark",
    "glide",
    "stone",
    "brick",
    "pride",
    "shine",
    "blaze",
    "frost",
    "dream",
    "quiet",
    "round",
    "trace",
    "lunch",
    "swirl",
    "eagle"
  ];

  const [word, setWord] = useState("");

  useEffect(() => {
    async function fetchWords() {
      try {
        const randomWord = words[Math.floor(Math.random() * words.length)].toUpperCase();
        setWord(randomWord);
      } catch (e) {
        console.log("Fetch error", e);
      }
    }
    fetchWords();
  }, [])

  return (
    <div className="app-main min-h-screen bg-white flex flex-col items-center justify-start">
      <h1 className="text-4xl font-bold text-center text-black tracking-widest my-6">WORDLE</h1>
      {/* <h4>Assigned word: {word}</h4> */}
      <Grid actualWord={word} />
    </div>
  )
}

function Grid({ actualWord }: format) {
  const rows = 6;
  const cols = 5;

  const [grid, setGrid] = useState(Array(rows).fill("").map(() => Array(cols).fill("")));
  const [currRow, setCurrRow] = useState(0);
  const [currCol, setCurrCol] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  
  const colorRef = useRef(Array(rows).fill("").map(() => Array(cols).fill("")));

  useEffect(() => {
    const handleSubmit = (e: KeyboardEvent) => {
      if (gameOver || currRow >= rows) return;

      const newGrid = [...grid];
      newGrid[currRow] = [...grid[currRow]];
      
      if (e.key === 'Backspace') {
        if (currCol > 0) {
          newGrid[currRow][currCol - 1] = "";
          setCurrCol(currCol - 1);
        }
      } else if (/^[a-zA-Z]$/.test(e.key)) {
        if (currCol < cols) {
          newGrid[currRow][currCol] = e.key.toUpperCase();
          setCurrCol(currCol + 1);
        }
      } else if (e.key === 'Enter' && currCol === cols) {
        const guess = newGrid[currRow].join("");
        const newColor = Array(cols).fill("");
        const wordArr = actualWord.split("");
        const guessArr = guess.split("");
        
        // First pass: check correct letters (green)
        guessArr.forEach((ch, i) => {
          if (ch === wordArr[i]) {
            newColor[i] = "green";
            wordArr[i] = "";
            guessArr[i] = "";
          }
        });

        // Second pass: check present but wrong position (yellow)
        guessArr.forEach((ch, i) => {
          if (ch && wordArr.includes(ch)) {
            newColor[i] = "yellow";
            wordArr[wordArr.indexOf(ch)] = "";
          } else if (ch) {
            newColor[i] = "gray";
          }
        });

        colorRef.current[currRow] = newColor;

        if (guess === actualWord) {
          setTimeout(() => alert("Congratulations! You guessed the word!"), 100);
          setGameOver(true);
        } else if (currRow === rows - 1) {
          setTimeout(() => alert(`Game Over! The word was ${actualWord}`), 100);
          setGameOver(true);
        } else {
          setCurrRow(currRow + 1);
          setCurrCol(0);
        }
      }

      setGrid(newGrid);
    };

    window.addEventListener("keydown", handleSubmit);
    return () => window.removeEventListener('keydown', handleSubmit);
  }, [grid, currCol, currRow, actualWord, gameOver]);

  const colorClass = (color: string) => {
    switch (color) {
      case "green":
        return "bg-green-500 text-white";
      case "yellow":
        return "bg-yellow-400 text-white";
      case "gray":
        return "bg-gray-400 text-white";
      default:
        return "bg-white text-black";
    }
  }

  return (
    <div className="grid p-4 rounded-md space-y-2 flex items-center justify-center">
      {grid.map((row, rind) => (
        <div className="grid-row flex space-x-2" key={rind}>
          {row.map((char, cind) => (
            <div
              key={cind}
              className={`w-14 h-14 border-2 border-black flex items-center justify-center text-2xl font-bold rounded-sm uppercase ${colorClass(
                colorRef.current[rind][cind]
              )}`}
            >
              {char}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}