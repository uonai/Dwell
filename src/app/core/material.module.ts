import {NgModule} from "@angular/core";
import { CommonModule } from '@angular/common';
//import {MatSidenavModule} from '@angular/material/sidenav';
import {
  MatButtonModule, MatNativeDateModule, MatIconModule, MatSidenavModule, MatListModule, MatToolbarModule, MatCardModule} from '@angular/material';

@NgModule({
  imports: [CommonModule, MatButtonModule,MatToolbarModule, MatNativeDateModule, MatIconModule, MatSidenavModule, MatListModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule],
  exports: [CommonModule, MatButtonModule,MatToolbarModule, MatNativeDateModule, MatIconModule, MatSidenavModule, MatListModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule],
})
export class DwellMaterialModule { }
