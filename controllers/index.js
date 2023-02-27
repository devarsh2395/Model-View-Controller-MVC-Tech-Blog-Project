const router = require("express").Router();
const api = require("./api/");
const home = require("./home_routes");
const dashboard = require("./dashboard_routes");

router.use("/", home);
router.use("/dashboard", dashboard);
router.use("/api", api);



module.exports = router;