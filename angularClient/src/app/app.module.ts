import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTasksComponent } from './subComponents/add-tasks/add-tasks.component';
import { TaskDetailsComponent } from './subComponents/task-details/task-details.component';
import { TasksListComponent } from './subComponents/tasks-list/tasks-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddTasksComponent,
    TaskDetailsComponent,
    TasksListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
