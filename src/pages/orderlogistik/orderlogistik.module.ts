import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { OrderlogistikPage } from './orderlogistik';


@NgModule({
    declarations: [
        OrderlogistikPage,
    ],

    imports: [
        IonicPageModule.forChild(OrderlogistikPage),
    ],

    exports: [
        OrderlogistikPage,
    ]
})

export class OrderlogistikPageModule {}