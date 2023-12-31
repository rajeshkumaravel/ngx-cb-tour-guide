import { GuidedTourService } from './guided-tour.service';
import { GuidedTourComponent } from './guided-tour.component';
import { NgModule, ErrorHandler, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WindowRefService } from './windowref.service';
import { MatIconModule } from '@angular/material';

@NgModule({
  declarations: [GuidedTourComponent],
  imports: [CommonModule, MatIconModule],
  providers: [WindowRefService],
  exports: [GuidedTourComponent],
  entryComponents: [GuidedTourComponent],
})
export class GuidedTourModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: GuidedTourModule,
      providers: [ErrorHandler, GuidedTourService],
    };
  }
}
