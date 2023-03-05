function personName () {
    const nameEl = document.querySelector("#names");
    localStorage.setItem("userName", nameEl.value);
    window.location.href = 'story-1.html';
}