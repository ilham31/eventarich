import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { VendorkamiPage } from './vendorkami';

@NgModule({
    declarations: [
        VendorkamiPage,
    ],

    imports: [
        IonicPageModule.forChild(VendorkamiPage),
    ],

    exports: [
        VendorkamiPage,
    ]
})

export class VendorkamiPageModule {}