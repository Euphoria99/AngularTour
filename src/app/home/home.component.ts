import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  title = 'Simple CRM';
  success_message = true;
  superPower = 'ironMan';
  taxRate = 10;
  ourColor = 'purple';
  txtColor = 'red';
  styleProsU = 'c3';
  conditionClsProp = 'c4';

  //just being specific with types
  pageTitle: string = 'interpolation works';
  pageCount: number = 9;
  userObject = {
    firstName: 'Pavan',
    lastName: 'Bhat',
  }; //object

  isUserLoggedIn: boolean = true;
  ourMethod() {
    return 'c2';
  }
  contacts = [
    {
      fname: 'one',
      lname: 'test',
      cid: 1234,
    },
    {
      fname: 'two',
      lname: 'test 2',
      cid: 1234,
    },
    {
      fname: 'three',
      lname: 'test 3',
      cid: 1234,
    },
    {
      fname: 'four',
      lname: 'test 4',
      cid: 1234,
    },
    {
      fname: 'five',
      lname: 'test 5',
      cid: 1234,
    },
    {
      fname: 'six',
      lname: 'test 6',
      cid: 1234,
    },
    {
      fname: 'seven',
      lname: 'test 3',
      cid: 1234,
    },
  ];
}
