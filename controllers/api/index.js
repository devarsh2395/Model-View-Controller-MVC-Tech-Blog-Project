const router = require("express").Router();
const user = require("./user_routes");
const post = require("./post_routes");
const comment = require("./comment_routes");

router.use("/user", user);
router.use("/post", post);
router.use("/comment", comment);



module.exports = router;