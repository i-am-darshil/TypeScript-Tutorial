abstract class TakePhoto {
  constructor(public cmaeraMode: string, public filter: string) {}

  abstract getSepia(): string;

  getReelTime(): number {
    return 100;
  }
}

class Instagram extends TakePhoto {
  constructor(
    public cmaeraMode: string,
    public filter: string,
    public burst: string
  ) {
    super(cmaeraMode, filter);
  }
  getSepia() {
    return "some sepia";
  }
}

export {};
