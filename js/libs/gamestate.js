function Game() {
    this.canvas = document.getElementById('canvas');
    this.ctx = canvas.getContext('2d');
    this.now = null;
    this.delta = null;
    this.then = Date.now();
    this.gameStates = [];
}

Game.prototype.pushState = function(state) {
    this.gameStates.push(state);
};

Game.prototype.popState = function() {
    return this.gameStates.pop();
};

Game.prototype.changeState = function(state) {
    if(this.gameStates.length !== 0) { this.popState(); }
    this.pushState(state);
};

Game.prototype.peekState = function () {
    if(this.gameStates.length === 0) { return null; }
    return this.gameStates[this.gameStates.length-1];
};

Game.prototype.gameLoop = function () {
    this.now = Date.now();
    this.delta = (this.now - this.then) / 1000;

    if(this.peekState() === null) { return; }
    this.peekState().update();
    this.peekState().draw();

    this.then = this.now;
};
