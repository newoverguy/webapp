import {
    Point
} from '../Point.js';

export class Wave {

    constructor(index, numberOfPoints, color) {
        this.index = index;
        this.numberOfPoints = numberOfPoints;
        this.color = color;
    }

    resize(stageWidth, stageHeight) {
        this.stageWidth = stageWidth;
        this.stageHeight = stageHeight;

        this.centerX = this.stageWidth / 2;
        this.centerY = this.stageHeight / 2;

        // 각 point의 x 사이 여백
        this.pointGap = this.stageWidth / (this.numberOfPoints - 1);

        this.init();
    }

    init() {
        this.points = [];

        for (let i = 0; i < this.numberOfPoints; i++) {
            const point = new Point(
                this.index, // wave index
                i,          // point index     
                this.pointGap * i, // x 좌표
                this.centerY
            );

            this.points[i] = point;
        }
    }

    draw(canvas2DContext) {
        canvas2DContext.beginPath();
        canvas2DContext.fillStyle = this.color;

        let prevX = this.points[0].x;
        let prevY = this.points[0].y;

        canvas2DContext.moveTo(prevX, prevY);

        for (let i = 1; i < this.numberOfPoints; i++) {
            if ( i < this.numberOfPoints - 1) {
                this.points[i].update();
            }

            const currentX = (prevX + this.points[i].x) / 2;
            const currentY = (prevY + this.points[i].y) / 2;

            canvas2DContext.lineTo(currentX, currentY);
            //canvas2DContext.quadraticCurveTo(prevX, prevY, currentX, currentY);

            prevX = this.points[i].x;
            prevY = this.points[i].y;
        }

        canvas2DContext.lineTo(prevX, prevY);
        canvas2DContext.lineTo(this.stageWidth, this.stageHeight);
        canvas2DContext.lineTo(this.points[0].x, this.stageHeight);
        canvas2DContext.fill()
        canvas2DContext.closePath();
    }
}