import { WebGLRenderer } from "three";

function createRenderer() {
    const renderer = new WebGLRenderer();

    // tunr on physically correct lighting model
    renderer.physicallyCorrectLights = true;

    return renderer;
}

export { createRenderer };