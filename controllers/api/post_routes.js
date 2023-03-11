const router = require("express").Router();
const {Post, User, Comment} = require("../../models");
const withAuth = require("../../utils/auth");

router.post("/", withAuth, async (req,res) => {
    const {title, body} = req.body;

    try {
        const newPost = await Post.create({title, body, userId: req.session.user_id})
        res.json(newPost)
    } catch (error) {
        res.json(error)
    }
})


module.exports = router;