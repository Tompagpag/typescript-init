interface Duck {
    name: string;
    swim(): string;
}

class Thing implements Duck {
    name!:string;

    swim() {
      return 'Nage comme un canard';
    }
}

const thing = new Thing();
console.log(thing.swim());
