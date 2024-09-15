import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {

  public nameLower: string = 'omar';
  public nameUpper: string = 'OMAR';
  public fullName: string = 'oMaR DáViLa';

  public customDate: Date = new Date();

}
