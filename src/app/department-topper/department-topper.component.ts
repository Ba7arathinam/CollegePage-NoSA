import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { DataService } from '../data.service';


@Component({
  selector: 'app-department-topper',
  templateUrl: './department-topper.component.html',
  styleUrl: './department-topper.component.css'
})
export class DepartmentTopperComponent {
  students:any[]=[]
  constructor(private Titleserice:Title,private dataService: DataService){
    this.Titleserice.setTitle('REC-Toppers')
}
ngOnInit() {

  this.dataService.getStudents().subscribe(
    (res) => {
      this.students = res;
      this.updateCGPA();
    },
    (error) => {
      console.error('Error fetching data:', error);
    }
  );
}

updateCGPA() {
  for (let i = 0; i < this.students.length; i++) {
    var a = this.students[i].gpa;
    if (a < 6 && a >= 5) {
      this.students[i].cgpa = a + 4 + 'GPA';
    } else if (a < 5 && a >= 4) {
      this.students[i].cgpa = a + 5 + 'GPA';
    } else if (a < 4 && a >= 3) {
      this.students[i].cgpa = a + 6 + 'GPA';
    } else if (a < 3 && a >= 2) {
      this.students[i].cgpa = a + 7 + 'GPA';
    } else if (a < 2 && a >= 1) {
      this.students[i].cgpa = a + 8 + 'GPA';
    } else if (a < 1) {
      this.students[i].cgpa = a + 9 + 'GPA';
    }
    const student = this.students[i];
    const nameElement = document.getElementById('dept-name' + i);
    const courseElement = document.getElementById('dept' + i);
    const cgpaElement = document.getElementById('dept-cgpa' + i);
    if (nameElement && courseElement && cgpaElement) {
      nameElement.innerHTML = student.name || '';  // Use empty string if 'name' is null or undefined
      courseElement.innerHTML = (student.courses && student.courses.length > 0) ? student.courses[0] : '';
      cgpaElement.innerHTML = this.students[i].cgpa|| '';  // Use empty string if 'cgpa' is null or undefined
    }


    
  }
}


}
