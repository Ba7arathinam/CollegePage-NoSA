import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-application-track',
  templateUrl: './application-track.component.html',
  styleUrl: './application-track.component.css'
})
export class ApplicationTrackComponent {
  constructor(private Titleserice:Title){
    this.Titleserice.setTitle('REC-Track-app')
}
contact=''
AckNum=''

submitForm(form: any): void {
  console.log(form.value);
  alert('your Response has been recorded')
  form.resetForm();
}

}
