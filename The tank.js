    //  *** paste Pattern of the game blocks here...  
  const blocksArray = []; blocksArray.push('0', '2', 'brick'); blocksArray.push('1', '2', 'brick'); blocksArray.push('2', '2', 'brick'); blocksArray.push('3', '2', 'brick'); blocksArray.push('11', '2', 'brick'); blocksArray.push('12', '2', 'brick'); blocksArray.push('13', '2', 'brick'); blocksArray.push('14', '2', 'brick'); blocksArray.push('22', '2', 'brick'); blocksArray.push('23', '2', 'brick'); blocksArray.push('24', '2', 'brick'); blocksArray.push('25', '2', 'brick'); blocksArray.push('0', '3', 'brick'); blocksArray.push('1', '3', 'brick'); blocksArray.push('2', '3', 'brick'); blocksArray.push('3', '3', 'brick'); blocksArray.push('11', '3', 'brick'); blocksArray.push('12', '3', 'brick'); blocksArray.push('13', '3', 'brick'); blocksArray.push('14', '3', 'brick'); blocksArray.push('22', '3', 'brick'); blocksArray.push('23', '3', 'brick'); blocksArray.push('24', '3', 'brick'); blocksArray.push('25', '3', 'brick'); blocksArray.push('2', '6', 'invulnerable'); blocksArray.push('3', '6', 'invulnerable'); blocksArray.push('4', '6', 'invulnerable'); blocksArray.push('21', '6', 'invulnerable'); blocksArray.push('22', '6', 'invulnerable'); blocksArray.push('23', '6', 'invulnerable'); blocksArray.push('2', '7', 'invulnerable'); blocksArray.push('3', '7', 'invulnerable'); blocksArray.push('4', '7', 'invulnerable'); blocksArray.push('21', '7', 'invulnerable'); blocksArray.push('22', '7', 'invulnerable'); blocksArray.push('23', '7', 'invulnerable'); blocksArray.push('11', '10', 'stone'); blocksArray.push('12', '10', 'stone'); blocksArray.push('13', '10', 'stone'); blocksArray.push('14', '10', 'stone'); blocksArray.push('11', '11', 'stone'); blocksArray.push('12', '11', 'stone'); blocksArray.push('13', '11', 'stone'); blocksArray.push('14', '11', 'stone'); blocksArray.push('0', '12', 'green'); blocksArray.push('1', '12', 'brick'); blocksArray.push('5', '12', 'brick'); blocksArray.push('6', '12', 'brick'); blocksArray.push('9', '12', 'brick'); blocksArray.push('10', '12', 'brick'); blocksArray.push('11', '12', 'water'); blocksArray.push('12', '12', 'water'); blocksArray.push('13', '12', 'water'); blocksArray.push('14', '12', 'water'); blocksArray.push('15', '12', 'brick'); blocksArray.push('16', '12', 'brick'); blocksArray.push('19', '12', 'brick'); blocksArray.push('20', '12', 'brick'); blocksArray.push('24', '12', 'brick'); blocksArray.push('25', '12', 'green'); blocksArray.push('0', '13', 'brick'); blocksArray.push('1', '13', 'brick'); blocksArray.push('5', '13', 'brick'); blocksArray.push('6', '13', 'brick'); blocksArray.push('9', '13', 'brick'); blocksArray.push('10', '13', 'brick'); blocksArray.push('11', '13', 'water'); blocksArray.push('12', '13', 'water'); blocksArray.push('13', '13', 'water'); blocksArray.push('14', '13', 'water'); blocksArray.push('15', '13', 'brick'); blocksArray.push('16', '13', 'brick'); blocksArray.push('19', '13', 'brick'); blocksArray.push('20', '13', 'brick'); blocksArray.push('24', '13', 'brick'); blocksArray.push('25', '13', 'brick'); blocksArray.push('2', '16', 'brick'); blocksArray.push('3', '16', 'brick'); blocksArray.push('4', '16', 'brick'); blocksArray.push('5', '16', 'brick'); blocksArray.push('6', '16', 'brick'); blocksArray.push('7', '16', 'brick'); blocksArray.push('8', '16', 'brick'); blocksArray.push('17', '16', 'brick'); blocksArray.push('18', '16', 'brick'); blocksArray.push('19', '16', 'brick'); blocksArray.push('20', '16', 'brick'); blocksArray.push('21', '16', 'brick'); blocksArray.push('22', '16', 'brick'); blocksArray.push('23', '16', 'brick'); blocksArray.push('2', '17', 'brick'); blocksArray.push('3', '17', 'brick'); blocksArray.push('4', '17', 'brick'); blocksArray.push('5', '17', 'brick'); blocksArray.push('6', '17', 'brick'); blocksArray.push('7', '17', 'brick'); blocksArray.push('8', '17', 'brick'); blocksArray.push('17', '17', 'brick'); blocksArray.push('18', '17', 'brick'); blocksArray.push('19', '17', 'brick'); blocksArray.push('20', '17', 'brick'); blocksArray.push('21', '17', 'brick'); blocksArray.push('22', '17', 'brick'); blocksArray.push('23', '17', 'brick'); blocksArray.push('11', '23', 'brick'); blocksArray.push('12', '23', 'brick'); blocksArray.push('13', '23', 'brick'); blocksArray.push('14', '23', 'brick'); blocksArray.push('11', '24', 'brick'); blocksArray.push('14', '24', 'brick'); blocksArray.push('11', '25', 'brick'); blocksArray.push('14', '25', 'brick');

    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");

    function coordText(x, y) {
//  *** this function gets clicked block's coordinator and returns a text as block's name like block0912 (col 9, row 12)
        if (x < 10) x = "0" + x;
        if (y < 10) y = "0" + y;
        return "block" + x + "" + y;
    }
    function Block(type, resist, passable, bulletIgnorance, x, y) {
//  *** create a constructor for blocks objects  	
        this.type = type;
        this.resist = resist;
        this.passable = passable;
        this.bulletIgnorance = bulletIgnorance;
        this.x = x;
        this.y = y;
    }
    function Enemy(type, x, y, dir) {
//  *** create a constructor for Enemy tank object
        this.type = type;
        this.x = x;
        this.y = y;
        this.dir = dir;
        this.birth = function () {
            var bp = document.getElementById('birth');
            var nx = this.x * 19 + 9;
            var ny = this.y * 19 + 9;
            ctx.drawImage(bp, nx - 9, ny - 9);
            document.getElementById(this.type).style = "position: absolute; left: " + nx + "px; top: " + ny + "px; transform: rotate(180deg);";
        }
    }
    function choose() {
//  *** coordinates of mouse pointer
        var x = Math.floor((event.clientX - 10) / 19) * 19;
        var y = Math.floor((event.clientY - 10) / 19) * 19;
//      *** Shows the material of a clicked block
        checkBlock(x, y);
    }
    function checkBlock(x, y) {
//  *** This function checks if a block object exists
//     	*** generate a name for an Object of block
        var name = coordText(x / 19, y / 19);
        if (typeof window[name] != "undefined") {
            var matter = window[name].type;
        }
    }
    // 	Create gradient
    //		var grd = ctx.createRadialGradient(286, 286, 100, 286, 286, 550);
    //		grd.addColorStop(0, "white");
    //		grd.addColorStop(1, "grey");
    // 	Fill with gradient
    //		ctx.fillStyle = grd;
    //		ctx.fillRect(5, 5, 587, 587);

    function tmp(id, x, y, dg) {
//  *** Rotates an object
        document.getElementById(id).style = "position: absolute; left: " + x + "px; top: " + y + "px; transform: rotate(" + dg + "deg);"
    }

    function moveTank(objName) {
        objName = 'enemy1';
        obj = window[objName];
        const chances = [];
        id = obj.type;
        x = obj.x;
        y = obj.y;
        dir = obj.dir;
//      *** Tanks like to keep their direction
        if ((x <= 24 && dir == 2) || (1 <= x && dir == 4) || (1 <= y && dir == 1) || (y <= 24 && dir == 3)) {
            for (i = 0; i < 45; i++) {
                chances.push(dir);
            }
        }
        if (y < 24) {
            for (i = 0; i < 30; i++) {
                chances.push(3);
            }
        }
        if (x < 12) {
            for (i = 0; i < 30; i++) {
                chances.push(2);
            }
        } else if (x > 12) {
//          *** if tank located at the right side of the flag
            for (i = 0; i < 30; i++) {
                chances.push(4);
            }
        }
        var name1 = coordText(x, y - 1);
        var name2 = coordText(x + 1, y - 1);
        if (y >= 1 && (typeof window[name1] == "undefined" && typeof window[name2] == "undefined")) {
            for (i = 0; i < 20; i++) {
                chances.push(1);
            }
        }
        var name1 = coordText(x + 2, y);
        var name2 = coordText(x + 2, y + 1);
        if (x < 24 && (typeof window[name1] == "undefined" && typeof window[name2] == "undefined")) {
            for (i = 0; i < 20; i++) {
                chances.push(2);
            }
        }
        var name1 = coordText(x, y + 2);
        var name2 = coordText(x + 1, y + 2);
        if (y < 24 && (typeof window[name1] == "undefined" && typeof window[name2] == "undefined")) {
            for (i = 0; i < 20; i++) {
                chances.push(3);
            }
        }
        var name1 = coordText(x - 1, y);
        var name2 = coordText(x - 1, y + 1);
        if (x >= 1 && (typeof window[name1] == "undefined" && typeof window[name2] == "undefined")) {
            for (i = 0; i < 20; i++) {
                chances.push(4);
            }
        }
        var newDir = Math.floor(Math.random() * chances.length);
        newDir = chances[newDir];
        
//      *** If direction is changed
        if (newDir != dir) {
            tmp(id, x * 19 + 9, y * 19 + 9, (newDir - dir) * 90 + (dir - 1) * 90);
            obj.dir = newDir;
        } else {
            switch (newDir) {
                case 1:
                    var name1 = coordText(x, y - 1);
                    var name2 = coordText(x + 1, y - 1);
                    if (y >= 1 && (typeof window[name1] == "undefined" && typeof window[name2] == "undefined")) {
                        tmp(id, x * 19 + 9, y * 19 + 9 - 19, 0);
                        obj.y -= 1;
                    }
                    break;
                case 2:
                    var name1 = coordText(x + 2, y);
                    var name2 = coordText(x + 2, y + 1);
                    if (x <= 24 && (typeof window[name1] == "undefined" && typeof window[name2] == "undefined")) {
                        tmp(id, x * 19 + 9 + 19, y * 19 + 9, 90);
                        obj.x += 1;
                    }
                    break;
                case 3:
                    var name1 = coordText(x, y + 2);
                    var name2 = coordText(x + 1, y + 2);
                    if (y <= 24 && (typeof window[name1] == "undefined" && typeof window[name2] == "undefined")) {
                        tmp(id, x * 19 + 9, y * 19 + 19, 180);
                        obj.y += 1;
                    }
                    break;
                case 4:
                    var name1 = coordText(x - 1, y);
                    var name2 = coordText(x - 1, y + 1);
                    if (x > 1 && (typeof window[name1] == "undefined" && typeof window[name2] == "undefined")) {
                        tmp(id, x * 19 + 9 - 19, y * 19 + 9, 270);
                        obj.x -= 1;
                    }
                    break;
            }
        }
    }

    function myCanvas() {
//  Initiative graphics
// 	*** draw the Flag
        var fl = document.getElementById('flag');
        ctx.drawImage(fl, 12 * 19, 24 * 19);

//      *** Reads from the array of blocks
        for (i = 0; i < blocksArray.length; i += 3) {
            x = blocksArray[i];
            y = blocksArray[i + 1];
            mat = blocksArray[i + 2];

//     	    *** generate a name for an Object of block
            var name = coordText(x, y);

            switch (mat) {
                case 'brick':
                    var res = 2;
                    var pass = false;
                    var bullet = false;
                    break;
                case 'stone':
                    var res = 8;
                    var pass = false;
                    var bullet = false;
                    break;
                case 'invulnerable':
                    var res = 99;
                    var pass = false;
                    var bullet = false;
                    break;
                case 'green':
                    var res = 0;
                    var pass = true;
                    var bullet = true;
                    break;
                case 'water':
                    var res = 0;
                    var pass = false;
                    var bullet = true;
                    break;
            }
//     	    *** create an instance of block object uses dynamic name
            window[name] = new Block(mat, res, pass, bullet, x * 19, y * 19);

//	    *** Draw a not empty block
            var bp = document.getElementById(window[name].type);
            ctx.drawImage(bp, window[name].x, window[name].y);
        }

// 	*** birth an enemy tank
        rnd = Math.floor(Math.random() * 4) + 1;
        bRnd = Math.floor(Math.random() * 3);
        const birthX = [0, 12, 24];
        enemy1 = new Enemy("tankE" + rnd, birthX[bRnd], 0, 3);
        enemy1.birth();

//      *** Movement of an enemy tank
        setInterval(moveTank, 500);

        /*
//       *** Store images id in an array
         var tanks = ["tankE1", "tankE2", "tankE3", "tankE4", "tankF1", "tankF2"];
         for (i=0; i < 6; i++)
         {
//	 *** draw a tank
         var im = document.getElementById(tanks[i]);
         ctx.drawImage(im, i * 38, 1);
         } */
    }
