import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { SefariaService } from '../sefaria.service';
import { WordInfo } from '../word-info.class';
import { TextMetadata, WordMetadata } from '../flashcard.class';

@Component({
  selector: 'app-add-flashcard',
  templateUrl: './add-flashcard.component.html',
  styleUrls: ['./add-flashcard.component.scss']
})
export class AddFlashcardComponent implements OnInit {
  
  wordInfo: WordInfo = new WordInfo();
  definitionObjects: WordMetadata[] | null = null;
  definitionIndex: number = 0;
  definitionCount: number = 0;
  contextObject: TextMetadata | null = null;
  showContext = false;

  constructor(
    public dialogRef: MatDialogRef<AddFlashcardComponent>,
    @Inject(MAT_DIALOG_DATA) private data: {wordInfo: WordInfo}, private sefariaService: SefariaService) { }

  ngOnInit(): void {
    this.wordInfo = this.data.wordInfo;
    this.sefariaService.getDefinitions(this.data.wordInfo).subscribe(res => {
      this.definitionObjects = res.map(x => new WordMetadata(x));
      this.definitionCount = this.definitionObjects.length;
      console.log(this.definitionObjects);
    }, err => {
      // todo error message
    });

    this.sefariaService.getContext(this.data.wordInfo).subscribe(res => {
      this.contextObject = new TextMetadata(res);
      console.log(this.contextObject);
    })

  }

  toggleContext(): void {
    this.showContext = !this.showContext;
  }

  increment(steps: number = 1): void {
    this.definitionIndex = (this.definitionIndex + steps) % this.definitionCount;
    while(this.definitionIndex < 0) {
      this.definitionIndex = this.definitionIndex + this.definitionCount;
    }
  }

  get contextButtonText() {
    return this.showContext ? 'Hide Context' : `Show Context (${this.contextObject?.ref})`
  }

}
