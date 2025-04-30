import sys
import os

root_path = os.path.abspath(os.path.join(os.path.dirname(__file__), '..'))
if root_path not in sys.path:
    sys.path.insert(0, root_path)

from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from simulator.simulation_engine import simulate_playoffs
import yaml

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

with open("bracket/playoff_bracket.yaml", "r") as f:
    bracket_definition = yaml.safe_load(f)

@app.post("/simulate")
async def simulate(request: Request):
    body = await request.json()
    series_results = body.get("series_results", {})
    simulated_bracket = simulate_playoffs(series_results, bracket_definition)
    return {"simulated_bracket": simulated_bracket}