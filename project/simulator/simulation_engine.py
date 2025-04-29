import random

def predict_series_winner(team_a, team_b, wins_a=None, wins_b=None):
    if wins_a is not None and wins_b is not None:
        if wins_a > wins_b:
            return team_a
        elif wins_b > wins_a:
            return team_b
    return random.choice([team_a, team_b])

def simulate_playoffs(series_results, bracket_definition):
    results = {}

    for round_name, series_list in bracket_definition.items():
        results[round_name] = {}
        for series_id, matchup in series_list.items():
            if "teams" in matchup:
                team_a, team_b = matchup["teams"]
                wins = series_results.get(series_id, {})
                winner = predict_series_winner(team_a, team_b, wins.get(team_a), wins.get(team_b))
            elif "source" in matchup:
                source_a, source_b = matchup["source"]
                prior_round_idx = list(bracket_definition.keys()).index(round_name) - 1
                prior_round_name = list(bracket_definition.keys())[prior_round_idx]
                team_a = results[prior_round_name][source_a]["winner"]
                team_b = results[prior_round_name][source_b]["winner"]
                winner = predict_series_winner(team_a, team_b)
            else:
                raise ValueError(f"Invalid matchup format for {series_id}")
            results[round_name][series_id] = {"winner": winner, "teams": (team_a, team_b)}

    return results