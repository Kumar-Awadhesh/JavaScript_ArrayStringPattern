const array=["assignment", "problem", "media", "upload"]
//initializing an empty array.
let arr=[];
//iteration over array till length of the array.
for(let i=0;i<array.length;i++){
    //checking wether first character or last character of the string is equal to character 'a' or not.
    if(array[i][0]==="a" || array[i][array[i].length-1]==="a"){
        //pushing the string in to a new array.
        arr.push(array[i])
    }
}
//printing the new array.
console.log(arr)