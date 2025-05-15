// import { useState, useEffect, useRef } from "react";
// import "./App.css";

// function App() {

//   interface filteredProducts {
//     id: string;
//     name: string;
//     category: string;
//   }


//   const allProducts = [
//     { id: "1", name: "iPhone 14", category: "Electronics" },
//     { id: "2", name: "Samsung Galaxy", category: "Electronics" },
//     { id: "3", name: "Nike Running Shoes", category: "Footwear" },
//     { id: "4", name: "Adidas Sneakers", category: "Footwear" },
//     { id: "5", name: "Sony Headphones", category: "Electronics" },
//   ];

//   const [inputval, setInputval] = useState("");
//   const [suggestions, setsuggestions] = useState<filteredProducts[]>([]);
//   const [highlightedIndex, setHighlightedIndex] = useState(-1);

//   const debouseRef = useRef<number | null>(null);

//   const handleChnage = (e: any) => {
//     setHighlightedIndex(-1);
//     setInputval(e.target.value);

//     if (debouseRef.current) {
//       clearTimeout(debouseRef.current);
//     }

//     debouseRef.current = setTimeout(() => {
//       const filteredProducts = allProducts.filter((Products) => {
//         return Products.name.toLowerCase().includes(e.target.value.toLowerCase());
//       });
//       setsuggestions(filteredProducts);
//     }, 600);
//   }

//   const handelClick = (name: string) => {
//     setInputval(name);
//     setsuggestions([]);
//   }

//   const handleKeyDown = (e: any) => {
//     if (e.key == "ArrowDown") {
//       setHighlightedIndex((prev) => Math.min(prev + 1, suggestions.length - 1))
//     } else if (e.key == "ArrowUp") {
//       setHighlightedIndex((prev) => Math.max(prev - 1, 0))
//     } else if (e.key === "Enter") {
//       if (highlightedIndex >= 0 && suggestions.length > 0) {
//         handelClick(suggestions[highlightedIndex].name);
//       } else if (inputval.trim()) {
//         console.log("Custom search:", inputval);
//       }
//       setsuggestions([]);
//     } else if (e.key == "Escape") {
//       setsuggestions([]);
//     }
//   }

//   return (
//     <>
//       <div className="App">
//         <input
//           className="typeahead"
//           type="text"
//           onChange={e => handleChnage(e)}
//           onKeyDown={e => handleKeyDown(e)}
//           value={inputval}
//           name="typehead"
//           placeholder="Search..." />

//         {
//           inputval && (
//             <div className="typeahead-dropdown">
//               <p>{inputval}</p>
//               {inputval && !suggestions.length && (
//                 <div className="typeahead-no-results">No results found</div>
//               )}

//               {/*using select -- not good practise*/}
//               {/* <select name="typeahead-select" id="typehead-id">
//             {
//               inputval && suggestions.map((suggestions) => {
//                 return (
//                   <option value={suggestions.name} key={suggestions.id}>
//                     {suggestions.name}
//                   </option>
//                 )
//               })
//             }
//           </select> */}


//               {/* instead use a list*/}
//               <ul className="suggestions-list">
//                 {inputval &&
//                   suggestions.map((suggestion, idx) => (
//                     <li
//                       key={idx}
//                       onClick={() => handelClick(suggestion.name)}
//                       className={highlightedIndex === idx ? "highlighted" : ""}
//                     >
//                       {suggestion.name}
//                     </li>
//                   ))}
//               </ul>

//             </div>
//           )
//         }
//       </div>

//     </>
//   );
// }

// export default App;




import { useState, useEffect } from "react";
import { PersonalInfo } from "./components/PersonalInfo";
import { FinancialInfo } from "./components/FinancialInfo";
import { AccountSecurity } from "./components/AccountSecurity";
import { Finalsubmit } from "./components/Finalsubmit";

interface AppProps {
  data?: any;
  onChange?: (key: string, value: any) => void;
  onError?: (key: string, value: string) => void;
  error?: string;
  onNext?: () => void;
  onPrevious?: () => void;
}

interface formtype {
  name: string;
  email: string;
  phone: number;
  password: string;
  securityAnswer: string;
  income: number;
  employment: string;
}

const App: React.FC<AppProps> = () => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState<formtype>(() => {
    const saved = localStorage.getItem('formdata');
    return saved ? JSON.parse(saved) : {
      name: '',
      email: '',
      phone: 0,
      password: '',
      securityAnswer: '',
      income: 0,
      employment: ''
    };
  });

  const [error, setError] = useState('');

  useEffect(() => {
    localStorage.setItem('formdata', JSON.stringify(formData));
  }, [formData]);

  const handleNext = () => {
    if (step < 3) {
      setStep(prev => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (step > 0) {
      setStep(prev => prev - 1);
    }
  };

  const handleChange = (key: string, value: any) => {
    setFormData((prev: any) => ({ ...prev, [key]: value }));
  };

  const handleError = (key: string, value: string) => {
    console.log(value);
    setError(value);
  };

  const steps = [
    {
      id: 1,
      label: "Personal Info",
      component: <PersonalInfo
        data={formData}
        onChange={handleChange}
        onError={handleError}
        error={error}
        onNext={handleNext}
        onPrevious={handlePrevious}
      />
    },
    {
      id: 2,
      label: "Account Security",
      component: <AccountSecurity
        data={formData}
        onChange={handleChange}
        onError={handleError}
        error={error}
        onNext={handleNext}
        onPrevious={handlePrevious}
      />
    },
    {
      id: 3,
      label: "Financial Info",
      component: <FinancialInfo
        data={formData}
        onChange={handleChange}
        onError={handleError}
        error={error}
        onNext={handleNext}
        onPrevious={handlePrevious}
      />
    },
    {
      id: 4,
      label: "Review & Submit",
      component: <Finalsubmit
        data={formData}
        onChange={handleChange}
        onError={handleError}
        error={error}
        onNext={handleNext}
        onPrevious={handlePrevious}
      />
    }
  ];

  return (
    <div className="App">
      <h2>Step {step + 1} of {steps.length}</h2>
      {steps[step].component}
    </div>
  );
}

export default App;