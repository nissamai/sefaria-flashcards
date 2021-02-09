import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudyFlashcardsComponent } from './study-flashcards/study-flashcards.component';
import { AddFlashcardComponent } from './add-flashcard/add-flashcard.component';

@NgModule({
  declarations: [
    AppComponent,
    StudyFlashcardsComponent,
    AddFlashcardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
