import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularBasics';
  name ='owen';
  imgurl ='https://picsum.photos/id/237/500/500'
  getName()
  {
    return this.name; 
  }

  changeImage(e: KeyboardEvent){
    this.imgurl =(e.target as HTMLInputElement).value;
  }

  logImg(event: string){
    console.log(event)
  }
}
