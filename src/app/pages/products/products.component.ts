import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  private _api = inject(ApiService)

  listProducts : any = []


  ngOnInit(): void {
    this._api.getAllProducts().subscribe((products:any[]) => {
      this.listProducts = products
      console.log(this.listProducts)
    
    })
  
  }

}
