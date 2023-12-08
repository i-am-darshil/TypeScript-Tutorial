"use strict";
class Instagram {
    // cameraMode: string
    // filter: string
    // burst: number
    // constructor(cameraMode: string, filter: string, burst: number) {
    //   this.cameraMode = cameraMode;
    //   this.filter = filter;
    //   this.burst = burst;
    // }
    constructor(cameraMode, filter, burst) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
}
class Youtube {
    constructor(cameraMode, filter, burst, short) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
        this.short = short;
    }
    createStory() {
    }
}
