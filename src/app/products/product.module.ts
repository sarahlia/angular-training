import { NgModule } from '@angular/core';
import {ConvertToSpacesPipe} from '../shared/convert-to-spaces.pipe';
import {ProductListComponent} from './product-list.component';
import {ProductDetailComponent} from './product-detail.component';
import { SharedModule } from '../shared/shared.module';
import {ProductRoutingModule} from './product-routing.module';
import { ProspectComponent } from './prospect/prospect.component';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ConvertToSpacesPipe,
    ProspectComponent
  ],
  imports: [
    SharedModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
