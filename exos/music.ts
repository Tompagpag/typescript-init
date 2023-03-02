abstract class Music {

    protected _instrument!: string;
    abstract makeSound(): string;
    play(): string {
        return "play music";
    }
}

// Classe étendue
class Guitar extends Music {

    protected _instrument: string = "Guitar";

    get instrument() {
      return this._instrument;
    }

    makeSound() {
      return "Lalala";
    }
}

const test = new Guitar();
console.log(test.instrument)
console.log(test.makeSound());
