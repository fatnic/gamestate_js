function state_Loading() {

    this.count = 0;

    this.update = function() {
        if (this.count > 100) { game.pushState(new state_MainMenu()); }
        this.count++;
    };

    this.draw = function() {
        DrawTools.clear(game.ctx, 'rgb(51,51,51)');
        game.ctx.font = 'normal 14px Ubuntu';
        game.ctx.fillStyle = 'white';
        game.ctx.fillText('Loading...', 200, canvas.height/2);
        game.ctx.fillText(this.count + "%", 200, canvas.height - 20);
    };

}
