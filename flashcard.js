export class Flashcard {
    constructor(headword) {
       
    }

    addTag(tag) {
        this.tags.push(tag);
    }

    addContextRefTags(contextRef) {
        this.tags = this.tags.concat(parseContextRef(contextRef));
    }

    parseContextRef(contextRef) {
        const refParts = tags.contextRef.split(".");
        const reducer = (accumulator, currentValue) => accumulator.push(accumulator.join(".").concat(currentValue));
        return refParts.reduce(reducer);
    }

    updateFlashcard(word, definition, context, contextRef, tags) {

    }
}