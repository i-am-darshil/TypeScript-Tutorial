interface User {
  email: string;
  readonly id: number;
  googleId?: string; // ? means optional
  startTrial: () => string;
  startAnotherTrial(): string; // more compact for defining functions
  getCoupon(couponName: string): number
}

// re-opening an interface
interface User {
  githubToken: string
}

// inheritance
interface Admin extends User {
  role: "admin" | "ta" | "learner"
}

const darshilUser: User = {
  email: "",
  id: 1,
  startTrial: () => {
    return "trial started";
  },
  startAnotherTrial: () => {
    return "trial started";
  },
  getCoupon: (couponName: string) => {
    return 10
  },
  githubToken: ""
};

const darshilAdmin: Admin = {
  ...darshilUser,
  role: "admin"
}

export {};
