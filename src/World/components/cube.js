import { BoxGeometry, Mesh, MeshStandardMaterial } from "three";
import { color } from "three/tsl";

function createCube() {
    // create a geometry
    const geometry = new BoxGeometry(2, 2, 2);

    // create default Standard material

    const material = new MeshStandardMaterial({ color: 'orchid' });

    // create a Mesh combining the geometry and material
    const cube = new Mesh(geometry, material);

    cube.rotation.set(-0.5, -0.1, 0.8);

    return cube;
}

export { createCube };