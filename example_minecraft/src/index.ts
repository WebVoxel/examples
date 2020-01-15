import { World, Game, Block, Point3D, Identifier } from '@webvoxel/core';
import { WASDControlsPlugin } from '@webvoxel/plugin-wasdcontrols';
import { ReachPlugin } from '@webvoxel/plugin-reach';

const world = new World();
world.addBlock(new Block({
    type: new Identifier('example_minecraft', 'dirt').toString(),
    coords: new Point3D(0, 0, 0),
}));
world.addBlock(new Block({
    type: new Identifier('example_minecraft', 'dirt').toString(),
    coords: new Point3D(0, 0, -1),
}));

const wasd = new WASDControlsPlugin();
const reach = new ReachPlugin({
    crosshair: true,
});

const game = new Game({
    plugins: [
        wasd,
        reach,
    ],
    initialWorld: world,
    textureRoot: 'https://webvoxel-example-assets.nyc3.digitaloceanspaces.com',
});

game.camera.position.y = 2.5;

game.start();

game.renderer.domElement.addEventListener('click', () => wasd.controls.lock());