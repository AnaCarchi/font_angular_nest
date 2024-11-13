import { Component } from '@angular/core';

@Component({
  selector: 'app-nosotro',
  standalone: true,
  imports: [],
  template: `
    <h1>{{titulo}}<h1>
    <p>
      nosotro works!
    </p>
  `,
  styles: `
  h1{
     color:#00f;
  }`
})
export class NosotroComponent {
  public titulo:string="Acerca de nostros"

}
