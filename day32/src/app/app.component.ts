import { Component, OnInit, ViewChild } from '@angular/core';
import { TodoComponent } from './components/todo.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  @ViewChild(TodoComponent)
  todoComp!: TodoComponent
  
  // value: number = 3;
  // numList: number[] = [];

  ngOnInit(): void {
    // for (let i = 0; i < 5; i++) {
    //   this.numList.push(Math.floor(Math.random() * 100));
    // }
  }

  saveToDo() {

  }

  // randomize() {
  //   this.value = Math.floor(Math.random() * 100);
  //   //Create a new array
  //   const tmp: number[] = [...this.numList, this.value]
  //   //Assign the new array to the binding
  //   this.numList = tmp
  // }
}
