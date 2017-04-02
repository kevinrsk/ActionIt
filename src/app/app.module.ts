import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppComponent } from './components/app/app.component';
import { RouterModule, PreloadAllModules } from '@angular/router';

import { ROUTES } from './app.routes';

import { HomeComponent } from './components/home';
import { ToDosComponent } from './components/todos';
import { ToDoComponent } from './components/todo';
import { NewToDoComponent } from './components/todo';
import { TodosContainerComponent } from './components/todosContainer';
import { ProjectConfig } from './shared/projectConfig';
import { SharedModule } from './shared';
import { NavigationModule } from './components/navigation/navigation.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TodosContainerComponent,
    ToDosComponent,
    ToDoComponent,
    NewToDoComponent
  ],
  imports: [
    RouterModule,
    NavigationModule,
    SharedModule,
    HttpModule,
    BrowserModule,
    RouterModule.forRoot(ROUTES, {useHash: false, preloadingStrategy: PreloadAllModules}),
    NgbModule.forRoot()
  ],
  entryComponents: [NewToDoComponent],
  bootstrap: [AppComponent],
  providers: [{provide: ProjectConfig, useValue: new ProjectConfig('api/todos/projects.json')}]
})
export class AppModule {
}

platformBrowserDynamic().bootstrapModule(AppModule);
