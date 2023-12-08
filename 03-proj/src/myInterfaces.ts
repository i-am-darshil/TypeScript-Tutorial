interface TakePhoto {
  cameraMode: string;
  filter: string;
  burst: number;
}

class Instagram implements TakePhoto {
  // cameraMode: string
  // filter: string
  // burst: number

  // constructor(cameraMode: string, filter: string, burst: number) {
  //   this.cameraMode = cameraMode;
  //   this.filter = filter;
  //   this.burst = burst;
  // }

  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {}
}

interface Story {
  createStory(): void
}

class Youtube implements TakePhoto, Story {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number,
    public short: string
  ) {}

  createStory(): void {

  }
}
