const playerNameEl = document.getElementById("user");
playerNameEl.textContent = this.getPlayerName();

getPlayerName() {
  return localStorage.getItem('userName') ?? 'Mystery player';
}