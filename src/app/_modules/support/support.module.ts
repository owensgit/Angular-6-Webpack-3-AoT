import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SupportListComponent } from '../../_components/support-list/support-list.component';
import { routes } from './support.routes';

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [],
  declarations: [
    SupportListComponent
  ],
  providers: [],
})
export class SupportModule { }
