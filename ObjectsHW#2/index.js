console.log("Connected");

let book = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    readingStatus: true,


    ifRead: function(){        
        if(this.readingStatus === true){
            return "I have already read it, this is a great book"
        }else if(this.readingStatus === false){
            return "You need to read it it's a great book"
        }
    } 
}
console.log(book.ifRead())

