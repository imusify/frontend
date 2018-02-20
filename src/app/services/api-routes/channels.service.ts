import { Injectable } from '@angular/core';
import { APIHandlerService } from '../api-handler.service';


@Injectable()
export class ChannelsAPIService {

    constructor(
        private apiHandlerService: APIHandlerService
    ) {}

    /**
     * Get all available channels
     */
    getChannels() {
        return this.apiHandlerService.get(`channels/`);
    }

    /**
     * Create new channel
     */
    createChannel(channel) {
        return this.apiHandlerService.post(`channels/`, channel);
    }

    /**
     * Remove channel
     */
    removeChannel(id) {
        return this.apiHandlerService.delete(`channels/${id}/`);
    }

    /**
     * Get a channel
     */
    getChannel(id) {
        return this.apiHandlerService.get(`channels/${id}/`);
    }

    /**
     * Update channel information
     */
    updateChannel(channel) {
        return this.apiHandlerService.put(`channels/${channel.id}/`, channel);
    }

    /**
     * Get a channel details
     */
    getChannelDetails(id) {
        return this.apiHandlerService.get(`channels/${id}/detail/`);
    }

    /**
     * Create new channel post
     */
    createChannelPost(id, post) {
        return this.apiHandlerService.post(`channels/${id}/posts/new/`, post);
    }

    /**
     * Get posts relating to a channel
     */
    getChannelPosts(id) {
        return this.apiHandlerService.get(`channels/${id}/posts`);
    }

}
