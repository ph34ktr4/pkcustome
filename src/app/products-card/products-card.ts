import { CurrencyPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ConvertToKhrPipe } from '../convert-to-khr-pipe';

@Component({
  selector: 'app-products-card',
  imports: [CurrencyPipe,
    ConvertToKhrPipe
  ],
  templateUrl: './products-card.html',
  styleUrl: './products-card.css'
})
export class ProductsCard {

  @Input() product: any = [];

}
