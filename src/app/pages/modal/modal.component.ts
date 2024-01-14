import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { DialogService } from 'src/app/services/dialogService/dialog.service';
import { HttpRequestsService } from 'src/app/services/httpRequests/http-requests.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  constructor(private http: HttpRequestsService, protected dialogService: DialogService) { }

  cancelDelete() {
    this.dialogService.id = "";
    this.dialogService.name = "";
    this.dialogService.showDialog = false;
  }

  confirmDelete() {
    this.http.deleteProduct(this.dialogService.id).subscribe({
      next: () => {
        window.location.reload();
      },
      error: (error: HttpErrorResponse) => {
        console.error(error.message);
      }
    });
  }

}
