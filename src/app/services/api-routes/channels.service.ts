import { Injectable } from '@angular/core';
import { APIHandlerService } from '../api-handler.service';


@Injectable()
export class ChannelsAPIService {

    constructor(
        private apiHandlerService: APIHandlerService
    ) {}

    getChannels() {
        return this.apiHandlerService.get(`channels/`);
    }

    createChannel(channel) {
        return this.apiHandlerService.post(`channels/`, channel);
    }

    removeChannel(id) {
        return this.apiHandlerService.delete(`channels/${id}/`);
    }

    getChannel(id) {
        return this.apiHandlerService.get(`channels/${id}/`);
    }

    updateChannel(channel) {
        return this.apiHandlerService.put(`channels/${channel.id}/`, channel);
    }

    getChannelDetails(id) {
        return this.apiHandlerService.get(`channels/${id}/detail/`);
    }

    createChannelPost(id, post) {
        return this.apiHandlerService.post(`channels/${id}/posts/new/`, post);
    }

    getChannelPosts(id) {
        return this.apiHandlerService.get(`channels/${id}/posts`);
    }

}
