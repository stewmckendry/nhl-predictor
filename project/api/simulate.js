import { simulate_playoffs } from "../simulator/simulation_engine";
import bracket from "../bracket/playoff_bracket.yaml";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const series_results = req.body.series_results;
    if (!series_results) {
      return res.status(400).json({ error: "Missing series results input" });
    }

    const bracket_definition = bracket;
    const simulation_result = simulate_playoffs(series_results, bracket_definition);

    return res.status(200).json({ simulated_bracket: simulation_result });
  } catch (err) {
    console.error("Simulation error:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
}