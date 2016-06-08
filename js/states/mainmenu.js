function state_MainMenu() {

    this.update = function() {
        if (Key.isDown(Key.SPACE)) { game.pushState(new state_Game(1)); }
    };

    this.draw = function() {
        DrawTools.clear(game.ctx, 'rgb(51,51,51)');
        game.ctx.font = 'normal 14px Ubuntu';
        game.ctx.fillStyle = 'white';
        game.ctx.fillText('This is the main menu...', 200, canvas.height/2);
    };

}
