const express = require("express");
const router = express.Router();
const routeController = require("../controllers/route.controller");

router.post('/create-user',routeController.createUser);
router.post("/create-sales",routeController.createSales);
router.post("/create-books",routeController.createBooks)
router.get("/get-books",routeController.getBooks)
router.get("/get-sales",routeController.getSales)

module.exports = router;

