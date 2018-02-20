import { Injectable } from '@angular/core';
import { APIHandlerService } from '../api-handler.service';


@Injectable()
export class PostAPIService {


    constructor(
        private apiHandlerService: APIHandlerService
    ) {}

    /**
     * Create new Post Attachment
     */
    createPost(post) {
        throw new Error('Not Implemented Yet.');
    }

    /**
     * Get a post attachment
     * @requires attachment id
     */
    getPostAttachment(id) {
        return this.apiHandlerService.get(`posts/attachment/${id}/`);
    }

    /**
     * Get posts categories by page
     */
    getPostCategories(page) {
        return this.apiHandlerService.get(`/posts/categories/${page}/`);
    }

    /**
     * Create post category
     */
    createPostCatgory(category) {
        return this.apiHandlerService.post(`/posts/categories/`, category);
    }

    /**
     * Remove posts category
     */
    removePostCategory(id) {
        return this.apiHandlerService.delete(`posts/categories/${id}/`);
    }

    /**
     * Update posts category
     */
    updatePostCategory(category) {
        return this.apiHandlerService.put(`posts/categories/${category.id}/`, category);
    }

    /**
     * Get all posts tags
     */
    getPostTags(page) {
        return this.apiHandlerService.get(`/posts/tag/${page}/`);
    }

    /**
     * Create posts tag
     */
    createPostTag(tag) {
        return this.apiHandlerService.post(`posts/tag/`, tag);
    }

    /**
     * Remove posts tag
     */
    removePostTag(id) {
        return this.apiHandlerService.delete(`posts/tag/${id}/`);
    }

    /**
     * Get posts tag by id
     */
    getPostTag(id) {
        return this.apiHandlerService.get(`posts/tag/${id}/`);
    }

    /**
     * Update posts tag
     */
    updatePostTag(tag) {
        return this.apiHandlerService.put(`posts/tag/${tag.id}/`, tag);
    }

    /**
     * Vote Action
     * @requires post_id
     * @requires action
     */
    voutePost(post_id, action) {
        return this.apiHandlerService.post(`posts/${post_id}/vote/${action}`);
    }

}
