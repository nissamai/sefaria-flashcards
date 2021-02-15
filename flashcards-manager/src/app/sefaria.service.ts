import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { WordInfo } from './word-info.class';
import { Observable } from 'rxjs';

@Injectable()
export class SefariaService {

  constructor(private http: HttpClient ) { }

 // TODO handle error

  getDefinitions(wordInfo: WordInfo): Observable<any[]> {
    return this.http.get<any[]>(`https://www.sefaria.org/api/words/${wordInfo.selectionText}?always_consonants=1&never_split=1&lookup_ref=${wordInfo.lookupRef}`);
  }

  getContext(wordInfo: WordInfo): Observable<any> {
    return this.http.get(`https://www.sefaria.org/api/texts/${wordInfo.lookupRef}?context=0`);
  }
}
