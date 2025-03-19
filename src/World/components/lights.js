import { DirectionalLight } from "three";

function createLights() {
    // Create directional light
    const light = new DirectionalLight('white', 8);

    // move the light
    light.position.set(10, 10, 10);

    return light;
}

export { createLights };