import { Injectable } from '@angular/core';
import { APIHandlerService } from '../api-handler.service';


@Injectable()
export class WalletAPIService {

    constructor(
        private apiHandlerService: APIHandlerService
    ) {}

    createWallet(wallet) {
        return this.apiHandlerService.post(`wallet/new`, wallet);
    }

    getWallet(id) {
        return this.apiHandlerService.get(`wallet/${id}`);
    }

    myBalance() {
    	return this.apiHandlerService.get(`wallet/balance`);
    }
}
