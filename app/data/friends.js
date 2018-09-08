
// var path = require('path')
var FriendArray = [];
function User(name,gender,age){
	this.name = name;
	this.gender = gender;
	this.age = age;
	this.image = undefined;
	this.data = [];

	this.setImage = function(urls){
		this.image = urls;
	}
}
var deadpool = new User("Deadpool","Male",29);
	deadpool.setImage("https://i.imgur.com/zPtP8WA.jpg");
	FriendArray.push(deadpool);
	
	var spiderman = new User("Spiderman","Male",30);
	spiderman.setImage("https://imgur.com/t/toby_mcguire/leCicDT");
	FriendArray.push(spiderman);

module.exports = FriendArray;

	
	
	
	
	

