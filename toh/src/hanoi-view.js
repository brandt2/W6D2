class HanoiView {
    constructor(game, rootEl) {
        this.game = game;
        this.rootEl = rootEl;
        this.setupTowers();
    }

    setupTowers() {
        let $towers =$('.towers');

        let $tower = $("<ul class='tower'>");
        for (let i = 0; i < 3; i++) {
            $tower.append("<li class='space'>")
        }

        for (let i = 0; i < 3; i++) {
            $towers.append(($tower.clone()))
        }

        let $spaces = $('.tower:first>.space')
        // console.log($spaces[2].addClass('small'))

        $spaces.eq(2).addClass('large')
        $spaces.eq(1).addClass('medium')
        $spaces.eq(0).addClass('small')
    }
}

module.exports = HanoiView