import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SchedulePage } from './index';

@NgModule({
    declarations: [
        SchedulePage
    ],
    imports: [
        IonicPageModule.forChild(SchedulePage)
    ],
    entryComponents: [
        SchedulePage
    ]
})
export class SchedulePageModule { }