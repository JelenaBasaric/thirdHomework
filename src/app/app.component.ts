import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'thirdHomework';
  logs :number[]=[];
  showPassword=false;
  onDisplayButtonClick(){
    this.showPassword=!this.showPassword;
    this.logs.push(this.logs.length+1);
  }
}
