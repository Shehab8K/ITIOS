const socket = io('http://localhost:3000')
const messageContainer = document.getElementById('message-container')
const messageForm = document.getElementById('send-container')
const messageInput = document.getElementById('message-input')

let nameRegex = /^[A-Z-a-z]*$/; // Letters and hyphen - only
let userFlag = false;
let username;

const msgPart = document.getElementById("msg-part");
const loginPart = document.getElementById("login-part");
const loginButton = document.getElementById("loginButton");

loginButton.addEventListener("click",()=>{
  let loginInput = document.getElementById("loginInput");
  let nameCheck = nameRegex.test(loginInput.value);
  if(nameCheck){
    msgPart.classList.remove("hidder");
    loginPart.classList.add("hidder");
    username = loginInput.value;

    document.getElementById("joined").innerText = 'You joined';
    socket.emit('new-user', username)

socket.on('chat-message', data => {
  appendMessage(`${data.username}: ${data.message}`)
})

socket.on('user-connected', username => {
  appendMessage(`${username} connected`)
})

socket.on('user-disconnected', username => {
  appendMessage(`${username} disconnected`)
})

messageForm.addEventListener('submit', e => {
  e.preventDefault()
  const message = messageInput.value
  appendMessage(`You: ${message}`, true)
  socket.emit('send-chat-message', message)
  messageInput.value = ''
})

function appendMessage(message,check=false) {
  if(check){
    const messageElement = document.createElement('div');
    messageElement.classList.add("myMsgs");
    messageElement.innerText = message;
    messageContainer.append(messageElement);
  }else{
    const messageElement = document.createElement('div')
    messageElement.innerText = message
    messageContainer.append(messageElement)
  }
}
  }
  else{
    let msgErr = document.getElementById("msgErr");
    msgErr.innerText = "Wrong format only A-z and hyphens allowed";
  }
});

// username = prompt("Enter username");

