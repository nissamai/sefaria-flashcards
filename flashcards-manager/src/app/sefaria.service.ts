import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { WordInfo } from './word-info.class';
import { Observable } from 'rxjs';

@Injectable()
export class SefariaService {

  constructor(private http: HttpClient ) { }

  getDefinition(wordInfo: WordInfo): Observable<Object> {
    return this.http.get(`https://www.sefaria.org/api/words/${wordInfo.selectionText}?always_consonants=1&never_split=1&lookup_ref=${wordInfo.lookupRef}`);
  }

  getContext(wordInfo: WordInfo): Observable<Object> {
    return this.http.get(`https://www.sefaria.org/api/texts/${wordInfo.lookupRef}?context=0`);
  }
}
