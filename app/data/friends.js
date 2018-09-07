
function User(name,gender,age){
   this.name = name;
   this.gender = gender;
   this.age = age;
   this.image = undefined;
   this.data = [];	
}

User.prototype.setImage = function(urls){
		this.image = urls;
}

// get users

var users = [];

var deadpool = new User("Deadpool","Male",29);
deadpool.setImage("https://i.imgur.com/zPtP8WA.jpg");
users.push(deadpool);

var spiderman = new User("Spiderman","Male",30);
spiderman.setImage("https://imgur.com/t/toby_mcguire/leCicDT");
users.push(spiderman);
/* 
for(var key in deadpool){
var val = deadpool[key];
  if(typeof val !== "function"){
     console.log(key +":"+deadpool[key]);
   }
}
console.log(" \n")
for(var key in spiderman){
var val = spiderman[key];

  if(typeof val !== "function"){
     console.log(key +":"+spiderman[key]);
   }
}
 */
var friends = [deadpool,spiderman];

function displayUsers(userList){
	var userCard = "";
	for(var user in userList){
	   var friend = userList[user];
 	   userCard += "<div class='card border-info mb-3' style='max-width: 18rem;'>"
	   userCard += "<div class='card-header'>userID:"+friend.ID+"</div>"
	   userCard += "  <div class='card-body text-info'>"
	   userCard += "  <h5 class='card-title userName'>"+friend.name+ " ("+user.gender+")</h5>"
	   userCard += "  <p class='card-text stats'>"+friend.age +"</p>"
	   userCard += "</div></div> "
	}
		
	$(".users").html(userCard)

}
displayUsers(users);

