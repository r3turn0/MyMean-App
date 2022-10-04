import { Component, OnInit } from '@angular/core';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-add-tasks',
  templateUrl: './add-tasks.component.html',
  styleUrls: ['./add-tasks.component.css']
})
export class AddTasksComponent implements OnInit {

  task = {
    name: '',
    description: '',
    completed: false
  };

  added = false;

  constructor(private tasksService:TasksService) { }

  ngOnInit(): void {
  }

  addTask() : void {
    const data = {
      name: this.task.name,
      description: this.task.description,
    }
    this.tasksService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.added = true;
        },
        error => {
          console.log(error);
      });
  }

  newTask(): void {
    this.added = false;
    this.task = {
      name: '',
      description: '',
      completed: false
    }
  }

}
