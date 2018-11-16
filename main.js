// http://tinyurl.com/cs160nov05

const BASE_URL = "https://zagster-service.herokuapp.com"

$(updateView) 

function updateView()  {
     $.getJSON(BASE_URL + "/rides/count" , updateRideCount)
     $.getJSON(BASE_URL + "/rides/count/g5", updateG5Count)
}

function updateRideCount(data) {
    numberOfRides = data.count
    $("h2#rideCount").html(numberOfRides)
}

function updateG5Count(data)  {
    numberOfRides = data.count
    $("p#G5").html(numberOfRides)
}

// function printdata(data){
//    console.log(data);
// }

