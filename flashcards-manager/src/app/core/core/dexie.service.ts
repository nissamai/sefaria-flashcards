import Dexie from 'dexie';

export class DexieService extends Dexie {
  constructor() {
    super('SefariaFlashcards');
    this.version(1).stores({
      flashcards: `++id, headword, text_type, indexTitle, sectionRef,
      wordMetadata.headword, wordMetadata.strong_number, wordMetadata.language_code,
      wordMetadata.content,
      wordMetadata.parent_lexicon_details.language,
      textMetadata.type, textMetadata.ref, textMetadata.text, textMetadata.indexTItle`
    });
  }
}