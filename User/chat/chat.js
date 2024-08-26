document.addEventListener('DOMContentLoaded', function() {
    const chatBox = document.getElementById('chat-box');
    const messageInput = document.getElementById('message-input');
    const sendBtn = document.getElementById('send-btn');
    const backBtn = document.getElementById('back-btn'); // Add this line

    sendBtn.addEventListener('click', function() {
        const message = messageInput.value.trim();
        if (message) {
            displayMessage(message, 'sent');
            // Here you would typically send the message to the server
            messageInput.value = ''; // Clear the input field
        }
    });

    // Function to display messages in the chat box
    function displayMessage(message, type) {
        const messageElement = document.createElement('div');
        messageElement.textContent = message;
        if (type === 'sent') {
            messageElement.style.textAlign = 'right';
            messageElement.style.background = '#007bff';
            messageElement.style.color = 'white';
            messageElement.style.padding = '5px';
            messageElement.style.marginBottom = '5px';
            messageElement.style.borderRadius = '5px';
        } else {
            messageElement.style.textAlign = 'left';
            messageElement.style.background = '#f0f0f0';
            messageElement.style.padding = '5px';
            messageElement.style.marginBottom = '5px';
            messageElement.style.borderRadius = '5px';
        }
        chatBox.appendChild(messageElement);
        chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom of the chat box
    }

});
