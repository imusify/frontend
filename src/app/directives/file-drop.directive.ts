import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appFileDrop]'
})
export class FileDropDirective {

  @Output() fileDropped = new EventEmitter<any>();
  @Output() fileHovered = new EventEmitter<boolean>();

  constructor() { }

  @HostListener('drop', ['$event'])
  onDrop($event) {
  	$event.preventDefault();
  	const transfer = $event.dataTransfer;
  	this.fileDropped.emit(transfer.files);
  	this.fileHovered.emit(false);
  }

  @HostListener('dragover', ['$event'])
  onDragOver($event) {
      event.preventDefault();
      this.fileHovered.emit(true);
  }

  @HostListener('dragleave', ['$event'])
  onDragLeave($event) {
      this.fileHovered.emit(false);
  }
}
