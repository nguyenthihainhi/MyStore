import { Component, ElementRef, TemplateRef, ViewChild } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-template-modal',
  templateUrl: './template-modal.component.html',
  styleUrl: './template-modal.component.css'
})
export class TemplateModalComponent {
  modalRef?: BsModalRef;
  @ViewChild("template") template!: TemplateRef<any>;
  constructor(private modalService: BsModalService) { }
  openModal(template: TemplateRef<void>) {
    this.modalRef = this.modalService.show(template);
  }
}
