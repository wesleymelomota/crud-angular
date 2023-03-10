import { Route, Router, ActivatedRoute } from '@angular/router';
import { ProductService } from './../product.service';
import { Product } from './../product.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit{
  product: Product = {
    id: 0,
    name: "",
    prace: null
  }
  constructor(private productService: ProductService, private router: Router, private route: ActivatedRoute){}
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    this.productService.readById(id).subscribe(product => {
      this.product = product
    })
  }
  delete(): void {
    const id = this.route.snapshot.paramMap.get("id");
    this.productService.delProduct(id).subscribe(() => {
    this.productService.showMessage(`Produto de Id ${id} Excluido!`)
    this.router.navigate(['/products'])
    })
    
  }
  cancel(): void {
    this.router.navigate(['/products'])
  }
}
