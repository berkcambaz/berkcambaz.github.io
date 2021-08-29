function Chat() {
  const panel = document.getElementById("chat");

  const chatContainer = document.getElementById("chat_container");
  const chatInput = document.getElementById("chat_input");

  const messageLimit = 50;
  const messages = [];

  this.init = function () {
    chatInput.addEventListener("keydown", (ev) => {
      if (ev.key === "Enter") {
        const message = chatInput.value;
        chatInput.value = "";
        this.insertMessage(message, true)
      }
    });
  }

  this.toggle = function () {
    panel.classList.toggle("hide");
  }

  this.insertMessage = function (message, scrollToBottom) {
    const messageElem = document.createElement("div");
    messageElem.textContent = message;
    chatContainer.appendChild(messageElem);

    if (scrollToBottom)
      chatContainer.scrollTop = chatContainer.scrollHeight;

    messages.push(messageElem);
    if (messages.length > messageLimit)
      messages.shift().remove();
  }
}

export const chat = new Chat();