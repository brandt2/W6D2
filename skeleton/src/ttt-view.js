class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupBoard();
    this.bindEvents();
  }

  bindEvents() {
    let $squares = $('.square');
    $squares.on("click", e => {
      const $curr = $(e.currentTarget);
      $curr.addClass("selected");
      this.makeMove($curr);
    });
  }

  makeMove($square) {
    let pos = $square.data('pos')
    const currentPlayer = this.game.currentPlayer;
    
    try {
      this.game.playMove(pos);
    } catch (e) {
      alert("This " + e.msg.toLowerCase());
      return;
    }

    $square.addClass(currentPlayer);

    if (this.game.isOver()) {
      // cleanup click handlers.
      this.$el.off("click");
      this.$el.addClass("game-over");

      const winner = this.game.winner();
      const $figcaption = $("<figcaption>");

      if (winner) {
        this.$el.addClass(`winner-${winner}`);
        $figcaption.html(`You win, ${winner}!`);
      } else {
        $figcaption.html("It's a draw!");
      }

      this.$el.append($figcaption);
    }
  }

  setupBoard() {
    let grid = this.game.board.grid;

    let $ul = $('<ul class="grid">')
    
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[0].length; j++) {
        const $li = $('<li class="square">')
        $li.data('pos', [i, j]);
        $ul.append($li)
      }
    }
    
    this.$el.append($ul)
  }
}

module.exports = View;
