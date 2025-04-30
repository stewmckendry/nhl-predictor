import { useState } from 'react';
import BracketDisplay from './BracketDisplay';

export default function SimulatePage() {
  const [seriesResults, setSeriesResults] = useState({});
  const [simulatedBracket, setSimulatedBracket] = useState(null);
  const [loading, setLoading] = useState(false);
  const [champion, setChampion] = useState(null);

  const seriesList = [
    { id: 'Eastern_1', a: 'Washington Capitals', b: 'Montreal Canadians' },
    { id: 'Eastern_2', a: 'Toronto Maple Leafs', b: 'Ottawa Senators' },
    { id: 'Eastern_3', a: 'Tampa Bay Lightning', b: 'Florida Panthers' },
    { id: 'Eastern_4', a: 'Carolina Hurricanes', b: 'New Jersey Devils' },
    { id: 'Western_1', a: 'Winnipeg Jets', b: 'St Louis Blues' },
    { id: 'Western_2', a: 'Vegas Golden Knights', b: 'Minnesota Wild' },
    { id: 'Western_3', a: 'Dallas Stars', b: 'Colorado Avalanche' },
    { id: 'Western_4', a: 'Los Angeles Kings', b: 'Edmonton Oilers' },
  ];

  const handleInputChange = (seriesId, team, value) => {
    const val = Math.max(0, Math.min(4, parseInt(value)));
    setSeriesResults(prev => ({
      ...prev,
      [seriesId]: {
        ...prev[seriesId],
        [team]: val
      }
    }));
  };

  const handleSubmit = async () => {
    setLoading(true);
    const response = await fetch('/api/simulate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ series_results: seriesResults })
    });
    const data = await response.json();
    setSimulatedBracket(data.simulated_bracket);
    setLoading(false);
  };

  const handleChampion = (name) => setChampion(name);

  return (
    <div className="max-w-4xl mx-auto p-6">
      {!simulatedBracket && (
        <>
          <h1 className="text-3xl font-bold mb-4">🏒 NHL Playoff Simulator</h1>
          <p className="mb-6 text-lg">Enter current wins for each team in Round 1 to simulate the entire playoffs!</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {seriesList.map(({ id, a, b }) => (
              <div key={id} className="bg-white shadow p-4 rounded">
                <h2 className="text-xl font-semibold mb-2">{a} vs {b}</h2>
                <label>{a} Wins:
                  <input
                    type="number"
                    min="0"
                    max="4"
                    className="ml-2 border px-2 py-1 rounded"
                    onChange={(e) => handleInputChange(id, a, e.target.value)}
                  /></label><br/>
                <label>{b} Wins:
                  <input
                    type="number"
                    min="0"
                    max="4"
                    className="ml-2 border px-2 py-1 rounded"
                    onChange={(e) => handleInputChange(id, b, e.target.value)}
                  /></label>
              </div>
            ))}
          </div>

          <button className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700" onClick={handleSubmit}>
            Simulate
          </button>
        </>
      )}

      {loading && <p className="mt-6 text-lg font-semibold animate-pulse">Simulating playoffs...</p>}

      {simulatedBracket && <BracketDisplay bracket={simulatedBracket} onChampion={handleChampion} />}

      {champion && <div className="mt-8 text-center text-2xl font-bold text-green-600 animate-pulse">🏆 {champion} wins the Stanley Cup! 🏆</div>}
    </div>
  );
}