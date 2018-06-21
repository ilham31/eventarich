import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { PesananPage } from './pesanan';

@NgModule({
    declarations: [
        PesananPage,
    ],

    imports: [
        IonicPageModule.forChild(PesananPage),
    ],

    exports: [
        PesananPage,
    ]
})

export class PesananPageModule {}