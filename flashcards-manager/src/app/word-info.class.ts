export class WordInfo {
    constructor(selectionText: string | null = null, lookupRef: string | null = null) {
        this.selectionText = selectionText;
        this.lookupRef = lookupRef;
    }
    selectionText: string | null;
    lookupRef: string | null;
}