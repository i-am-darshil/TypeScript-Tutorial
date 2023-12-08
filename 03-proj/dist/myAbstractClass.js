"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TakePhoto {
    constructor(cmaeraMode, filter) {
        this.cmaeraMode = cmaeraMode;
        this.filter = filter;
    }
    getReelTime() {
        return 100;
    }
}
class Instagram extends TakePhoto {
    constructor(cmaeraMode, filter, burst) {
        super(cmaeraMode, filter);
        this.cmaeraMode = cmaeraMode;
        this.filter = filter;
        this.burst = burst;
    }
    getSepia() {
        return "some sepia";
    }
}
