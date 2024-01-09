import { Gradient } from "whatamesh";

const Gradients = {
    init: () => {
    const gradient1 = new Gradient();
    gradient1.initGradient("#gradient-canvas-1");

    const gradient2 = new Gradient();
    gradient2.initGradient("#gradient-canvas-2");
}
}

export { Gradients };