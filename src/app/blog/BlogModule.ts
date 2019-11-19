import {NgModule} from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { PostModule } from './posts/PostModule';

@NgModule({
    imports:[
        PostModule,
        HttpClientModule,
    ],
    exports:[
        PostModule,
    ],
    declarations:[

    ],
})

export class BlogModule{
    
}