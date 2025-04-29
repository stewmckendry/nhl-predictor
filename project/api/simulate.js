export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const backendUrl = process.env.FASTAPI_BASE_URL || "http://localhost:8000";

    const response = await fetch(`${backendUrl}/simulate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(req.body),
    });

    const data = await response.json();

    return res.status(200).json(data);
  } catch (error) {
    console.error('Error communicating with FastAPI server:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}