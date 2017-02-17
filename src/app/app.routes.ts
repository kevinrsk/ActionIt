import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home";
import { TodayToDosComponent } from "./todayTodos";
// import { AboutComponent } from "./about";
// import { NoContentComponent } from "./no-content";

// import { DataResolver } from "./app.resolver";

export const ROUTES: Routes = [
  { path: "",      component: TodayToDosComponent },
  { path: "home",  component: HomeComponent },
];
