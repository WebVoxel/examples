import { World, Game, Block, Point3D } from '@webvoxel/core';
import { WASDControlsPlugin } from '@webvoxel/plugin-wasdcontrols';

const world = new World();
world.addBlock(new Block(new Point3D(0, 0, 0)));

const wasd = new WASDControlsPlugin();

const game = new Game({
    plugins: [
        wasd,
    ],
    initialWorld: world,
});

game.start();

document.addEventListener('click', () => wasd.controls.lock());