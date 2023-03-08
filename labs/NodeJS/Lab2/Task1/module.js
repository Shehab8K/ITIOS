class Reserve{

    Ticket = [];
    setTicket(id,seatNum,flightNum,Airport,Destination,date) {
        let ticket = { id, seatNum, flightNum, Airport, Destination, date };
        this.Ticket.push(ticket);
       
    }
    getInfo(ID) {
        let flightInfo;
        this.Ticket.forEach(element => {
            if (element.id == ID) {
                flightInfo = element;
            }
        });
        return flightInfo;
    }
    updateTicket(ID, seatNum, flightNum, Airport, Destination, date) {
        let updatedTicket;
        this.Ticket.forEach(element => {
            if (element.id == ID) {
                element.seatNum = seatNum;
                element.Airport = Airport;
                element.flightNum = flightNum;
                element.Destination = Destination;
                element.date = date;
                updatedTicket = element;
                

            }
        });
        return updatedTicket;
         
    }
}

module.exports = {
    Reserve
}