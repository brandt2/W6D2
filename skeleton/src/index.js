const View = require('./ttt-view.js')
const Game = require('./game.js')
const Board = require('./board.js')
const MoveError = require('./moveError.js')
// const PlayScript = require('./playScript.js')

  $(() => {
    let $el = $('.ttt')
    const g = new Game();
    const v = new View(g, $el);
  });
