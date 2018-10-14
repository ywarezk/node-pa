

const mySocket = new WebSocket('ws://localhost:3002');

mySocket.onmessage = function(event) {
    console.log(event.data);
    const li = document.createElement('li');
    li.textContent = event.data; // <li>with event.data as text</li>
    const ul = document.getElementById('chat-content');
    ul.appendChild(li);
}

// mySocket.onopen = function() {
//     mySocket.send('hello from browser');
// }

const form = document.getElementById('chat-form');
form.addEventListener('submit', function(event) {
    const input = document.getElementById('chat-input');
    const textMessage = input.value;
    mySocket.send(textMessage);
    event.preventDefault();
    // event.stopPropagation();
});

// form.addEventListener('submit', function() {

// });