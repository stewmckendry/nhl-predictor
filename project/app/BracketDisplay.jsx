export default function BracketDisplay({ bracket }) {
  return (
    <div className="mt-10 p-4 bg-gray-100 rounded">
      <h2 className="text-2xl font-bold mb-4">🏆 Simulation Results</h2>
      {Object.entries(bracket).map(([round, series]) => (
        <div key={round} className="mb-4">
          <h3 className="text-lg font-semibold mb-2 capitalize">{round.replace('_', ' ')}</h3>
          <ul className="list-disc list-inside">
            {Object.entries(series).map(([sid, details]) => (
              <li key={sid}><strong>{details.winner}</strong> wins over {details.teams.filter(t => t !== details.winner).join(' ')}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}