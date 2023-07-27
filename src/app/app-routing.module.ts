import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AffiliateComponent } from './affiliate/affiliate.component';
import { FaqsComponent } from './faqs/faqs.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { GetStartedComponent } from './get-started/get-started.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'affiliate', component: AffiliateComponent  },
  { path: 'contact', component: ContactComponent  },
  { path: 'faqs', component: FaqsComponent  },
  { path: 'login', component: LoginComponent },
  { path: 'get-started', component: GetStartedComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' } // redirect to `home` route at startup
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
