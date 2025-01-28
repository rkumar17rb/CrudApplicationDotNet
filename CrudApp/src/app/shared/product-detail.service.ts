import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { ProductDetail } from './product-detail.model';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})

export class ProductDetailService {
  url: string = environment.apiBaseUrl + '/Products'; // Ensure the base URL is correct

  list: ProductDetail[] = [];

  formData: ProductDetail = new ProductDetail();
  formSubmitted: boolean = false; // Change to a boolean type

  constructor(private http: HttpClient) { }

  refreshList() {
    this.http.get(this.url)
      .subscribe({
        next: res => {
          this.list = res as ProductDetail[];
        },
        error: err => {
          console.log(err);
        }
      });
  }

  postProductDetail() {
    return this.http.post(this.url, this.formData);
  }

  putProductDetail() {
    return this.http.put(this.url + '/' + this.formData.id, this.formData);
  }

  deleteProductDetail(id: string) {  // Change id type to string (consistent with the model)
    return this.http.delete(this.url + '/' + id);
  }

  resetForm(form: NgForm) {
    form.form.reset();
    this.formData = new ProductDetail();
    this.formSubmitted = false;
  }
}
