document.addEventListener('DOMContentLoaded', function() {
    const sendButton = document.querySelector('.send-button');
    const chatInput = document.querySelector('.chat-input');
    const chatWindow = document.querySelector('.chat-window');

    sendButton.addEventListener('click', function() {
        let message = chatInput.value.trim();
        if (message !== '') {
            const maxLength = 30; // Maximum characters per line
            if (message.length > maxLength) {
                const messageElement = document.createElement('div');
                messageElement.textContent = message;
                messageElement.classList.add('message');
                chatWindow.appendChild(messageElement);
            } else {
                const messageElement = document.createElement('div');
                messageElement.textContent = message;
                messageElement.classList.add('message');
                chatWindow.appendChild(messageElement);
            }

            // Clear the input field after sending the message
            chatInput.value = '';
            // Optionally, you can also scroll the chat window to the bottom
            chatWindow.scrollTop = chatWindow.scrollHeight;
        }
    });

    // Optional: Pressing Enter to send the message
    chatInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            sendButton.click();
        }
    });
});


