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

  configureWebSocket() {
    const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
    this.socket = new WebSocket(`${protocol}://${window.location.host}/ws`);

    this.socket.onopen = (event) => {
      this.displayMsg('system', 'game', 'connected');
      console.log('sent');
      this.broadcastEvent({ from: GameStartEvent, value: { playerName: this.getPlayerName() } });
    };

    this.socket.onclose = (event) => {
      this.displayMsg('system', 'game', 'disconnected');
    };

    this.socket.onmessage = async (event) => {
        console.log('error');
      const msg = JSON.parse(await event.data.text());
      console.log(msg);
      if (msg.from === GameStartEvent) {
        this.displayMsg('player', msg.value.playerName, `started a new game`);
      }
    };
  }

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
