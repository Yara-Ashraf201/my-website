import HF_TOKEN from './config.js';

async function askBot(message) {
  const response = await fetch(
    "https://smith-b-company-chatbot.hf.space",
    {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${HF_TOKEN}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ inputs: message })
    }
  );
  
  const result = await response.json();
  console.log(result);
  return result[0]?.generated_text || "No response";
}

// مثال على الاستخدام
document.getElementById("sendBtn").addEventListener("click", async () => {
  const userMessage = document.getElementById("userInput").value;
  const botReply = await askBot(userMessage);
  document.getElementById("chat").innerHTML += `<p>Bot: ${botReply}</p>`;
});
