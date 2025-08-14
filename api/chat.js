export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { message } = req.body;

  try {
    const apiRes = await fetch("https://smith-b-company-chatbot.hf.space", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: "Koderxpert Technologies LLP – Professional Assistant",
        messages: [{ role: "user", content: message }]
      })
    });

    const data = await apiRes.json();
    const reply = data.choices?.[0]?.message?.content || "No response";

    res.status(200).json({ reply });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
