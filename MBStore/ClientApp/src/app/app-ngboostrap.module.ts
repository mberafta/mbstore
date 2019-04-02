import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot()
  ],
  exports: [
    BsDropdownModule,
    TooltipModule,
    ModalModule
  ]
})

export class AppNgBootstrapModule {

}
