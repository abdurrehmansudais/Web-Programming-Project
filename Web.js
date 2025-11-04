
//LLLLLLLLLLLLLLLLLLLLLLAAAAAAAAAAAAAAABBBBBBBBBBB 1111111111111111111111111111111111111111111111111

/*let Traffic_density = "Low";
let Light=null;
if(Traffic_density === "High"){
    Light==60;
    console.log("High traffic");
}
else if(Traffic_density === "Medium"){
    Light =40
    console.log("Medium traffic");
}
else if(Traffic_density === "Low"){
    Light=20
    alert("Low traffic");
    console.log("Low traffic");
}
else{
    Light=90;
    console.log("Emergency");
}*/


/*let Traffic_density = "High";
let Light = null;
if(Traffic_density === "Emergency"){
    Light=90;
    console.log("Emergency");   

}
else{
    if(Traffic_density === "High"){
        Light=60;
        console.log("High traffic");
    }
    else if(Traffic_density === "Medium"){
        Light=40;
        console.log("Medium traffic");
    }
    else if(Traffic_density === "Low"){
        Light=20;
        alert("Low traffic");
        console.log("Low traffic");
    }
}*/




/*
let Traffic_density = "Medium";
let Light = null;

(Traffic_density === "Emergency") ? (Light = 90, console.log("Emergency")) :(Traffic_density === "High") ? (Light = 60, console.log("High traffic")) :(Traffic_density === "Medium") ? (Light = 40, console.log("Medium traffic")) :(Traffic_density === "Low") ? (Light = 20, console.log("Low traffic")) :null;*/

/*let Traffic_density = "Emergency";
let Light = null;
switch (Traffic_density) {
    case "Emergency":
        Light = 90;
        console.log("Emergency");
        break;
    case "High":
        Light = 60;
        console.log("High traffic");
        break;
    case "Medium":
        Light = 40;
        console.log("Medium traffic");
        break;
    case "Low":
        Light = 20;
        console.log("Low traffic");
        break;
    default:
        Light = 0;
        console.log("No traffic data available");
            
        }*/
        

//------------------------------------------------------------------------------------------------

//LLLLLLLLLLLLLLLLLLLLLLAAAAAAAAAAAAAAABBBBBBBBBBB 222222222222222222222222222222222222222222222222


/*
let arr=[];
for (let i=1;i<=5;i++){
    arr[i]=prompt("Enter number ",+i,":");
}

for (let i=1;i<=5;i++){
    console.log("Values:-");
    console.log(+i,".",arr[i]);
}
*/

/*
for (let i=0;i<5;i++){
    let row="";
    for(let j=0;j<=i;j++){
        row+="*";
    }
    console.log(row);
}
*/

/*
let str1= "Abdurrehman";
let str2="Sudais";

str3=str1+str2;
console.log(str3);


let arr1=[];
let arr2=[];
let first_name=null;
let last_name=null;
for (let i=0;i<5;i++)
    {   
        arr1[i]=prompt("Enter First Name ");
        arr2[i]=prompt("Enter Last Name ");
        
        let full_name=arr1[i]+" "+arr2[i];
        console.log("Full Name:-",full_name);
                }
*/
/*
let arr=[];

for(let i=0;i<5;i++){
    arr[i]=prompt("Enter number ");
}
let Larg=arr[0];
for(let i=0;i<5;i++){
    
    if(arr[i]>Larg){
        Larg=arr[i];
    }
    
    }
    console.log("Largest number is ",Larg);
*/
/*
let arr=[];
arr[0]=5;
arr[1]=10;
arr[2]=15;
arr[3]=20;
arr[4]=25;

arr.forEach(function(value){
    console.log("Original Value",+value);
});
arr.forEach(function(value){
    console.log("New Value",+value+5);
});
*/


/*
let arr1=[1,2,3,4,5];
let arr2=arr1.map(function(value){
    return value+5;
});
arr2.forEach(function(value){
    console.log("New Value:",+value);   
});
*/


/*
let arr1=[1,2,3,4,5];
let arr2=arr1.filter(function(value){
    return value>2;
});
arr2.forEach(function(value){
    console.log("Filtered Value:",+value);   
});
*/


/*
let arr1=[1,2,3,4,5];
let result=arr1.find(function(value){
    return value==3;
});
console.log("Found Value:",+result,"at index",arr1.indexOf(result) );
*/



//Task

/*
let progress = [
  { name: "Ayesha", courses: ["JS", "HTML"], completed: ["JS"] },
  { name: "Bilal", courses: ["CSS", "JS"], completed: ["CSS", "JS"] },
  { name: "Sara", courses: ["Python", "JS"], completed: [] }
];

let completedCourses = progress.filter((student)=>student.courses.length ==student.completed.length);
console.log(completedCourses);

let incompleteCourses = progress.filter((student)=>student.courses.length != student.completed.length);
console.log(incompleteCourses);

let student=progress.find(s=>s.name=="Ayesha");

if(!student.completed.includes("HTML")&&student.courses.includes("HTML")){
    student.completed.push("HTML");
    console.log("HTML course completed by Ayesha");
}
console.log("Updated progress:", progress);

let learningJS=progress.filter((student)=>student.courses.includes("JS"));
console.log("Students learning JS:", learningJS);

let completionpercentage = progress.map((student) => {
    return (student.completed.length / student.courses.length )* 100;
});
console.log("Completion percentage:", completionpercentage);    
*/

//------------------------------------------------------------------------------------------------

//LLLLLLLLLLLLLLLLLLLLLLAAAAAAAAAAAAAAABBBBBBBBBBB 333333333333333333333333333333333333333333333333