import { Injectable } from '@angular/core';
import { APIHandlerService } from '../api-handler.service';


@Injectable()
export class UploadAPIService {

	constructor(
		private apiHandlerService: APIHandlerService
	) {}

	getUploadURL(file) {
	  const data = {
	    filename: file.name,
      content_type: file.type
    };
		return this.apiHandlerService.post(`storage/s3-upload-url`, data);
	}

	uploadFile(upload_url, file) {
		return this.apiHandlerService.progressUpload(`${upload_url}`, file);
	}
}
