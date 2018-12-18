import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyFirstComponent } from './my-first/my-first.component';
import { ItshareApiService } from './services/itshare-api.service';
import { CourseComponent } from './course/course.component';
import { PageNotFoundComponent } from './PageNotFound/PageNotFound.component';
import { MasterService } from './services/Master.service';
import { ValueService } from './services/Value.service';
import { TodosComponent } from './todos/todos.component';
import { TodosService } from './services/Todos.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyparentComponent } from './myparent/myparent.component';
import { MychildComponent } from './mychild/mychild.component';

@NgModule({
   declarations: [
      AppComponent,
      MyFirstComponent,
      CourseComponent,
      PageNotFoundComponent,
      TodosComponent,
      MyparentComponent,
      MychildComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule
   ],
   providers: [
      ItshareApiService,
      MasterService,
      ValueService,
      TodosService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
