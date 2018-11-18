// http://tinyurl.com/cs160nov05

const BASE_URL = "https://zagster-service.herokuapp.com"

$(updateView) 

function updateView()  {
     $.getJSON(BASE_URL + "/rides/count" , updateRideCount)
     $.getJSON(BASE_URL + "/rides/count/g5", updateG5Count)
     $.getJSON(BASE_URL + "/rides/count/columbia_simpson", updatecolumbia_simpsonCount)
     $.getJSON(BASE_URL + "/rides/count/drake_park", updatedrake_parkCount)
}

function updateRideCount(data) {
    numberOfRides = data.count
    $("h2#rideCount").html(numberOfRides)
}

function updateG5Count(data)  {
    numberOfRides = data.count
    $("p#G5").html(numberOfRides)
}

function updatecolumbia_simpsonCount(data)  {
    numberOfRides = data.count
    $("p#Columbia_Simpson").html(numberOfRides)
}

function updatedrake_parkCount(data)  {
    numberOfRides = data.count
    $("p#drake_park").html(numberOfRides)
}

// function printdata(data){
//    console.log(data);
// }

