export class Flashcard {
    constructor(word, definition, context, contextRef) {
        this.word = word;
        this.definition = definition;
        this.context = context;
        this.contextRef = contextRef;
        this.tags = [];
        this.addContextRefTags(contextRef);
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