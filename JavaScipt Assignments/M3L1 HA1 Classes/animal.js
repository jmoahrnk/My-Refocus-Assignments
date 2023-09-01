class Animal {
    name;
    sound;
    constructor(name,sound){
        this.name = name;
        this.sound = sound;
    }
    speak(){
        console.log(`${this.sound} I am a ${(this.name).toLowerCase()}.`);
    }
    isEating(){
        console.log(`${this.name} is currently eating...`);
    }
}

const cat = new Animal('Cat', 'Meow!');
const dog = new Animal('Dog', 'Arf!');
const bird = new Animal('Bird', 'Tweet!');
const tiger = new Animal('Tiger', 'Rawr!');


cat.speak();
dog.speak();
bird.speak();
tiger.speak();

cat.isEating();
dog.isEating();
bird.isEating();
tiger.isEating();
