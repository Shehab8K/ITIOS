var myMod = require("./module");


let FlightReservation = myMod.Reserve;

let travelOne = new FlightReservation();
travelOne.setTicket(1, 30, 15, "Italy", "cairo", "10-6-2025");
console.log(travelOne.getInfo(1)); 
travelOne.updateTicket(1, 30, 15, "germany", "cairo", "10-6-2025");
console.log(travelOne.getInfo(1)); 


let travelTwo = new FlightReservation();
travelTwo.setTicket(2, 25, 500, "Alex", "Dahab", "16-6-2024");
console.log(travelTwo.getInfo(2));
travelTwo.updateTicket(2, 30, 500, "Alex", "Aswan", "16-6-2025");
console.log(travelTwo.getInfo(2));

