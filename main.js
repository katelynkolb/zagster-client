// http://tinyurl.com/cs160nov05

const BASE_URL = "https://zagster-service.herokuapp.com"


$(updateView) 

function updateView()  {
     $.getJSON(BASE_URL + "/rides/count" , updateRideCount)

}

function updateRideCount(data){
    numberOfRides = data.updateRideCount
    $("h2#3rideCount").html(numberOfRides)
}

function printdata(data){
   console.log(data);

}

