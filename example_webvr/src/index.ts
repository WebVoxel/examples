import { World, Game, Block, Point3D } from '@webvoxel/core';
import { WebVRPlugin } from '@webvoxel/plugin-webvr';
import { WASDControlsPlugin } from '@webvoxel/plugin-wasdcontrols';

const world = new World();
world.addBlock(new Block(new Point3D(0, 0, 0)));

const vr = new WebVRPlugin();
const wasd = new WASDControlsPlugin();

const game = new Game({
    plugins: [
        vr,
        wasd,
    ],
    initialWorld: world,
});

game.start();

game.renderer.domElement.addEventListener('click', () => wasd.controls.lock());