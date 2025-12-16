let arr=[1,2,2,3,5,8,9,9,8,9],obj={}
 let count=0
for(let i=0;i<arr.length;i++)
{
    if(i==arr.lastIndexOf(arr[i]))
    {
        console.log(arr[i])
        count++
    }
    if(obj[arr[i]]){
        obj[arr[i]]=obj[arr[i]]+1
    }
    else{
        obj[arr[i]]=1
    }
}

console.log(obj);
console.log("unique count: "+count);

for(let key in obj){
    console.log(key*obj[key])
}

let year=2400
if((year%4==0 && year%100!=0) || (year%400==0)){
    console.log(year+" is a leap year");
}
else{
    console.log(year+" is not a leap year");
}