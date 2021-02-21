export class Flashcard {
    constructor(wordApiItem: any, textApiItem: any) {
        this.wordMetadata = new WordMetadata(wordApiItem);
        this.textMetadata = new TextMetadata(textApiItem);
        this.headword = this.wordMetadata.headword;
        this.text_type = this.textMetadata.type;
        this.indexTitle = this.textMetadata.indexTitle;
        this.sectionRef = this.textMetadata.sectionRef;
    }
    headword: string;
    text_type: string;
    wordMetadata: WordMetadata;
    textMetadata: TextMetadata;
    indexTitle: string;
    sectionRef: string;
}

export class WordMetadata {
    constructor(wordApiItem: any) {
        this.headword = wordApiItem.headword;
        this.content = wordApiItem.content;
        this.strong_number = wordApiItem.strong_number;
        this.language_code = wordApiItem.language_code;
        this.parent_lexicon_details = wordApiItem.parent_lexicon_details;

    }

    headword: string;
    content: WordContent;
    strong_number: string;
    language_code: string;
    parent_lexicon_details: ParentLexicon;

}

export class WordContent {
    constructor(morphology: string, senses: WordSense[]) {
        this.morphology = morphology;
        this.senses = senses;
    }
    morphology: string;
    senses: WordSense[];

}

export class WordSense {
    constructor(def: string, senses: WordSense[]) {
        this.definition = def;
        this.senses = senses;
    }
    definition: string;
    senses: WordSense[] | null;
}

export class ParentLexicon {

    constructor(parentLexicon: any) {
        this.name = parentLexicon.name;
        this.language = parentLexicon.language;
        this.to_language = parentLexicon.to_language;
        this.text_categories = parentLexicon.text_categories;
    }
    name: string;
    language: string;
    to_language: string;
    text_categories: string[];
}

export class TextMetadata {
    constructor(textApiItem: any) {
        this.type = textApiItem.type;
        this.ref = textApiItem.ref;
        this.text = textApiItem.text;
        this.he = textApiItem.he;
        this.textDepth = textApiItem.textDepth;
        this.sections = textApiItem.sections;
        this.sectionNames = textApiItem.sectionNames;
        this.sectionRef = textApiItem.sectionRef;
        this.indexTitle = textApiItem.indexTitle;
    }
    type: string;
    ref: string;
    text: string;
    he: string;
    textDepth: number;
    sections: number[];
    sectionNames: string[];
    sectionRef: string;
    indexTitle: string;
}
