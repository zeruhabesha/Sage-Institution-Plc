const express = require("express");
const router = express.Router();
const Blog = require("../models/Blog");

router.get("/test", (req, res) => res.send("blog route testing!"));

router.get("/", (req, res) => {
  Blog.find()
    .then((blogs) => res.json(blogs))
    .catch((err) => res.status(404).json({ nobooksfound: "No Blogs found" }));
});

router.get("/:id", (req, res) => {
  Blog.findById(req.params.id)
    .then((blog) => res.json(blog))
    .catch((err) => res.status(404).json({ noblogfound: "No Blog found" }));
});

router.post("/", (req, res) => {
  Blog.create(req.body)
    .then((blog) => res.json({ msg: "Blog added successfully" }))
    .catch((err) => res.status(400).json({ error: "Unable to add this blog" }));
});

router.put("/:id", (req, res) => {
  Blog.findByIdAndUpdate(req.params.id, req.body)
    .then((blog) => res.json({ msg: "Updated successfully" }))
    .catch((err) =>
      res.status(400).json({ error: "Unable to update the Database" })
    );
});

router.delete("/:id", (req, res) => {
  Blog.findByIdAndRemove(req.params.id, req.body)
    .then((blog) => res.json({ mgs: "Blog entry deleted successfully" }))
    .catch((err) => res.status(404).json({ error: "No such a blog" }));
});

module.exports = router;
