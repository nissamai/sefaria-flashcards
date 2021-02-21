import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudyFlashcardsComponent } from './study-flashcards/study-flashcards.component';
import { AddFlashcardComponent } from './add-flashcard/add-flashcard.component';
import { SefariaService } from './sefaria.service';
import { HttpClientModule } from '@angular/common/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { DefinitionComponent } from './add-flashcard/definition/definition.component';

@NgModule({
  declarations: [
    AppComponent,
    StudyFlashcardsComponent,
    AddFlashcardComponent,
    ToolbarComponent,
    DefinitionComponent,
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatDialogModule,
    MatToolbarModule,
    MatIconModule,
    AppRoutingModule,
    MatButtonModule,
    HttpClientModule,
    NoopAnimationsModule
  ],
  providers: [SefariaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
