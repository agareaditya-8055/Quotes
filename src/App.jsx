import React from "react";
import useQuotes from "./hooks/useQuotes";

const App = () => {
  const { quote, savedQuotes, fetchQuote, saveQuote } = useQuotes();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="max-w-md w-full bg-white shadow-md rounded-lg p-6 mb-6">
        <h1 className="text-xl font-bold mb-4">Random Ron Swanson Quote</h1>
        <p className="text-gray-800 mb-4">{quote}</p>
        <div className="flex justify-between">
          <button
            onClick={fetchQuote}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            New Quote
          </button>
          <button
            onClick={saveQuote}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Save Quote
          </button>
        </div>
      </div>

      {savedQuotes.length > 0 && (
        <div className="max-w-md w-full bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4">Saved Quotes</h2>
          <ul className="list-disc pl-5 space-y-2">
            {savedQuotes.map((savedQuote, index) => (
              <li key={index} className="text-gray-800">
                {savedQuote}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default App;
