import Phaser from "phaser";
import GameScene from "./scenes/gamescene";

const  config = {
    type: Phaser.AUTO,
    width: 1200,
    height: 1200,
    physics: {
        default: 'impact',
        
    },
    scene: [GameScene]
};

const theGame = new Phaser.Game(config);

console.log("Hello World");