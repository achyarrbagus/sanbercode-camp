var express = require("express");
var router = express.Router();
const VenuesController = require("../controller/venues.controller");

/* GET venues listing. */
router.post("/", VenuesController.CreateVenues);
router.get("/", VenuesController.GetAllVenues);
router.get("/:id", VenuesController.GetOneVenues);
router.delete("/:id", VenuesController.DeleteVenues);
router.put("/:id", VenuesController.UpdateVenues);
module.exports = router;
