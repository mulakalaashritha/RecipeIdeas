import React, { useState } from "react";

function App() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");

  return (
    <div
      className="min-h-screen flex flex-col items-center p-4 sm:p-6 bg-cover bg-center relative"
      style={{
        backgroundImage: `url("/bg-food-2.png")`, // ✅ matches file in public
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Optional overlay to make text visible */}
      <div className="absolute inset-0 bg-black/40 z-0"></div>

      <div className="relative z-10 w-full max-w-5xl">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 text-white text-center">
          🍴 Recipe Finder
        </h1>

        <div className="flex flex-col sm:flex-row gap-2 mb-4">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Enter ingredient (e.g. chicken)"
            className="border p-2 rounded flex-1 bg-white/80"
          />
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Search
          </button>
        </div>

        <input
          type="text"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          placeholder="Filter ingredients..."
          className="border p-2 rounded w-full mb-4 bg-white/80"
        />

        <div className="flex flex-wrap gap-2">
          {[
            "Chicken",
            "Salmon",
            "Beef",
            "Pork",
            "Avocado",
            "Apple Cider Vinegar",
            "Asparagus",
            "Aubergine",
          ].map((ingredient) => (
            <button
              key={ingredient}
              className="px-3 py-1 border rounded bg-white/80 hover:bg-gray-200"
            >
              {ingredient}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
