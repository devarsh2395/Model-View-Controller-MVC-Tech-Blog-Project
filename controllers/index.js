const router = require("express").Router();
const api = require("./api");
const home = require("./home_routes.js");
const dashboard = require("./dashboard_routes.js");

router.use("/", home);
router.use("/dashboard", dashboard);
router.use("/api", api);



module.exports = router;