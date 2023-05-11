import { style } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  styles:['.whiteText{color:white;}']
  //styles:['.whiteText{color:white;background:blue;}'] //moze i ovako, onda bez ngStyle
})
export class AppComponent {
  title = 'thirdHomework';
  logs :number[]=[];
  //logs :Date[] =[];
  showPassword=false;
  onDisplayButtonClick(){
    this.showPassword=!this.showPassword;
    this.logs.push(this.logs.length+1);
    //this.logs.push (new Date);
    // ali mora da se promeni inicalizacija niza
  }
}
