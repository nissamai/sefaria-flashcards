# sefaria-flashcards
Quickly generate flashcards for words while learning. Then you can study the flashcards along with the context you learned the word in, without the effort of putting them together manually! Yay!

## Install for development
- ensure node/npm is installed

- run `npm run install:app`

- run `npm run build-project:app`

- go to chrome:extensions & load unpacked from plugin folder

## How to Use
1. Right click a word and select "Create Flashcard" in the context menu.

2. Select definition for card to save from list

3. To study cards, click the icon

4. This app doesn't actually work yet


## Dev notes for benchmarks

0. Move these to github issues???

1. Get context menu to show up and trigger a function

2. Figure out how to set up IndexDB storage & trigger create storage upon application download

3. Trigger get context menu to add card to storage with autmatically generated information

4. Create page to view flashcards

5. Allow user to "study" a deck
    
    a. CORRECT & INCORRECT

    b. Shuffle

    c. Restart

6. User can edit cards before storing them

7. User can edit cards while learning them

8. Deck management

9. Add support for looking up words while browsing things that aren't sefaria!

10. XSS concerns? :O

11. Handle error: Add http interceptor to handle receiving response that is error: Could not find title in reference-- by querying again without the reference.