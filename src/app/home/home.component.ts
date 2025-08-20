import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
userDetails=[
  {name:'uzair', email:"uzair@gmail.com",number:123},
  {name:'taha', email:"taha@gmail.com",number:123},
  {name:'hassan', email:"hassan@gmail.com",number:123},
]
display=true
toggle(){
this.display=!this.display
}
}
