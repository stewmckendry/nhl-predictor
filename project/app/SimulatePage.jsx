import { useState } from 'react';
import BracketDisplay from './BracketDisplay';

export default function SimulatePage() {
  const [seriesResults, setSeriesResults] = useState({});
  const [simulatedBracket, setSimulatedBracket] = useState(null);
  const [loading, setLoading] = useState(false);
  const [champion, setChampion] = useState(null);

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
    <div className="max-w-4xl mx-auto p-6 text-slate-800">
      <h1 className="text-3xl font-bold mb-2">🏒 NHL Playoff Simulator</h1>
      <p className="mb-4 text-base text-slate-600">Simulate the playoffs based on today's bracket. <strong>Score inputs are ignored in this MVP release.</strong></p>

      <div className="border border-yellow-300 bg-yellow-100 text-yellow-800 rounded p-4 mb-6">
        <strong>Note:</strong> This version does not use win counts. Simulations are based on bracket structure only.
      </div>

      <button className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700" onClick={handleSubmit}>
        Simulate Playoffs
      </button>

      {loading && <p className="mt-6 text-lg font-semibold animate-pulse">Simulating playoffs...</p>}

      {simulatedBracket && <BracketDisplay bracket={simulatedBracket} onChampion={handleChampion} />}

      {champion && <div className="mt-8 text-center text-2xl font-bold text-green-600 animate-pulse">🏆 {champion} wins the Stanley Cup! 🏆</div>}
    </div>
  );
}