// Your API key
const apiKey = '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';

// Function to send a message to the chat
function sendMessage(message, sender) {
  // Display user message
  displayMessage(message, sender);

  // Send the message to the API
  fetch('https://api.openai.com/v1/engines/davinci-codex/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      prompt: message,
      max_tokens: 50, // Adjust the number of tokens as needed
    }),
  })
    .then(response => response.json())
    .then(data => {
      const botMessage = data.choices[0].text;
      // Display bot's response
      displayMessage(botMessage, 'bot');
    })
    .catch(error => console.error(error));
}

// Function to display messages in the chat
function displayMessage(message, sender) {
  const chatContainer = document.getElementById('chat-container');
  const messageDiv = document.createElement('div');
  messageDiv.className = sender + '-message';
  messageDiv.innerText = message;
  chatContainer.appendChild(messageDiv);

  // Automatically scroll to the latest message
  chatContainer.scrollTop = chatContainer.scrollHeight;
}

// Event listener for user input
const userInputField = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');

sendButton.addEventListener('click', () => {
  const userMessage = userInputField.value;
  if (userMessage.trim() !== '') {
    sendMessage(userMessage, 'user');
    userInputField.value = ''; // Clear the input field
  }
});

// Initial greeting from the bot
const initialBotMessage = "Hello! How can I assist you today?";
displayMessage(initialBotMessage, 'bot');






