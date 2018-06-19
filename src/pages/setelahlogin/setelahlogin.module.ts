import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { SetelahloginPage } from './setelahlogin';
import { AuthServiceProvider } from '../../providers/auth-service';


@NgModule({
    declarations: [
        SetelahloginPage
    ],

    imports: [
        IonicPageModule.forChild(SetelahloginPage),
    ],

    exports: [
        SetelahloginPage
    ],

    providers: [
        AuthServiceProvider
    ]
})

export class SetelahloginPageModule {}