function getPlayerName() {
    let named = localStorage.getItem('userName') ?? 'mystery user';
    return named;
  }

  const why = getPlayerName ();

const el = document.getElementById("user");
el.innerHTML = '<span>[${why}]</span>';