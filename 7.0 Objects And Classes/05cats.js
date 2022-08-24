function cats(userInput) {
    class Cats {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        talk() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }
    for (let element of userInput) {
        let [name, age] = element.split(' ');
        let cat = new Cats(name, age);
        cat.talk();
    }
} // 100/100
cats(['Mellow 2', 'Tom 5']);
cats(['Candy 1', 'Poppy 3', 'Nyx 2']);