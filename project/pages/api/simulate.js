// project/api/simulate.js

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    console.log("❌ Method not allowed:", req.method);
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const backendUrl = process.env.FASTAPI_BASE_URL || "http://localhost:8000";
    console.log("🔁 Forwarding to FastAPI:", `${backendUrl}/simulate`);
    console.log("📦 Payload:", JSON.stringify(req.body));

    const response = await fetch(`${backendUrl}/simulate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(req.body),
    });

    const data = await response.json();
    console.log("✅ FastAPI Response:", data);

    return res.status(200).json(data);
  } catch (error) {
    console.error("🔥 Error communicating with FastAPI server:", error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}
