 var friendsData = require("../data/friends")

 module.exports = function(app){
   app.get("/api/friends", function(req, res) {
       res.json(friendsData);
    });
  
   app.post("/api/friends", function(req, res) {
      res.json(true);
      
      friendsData.push(req.body)
      // console.log(friendsData[minInd], minDiff)

   });
  
}