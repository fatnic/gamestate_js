function state_Pause() {

    this.update = function() {
        if (Key.isDown(Key.ESC)) { game.pushState(new state_MainMenu()); }
        if (Key.isDown(Key.SPACE)) { game.popState(); }
    };

    this.draw = function() {
        game.ctx.font = 'normal 14px Ubuntu';
        game.ctx.fillStyle = 'white';
        game.ctx.fillText('PAUSED... [ESC] to quit or [SPACE] to resume...', 120, canvas.height - 10);
    };

}
