import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
// import { RouterModule } from '@angular/router';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule  } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
	declarations: [
    HeaderComponent,
	],
	exports: [ 
    HeaderComponent,
	],
	imports: [
		// RouterModule,
		// FormsModule,
		CommonModule,
		// ReactiveFormsModule,
		MatMenuModule,
		MatListModule,
		MatToolbarModule,
		BrowserModule,
		BrowserAnimationsModule,
		MatIconModule,
		MatPaginatorModule,
		MatTableModule,
		MatSnackBarModule,
		MatFormFieldModule,
		MatInputModule,
		MatDialogModule
	],
	schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class ComponentsModule {
	constructor() {}
}
