import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'],
})
export class CustomersComponent implements OnInit {
  name: string = '';
  email: string = '';
  password: string = '';
  check: boolean = false;
  dropdown: string = '';

  constructor() {}

  ngOnInit(): void {}

  customer(formValue: NgForm) {
    console.log('🚀 ~ our form values', formValue.value);
  }
}
