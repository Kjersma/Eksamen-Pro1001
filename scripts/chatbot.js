// Enkel integrasjon mot OpenAI sin API. Nøkkelen bør normalt ikke hardkodes,
// men lastes inn fra miljøvariabler eller et backend-endepunkt. Her er den
// lagt inn som en konstant for enkelhets skyld.
const OPENAI_API_KEY = '<YOUR-OPENAI-KEY>';

const messagesDiv = document.getElementById('messages');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');

// Legger til en melding i chat-vinduet. Denne funksjonen oppretter et nytt
// DOM-element og scroller automatisk ned slik at den siste meldingen blir synlig.
async function addMessage(role, text) {
  const div = document.createElement('div');
  div.className = `message ${role}`;
  div.textContent = text;
  messagesDiv.appendChild(div);
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

// Sender brukerens melding til OpenAI og viser svaret.
async function sendMessage() {
  const userText = userInput.value.trim();
  if (!userText) return;
  await addMessage('user', userText);
  userInput.value = '';

    try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${OPENAI_API_KEY}`,
      },

      
       body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content:
              'Du er en vennlig kundeservice medarbeider for Fram, som selger grønnsaker fra lokale bønder. Svar kort og kun på relevante spørsmål. Bruk gjerne emojis for å gjøre svarene mer personlige. Hvis du ikke vet svaret, si at du ikke vet det. Forhold deg kun til informasjonen som er gitt på nettsiden.',
          },
          { role: 'user', content: userText },
        ],
      }),
    });

       // Optional chaining (?.) gjør at vi trygt kan hente ut svaret selv om
    // strukturen ikke er som forventet.
    const data = await response.json();
    const reply = data.choices?.[0]?.message?.content || 'Dette gikk visst ikke, prøv igjen senere.';
    await addMessage('assistant', reply);
  } catch (err) {
    await addMessage('assistant', 'Feil oppstod.');
    console.error(err);
  }
}

// Send meldingen enten når brukeren klikker på send-knappen eller
// trykker Enter i tekstfeltet. Enter-håndteringen hindrer at skjemaet
// eventuelt forsøker å sende en vanlig HTTP-request.
sendBtn.addEventListener('click', sendMessage);
userInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    sendMessage();
  }
});