const fruits = ['mango','apple','banana'];

Array.prototype.customMethod = function(){
    console.log('hey..custom method');
}

fruits.customMethod();