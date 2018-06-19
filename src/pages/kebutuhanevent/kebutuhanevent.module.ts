import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { KebutuhaneventPage } from './kebutuhanevent';


@NgModule({
    declarations: [
        KebutuhaneventPage,
    ],

    imports: [
        IonicPageModule.forChild(KebutuhaneventPage),
    ],

    exports: [
        KebutuhaneventPage,
    ]
})

export class KebutuhaneventPageModule {}