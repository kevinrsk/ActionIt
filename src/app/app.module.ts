import {NgModule}      from "@angular/core"
import {NgbModule}     from "@ng-bootstrap/ng-bootstrap";
import {BrowserModule} from "@angular/platform-browser"
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic"
import {AppComponent}  from "./app.component"
import {RouterModule, PreloadAllModules} from "@angular/router";

import {ROUTES} from "./app.routes";

import {HomeComponent} from "./home"
import {NavigationComponent} from "./navigation"
import {TodayToDosComponent} from "./todayTodos"

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        NavigationComponent,
        TodayToDosComponent
    ],
    imports: [
        BrowserModule,
        NgbModule.forRoot(),
        RouterModule.forRoot(ROUTES, {useHash: true, preloadingStrategy: PreloadAllModules})
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}

platformBrowserDynamic().bootstrapModule(AppModule)
