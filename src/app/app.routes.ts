import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './components/home';
import {TodosContainerComponent} from './components/todosContainer';
import {TodayToDosComponent} from './components/todayTodos';

export const ROUTES: Routes = [
    {
        path: '',
        component: TodosContainerComponent,
        children: [
            {
                path: '',
                component: TodayToDosComponent
            },
            {
                path: 'all',
                component: TodayToDosComponent
            },
            {
                path: 'today',
                component: TodayToDosComponent
            },
            {
                path: 'timeList',
                component: TodayToDosComponent
            }
        ]
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: '**',
        component: TodosContainerComponent
    },
];
