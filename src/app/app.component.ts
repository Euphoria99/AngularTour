import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Simple CRM';
  success_message = true;
  superPower = 'ironMan';
  taxRate = 10;
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
