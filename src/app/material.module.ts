import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatToolbarModule, MatInputModule, MatProgressSpinnerModule, MatCardModule, MatAutocompleteModule, MatButtonToggleModule, MatCheckboxModule, MatChipsModule, MatStepperModule, MatDatepickerModule, MatDialogModule, MatExpansionModule, MatGridListModule, MatIconModule, MatListModule, MatMenuModule, MatNativeDateModule, MatPaginatorModule, MatProgressBarModule, MatRadioModule, MatRippleModule, MatSelectModule, MatSidenavModule, MatSliderModule, MatSlideToggleModule, MatSnackBarModule, MatSortModule, MatTableModule, MatTabsModule, MatTooltipModule } from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';

@NgModule({
    imports: [MatButtonModule, MatToolbarModule, MatInputModule, MatProgressSpinnerModule, MatCardModule],
    exports: [MatButtonModule, MatToolbarModule, MatInputModule, MatProgressSpinnerModule, MatCardModule],
})
export class MaterialModule { }