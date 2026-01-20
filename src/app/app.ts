import { Component, signal, OnInit } from '@angular/core'; // Added OnInit interface
import { RouterOutlet } from '@angular/router';
import { Employee } from './employee';
import { Products } from './products';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('angular-share-data');

  public employees: {
    id: number,
    firstname: string,
    lastname: string,
    email: string,
  }[] = [];

  public products: {
    id: string,
    name: string,
    description: string,
    price: number,
  }[] = [];


  constructor(
    private _employeeService: Employee,
    private _productService: Products
  ) {}


  ngOnInit() {
    this.employees = this._employeeService.getEmployees();
    this.products = this._productService.getProducts();
  }
}
