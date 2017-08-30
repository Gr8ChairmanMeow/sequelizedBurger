// Import the model (cat.js) to use its database functions.
var db = require("../models");

//functions
var burgerThisName = function(ingredientsArr) {
    //console.log(ingredientsArr);
    var size = ingredientsArr[0] + " ";
    var protein = ingredientsArr[1] + " ";
    var toppingsArr = ingredientsArr[2];
    var extra = ingredientsArr[3];
    var burgerName = size + protein;
    var check = Array.isArray(toppingsArr);
    if (check) {
        for (var i = 0; i < toppingsArr.length; i++) {
            burgerName += toppingsArr[i] + " ";
        }
    } else {
        burgerName += toppingsArr + " ";
    }
    burgerName += extra + " Burger";

    return burgerName.replace("  "," ").trim();
};

module.exports = function(app) {
    // Create all our routes and set up logic within those routes where required.
    app.get("/", function(req, res) {
        db.Burger.findAll({})
            .then(function(result) {
                var hbsObject = {
                    burgers: result
                };
                // console.log(hbsObject);
                res.render("index", hbsObject);
            });
    });

    app.post("/", function(req, res) {
        var burger = req.body;
        // Then add the character to the database using sequelize
        db.Burger.create({
            name: burgerThisName([burger.size, burger.protein, burger.topping, burger.extra]),
            devoured: false
        }).then(
            function() {
                res.redirect("/");
            }
        ).catch(function() {
            res.end("Error");
        });
    });

    app.put("/:id", function(req, res) {

        /*console.log(req.param);
        console.log(req.body);*/

        //NEW CODE

        /*        db.Burger.findAll({
                    where: {
                        id: req.params.id
                    }
                }).then(function(Burger) {
                    console.log("TEST", Burger, "END TEST")
                });

                db.Eater.create({
                    name: req.body.eater,
                    burger: "TEST BURGER"
                }).then(
                    function() {
                        res.redirect("/");
                    }
                ).catch(function() {
                    res.end("Error");
                });*/

        //END NEW CODE

        db.Burger.update({
                devoured: req.body.devoured
            }, {

                where: {
                    id: req.params.id
                }
            })
            .then(function(result) {
                // console.log("TEST",result,"TEST");

                //NEW CODE

/*                db.Burger.findAll({
                    where: {
                        id: req.params.id
                    }
                }).then(function(Burger) {
                    console.log("TEST", Burger[0].name, req.body.eater, "END TEST")

                    db.Eater.create({
                        name: req.body.eater
                    }).then(
                        function() {
                            res.redirect("/");
                        }
                    ).catch(function() {
                        res.end("Error");
                    });

                });*/

                //END NEW

                res.redirect("/");
            });
    });

    app.delete("/:id", function(req, res) {
        db.Burger.destroy({
                where: {
                    id: req.params.id
                }
            })
            .then(function(result) {
                res.redirect("/");
            });
    });
};