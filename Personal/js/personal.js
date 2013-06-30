//Shaylen Young - 06/21 - Movie Night

//Theater or Redbox?
    //Cost for everything
    var money = 40;
    var ticketsPer = 10;
    var people = 2;
    var theaterfood = 20;
    var extrafor3D = 4;
    var redbox = 1.50;
    var pizza = 12

    //Total for Theater
    //Issue 1
    var theaterTotal = calculation; 
// CORRECTED CODE   var theaterTotal = calculation (ticketsPer,people,theaterfood);
    function calculation(ticketsPer, people, theaterfood){
        var theaterCost = ticketsPer * people + theaterfood;
        return theaterCost
    }
    //if Theater cost more than the money we have then we cannot go to the movies.
if(theaterCost > money){
    //If we have more money than theater cost then we can go to the movies
    console.log("Let's go to the Movies"); //There is a logical error in your description, if the cost is greater then the money we have then "goto the movies"
}
/******ISSUE 2: This code doesn't belong here*******/
    //Total for Home Movie Night
    var homeMovie = calculation2(redbox,pizza)

    function calculation2(redbox, pizza){
        var homeMovietotal = redbox * 2 + pizza
        return homeMovietotal
    // If we don't have enough money it will be a movie night
/******END: This code doesn't belong here*******/

}else{
    console.log("Lets stay in and order a movie")
}
