var friends = require("../data/friends");


// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.

module.exports = function (app) {
        app.get("/api/friends", function (req, res) {
            res.json(friends)
        });

        app.post("/api/friends",
                function (req, res) {
                    let scoresVals = req.body.scores.map(Number);
                    for (var i = 0; i < req.body.scores.length; i++) {
                        req.body.scores.splice(i, 1, scoresVals[i]);
                    }
                    //calculating sum of scores
                    req.body.sum = req.body.scores.reduce((acc, val) => {
                        return acc + val;
                    });

                    console.log(req.body.sum);

                    friends.push(req.body);
                    // console.log(friends);
                    totalDifference(req);

                    function totalDifference(req) {
                        console.log("in total diff function");
                        //compare the sum of the current friend to the other stored friends. If difference is < 1 then select first available friend.
                        console.log(friends);
                        console.log(req.body.sum);

                        let closeFriend = friends.filter((val) => {
                            //will return ahmed
                            // return (val.sum >= req.body.sum ? val.name : "you loser!")
                            //checking if any values are greater than or equal to recent input
                            if (val.sum >= req.body.sum){
                                return(val.name);
                            } else {
                                console.log("you have no friends");
                            }
                        });
                        console.log(closeFriend);
                        populateModal(closeFriend);
                    }
                    
                    function populateModal(closeFriend){
                        // TO DO
                        console.log("check out this sexy modal");
                    }
                });
            }

            