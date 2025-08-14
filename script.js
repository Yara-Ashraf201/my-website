document.getElementById('sendBtn').addEventListener('click', async () => {
  const input = document.getElementById('userInput');
  const userMessage = input.value.trim();
  if (!userMessage) return;

  appendMessage(`You: ${userMessage}`);
  input.value = "";

  try {
    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: userMessage })
    });

    const data = await res.json();
    appendMessage(`Bot: ${data.reply}`);
  } catch (err) {
    appendMessage(`Error: ${err.message}`);
  }
});

function appendMessage(text) {
  const messagesDiv = document.getElementById('messages');
  const p = document.createElement('p');
  p.textContent = text;
  messagesDiv.appendChild(p);
}
