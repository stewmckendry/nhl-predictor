import pytest
from simulator.simulation_engine import simulate_playoffs

def test_simulation_output_structure():
    series_results = {
        "Eastern_1": {"BOS": 4, "TOR": 1},
        "Western_1": {"COL": 3, "VGK": 4},
    }

    bracket_definition = {
        "round_1": {
            "Eastern_1": {"teams": ["BOS", "TOR"]},
            "Western_1": {"teams": ["COL", "VGK"]},
        }
    }

    result = simulate_playoffs(series_results, bracket_definition)

    assert "round_1" in result
    assert "Eastern_1" in result["round_1"]
    assert result["round_1"]["Eastern_1"]["winner"] in ["BOS", "TOR"]
    assert result["round_1"]["Western_1"]["winner"] in ["COL", "VGK"]