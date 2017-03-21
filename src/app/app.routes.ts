import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home';
import { TodosContainerComponent } from './components/todosContainer';
import { ToDosComponent } from './components/todos';

export const ROUTES: Routes = [
    {
        path: '',
        component: TodosContainerComponent,
        children: [
            {
                path: '',
                component: ToDosComponent,
                data: { days: 1, title: 'Today' }
            },
            {
                path: 'all',
                component: ToDosComponent,
                data: { days: 0, title: 'All' }

            },
            {
                path: 'today',
                component: ToDosComponent,
                data: { days: 1, title: 'Today' }
            },
            {
                path: 'timeList',
                component: ToDosComponent,
                data: { days: 7, title: 'Next 7 Days' }
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
