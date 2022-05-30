console.log("This system takes in three people randomly for group A and  three for group B and the go on a date on randomly selected place")

//declaring an array
let a = []
let b = []
let p = []

//receives input from user
a[0] = prompt("Enter the name of first person for group A")
a[1] = prompt("Enter the name of second person for group A")
a[2] = prompt("Enter the name of third person for group A")
b[0] = prompt("Enter the name of first person for group B")
b[1] = prompt("Enter the name of second person for group B")
b[2] = prompt("Enter the name of third person for group B")
p[0] = prompt("Enter the name of place 1")
p[1] = prompt("Enter the name of place 2")
p[2] = prompt("Enter the name of place 3")

//making copies of array
var gA= [...a]
var gB= [...b]
var place= [...p]

//declare variable to hold array length for group A
let len = 0

//loop to generate 10 different date
for(let i=0; i<10; i++){
  len = gA.length

  //randoly generates numbers
  let rand1 = Math.floor(Math.random()*len)
  let rand2 = Math.floor(Math.random()*3)
  let rand3 = Math.floor(Math.random()*3)

  //resets if group A has completed its cycle 
  if(len === 0 ){
    gA =[...a]
  }

  //get index of item from array
  const index =gA.indexOf(gA[rand1])
  if(index > -1 && len !==1){
    //display result
    console.log("Group A['"+gA[rand1]+"'] and Group B['"+gB[rand2]+"'] will be going on a dinner date at Places['"+place[rand3]+"']")
    //remove item from Array
    gA.splice(index, 1)
  }
  else{
    //display result
    console.log("Group A['"+gA[0]+"'] and Group B['"+gB[rand2]+"'] will be going on a dinner date at Places['"+place[rand3]+"']")
    gA.pop()
  }
   
}