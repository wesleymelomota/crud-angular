import { Product } from './../product.model';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit{

  product: Product = {
    name: "",
    prace: null
  }
  
  constructor(private productService: ProductService, private router: Router){}

  ngOnInit(): void {
    
  }

  fazerAlgo(): void {
    console.log("fazendo alguam coisa");
  }

  createProduct(): void {
    this.productService.create(this.product).subscribe(() => {
      this.productService.showMessage("Produto Cadastrado :)")
      this.router.navigate(['/products'])
    });
  }

  cancel(): void {
    this.router.navigate(['/products'])
  }

}
