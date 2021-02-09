import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFlashcardComponent } from './add-flashcard/add-flashcard.component'
import { StudyFlashcardsComponent } from './study-flashcards/study-flashcards.component'

const routes: Routes = [
  { path: 'add-card', component: AddFlashcardComponent },
  { path: 'study', component: StudyFlashcardsComponent },
  { path: '', redirectTo: '/add-card', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
