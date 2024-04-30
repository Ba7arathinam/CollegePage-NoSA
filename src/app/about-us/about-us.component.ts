import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {
constructor(private Titleserice:Title){
        this.Titleserice.setTitle('REC-AboutUs')
}
}
