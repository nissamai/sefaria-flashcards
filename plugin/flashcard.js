export class Flashcard {
    constructor(definitionItem, contextItem) {
       // Headword
       // Definition
       // Reference
       // 
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


}