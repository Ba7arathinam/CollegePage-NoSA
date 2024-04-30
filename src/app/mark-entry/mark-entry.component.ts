import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-mark-entry',
  templateUrl: './mark-entry.component.html',
  styleUrl: './mark-entry.component.css'
})
export class MarkEntryComponent {
  constructor(private Titleserice:Title){
    this.Titleserice.setTitle('REC-AboutUs')
}


}
