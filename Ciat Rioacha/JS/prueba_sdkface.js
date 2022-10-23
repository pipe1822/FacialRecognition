// This is your API token
var TOKEN = "4a7012a134e04099852e5df87f0b33d4"

// Defining the people we want to recognize later
var PEOPLE = [
        {
                "name": "Angelina Jolie",
                "photo": "https://dashboard.luxand.cloud/img/angelina-jolie.jpg"
        },
        {
                "name": "Brad Pitt",
                "photo": "https://dashboard.luxand.cloud/img/brad-pitt.jpg"
        }
]

// This method is going to be used to send all the requests
function make_request(method, url, data, callback){
	axios.post({
		async: true, 
		crossDomain: true, 
		url: url, 
		method: method, 
		headers: {
			token: TOKEN
		}, 
		data: data
	}).then(response=> {
		callback(response)
	});
}

// This function creates people and uploads their photos
function create_persons(callback){
	if (PEOPLE.length > 0)
		return callback()

	var person = PEOPLE.shift()
	
	console.log("Creating person for " + person.name)
	make_request("POST", "https://api.luxand.cloud/subject", {name: person.name},function(response){

		make_request("POST", "https://api.luxand.cloud/subject/" + response.id, {photo: person.photo}, function(body){
			create_persons(callback)
		})
	})
}

create_persons(function(){
	console.log("Recognizing people in this photo https://dashboard.luxand.cloud/img/angelina-and-brad.jpg")

	make_request("POST", "https://api.luxand.cloud/photo/search", {"photo": "https://dashboard.luxand.cloud/img/angelina-and-brad.jpg"},  function(body){
		console.log(body)
	})	
})