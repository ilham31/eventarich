import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { TopeventPage } from './topevent';

@NgModule({
    declarations: [
        TopeventPage,
    ],

    imports: [
        IonicPageModule.forChild(TopeventPage),
    ],

    exports: [
        TopeventPage,
    ]
})

export class TopeventPageModule {}