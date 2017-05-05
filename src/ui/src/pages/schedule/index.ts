import { Component } from '@angular/core';
import { ToastController, ModalController, IonicPage } from 'ionic-angular';
import { MealSchedule, MealScheduleEntry } from '../../model';
import { SchedulesStore } from '../../services/schedules-store';
import { Observable } from "rxjs/Observable";
import { RecipePage } from "../recipe";
import { EatOutAction } from '../../actions/eat-out-action';
import { ReplaceMealAction } from '../../actions/replace-meal-action';

@IonicPage()
@Component({
  selector: 'schedule-page',
  templateUrl: 'list.html'
})
export class SchedulePage {
  schedule: Observable<MealSchedule>;

  constructor(
    private schedules: SchedulesStore,
    private toaster: ToastController,
    public modal: ModalController,
    private eatOutAction: EatOutAction,
    private replaceMealAction: ReplaceMealAction,
  ) {
    this.schedule = schedules.getScheduleForWeekContaining(new Date());
  }

  date(entry: MealScheduleEntry) {
    return new Date(entry.date);
  }

  selectDay(entry: MealScheduleEntry) {
    this.modal.create(RecipePage, { 
        recipeId: entry.recipeId 
      })
      .present();
  }

  eatOut(entry: MealScheduleEntry) {
      this.eatOutAction.execute(entry);
  }

  replace(entry: MealScheduleEntry) {
      this.replaceMealAction.execute(entry);
  }

}