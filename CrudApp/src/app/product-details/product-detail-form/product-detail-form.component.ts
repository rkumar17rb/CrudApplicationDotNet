import { Component } from '@angular/core';
import { ProductDetailService } from '../../shared/product-detail.service';
import { FormsModule, NgForm } from '@angular/forms';
import { ProductDetail } from '../../shared/product-detail.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-detail-form',
  imports: [FormsModule],
  templateUrl: './product-detail-form.component.html',
  styles: ``
})
export class ProductDetailFormComponent {

   constructor(public service: ProductDetailService) {}
 onSubmit(form: NgForm) {
  this.service.formSubmitted = true;
  console.log('Form Data ID:', this.service.formData.id);  // Add this log
  
  if (form.valid) {
    if (this.service.formData.id == "") {
      this.insertRecord(form);
    } else {
      this.updateRecord(form);
    }
  }
}


  insertRecord(form: NgForm) {
    this.service.postProductDetail()
      .subscribe({
        next: res => {
          this.service.list = res as ProductDetail[]
          this.service.resetForm(form)
         
        },
        error: err => { console.log(err) }
      })
  }
  updateRecord(form: NgForm) {
    this.service.putProductDetail()
      .subscribe({
        next: res => {
          this.service.list = res as ProductDetail[]
          this.service.resetForm(form)
         
        },
        error: err => { console.log(err) }
      })
   }

}