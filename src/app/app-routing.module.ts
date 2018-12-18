import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './PageNotFound/PageNotFound.component';
import { CourseComponent } from './course/course.component';
import { TodosComponent } from './todos/todos.component';
import { MyparentComponent } from './myparent/myparent.component';
import { MychildComponent } from './mychild/mychild.component';

const routes: Routes = [
  { path: 'course',
   component: CourseComponent
  },
  { path: 'course2',
    component: CourseComponent,
    data: { title: 'Heroes List' }
   },
  { path: '',
    redirectTo: '/course',
    pathMatch: 'full'
  },
  { path: 'todos',
   component: TodosComponent
  },
  { path: 'parent',
   component: MyparentComponent
  },
  { path: 'child',
   component: MychildComponent
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
