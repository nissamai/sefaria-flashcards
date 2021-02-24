# sefaria-flashcards
Quickly generate flashcards for words while learning. Then you can study the flashcards along with the context you learned the word in, without the effort of putting them together manually! Yay!

## Install for development
- ensure node/npm is installed

- run `npm run install:app`

- run `npm run build-project:app`

- go to chrome:extensions & load unpacked from plugin folder

## How to Use
1. Navigate to AlHaTorah Tanakh or to inside of a sefaria text. Right click a word and select "Create Flashcard" in the context menu.

2. Select definition for card to save from list

3. Save it.

4. To study cards, click the icon

5. This app doesn't actually save anything yet. Sorry. but it's COMING SOON.


## Dev notes for benchmarks

- [ ] Move these to github issues???

- [x] Get context menu to show up and trigger a function

- [x] Figure out how to set up IndexDB storage

- [x] FIgure out what information and metadata needs to be stored on a flashcard

- [ ] Trigger create storage upon application download

- [x] Open angular application to add new card page when context menu is clicked

- [ ] Create page to view flashcards

- [ ] Allow user to "study" decks - probably at first just do multiselect; sort cards by the context they were learned in

- [x] User can select the definition of the word in context that they want

- [ ] User can edit cards before storing them

- [ ] User can nav to the edit card page while learning them

- [ ] improve deck management

- [ ] Add support for looking up words while browsing more things that aren't sefaria!

- [ ] XSS concerns???

- [ ] Handle error: Add http interceptor to handle receiving response that is error: Could not find title in reference-- by querying again without the reference.