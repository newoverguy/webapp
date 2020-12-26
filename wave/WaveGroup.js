import {
    Wave
} from './wave.js'

export class WaveGroup {

    constructor() {
        this.numberOfWaves = 1;
        this.numberOfPoints = 6;

        this.color = ['rgb(255, 0, 0, 0.4)', 'rgb(255, 255, 0, 0.4)', 'rgb(0, 255, 255, 0.4)'];

        this.waves = [];

        for (let index = 0; index < this.numberOfWaves; index++) {
            const wave = new Wave(
                index,
                this.numberOfPoints,
                this.color[index]
            );

            this.waves[index] = wave;
        }
    }

    resize(stageWidth, stageHeight) {

        for (let i = 0; i < this.waves.length; i++) {
            const wave = this.waves[i];
            wave.resize(stageWidth, stageHeight);
        }

    }

    draw(ctx) {
        for (let i = 0; i < this.waves.length; i++) {
            const wave = this.waves[i];
            wave.draw(ctx);
        }
    }
      
}