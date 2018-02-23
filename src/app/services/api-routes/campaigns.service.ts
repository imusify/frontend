import { Injectable } from '@angular/core';
import { APIHandlerService } from '../api-handler.service';
@Injectable()
export class CampaignAPIService {

    constructor(
        private apiHandlerService: APIHandlerService
    ) {}

    getCampaigns() {
        return this.apiHandlerService.get(`campaigns/`);
    }

    createCampaign(campaign) {
        return this.apiHandlerService.post(`campaigns/`, campaign, 'application/x-www-form-urlencoded');
    }

    removeCampaign(id) {
        return this.apiHandlerService.delete(`campaigns/${id}/`);
    }

    getCampaign(id) {
        return this.apiHandlerService.get(`campaigns/${id}/`);
    }

    updateCampaign(campaign) {
        return this.apiHandlerService.put(`campaigns/${campaign.id}/`, campaign);
    }
}
