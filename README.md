# :video_game: [2D Game Menu](https://liarleycodie.github.io/Game-Menu/) :video_game:
:coffee: I'm was working in this simple game menu, since the morning till the afternoon. You can select the option from menu just by pressing the `Up` or `Down` arrow keys of your keyboard and pressing `space` or `enter` key you will execute the option. 

:strawberry: You can add new options to this menu. Open the file `menu.js` located in `src\js\scenes\menu`.
Look for the property `options` which is an array of objects. Inside this array insert an new object in any order.
The new object need to be similiar to the anothers objects with already exists, containing all same keys and values (with exception of title, which can be anything, and the action function content).

:closed_book: Main properties explanation:
- `x` and `y` properties will set the position of all the menu options. __Modify to see how it's works__.
- `fontSize` will set the text size shown.
- `fontFamily` will set the font family of all texts.
- `lineHeight` will set the spacement between each options.

:closed_book: Explanation of the properties from an option object:
- `y` property inside the object is necessary. The value of this property is used for set the indicator position (set this property as `undefined` because it is will automatically defined)
- `title` will set the text of this option when you start the menu (text which will be shown).
- `action` this is the most important property, because is from this option which you can do something, like: start the game scene, or open the load session, etc...

:hearts: Feel free to modify anything or... everything :blush:

> _:sweat_smile: By the way... I have try to create an pseudo game engine, hence don't be surprised with you notice the `main.js` messed. I have fail miserably._ :sleeping:

![Preview](https://i.imgur.com/Xfh9P78.png)
