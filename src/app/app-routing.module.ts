import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MetaTestComponent } from './meta-test/meta-test.component';

const routes: Routes = [
{
  path: 'meta-item',
  component: MetaTestComponent,
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
