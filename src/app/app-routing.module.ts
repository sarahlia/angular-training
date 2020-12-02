import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {WelcomeComponent} from './home/welcome.component';
import {ProspectComponent} from './products/prospect/prospect.component';



@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: 'prospect', component: ProspectComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ])
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
