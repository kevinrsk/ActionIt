import { NgModule } from '@angular/core';
import { SimpleMessageService } from './message-service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  providers: [ SimpleMessageService ],
  imports: [],
  declarations: [],
  exports: [FormsModule, CommonModule]
})
export class SharedModule {
}
