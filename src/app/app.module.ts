import {NgModule}      from '@angular/core'
import {FormsModule}      from '@angular/forms'
import {HttpModule}      from '@angular/http'
import {NgbModule}     from '@ng-bootstrap/ng-bootstrap';
import {BrowserModule} from '@angular/platform-browser'
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic'
import {AppComponent}  from './app.component'
import {RouterModule, PreloadAllModules} from '@angular/router';

import {ROUTES} from './app.routes';

import {HomeComponent} from './components/home'
import {NavigationComponent} from './components/navigation'
import {NavigationProjectItemComponent} from './components/navigation'
import {TimeItemComponent} from './components/navigation'
import {TodayToDosComponent} from './components/todayTodos'
import {ToDoComponent} from './components/todo'
import {NewToDoComponent} from './components/todo'
import {TodosContainerComponent} from './components/todosContainer'

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        NavigationComponent,
        TodosContainerComponent,
        TodayToDosComponent,
        ToDoComponent,
        NewToDoComponent,
        NavigationProjectItemComponent,
        TimeItemComponent
    ],
    imports: [
        HttpModule,
        FormsModule,
        BrowserModule,
        RouterModule.forRoot(ROUTES, {useHash: false, preloadingStrategy: PreloadAllModules}),
        NgbModule.forRoot()
    ],
    entryComponents:[NewToDoComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}

platformBrowserDynamic().bootstrapModule(AppModule)
