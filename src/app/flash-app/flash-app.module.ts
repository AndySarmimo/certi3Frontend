import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { UserComponent } from './main-page/user/user.component';
import { AppRoutingModule } from '../app-routing.module';
import { SubPageComponent } from './main-page/sub-page/sub-page.component';
import { StudyComponent } from './main-page/sub-page/study/study.component';
import { DeckComponent } from './main-page/sub-page/deck/deck.component';
import { FlashcardComponent } from './main-page/sub-page/flashcard/flashcard.component';



@NgModule({
  declarations: [
    MainPageComponent,
    UserComponent,
    SubPageComponent,
    StudyComponent,
    DeckComponent,
    FlashcardComponent
  ],
  exports: [
    MainPageComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    SharedModule,
    FormsModule
  ],
})
export class FlashAppModule { }
