from fastapi.testclient import TestClient
from backend.fastapi_server import app

client = TestClient(app)

def test_simulate_endpoint():
    payload = {
        "series_results": {
            "Eastern_1": {"Washington Capitals": 4, "Montreal Canadians": 2},
            "Eastern_4": {"Carolina Hurricanes": 4, "New Jersey Devils": 3}
        }
    }

    response = client.post("/simulate", json=payload)
    assert response.status_code == 200
    data = response.json()
    assert "simulated_bracket" in data
    assert "round_1" in data["simulated_bracket"]
    assert "Eastern_1" in data["simulated_bracket"]["round_1"]