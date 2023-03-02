const LogClassName: ClassDecorator = target =>{
    console.log(target.name);
}

@LogClassName
class Personne {
    constructor(
        public readonly firstName: string,
        public readonly lastName: string
    ) { }
}



    function readonly(target, key, descriptor) {
        // modifier la visibilité à true si vous voulez redéfinir la méthode
        descriptor.writable = false;
        return descriptor;
    }

    function modify(model:string) {
      let newModel = model;
      return function (target, key, descriptor) {
        descriptor.value = () => newModel;
      }

    }

    class Bike2 {
        @readonly
        speed () {
            return 8;
        }
        @modify('electric')
        model() { return 'normal'; }
    }

    let bike2 = new Bike2;
    bike2.speed = () => 5; // on tente de redéfinir la méthode impossible car writable à false

    // la méthode retournera 8 car elle n'est accessible qu'en lecture
    console.log(bike2.speed());
    console.log(bike2.model()); // modification du modèle


    // TS CONFIG

//     {
//   "compilerOptions": {
//     "outDir": "./dist", // dossier de compilation
//     "rootDir": "./src", // définit le dossier des fichiers ts
//     "experimentalDecorators": true, // définit le support expérimental des décorateurs
//     "target": "es5", // cible
//     "module": "commonjs"
//   },
//   "exclude": [
//     "node_modules"
//   ] // exclure le dossier node_modules de la compilation
// }
