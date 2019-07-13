import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Identifiers } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Project1';
  index: number;
  constructor(private httpService: HttpClient) { }
 employee
  ngOnInit() {
    this.httpService.get('./assets/emp.json').subscribe(
      data=> {
    this.employee = data ;
    },
      (err: HttpErrorResponse) => {
        console.log(err.message);
      });
  }
  delete(i: number) {
    this.employee.splice(i, 1);
}
add(id,name,salary,department)
{
  this.employee.push({'ID':id,'Name':name, 'Salary':salary, 'Department':department})
}
update(i:number, id, name,salary,department)
{
  this.index=i;
  id.value=this.employee[i].ID;
  name.value=this.employee[i].Name;
  salary.value=this.employee[i].Salary;
  department.value=this.employee[i].Department;
  

  
}
updateclick(eid, ename, esalary, edepartment)
{
  this.employee[this.index].ID=eid.value;
  this.employee[this.index].Name=ename.value;
  this.employee[this.index].Salary=esalary.value;
  this.employee[this.index].Department=edepartment.value;

}
}
