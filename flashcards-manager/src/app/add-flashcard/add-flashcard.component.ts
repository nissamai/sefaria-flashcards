import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SefariaService } from '../sefaria.service';
import { WordInfo } from '../word-info.class';

@Component({
  selector: 'app-add-flashcard',
  templateUrl: './add-flashcard.component.html',
  styleUrls: ['./add-flashcard.component.scss']
})
export class AddFlashcardComponent implements OnInit {
  selection: string = '';
  lookupRef: string = '';
  wordInfo: WordInfo = new WordInfo();
  definitionObject: any;
  contextObject: any;
  defStr: string = ''
  ctxStr: string = '';

  constructor(private route: ActivatedRoute, private sefariaService: SefariaService) { }

  ngOnInit(): void {
    this.selection = this.route.snapshot.paramMap.get('selection') ? this.route.snapshot.paramMap.get('selection') as string : '';
    this.lookupRef = this.route.snapshot.paramMap.get('lookupRef') ? this.route.snapshot.paramMap.get('lookupRef') as string : '';
    this.wordInfo = new WordInfo(this.selection, this.lookupRef);
    this.sefariaService.getDefinition(this.wordInfo).subscribe(res => {
      this.definitionObject = res;
      this.defStr = JSON.stringify(this.definitionObject)
    }, err => {
      this.definitionObject = {}
    });

    this.sefariaService.getContext(this.wordInfo).subscribe(res => {
      this.contextObject = res;
      this.ctxStr = JSON.stringify(this.contextObject);
    })


  }

}
