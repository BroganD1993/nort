function Player(name) {
    this.name = name;
    this.init = initPlayer;
    this.paint = paintPlayer;
    this.update = updatePlayer;
    this.changeDirection = changeDirection;
    this.player = [];
    this.direction = "down";

    var that = this;
    function initPlayer(start_x) {
        var start_y = 5;
        var start_size = 10;
        for(var i = start_y; i < start_size - 1; i++) {
            that.player.push({x: start_x, y: i});
        }
    }

    function paintPlayer() {
        var size = 20;
        for(var i = 0; i < that.player.length; i++) {
            var s = that.player[i];
            ctx.fillStyle = "black";
            ctx.fillRect(s.x*size, s.y*size, size, size);
        }
    }

    function changeDirection(direction) {
        that.direction = direction;
    }

    function updatePlayer() {
        if(that.direction == "right") {

        }
        else if(that.direction == "left") {

        }
        else if(that.direction == "up") {

        }
        else if(that.direction == "down") {

        }
    }
}
