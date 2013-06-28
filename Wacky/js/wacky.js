//Shaylen Young - 06/20 - Wacky

//Cost for ET to Phone Home
//Et has a special rate plan to where he pays .20 per minute for long distance calls
//it is an extra .50 per minute for any call over 100 miles away. Mars is 228.3 million miles away
//How much will a 30 minute call to mars cost

    var Callcost = calculation(30, .70);
    //Calculation for call
    function calculation(callLength, perminute){
    return totalcost = callLength * perminute;
}
console.log("It will cost ET " + Callcost + "$ to make a 30 minute phone call");
