import { Component, OnInit } from '@angular/core';
import { ProductDetailFormComponent } from './product-detail-form/product-detail-form.component';
import { ProductDetailService } from '../shared/product-detail.service';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { CommonModule } from '@angular/common';
import { Toast } from 'ngx-toastr';
import { ProductDetail } from '../shared/product-detail.model';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [ProductDetailFormComponent, HttpClientModule,CommonModule], // Use HttpClientModule instead of HttpClient
  templateUrl: './product-details.component.html',
  styles: ``,
})
export class ProductDetailsComponent implements OnInit {
  constructor(public service: ProductDetailService) {}

  ngOnInit(): void {
    this.service.refreshList();
  }
  populateForm(selectedRecord:ProductDetail){
    this.service.formData=Object.assign({}, selectedRecord);
  }
  onDelete(id:string){
    if(confirm('Are you to delete this Product?'))
    this.service.deleteProductDetail(id)
    .subscribe({
      next:res=>{
        this.service.list=res as ProductDetail[]

      },
      error:err=>{
        console.log(err);
      }
    })
  }
}
