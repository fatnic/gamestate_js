function state_Game(level) {

    this.level = level;

    this.update = function() {
        if (Key.isDown(Key.P)) { game.pushState(new state_Pause(game)); }
     };

    this.draw = function() {
        DrawTools.clear(game.ctx, 'rgb(51,51,51)');
        game.ctx.font = 'normal 14px Ubuntu';
        game.ctx.fillStyle = 'white';
        game.ctx.fillText('This is the GAME...', 200, canvas.height/2);
        game.ctx.fillText('You are playing level ' + level, 200, canvas.height - 10);
    };

}
