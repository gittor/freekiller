// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {

    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },

    onLevelLoaded(levelLoader) {
        this.player = levelLoader.player;
        this.tiledmap = levelLoader.tiledmap;
        // cc.log("zz:", this.player, this.tiledmap);
    },

    update (dt)
    {
        if(!this.player || !this.tiledmap)
            return;

        var center = cc.v2(cc.winSize.width/2, cc.winSize.height/2);
        var world = this.player.convertToWorldSpaceAR(cc.v2(0,0));
        var diff = center.sub(world);
        var pos = this.tiledmap.node.position.add(diff);
        var xmax = this.tiledmap.node.width/2 - center.x;
        var xmin = -xmax;
        var ymax = this.tiledmap.node.height/2 - center.y;
        var ymin = -ymax;
        if (pos.x > xmax) {
            pos.x = xmax;
        }
        if (pos.x < xmin) {
            pos.x = xmin;
        }
        if (pos.y > ymax) {
            pos.y = ymax;
        }
        if (pos.y < ymin) {
            pos.y = ymin;
        }
        this.tiledmap.node.position = pos;
    },
});