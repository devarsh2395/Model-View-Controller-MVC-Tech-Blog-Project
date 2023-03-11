const router = require("express").Router();
const {Post, User, Comment} = require("../models/");
const withAuth = require("../utils/auth");
router.get("/", withAuth, async (req, res ) => {
    try {
        const postData = await Post.findAll({
            include: [User],
            where: {userId: req.session.user_id}
        });
        const posts = postData.map((post) => post.get({
            plain: true,
        }));
        res.render("profile", {posts})
    }
    catch(err){
        res.status(500).json(err);
    }
})

module.exports = router;