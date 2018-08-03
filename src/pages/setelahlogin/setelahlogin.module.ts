import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { SetelahloginPage } from './setelahlogin';
import { PipesModule } from './../../pipes/pipes.module';



@NgModule({
    declarations: [
        SetelahloginPage
    ],

    imports: [
        IonicPageModule.forChild(SetelahloginPage),
        PipesModule
    ],

    exports: [
        SetelahloginPage
    ],
})

export class SetelahloginPageModule {}