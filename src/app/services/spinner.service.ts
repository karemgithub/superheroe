import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgxSpinner, NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {


  constructor(private spinner: NgxSpinnerService) { }

  llamarSpiner() {
    this.spinner.show();
  }
  detenerSpiner() {
    this.spinner.hide();
  }


}
