import { User } from './user.model';
import { Component, signal, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Employee } from './employee';
import { Products } from './products';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { HttpService } from './httpclient';

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

  public httpusers: User[] = [];

  public quotes: any[] = [];


  constructor(
    private _employeeService: Employee,
    private _productService: Products,
    private httpclient: HttpService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.employees = this._employeeService.getEmployees();
    this.products = this._productService.getProducts();

    this.httpclient.getUsersRemotely().subscribe((data) => {
      this.httpusers = data;
    });

    this.httpclient.getQuotes().subscribe((data) => {
      this.quotes = data;
    });


  }
}
