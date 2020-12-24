//this program implement simple data structure Stack in javaScript.
//we are  going to implement using two different methods. 
// first would use array object to implement stack.

//declare an array named books which indicate stack of books on the table.
 let books =['network','algorithm','IOT','software engineering','old monk'];

 //we are going to declare some functions for our book stack::::: push, pop, peak and length.


//implement push function which take 'item' as a arguument.
 let push = function(item){
     books.push(item);

 };

 //implement pop function which does not take any argument and it removes the top book from book stack.
 let pop = function(){
     books.pop();

 };
 
 //implemrnt peak function which return top book from book stack.
 let peak = function(){
     return books[books.length-1];
 }


 books.push('hello-book');
 console.log(books);
 books.pop();
 console.log(books);