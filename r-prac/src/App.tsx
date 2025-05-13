import { useState, useEffect, useRef } from "react";
import "./App.css";

function App() {

  interface filteredProducts {
    id: string;
    name: string;
    category: string;
  }


  const allProducts = [
    { id: "1", name: "iPhone 14", category: "Electronics" },
    { id: "2", name: "Samsung Galaxy", category: "Electronics" },
    { id: "3", name: "Nike Running Shoes", category: "Footwear" },
    { id: "4", name: "Adidas Sneakers", category: "Footwear" },
    { id: "5", name: "Sony Headphones", category: "Electronics" },
  ];

  const [inputval, setInputval] = useState("");
  const [suggestions, setsuggestions] = useState<filteredProducts[]>([]);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);

  const debouseRef = useRef<number | null>(null);

  const handleChnage = (e: any) => {
    setHighlightedIndex(-1);
    setInputval(e.target.value);

    if (debouseRef.current) {
      clearTimeout(debouseRef.current);
    }

    debouseRef.current = setTimeout(() => {
      const filteredProducts = allProducts.filter((Products) => {
        return Products.name.toLowerCase().includes(e.target.value.toLowerCase());
      });
      setsuggestions(filteredProducts);
    }, 600);
  }

  const handelClick = (name: string) => {
    setInputval(name);
    setsuggestions([]);
  }

  const handleKeyDown = (e: any) => {
    if (e.key == "ArrowDown") {
      setHighlightedIndex((prev) => Math.min(prev + 1, suggestions.length - 1))
    } else if (e.key == "ArrowUp") {
      setHighlightedIndex((prev) => Math.max(prev - 1, 0))
    } else if (e.key === "Enter") {
      if (highlightedIndex >= 0 && suggestions.length > 0) {
        handelClick(suggestions[highlightedIndex].name);
      } else if (inputval.trim()) {
        console.log("Custom search:", inputval);
      }
      setsuggestions([]);
    } else if (e.key == "Escape") {
      setsuggestions([]);
    }
  }






  return (
    <>
      <div className="App">
        <input
          className="typeahead"
          type="text"
          onChange={e => handleChnage(e)}
          onKeyDown={handleKeyDown}
          value={inputval}
          name="typehead"
          placeholder="Search..." />

        {
          inputval && (
            <div className="typeahead-dropdown">
              <p>{inputval}</p>
              {inputval && !suggestions.length && (
                <div className="typeahead-no-results">No results found</div>
              )}

              {/*using select -- not good practise*/}
              {/* <select name="typeahead-select" id="typehead-id">
            {
              inputval && suggestions.map((suggestions) => {
                return (
                  <option value={suggestions.name} key={suggestions.id}>
                    {suggestions.name}
                  </option>
                )
              })
            }
          </select> */}


              {/* instead use a list*/}
              <ul className="suggestions-list">
                {inputval &&
                  suggestions.map((suggestion, idx) => (
                    <li
                      key={idx}
                      onClick={() => handelClick(suggestion.name)}
                      className={highlightedIndex === idx ? "highlighted" : ""}
                    >
                      {suggestion.name}
                    </li>
                  ))}
              </ul>

            </div>
          )
        }
      </div>

    </>
  );
}

export default App;