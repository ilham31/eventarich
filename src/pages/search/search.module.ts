import { SearchPage } from './search';
import { NgModule } from '@angular/core';

import { IonicPageModule } from 'ionic-angular';

import { PipesModule } from '../../pipes/pipes.module';
import { DateConvertPipe } from '../../pipes/date-convert/date-convert';

@NgModule({
    declarations: [
        SearchPage,
        
    ],

    imports: [
        IonicPageModule.forChild(SearchPage),
        PipesModule
    ],

    exports: [
        SearchPage,
    ],

    providers: [
        DateConvertPipe
    ]
})

export class SearchPageModule {}