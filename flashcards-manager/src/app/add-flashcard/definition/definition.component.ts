import { Component, Input, OnInit } from '@angular/core';
import { WordSense } from 'src/app/flashcard.class';

@Component({
  selector: 'app-definition',
  templateUrl: './definition.component.html',
  styleUrls: ['./definition.component.scss']
})
export class DefinitionComponent implements OnInit {
  @Input() senses!: WordSense[];

  constructor() { }

  ngOnInit(): void {
  }

}
