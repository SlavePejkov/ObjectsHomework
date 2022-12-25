let animal = {
    name: "Alex",
    kind: "Tiger",

    speak: function(greetings){
        return `${this.kind} seas ${greetings} to you all`
        
    }

   
}
console.log(animal.speak("Hi"))