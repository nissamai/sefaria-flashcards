import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, } from '@angular/router';
import { MatDialog } from '@angular/material/dialog'
import { AddFlashcardComponent } from '../add-flashcard/add-flashcard.component';
import { WordInfo } from '../word-info.class';

@Component({
  selector: 'app-study-flashcards',
  templateUrl: './study-flashcards.component.html',
  styleUrls: ['./study-flashcards.component.scss']
})
export class StudyFlashcardsComponent implements OnInit {
  // selection: string = '';
  // lookupRef: string = '';
  // wordInfo: WordInfo | null = null;

  constructor(private route: ActivatedRoute, public dialog: MatDialog) { }

  ngOnInit(): void {

    this.route.queryParamMap.subscribe(paramMap => {
      if(paramMap.has('selection')) {
        const wordInfo = this.getWordInfo(paramMap);
        this.createNewFlashcardDialog(wordInfo);
      } 
    })
   
  }

  getWordInfo(paramMap: ParamMap): WordInfo {
      const selection = paramMap.get('selection') as string;
      const lookupRef =  paramMap.has('lookupRef') ? paramMap.get('lookupRef') as string : '';
      return new WordInfo(selection, lookupRef);
  }

  createNewFlashcardDialog(wordInfo: WordInfo) {
    let dialogRef = this.dialog.open(AddFlashcardComponent, {
      height: '700px',
      width: '700px',
      data: {wordInfo: wordInfo}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}

