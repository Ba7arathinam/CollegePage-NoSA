import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrl: './forget.component.css'
})
export class ForgetComponent {
  constructor(private Titleserice:Title){
    this.Titleserice.setTitle('Forget')
}
}
