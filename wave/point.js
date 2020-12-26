export class Point {

    constructor(waveIndex, pointIndex, x, y) {
        this.waveIndex = waveIndex;
        this.pointIndex = pointIndex;

        this.x = x;
        this.y = y; // 기속적으로 sin 으로 가변

        // y값의 factor들
        this.initY = y; // 초기값, 변경되지 않음.
        
        this.SPEED = 0.02; // sin factor
        this.currentSpeed = pointIndex; // sin factor

        this.MAX = Math.random() * 100 + 150; // under 250
    }

    update() {
        this.currentSpeed = this.currentSpeed + this.SPEED; // sin 음/양수로 변하기 위해서 계속 증가.
        let sinVal = Math.sin(this.currentSpeed);
        let undulanceResultY = (sinVal * this.MAX) + this.initY; 
        this.y = undulanceResultY;

        // console.log(this.waveIndex);
        // console.log(this.pointIndex);
        
        if( this.waveIndex == 0 && this.pointIndex == 4) { // 0, 5 번은 양끝이라 제외. wave.js 참고
            console.table(
                {
                    waveIndex: this.waveIndex,
                    pointIndex: this.pointIndex,
                    currentSpeed: this.currentSpeed,
                    sinVal: sinVal,
                    max: this.MAX,
                    initY: this.initY, 
                    undulanceResultY: undulanceResultY,
                    
                    x: this.x,
                    y: this.y
                }
            )
        } // end if
    }
}