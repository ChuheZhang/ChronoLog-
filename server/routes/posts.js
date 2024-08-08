const express = require('express');
const router = express.Router();
const Post = require('../models/post');

// 获取所有动态
router.get('/', async (req, res) => {
    const posts = await Post.find();
    res.json(posts);
});

// 添加一个新的动态
router.post('/', async (req, res) => {
    const newPost = new Post(req.body);
    await newPost.save();
    res.json(newPost);
});

// 更新一个动态
router.put('/:id', async (req, res) => {
    const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedPost);
});

// 删除一个动态
router.delete('/:id', async (req, res) => {
    await Post.findByIdAndDelete(req.params.id);
    res.json({ message: 'Post deleted' });
});

module.exports = router;
