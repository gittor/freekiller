// 挂在可以添加武器的Node上

cc.Class({
    extends: cc.Component,

    properties: {
        weapons: [],

        // 主武器挂点
        mainHangingNode: cc.Node,

        // 副武器挂点
        // sideHangingNodes: [cc.Node],
    },

    start () {
    },

    addMainWeaponNode(node)
    {
        var weapon = node.getComponent('Weapon');
        if (!weapon)
            return;

        node.parent = this.mainHangingNode;
        this.weapons.push(weapon);
    },

    checkShoot(shootdir){
        for(var i=0; i<this.weapons.length; ++i)
        {
            this.weapons[i].checkShoot(shootdir);
        }
    },
});
