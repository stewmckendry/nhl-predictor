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
    current_round = "round_1"
    results[current_round] = {}

    for series_id, matchup in bracket_definition.get(current_round, {}).items():
        a, b = matchup["teams"]
        wins = series_results.get(series_id, {})
        winner = predict_series_winner(a, b, wins.get(a), wins.get(b))
        results[current_round][series_id] = {"winner": winner, "teams": (a, b)}

    return results