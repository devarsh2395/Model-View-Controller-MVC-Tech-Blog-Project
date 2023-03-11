const router = require("express").Router();
const user = require("./user_routes");
const post = require("./post_routes");
const comment = require("./comment_routes");

router.use("/users", user);
router.use("/posts", post);
router.use("/comments", comment);



module.exports = router;