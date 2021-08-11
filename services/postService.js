const Post = require('../models/Post.js');

class PostService {
    async create(post) {
        const createdPost = await Post.create(post);
        return createdPost;
    }

    async getAll() {
        let allPost = await Post.find();
        return allPost;      
    }

    async getOne(id) {
        if (!id) {
            throw new Error("not found ID");
        }

        let post = await Post.findById(id);
        return post;
    }

    async update(id, post) {
        if (!id) {
            throw new Error("not found ID");
        }

        let updatedPost = await Post.findOneAndUpdate(id, post);
        return updatedPost;
    }

    async delete(id) {
        if (!id) {
            throw new Error("not found ID");
        }
        
        await Post.findOneAndDelete(id);
        return {message: `User is deleted. ID:${id}`};
    }
}

module.exports = new PostService();