import { Injectable } from '@angular/core';
import { APIHandlerService } from '../api-handler.service';
@Injectable()
export class CampaignAPIService {

    constructor(
        private apiHandlerService: APIHandlerService
    ) {}

    /**
     * Get all available campaigns
     */
    getCampaigns() {
        return this.apiHandlerService.get(`campaigns/`);
    }

    /**
     * Create new Campaign
     */
    createCampaign(campaign) {
        return this.apiHandlerService.post(`campaigns/`, campaign);
    }

    /**
     * Remove Campaign
     */
    removeCampaign(id) {
        return this.apiHandlerService.delete(`campaigns/${id}/`);
    }

    /**
     * Get a Campaign
     */
    getCampaign(id) {
        return this.apiHandlerService.get(`campaigns/${id}/`);
    }

    /**
     * Update existing campaign
     */
    updateCampaign(campaign) {
        return this.apiHandlerService.put(`campaigns/${campaign.id}/`, campaign);
    }
}