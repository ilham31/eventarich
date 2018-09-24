import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfilPage } from './profil';

import { PipesModule } from '../../pipes/pipes.module';


@NgModule({
    declarations: [
        ProfilPage,
    ],

    imports: [
        IonicPageModule.forChild(ProfilPage),
        PipesModule
    ],

    exports: [
        ProfilPage,
    ]
})

export class ProfilPageModule {}