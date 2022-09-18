import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListProfileComponent } from './list-profile/list-profile.component';
import { ListProfile2Component } from './list-profile2/list-profile2.component';

@NgModule({
  declarations: [ListProfileComponent, ListProfile2Component],
  imports: [CommonModule],
  exports: [ListProfileComponent, ListProfile2Component],
})
export class ProfileModule {}
