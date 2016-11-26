
var numbers = [];// this array contain the list of values for the sequence
numbers[0] ="1"; //the starter value of the sequence
limit=prompt("please enter the limit value",6);//the end value of the sequence
//this is the outer loop for the whole sequence
for(var k=1;k<=limit;k++)
    {
var res = numbers[k-1].split("");
var counter=1;
var result="";
        //this is the inner loop for calculating each value in the sequence
for (var i=0; i<res.length; i++) {
    if(res[i]===res[i+1])
        {
            counter++;
            
        }
    else
        {
            result = result+ counter+res[i];
            counter=1;
            
            
        }
  
}
        numbers[k]=result;
    }
//this is the loop for printing the sequence in the console
for(item in numbers)
console.log(numbers[item]);
