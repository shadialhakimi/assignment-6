var numbers = [];
numbers[0] ="1";
limit=prompt("please enter the limit value",6);
for(var k=1;k<=limit;k++)
    {
var res = numbers[k-1].split("");
var counter=1;
var result="";
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

for(item in numbers)
console.log(numbers[item]);