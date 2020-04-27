const express = require('express');
const router = express.Router();

// @route   GET api/posts
// @desc    Get all Posts
// @access  Public
router.get('/', (req, res) => {});

// @route   POST api/posts
// @desc    Add new Posts
// @access  Public
router.post('/', (req, res) => {});

// @route   PUT api/posts/:id
// @desc    Update Post
// @access  Private
router.put('/:id', (req, res) => {});

// @route   DELETE api/posts/:id
// @desc    Delete Post
// @access  Private
router.delete('/:id', (req, res) => {});

module.exports = router;
