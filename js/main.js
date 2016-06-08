var game = new Game();
game.pushState(new state_Loading(game));

function loop() {
    game.gameLoop();
    requestAnimationFrame(loop);
}
loop();
