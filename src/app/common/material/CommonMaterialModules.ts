import { NgModule } from '@angular/core';
import { MatCardModule, MatButtonModule, MatTableModule, MatIconModule, MatProgressBarModule, MatTooltipModule, MatDialogModule, MatInputModule, MatFormFieldModule, MatFormField,  } from '@angular/material';


@NgModule({
    imports: [
        MatCardModule,
        MatButtonModule,
        MatTableModule,
        MatIconModule,
        MatProgressBarModule,
        MatFormFieldModule,
        MatInputModule,
        MatDialogModule,
        MatTooltipModule,
    ],
    exports: [
        MatCardModule,
        MatButtonModule,
        MatFormField,
        MatTableModule,
        MatInputModule,
        MatDialogModule,
        MatIconModule,
        MatProgressBarModule,
        MatTooltipModule,
    ],
    declarations: [],
    providers: [],
})
export class CommonMaterialModules { }
