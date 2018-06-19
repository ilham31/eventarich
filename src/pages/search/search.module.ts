import { SearchPage } from './search';
import { NgModule } from '@angular/core';

import { IonicPageModule } from 'ionic-angular';


@NgModule({
    declarations: [
        SearchPage,
    ],

    imports: [
        IonicPageModule.forChild(SearchPage),
    ],

    exports: [
        SearchPage,
    ]
})

export class SearchPageModule {}