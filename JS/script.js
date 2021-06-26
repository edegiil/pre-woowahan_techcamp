let is_O_turn = false;
let count = 0;

const grid = [
  '', '', '',
  '', '', '',
  '', '', '',
]

const score = {
  X: 0,
  O: 0,
}

function updateTurnMarker() {
  is_O_turn = !is_O_turn;
  const this_turn = is_O_turn ? 'O' : 'X';
  const opposite_turn = is_O_turn ? 'X' : 'O';
  const current_team_marker = document.querySelector(`#team__${this_turn}`);
  const opposite_team_marker = document.querySelector(`#team__${opposite_turn}`);

  current_team_marker.className = 'turn';
  opposite_team_marker.className = '';
}

function updateScorePanel() {
  const X_score_panel = document.querySelector(`#score__X`);
  const O_score_panel = document.querySelector(`#score__O`);
  X_score_panel.innerText = score.X;
  O_score_panel.innerText = score.O;
}

function resetGame(is_factory_reset) {
  is_O_turn = 0;
  count = 0;
  grid.fill('');

  const O_team_marker = document.querySelector(`#team__O`);
  const X_team_marker = document.querySelector(`#team__X`);

  O_team_marker.className = '';
  X_team_marker.className = 'turn';

  const game_display = document.querySelectorAll('.square');
  game_display.forEach((square) => {
    square.innerText = '';
    square.className = 'square';
  });

  if (is_factory_reset) {
    score.X = 0;
    score.O = 0;
    updateScorePanel();
    alert('리셋되었습니다.');
  }
}

function clickAction(e) {
  const turn = is_O_turn ? 'O' : 'X';

  if (!e.target.innerText) {
    e.target.innerText = turn;
    e.target.classList.add(`pick__${turn}`);
    grid[e.target.id] = turn;

    updateTurnMarker();
    setTimeout(() => checkWin(turn), 100);
  }
}

function checkWin(turn) {
  count++;

  let has_win = false;

  if (grid[0] === turn && grid[1] === turn && grid[2] === turn) {
    has_win = true;
  }
  if (grid[3] === turn && grid[4] === turn && grid[5] === turn) {
    has_win = true;
  }
  if (grid[6] === turn && grid[7] === turn && grid[8] === turn) {
    has_win = true;
  }
  if (grid[0] === turn && grid[3] === turn && grid[6] === turn) {
    has_win = true;
  }
  if (grid[1] === turn && grid[4] === turn && grid[7] === turn) {
    has_win = true;
  }
  if (grid[2] === turn && grid[5] === turn && grid[8] === turn) {
    has_win = true;
  }
  if (grid[0] === turn && grid[4] === turn && grid[8] === turn) {
    has_win = true;
  }
  if (grid[2] === turn && grid[4] === turn && grid[6] === turn) {
    has_win = true;
  }

  if (has_win) {
    alert(`${turn}측이 이겼습니다.`);
    score[turn]++;
    updateScorePanel();
    resetGame(false);
  }

  if (count >= 9) {
    alert('무승부입니다.');
    resetGame(false);
  }
}

function applyEventListenerToGame() {
  const game_display = document.querySelectorAll('.square');
  game_display.forEach((square) => {
    square.addEventListener('click', (e) => {
      clickAction(e);
    });
  });

  const reset_button = document.querySelector('#reset-button');
  reset_button.addEventListener('click', () => {
    if (confirm('리셋하시겠습니까?')) {
      resetGame(true);
    }
  });
}

function main() {
  applyEventListenerToGame();
}

main();
