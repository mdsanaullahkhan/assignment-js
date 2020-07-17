//  feetToMile

function feetToMile(feet){
    if (feet < (0)) {
       return 'distance cannot be negative';
   } else {
       var mile = feet / 5280;
   return mile;
   }
   }
var senior = [10000, 25000, -50000];
var lakeMile = feetToMile(senior[0]);
console.log(lakeMile);
var hillMile = feetToMile(25000);
console.log(hillMile);
var jornaMile = feetToMile(-50000);
console.log(jornaMile);






//woodCalculator

function woodCalculator(chair, table, bed){
    var chairCount = chair * 1;
    var tablecount = table * 3;
    var bedCount = bed * 5;
    var totalwood = chairCount + tablecount + bedCount;
    return totalwood;
}
var woodResult = woodCalculator(4, 7, 10);
console.log(woodResult);







//brickCalculator

function brickCalculator(floor){
    if (floor > 0 && floor <= 10) {
       var tenth  = (floor*15*1000);
       return tenth;
   } else if (floor > 10 && floor <= 20) {
       var twenty  = (floor*12*1000+30000);
       return twenty;
   } else if (floor > 20 ) {
       var thirty  = (floor*10*1000+70000);
       return thirty;
   } else {
       var none  = ("distance cannot be negative");
       return none;
   }
}
var result = brickCalculator(30);
console.log(result);



// tinyFriend

function tinyFriend(names) {
    var smallest = names[0];
    for (var i = 0; i < names.length; i++){
       var currentName = names[i];
       if (currentName < smallest){
           smallest = currentName;
       }
    }
    return smallest;
}
var smallestName = tinyFriend(['karim', 'rahim', 'sajibullah', 'jibon', 'don']);
console.log(smallestName);
