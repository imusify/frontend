import { Injectable } from '@angular/core';
import { APIHandlerService } from '../api-handler.service';


@Injectable()
export class UploadAPIService {

	constructor(
		private apiHandlerService: APIHandlerService
	) {}

	getFilename(filename) {
		return this.apiHandlerService.get(`storage/s3-upload-url/${filename}`);
	}

	uploadFile(filename, file) {
        return this.apiHandlerService.upload(`${filename}`, file);
    }
}