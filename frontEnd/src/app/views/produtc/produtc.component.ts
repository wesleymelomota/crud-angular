import { HeaderService } from './../../components/template/header/header.service';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
@Component({
  selector: 'app-produtc',
  templateUrl: './produtc.component.html',
  styleUrls: ['./produtc.component.css']
})
export class ProdutcComponent implements OnInit{

  constructor(private router: Router, private headerService: HeaderService){
    this.headerService.headerData = {
      title: "Cadastro de produtos",
      icon: "storeboard",
      routeUrl: "/products"
    }
  }

  ngOnInit(): void {
    
  }

  navigationToProductCreate(): void{
    this.router.navigate(['/products/create'])
  }
}
