greet();//will get the output because we have used the keyword "function"/"variable" so the definition of the funcn goes to the top(this is hoisting)
function greet(){
    console.log("Hello");
}
const greet = () => { //arrow funcn now we'll get the output(upon calling) only after the funcn is created 
    console.log("Hii");
}
//Types of hoisting :-
//->variable
//->function