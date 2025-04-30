import { useState } from 'react';
import BracketDisplay from './BracketDisplay';

export default function SimulatePage() {
  const [seriesResults, setSeriesResults] = useState({});
  const [simulatedBracket, setSimulatedBracket] = useState(null);

  const handleInputChange = (seriesId, team, value) => {
    setSeriesResults(prev => ({
      ...prev,
      [seriesId]: {
        ...prev[seriesId],
        [team]: parseInt(value)
      }
    }));
  };

  const handleSubmit = async () => {
    const response = await fetch('/api/simulate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ series_results: seriesResults })
    });
    const data = await response.json();
    setSimulatedBracket(data.simulated_bracket);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">🏒 NHL Playoff Simulator</h1>
      <p className="mb-6 text-lg">Enter current wins for each team in Round 1 to simulate the entire playoffs!</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[
          { id: 'Eastern_1', a: 'Washington Capitals', b: 'Montreal Canadians' },
          { id: 'Eastern_2', a: 'Toronto Maple Leafs', b: 'Ottawa Senators' },
          { id: 'Eastern_3', a: 'Tampa Bay Lightning', b: 'Florida Panthers' },
        ].map(({ id, a, b }) => (
          <div key={id} className="bg-white shadow p-4 rounded">
            <h2 className="text-xl font-semibold mb-2">{a} vs {b}</h2>
            <label>{a} Wins:
              <input type="number" className="ml-2 border px-2 py-1 rounded" onChange={(e) => handleInputChange(id, a, e.target.value)} /></label><br/>
            <label>{b} Wins:
              <input type="number" className="ml-2 border px-2 py-1 rounded" onChange={(e) => handleInputChange(id, b, e.target.value)} /></label>
          </div>
        ))}
      </div>

      <button className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700" onClick={handleSubmit}>
        Simulate
      </button>

      {simulatedBracket && <BracketDisplay bracket={simulatedBracket} />}
    </div>
  );
}