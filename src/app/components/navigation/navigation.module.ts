import { NgModule } from '@angular/core';
import { ProjectService } from './project-service';
import { NavigationComponent } from './navigation.component';
import { NavigationProjectItemComponent } from './navigation.projectitem.component';
import { TimeItemComponent } from './timeitem.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [NavigationComponent, NavigationProjectItemComponent, TimeItemComponent],
  providers: [ProjectService],
  exports: [NavigationComponent]
})
export class NavigationModule {
}
