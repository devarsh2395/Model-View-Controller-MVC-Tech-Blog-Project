const router = require("express").Router();
const {Post, User, Comment} = require("../models/");

router.get("/", async (req, res ) => {
    try {
        const postData = await Post.findAll({
            include: [User],
        });
        const posts = postData.map((post) => post.get({
            plain: true,
        }));
        res.render("all_posts", {posts})
    }
    catch(err){
        res.status(500).json(err);
    }
})