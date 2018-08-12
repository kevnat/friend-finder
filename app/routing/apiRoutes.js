var friends = require("../data/friends");


// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(friends)
    });

    app.post("/api/friends", function(req, res) {
        let scoresVals = req.body.scores.map(Number);
        for (var i = 0; i < req.body.scores.length; i++) {
            req.body.scores.splice(i, 1, scoresVals[i]);
        }
        console.log("Adding" + req.body + "\n-----------------------");
        friends.push(req.body);
        console.log(friends);
    })
}

