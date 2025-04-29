import { useState } from "react";

export default function SimulatePage() {
  const [formData, setFormData] = useState({});
  const [result, setResult] = useState(null);

  const handleChange = (series, team, value) => {
    setFormData(prev => ({
      ...prev,
      [series]: {
        ...prev[series],
        [team]: Number(value)
      }
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/simulate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ series_results: formData })
    });
    const data = await response.json();
    setResult(data);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">NHL Playoff Simulator</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {[
          "Eastern_1", "Eastern_2", "Eastern_3", "Eastern_4",
          "Western_1", "Western_2", "Western_3", "Western_4"
        ].map(series => (
          <div key={series} className="space-x-2">
            <input type="text" placeholder={`${series} Team A Wins`} onChange={e => handleChange(series, "team_a", e.target.value)} className="border p-1" />
            <input type="text" placeholder={`${series} Team B Wins`} onChange={e => handleChange(series, "team_b", e.target.value)} className="border p-1" />
          </div>
        ))}
        <button type="submit" className="bg-blue-500 text-white px-4 py-2">Simulate</button>
      </form>

      {result && (
        <pre className="mt-6 p-4 bg-gray-100 rounded overflow-x-auto">
          {JSON.stringify(result.simulated_bracket, null, 2)}
        </pre>
      )}
    </div>
  );
}