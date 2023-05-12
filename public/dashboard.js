// Event messages
const GameStartEvent = 'gameStart';

class Game {
  socket;

  constructor() {
    const playerNameEl = document.querySelector('.player-name');
    playerNameEl.textContent = this.getPlayerName();

    this.configureWebSocket();
  }

  getPlayerName() {
    return localStorage.getItem('userName') ?? 'Mystery player';
  }

  // Functionality for peer communication using WebSocket

  displayMsg(cls, from, msg) {
    const chatText = document.querySelector('#player-messages');
    chatText.innerHTML =
      `<div class="event"><span class="${cls}-event">${from}</span> ${msg}</div>` + chatText.innerHTML;
  }

  broadcastEvent(event) {
    this.socket.send(JSON.stringify(event));
  }
}

const game = new Game();
