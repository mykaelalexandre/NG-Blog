import {NgModule} from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { PostModule } from './posts/PostModule';
import { ConfirmationDialogComponent } from './dialogs/ConfirmationDialogComponent';
import { CommonMaterialModules } from '../common/material/CommonMaterialModules';

@NgModule({
    imports:[
        PostModule,
        HttpClientModule,
        CommonMaterialModules,
    ],
    exports:[
        PostModule,
        CommonMaterialModules,
    ],
    declarations:[
        ConfirmationDialogComponent,
    ],
    entryComponents:[
        ConfirmationDialogComponent,
    ]
})

export class BlogModule{
    
}