import { SearchPage } from './search';
import { NgModule } from '@angular/core';

import { IonicPageModule } from 'ionic-angular';

import { PipesModule } from '../../pipes/pipes.module';

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
    ]
})

export class SearchPageModule {}