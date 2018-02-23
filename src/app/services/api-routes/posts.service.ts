import { Injectable } from '@angular/core';
import { APIHandlerService } from '../api-handler.service';


@Injectable()
export class PostAPIService {


    constructor(
        private apiHandlerService: APIHandlerService
    ) {}

    createPost(channel, post) {
        return this.apiHandlerService.post(`channels/${channel}/posts/new`, post);
    }

    getPostAttachment(id) {
        return this.apiHandlerService.get(`posts/attachment/${id}/`);
    }

    getPostCategories() {
        return this.apiHandlerService.get(`posts/categories/`);
    }

    createPostCatgory(category) {
        return this.apiHandlerService.post(`/posts/categories/`, category);
    }

    removePostCategory(id) {
        return this.apiHandlerService.delete(`posts/categories/${id}/`);
    }

    updatePostCategory(category) {
        return this.apiHandlerService.put(`posts/categories/${category.id}/`, category);
    }

    getPostTags(page) {
        return this.apiHandlerService.get(`/posts/tag/${page}/`);
    }

    createPostTag(tag) {
        return this.apiHandlerService.post(`posts/tag/`, tag);
    }

    removePostTag(id) {
        return this.apiHandlerService.delete(`posts/tag/${id}/`);
    }

    getPostTag(id) {
        return this.apiHandlerService.get(`posts/tag/${id}/`);
    }

    updatePostTag(tag) {
        return this.apiHandlerService.put(`posts/tag/${tag.id}/`, tag);
    }

    votePost(vote) {
        return this.apiHandlerService.post(`posts/${vote.post}/vote/${vote}`);
    }

}
