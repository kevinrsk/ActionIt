import {NgModule}      from '@angular/core'
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
import {TodosContainerComponent} from './components/todosContainer'

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        NavigationComponent,
        TodosContainerComponent,
        TodayToDosComponent,
        ToDoComponent,
        NavigationProjectItemComponent,
        TimeItemComponent
    ],
    imports: [
        HttpModule,
        BrowserModule,
        NgbModule.forRoot(),
        RouterModule.forRoot(ROUTES, {useHash: false, preloadingStrategy: PreloadAllModules})
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}

platformBrowserDynamic().bootstrapModule(AppModule)
