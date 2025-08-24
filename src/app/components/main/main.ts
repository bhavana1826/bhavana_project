import { Component } from '@angular/core';
import { Header } from '../header/header';
import { Products } from '../products/products';

@Component({
  selector: 'app-main',
  imports: [Header,Products],
  templateUrl: './main.html',
  styleUrl: './main.scss'
})
export class Main {

}
