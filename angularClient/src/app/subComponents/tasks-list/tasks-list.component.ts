import { Component, OnInit } from '@angular/core';
import { TasksService } from 'src/app/services/tasks.service';
import { Task } from 'src/app/interfaces/task';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {

  tasks: Task[] = [];

  constructor(private TasksService:TasksService) { }

  getAllTasks() : void {
    this.TasksService.getAll().subscribe
     ((tasks: Task[]) => {this.tasks = tasks},
     (err: HttpErrorResponse) => err.error instanceof Error ? console.log('Error loading pages: ', err.error.message) : console.log(`Backend returned code: ${err.status} body was: ${err.error}`)  
     );
  }

  ngOnInit(): void {
    this.getAllTasks();
  }

}
