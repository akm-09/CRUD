const PostService = require('../services/postService.js');

class PostController {
    async create(req, res) {
        try {
            const post = await PostService.create(req.body);
            res.json(post);        
        } catch (error) {
            res.status(500).json(error.message);
        }
    }

    async getAll(req, res) {
        try {
            let users = await PostService.getAll();
            return res.json(users);        
        } catch (error) {
            res.json(error.message);
        }
    }

    async getOne(req, res) {
        try {
            let getOne = await PostService.getOne(req.params.id);
            return res.json(getOne);
        } catch (error) {
            res.status(500).json(error.message);
        }
    }

    async update(req, res) {
        try {
            let updatedPost = await PostService.update(req.params.id, req.body);
            return res.json(updatedPost);
        } catch (error) {
            res.status(500).json(error.message);
        }
    }

    async delete(req, res) {
        try {
            let result = await PostService.delete(req.params.id);
            return res.json(result);    
        } catch (error) {
            res.status(500).json(error.message);
        }
    }
}

module.exports = new PostController();