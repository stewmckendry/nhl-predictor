import pytest
from simulator.simulation_engine import simulate_playoffs

def test_simulation_all_rounds():
    series_results = {
        "Eastern_1": {"Washington Capitals": 4, "Montreal Canadians": 2},
        "Eastern_4": {"Carolina Hurricanes": 4, "New Jersey Devils": 3},
        "Western_1": {"Winnipeg Jets": 4, "St Louis Blues": 2},
        "Western_4": {"Los Angeles Kings": 4, "Edmonton Oilers": 1},
    }

    bracket_definition = {
        "round_1": {
            "Eastern_1": {"teams": ["Washington Capitals", "Montreal Canadians"]},
            "Eastern_4": {"teams": ["Carolina Hurricanes", "New Jersey Devils"]},
            "Western_1": {"teams": ["Winnipeg Jets", "St Louis Blues"]},
            "Western_4": {"teams": ["Los Angeles Kings", "Edmonton Oilers"]},
        },
        "round_2": {
            "Eastern_SF_1": {"source": ["Eastern_1", "Eastern_4"]},
            "Western_SF_1": {"source": ["Western_1", "Western_4"]},
        },
        "round_3": {
            "Eastern_Final": {"source": ["Eastern_SF_1", "Eastern_SF_1"]},
            "Western_Final": {"source": ["Western_SF_1", "Western_SF_1"]},
        },
        "round_4": {
            "Stanley_Cup_Final": {"source": ["Eastern_Final", "Western_Final"]},
        },
    }

    results = simulate_playoffs(series_results, bracket_definition)

    assert "round_4" in results
    assert "Stanley_Cup_Final" in results["round_4"]
    assert "winner" in results["round_4"]["Stanley_Cup_Final"]
    assert isinstance(results["round_4"]["Stanley_Cup_Final"]["winner"], str)