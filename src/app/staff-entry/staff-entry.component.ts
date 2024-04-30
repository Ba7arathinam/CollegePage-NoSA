import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-staff-entry',
  templateUrl: './staff-entry.component.html',
  styleUrl: './staff-entry.component.css'
})
export class StaffEntryComponent {
  constructor(private Titleserice:Title){
    this.Titleserice.setTitle('REC-StaffEntry')
}

}
