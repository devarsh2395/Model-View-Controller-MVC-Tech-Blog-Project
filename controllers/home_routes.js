const router = require("express").Router();
const {Post, User, Comment} = require("../models");

router.get("/", async (req, res ) => {
    try {
        const postData = await Post.findAll({
            include: [User],
        });
        const posts = postData.map((post) => post.get({
            plain: true,
        }));
        // res.json(posts)
        res.render("all_posts", {posts, logged_in: req.session.logged_in})
    }
    catch(err){
        res.status(500).json(err);
    }
})
router.get("/post/:id", async(req,res) => {
    try {
        const postData = await Post.findByPk(req.params.id, {
            include: [User]
        })
        const post = postData.get({plain: true});
        res.render("single_post", {...post})
    } catch (error) {
        
    }
})

router.get("/login", (req,res) => {
    // if (res.session.logged_in){
    //     res.redirect("/profile")

    // }
    res.render("login")
})

router.get("/signup", (req,res) => {
    // if (res.session.logged_in){
    //     res.redirect("/profile")

    // }
    res.render("signup")
})

module.exports = router;