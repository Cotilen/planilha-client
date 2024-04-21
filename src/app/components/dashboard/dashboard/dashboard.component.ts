import { Component, ElementRef } from '@angular/core';
import { UserService } from '../../../service/user/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  constructor(
    private userService: UserService,
    private elementRef: ElementRef
  ){}

  id = Number(localStorage.getItem('id'))
  background = ""

  ngOnInit(): void {
    this.getValue()
  }

  valueReceita = 0
  valueDespesa= 0
  valueSaldo= 0
  valueData= 0

  getValue(){
    const date = new Date()
    const month = date.getMonth() + 1
    this.elementRef.nativeElement

    this.userService.getDataDasboard(this.id, month).subscribe(data =>
      {

    this.valueReceita= data.recipe[0].value + data.fixedrecipe[0].value
    this.valueDespesa= data.expense[0].value + data.fixedexpense[0].value
    this.valueSaldo= data.saldo
    this.valueData= date.getDate()
    this.background = this.valueSaldo > 0? "var(--green-color)" : "var(--red-color)"
      }
    )

  }

}
