import {
    WaveGroup
} from './wavegroup.js'

class App {
    constructor() {
        this.canvas = document.createElement('canvas');
        this.canvas2DContext = this.canvas.getContext('2d');
        document.body.appendChild(this.canvas);

        this.wavegroup = new WaveGroup();
        
        window.addEventListener('resize', this.resize.bind(this), false);
        this.resize();

        requestAnimationFrame(this.animate.bind(this));
    }

    resize() {
        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;

        const scaling = 2;

        this.canvas.width = this.stageWidth * scaling;
        this.canvas.height = this.stageHeight * scaling;
        this.canvas2DContext.scale(scaling, scaling);

        this.wavegroup.resize(this.stageWidth, this.stageHeight);
    }

    animate() {
        this.canvas2DContext.clearRect(0, 0, this.stageWidth, this.stageHeight);

        this.wavegroup.draw(this.canvas2DContext);

        requestAnimationFrame(this.animate.bind(this));
    }
}

window.onload = () => {
    new App();
};