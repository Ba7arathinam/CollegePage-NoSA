import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css'
})
export class LogInComponent {

  constructor(private Titleserice:Title){
    this.Titleserice.setTitle('REC-Login')
}
emails=''
pass=''


submitForm(form: any): void {
  console.log(form.value);
  alert('your Response has been recorded')
  form.resetForm();
}

}
