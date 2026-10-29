/**
 * All plugin parameters for this plugin.
 *
 * @file parameters
 *
 * @author       FeniXEngine Contributors
 * @copyright    2020 FeniXEngine
 */

/* eslint-disable spaced-comment */

/*:
 * @pluginname X_ActorItemStash
 * @plugindesc Each actor has their own inventory stash, trade with other actors,
 * and have access to a global stash. <X_ActorItemStash>
 *
 *
 * @modulename X_ActorItemStash
 * @version 1.2.1
 * @required
 * @external
 *
 * @author FeniXEngine Contributors (https://fenixenginemv.gitlab.io/)
 *
 * @param compatibilityOptions
 * @text Compatibility Options
 *
 * @param altMenuEnabled
 * @text AltMenu Enabled
 * @parent compatibilityOptions
 * @desc Is AltMenuScreen.js enabled in your project ?
 * @type boolean
 * @default false
 *
 * @param maxGlobalStash
 * @text Global Stash Max
 * @parent generalOptions
 * @desc Max amount of items allowed to be stored in the global stash
 * @type number
 * @default 999
 *
 * @param maxTempStash
 * @text Temp Stash Max
 * @parent generalOptions
 * @desc Max amount of items allowed to be stored in the temp stash
 * @type number
 * @default 99
 *
 * @param actorStashSlots
 * @text Actor Starting Stash Slots
 * @parent generalOptions
 * @desc The starting amount of items allowed to be stored in the actors stash.
 * @type number
 * @default 99
 *
 * @param actorItemStack
 * @text Actor Starting Item Stack
 * @parent generalOptions
 * @desc The starting amount an item which can be stacked upon itself for actors stash.
 * @type number
 * @default 99
 *
 * @param forceStackAsSlots
 * @text Count Stack As slots
 * @parent generalOptions
 * @desc Force each item in a stack to count towards your total item stash slots
 * @type boolean
 * @default true
 *
 * @param addGlobalStashToMenu
 * @text Add global Stash To Menu
 * @parent generalOptions
 * @desc Adds the global stash scene as an option in the main menu for quick access
 * @type boolean
 * @default false
 *
 * @param globalMenuName
 * @text Global Stash Menu Entry Name
 * @parent generalOptions
 * @desc The name to use for the global stash menu entry
 * @type string
 * @default Global Stash
 *
 * @param autoAddAfterBattle
 * @text Auto Add After Battle
 * @parent generalOptions
 * @desc Auto add all item rewards after battle to the first available slots across actors and global stash.
 * @type boolean
 * @on Auto Add
 * @off Temp Stash
 * @default false
 *
 * @param generalOptions
 * @text General Options
 *
 * @param tempOptions
 * @text Temp Stash Options
 *
 * @param tempStashCancelAction
 * @text Temp Stash Cancel Action
 * @parent tempOptions
 * @desc The action to perform when the user cancels the temp stash window
 * @type select
 * @option Discard all items
 * @value discard
 * @option Auto add
 * @value auto
 * @option Disallow cancelling
 * @value disallow
 * @default discard
 *
 * @param tempStashWindow
 * @text TempStash Window Options
 * @parent tempOptions
 * @desc Options for the temporary item stash window
 * @type struct<CommandWindowOptions>
 * @default {"x":"0","y":"0","width":"350","maxCols":"1","numVisibleRows":"","fontSize":"24"}
 *
 * @param tempActorSelectWindow
 * @text TempStash Actor Select Window Options
 * @parent tempOptions
 * @desc Options for the temporary item stash actor select window
 * @type struct<CommandWindowOptions>
 * @default {"x":"0","y":"0","width":"350","maxCols":"1","numVisibleRows":"","fontSize":"24"}
 *
 * @param defaultHelpTerms
 * @text Default Help Terms
 * @parent generalOptions
 * @type struct<HelpTerms>
 * @desc The default help terms used when selecting commands
 * @default {"default":"\\i[4] What would you like to do?","use":"\\i[209] Use item in your inventory","discard":"\\i[194] Discard items to be gone forever","trade":"\\i[142] Trade items with another party member","withdraw":"\\i[73] Withdraw items from the global stash","deposit":"\\i[74] Deposit items to the global stash","actorSelect":"\\i[4] Choose another party member"}
 *
 * @param defaultTerms
 * @text Default Terms
 * @parent generalOptions
 * @type struct<Terms>
 * @desc The default terms used for commands in actor, global and temporary stash windows
 * @default {"useTerm":"Use","discardTerm":"Discard","tradeTerm":"Trade","withdrawTerm":"Withdraw","depositTerm":"Deposit","autoTerm":"Auto","quantityTerm":"How many"}
 *
 * @help
--------------------------------------------------------------------------------
 # TERMS OF USE

 MIT License -

 * Free for use in any RPG Maker MV game project, commerical or otherwise

 * Credit may go to FeniXEngine Contributers or FeniXEngine

 * Though not required, you may provide a link back to the original source code,
   repository or website.

 -------------------------------------------------------------------------------
 # Installation

  Place the plugin file directly in your game project's `/js/plugins/`
  directory

 # INFORMATION

 This plugins will provide a new way to interact with your actors inventory
 by granting each actor their very own inventory space! You can trade items
 between your party members, or choose to deposit or widthraw items in the
 global stash which is accessed in a new menu. All items gained through event
 commands are added to a temporary stash which lets you decide what to do with
 an item, all of which can be accessed on the current map.

 Please read the following before proceeding to use the plugin so you have a
 good understanding of the nature of the plugin and how it works.

 ## Temporary Stash

 Because each actor now has their own inventory space, when using event commands
 like "Change Items", "Change Weapons", and "Change Armors" to add items will
 be moved  to the temporary item stash instead of the default inventory.
 Now that items are pushed to the temporary item stash you can then use the
 plugin command(s) or script calls()) below to open the temporary stash
 and let the player decide what to do with it's items.

 ## Global Item Stash

 A global item stash is now accessible via a brand new scene. This scene will
 display all items stored in the global stash and provides you a way to deposit
 and withdraw items. This scene is a way to provide the player with a to move
 items they don't currently require to a stash that is not accessed through the
 main menu but through an event.

 ## Selling/Buying

Selling and buying items at shops now allow you to select an actor before
purchasing or selling. This means all items will be stashed into the selected
actor's item stash.
Only small changes have been made, the first thing to take note of is
before purchasing or selling an item you will be asked to select the actor in
which the item should be added to their inventory space. The second is that the
"possesion" text drawn in the shop will display how many items out of the max amount
allowed to own.

 ## Equipping

 Same as buying or selling, you can only equip an item that the actor owns in
 their own item stash. Nothing has changed here except for not being able to
 equip items that are in another actor's inventory space.

 ## Actor Notetags

<ActorStash>
starting Slots: amount
startingStack: amount
</ActorStash>

 Starting slots allows you to set how many slots an actor has initially upon a
 new game

 Starting stack allows you to set how much an actor can stack per item

 ## Parameters

 Be sure to go through all parameters and read their descriptions for even more
 customizations!

 ## Plugin Commands (Case insensitive)

 ItemStash OpenGlobalStash
 - Opens the global item stash scene

 ItemStash OpenTempStash
 - Opens the temp item stash windows on map

 ItemStash SetMaxStash actorId amount
 - Sets the actors max amount of item slots

 ItemStash SetMaxGlobalStash amount
 - Sets the global stash's max amount of item slots

 ItemStash SetMaxTempStash amount
 - Sets the temporary stash's max amount of item slots

 ItemStash AddToMaxStack actorId amount
 - Adds to the actors max amount of items in a stack

 ItemStash AddToMaxSlots actorId amount
 - Adds  to the amount of items an actor can hold

 ItemStash AddToActor actorId itemType itemId amount
 - Adds item(s) to an actor's item stash

 ItemStash RemoveFromActor actorId itemType itemId amount
 - Removes item(s) from an actor's item stash

 ItemStash AddToGlobal itemType itemId amount
 - Adds item(s) to the global stash

 ItemStash RemoveFromGlobal itemType itemId amount
 - Removes item(s) from the global stash

 ItemStash AddToTemp itemType itemId amount
  - Adds item(s) to the temp item stash

 ItemStash RemoveFromTemp itemType itemId amount
  - Removes item(s) from the temp item stash

 ## Script Calls

 $gameActors.actor(actorId).addToStash()
 - Adds an item to the actors stash.

 $gameActors.actor(actorId).removeFromStash()
 - Removes an item from the actors stash.

 $gameActors.actor(actorId).numItemsInStash()
 - Returns the amount of an item available in the actors stash.

 $gameActors.actor(actorId).canStashItems()
  - Returns true if the actor can stash an item.

 $gameParty.openTempStash()
 - Opens the temporary item stash.

 $gameParty.closeTempStash()
 - Close the temporary item stash.

 $gameParty.numItemsInTempStash({id: 1, type: 'item'})
 - Returns the amount of the item in temp stash.

 $gameParty.numItemsInGlobalStash({id: 1, type: 'item'})
 - Returns the amount of the item in global stash.

 $gameParty.addToTempStash({id: 1, type: 'item'}, amount)
 - Adds an item to the temp stash.

 $gameParty.removeFromTempStash({id: 1, type: 'item'}, amount)
 - Removes an item from the temp stash.

 $gameParty.addToGlobalStash({id: 1, type: 'item'}, amount)
 - Adds an item to the global stash.

 $gameParty.removeFromGlobalStash({id: 1, type: 'item'}, amount)
 - Removes an item from the global stash.

 $gameParty.autoAddToStash({id: 1, type: 'item'}, amount)
 - Automatically adds an item to the first stash which has available space
   First it searches each actor stash and if it can't find available space it
   will place it in the global stash.

 $gameParty.autoRemoveFromStash({id: 1, type: 'item'}, amount)
  - Finds the first occurrence of the item and removes it.

 $gameParty.numItems({id: 1, type: 'item'})
 - Returns the amount of an item across all actors.

 $gameParty.allItems()
 - Returns all items available across all actors.

*/

/*~struct~Terms:
 * @param useTerm
 * @text Use Term
 * @type string
 * @desc The term used for the use item command
 * @default Use
 *
 * @param discardTerm
 * @text Discard Term
 * @type string
 * @desc The term used for the discard item command
 * @default Discard
 *
 * @param tradeTerm
 * @text Trade Term
 * @type string
 * @desc The term used for the trade item command
 * @default Trade
 *
 * @param withdrawTerm
 * @text Withdraw Term
 * @type string
 * @desc The term used for the withdraw item command
 * @default Withdraw
 *
 * @param depositTerm
 * @text Deposit Term
 * @type string
 * @desc The term used for the deposit item command
 * @default Deposit
 *
 * @param autoTerm
 * @text Auto Term
 * @desc The term used for the Auto stash items command
 * @type string
 * @default Auto
 *
 * @param quantityTerm
 * @text Quantity Term
 * @desc The term used for the quantity confirm window.
 * @type string
 * @default How many?
 *
 * @param actorMaxItemsTerm
 * @text Actor Max Item Term
 * @desc The term used for the item's scene status window which displays the
 * actor's max amount of items
 * @type string
 * @default Max Item Slots:
 *
 * @param actorItemsUsedTerm
 * @text Actor Item Used Term
 * @desc The term used for the item's scene status window which displays the
 * actor's amount of items
 * @type string
 * @default Item Slots Used:
 *
 * @param actorItemStackTerm
 * @text Actor Item Stack Term
 * @desc The term used for the item's scene status window which displays the
 * actor's max stack for each item.
 * @type string
 * @default Max Item Stack:
 *
 * @param globalMaxItemsTerm
 * @text Actor Max Item Term
 * @desc The term used for the global stash scene's status window which displays the
 * global stash's max amount of items
 * @type string
 * @default Max Item Slots:
 *
 * @param globalItemsUsedTerm
 * @text Actor Item Used Term
 * @desc The term used for the global stash scene's status window which displays the
 * global stash amount of items stored
 * @type string
 * @default Item Slots Used:
 *
 */

/*~struct~HelpTerms:
 * @param default
 * @text Default Term
 * @type string
 * @desc The term used when no command is selected
 * @default What would you like to do?
 *
 * @param use
 * @text Use Term
 * @type string
 * @desc The term used when the use item command is selected
 * @default Use your items
 *
 * @param discard
 * @text Discard Term
 * @type string
 * @desc The term used when the use discard command is selected
 * @default Discard items to be gone forever
 *
 * @param trade
 * @text Trade Term
 * @type string
 * @desc The term used when the use trade command is selected
 * @default Trade items with another party member
 *
 * @param withdraw
 * @text Withdraw Term
 * @type string
 * @desc The term used when the use withdraw command is selected
 * @default Withdraw items from the global stash
 *
 * @param deposit
 * @text Deposit Term
 * @type string
 * @desc The term used when the use deposit command is selected
 * @default Deposit items to the global stash
 *
 * @param actorSelect
 * @text Actor Select Term
 * @type string
 * @desc The term used when selecting an actor
 * @default Choose another party member
 *
 */

/*~struct~CommandWindowOptions:
 * @param x
 * @text X Position
 * @type number
 * @desc The position of the window on the x axis
 * @default 0
 *
 * @param y
 * @text Y Position
 * @type number
 * @desc The position of the window on the y axis
 * @default 0
 *
 * @param width
 * @text Width
 * @type number
 * @desc The width of the window
 * @default 400
 *
 * @param maxCols
 * @text Max Columns
 * @type number
 * @desc The max amount of columns to display in the window.
 * @default 1
 *
 * @param numVisibleRows
 * @text Number Of Rows
 * @type number
 * @desc The max amount of rows to display in the window before items in the list
 * require scrolling.
 * @default
 *
 * @param fontSize
 * @text Font Size
 * @type number
 * @desc The default font size for the content in the window
 * @default
 *
 */

(function () {
'use strict';

/**
 * Cleans the path by replacing two forward slashes with one.
 *
 * @function cleanPath
 * @since 1.0.0
 * @memberof module:File
 *
 * @param {string} path - The path you want to clean.
 * @return {string} The cleaned string.
 * @example
 * import { cleanPath } from 'fenix-tools'
 *
 * const badUrl = 'C://Path//to/something//'
 *
 * console.log(cleanPath(badUrl)) // => 'C:/Path/to/something/'
 */

/**
 * Recursive method that will convert all string values in an object to a more
 * appropriate type.
 *
 * In MV there are a lot of objects filled with strings of different values, a lot
 * of times we need to convert each value manually, instead use this to quickly
 * deep parse each value from string to the correct type.
 *
 * @function convertParameters
 * @since 1.0.0
 * @memberof module:Utils
 *
 * @param {object} parameters - The string filled object you want converted
 *
 * @returns An object with it's string values converted
 * @example
 *
 * const myParams = { p1: '22', p2: 'true' }
 * convertParameters(myParams) // => { p1: 22, p2: true }
 *
 * const myParams = { p1: '{a: 1'1, c: '2'}', p2: '[{}, {}, {}]' }
 * convertParameters(myParams) // => { p1: {a: 1, c: 2}, p2: [{}, {}, {}] }
 *
 */
function convertParameters (parameters) {
  const _isBoolean = (string) => string === 'true' || string === 'false';

  const _isJson = function (text) {
    try {
      const parsed = JSON.parse(text);
      if (parsed && (typeof parsed === 'object' || Array.isArray(parsed))) {
        return parsed
      }
    } catch (error) { }
    return false
  };

  const result = {};

  Object.keys(parameters).forEach(key => {
    const parameter = parameters[key];
    if (parameter === '') {
      result[key] = '';
    } else if (isFinite(parameter)) {
      result[key] = Number(parameter);
    } else if (_isBoolean(parameter)) {
      result[key] = JSON.parse(parameter);
    } else if (Array.isArray(parameter)) {
      result[key] = Array.from(parameter);
    } else if (_isJson(parameter)) {
      result[key] = convertParameters(JSON.parse(parameter));
    } else {
      result[key] = parameter;
    }
  });
  return result
}

/**
 * Uses regex to recursively filter a string.
 *
 * @function filterText
 * @since 1.0.0
 * @memberof module:Utils
 *
 * @param {string} text - The text you would like to filter
 * @param {regex} regex - The regex pattern to use for filtering
 * @param {function} action - The callback function to evaluate
 *
 * @returns {array} An array of groups that match the evaluation
 * @example
 * import {filterText} from 'fenix-tools'
 *
 * const re = /pattern/g
 * const matches = filterText(text, re, (match) => {
 *  console.log(match) // => The full match group returned from regex
 *  // Perform an evaluation to store specific matches
 * })
 *
 */
function filterText (text, regex, action) {
  const result = [];
  let match;
  const re = regex;
  while (match = re.exec(text)) { // eslint-disable-line no-cond-assign
    if (action(match)) {
      result.push(match);
    }
  }
  return result
}

/**
 * Finds and extracts a notetag from a multiline string of text and returns it's value
 *
 * @function getMultiLineTag
 * @since 1.0.0
 * @memberof module:Utils
 *
 * @param {string} text - The text to evaluate
 * @param {string} tag - The tag to search for in the text
 *
 * @returns {array} - An array of matches containing the values between the tags
 * @example
 * import { getMultiLineTag } from 'fenix-tools'
 *
 * // $dataWeapons[1].note = '<myTag> opt1: value, opt2: value </myTag>'
 *
 * const myNotes = getMultiLineTag($dataWeapons[1].note, 'myTag') // => ['opt1: value, opt2: value']
 *
 */
function getMultiLineTag (text, tag) {
  const result = [];
  const re = /<([^<>]+)>([\s\S]*?)<(\/[^<>]+)>/g;
  const matches = filterText(text, re, (match) => match[1].toLowerCase() === tag.toLowerCase());
  matches.forEach(group => {
    result.push(group[2].trim());
  });
  return result
}

const _Params = convertParameters($plugins.filter(
  plugin => plugin.description.contains('<X_ActorItemStash>'))[0].parameters);

const _Aliases = {};

const _Notetags = { actors: [] };

function parseStringValue (string) {
  return isFinite(string) ? Number(string) : string
}

function toObject (string) {
  const properties = string.split('\n');
  const obj = {};
  properties.forEach((property) => {
    const pair = property.split(':');
    const key = pair[0].trim();
    const value = parseStringValue(pair[1].trim());
    obj[key] = value;
  });
  return obj
}

function getActorNotetags (tag) {
  return $dataActors.map(actor => {
    if (actor === null) {
      return null
    }
    const notetag = getMultiLineTag(actor.note, tag || 'ActorStash')[0];
    if (notetag) {
      return toObject(notetag)
    }
  })
}

const oldDataManagerIsDatabaseLoaded = DataManager.isDatabaseLoaded;
DataManager.isDatabaseLoaded = function () {
  if (!oldDataManagerIsDatabaseLoaded.call(this)) {
    return false
  }
  // We filter because the returned value contains undefined elements
  _Notetags.actors = getActorNotetags('ActorStash');
  return true
};

class Window_MenuActor$1 extends Window_MenuActor {
  constructor (x, y) {
    super(x, y);
    super.initialize(x, y);
    this.select(0);
    this._currentActor = null;
    this._forItemUse = false;
  }

  currentActor () {
    return this._currentActor
  }

  setCurrentActor (actor) {
    this._currentActor = actor;
    this.refresh();
  }

  setForItemUse (boolean) {
    this._forItemUse = boolean;
    this.refresh();
  }

  drawItemImage (index) {
    const actor = $gameParty.members()[index];
    const rect = this.itemRect(index);

    if (_Params.altMenuEnabled) {
      // Code taken from AltMenu plugin
      const bitmapName = $dataActors[actor.actorId()].meta.stand_picture;
      const bitmap = bitmapName ? ImageManager.loadPicture(bitmapName) : null;
      const w = Math.min(rect.width, (bitmapName ? bitmap.width : 144));
      const h = Math.min(rect.height, (bitmapName ? bitmap.height : 144));
      const lineHeight = this.lineHeight();
      if (this._forItemUse) {
        this.changePaintOpacity(actor.isBattleMember());
      } else {
        this.changePaintOpacity(actor !== this._currentActor);
      }
      if (bitmap) {
        const sx = (bitmap.width > w) ? (bitmap.width - w) / 2 : 0;
        const sy = (bitmap.height > h) ? (bitmap.height - h) / 2 : 0;
        const dx = (bitmap.width > rect.width) ? rect.x
          : rect.x + (rect.width - bitmap.width) / 2;
        const dy = (bitmap.height > rect.height) ? rect.y
          : rect.y + (rect.height - bitmap.height) / 2;
        this.contents.blt(bitmap, sx, sy, w, h, dx, dy);
      } else { // when bitmap is not set, do the original process.
        this.drawActorFace(actor, rect.x, rect.y + lineHeight * 2.5, w, h);
      }
      this.changePaintOpacity(true);
    } else {
      // Default behaviour
      const fw = Window_Base._faceWidth;
      if (this._forItemUse) {
        this.changePaintOpacity(actor.isBattleMember());
      } else {
        this.changePaintOpacity(actor !== this._currentActor);
      }
      this.drawActorFace(actor, rect.x + 1, rect.y + 1, fw, rect.height - 2);
      this.changePaintOpacity(true);
    }
  }

  drawItemStatus (index) {
    const actor = $gameParty.members()[index];
    if (!this._forItemUse) {
      this.changePaintOpacity(actor !== this._currentActor);
    }
    super.drawItemStatus(index);
    this.changePaintOpacity(true);
  }
}

class Window_ItemQuantity extends Window_Selectable {
  constructor (x, y, width, height) {
    super();
    super.initialize(x, y, this.windowWidth(), 145);
    this.createButtons();
  }

  windowWidth () {
    return 300
  }

  number () {
    return this._number
  }

  setMax (max) {
    this._number = 1;
    this._max = max;
    this.refresh();
  }

  createButtons () {
    const bitmap = ImageManager.loadSystem('ButtonSet');
    this.downButton = new Sprite_Button();
    this.downButton.bitmap = bitmap;
    this.downButton.setColdFrame(48, 0, 48, 48);
    this.downButton.setHotFrame(48, 48, 48, 48);
    this.downButton.x = 24;
    this.downButton.y = this.itemY() + 10;
    this.downButton.setClickHandler(this.onDownButton.bind(this));

    this.upButton = new Sprite_Button();
    this.upButton.bitmap = bitmap;
    this.upButton.setColdFrame(48 * 2, 0, 48, 48);
    this.upButton.setHotFrame(48 * 2, 48, 48, 48);
    this.upButton.x = this.downButton.x + 50;
    this.upButton.y = this.itemY() + 10;
    this.upButton.setClickHandler(this.onUpButton.bind(this));

    this.okButton = new Sprite_Button();
    this.okButton.bitmap = bitmap;
    this.okButton.setColdFrame(48 * 4, 0, 48 * 2, 48);
    this.okButton.setHotFrame(48 * 4, 48, 48 * 2, 48);
    this.okButton.x = this.upButton.x + 50;
    this.okButton.y = this.itemY() + 10;
    this.okButton.setClickHandler(this.onOkButton.bind(this));
    this.addChild(this.upButton);
    this.addChild(this.downButton);
    this.addChild(this.okButton);
  }

  drawNumber () {
    const x = this.cursorX();
    const y = this.itemY();
    const width = this.cursorWidth() - this.textPadding();
    this.resetTextColor();
    this.drawText(this._number, x, y, width, 'right');
  }

  update () {
    super.update();
    this.processNumberChange();
  }

  refresh () {
    this.contents.clear();
    super.refresh();
    this.drawNumber();
    this.drawText(_Params.defaultTerms.quantityTerm, 0, 0, this.contentsWidth(), 'center');
  }

  itemY () {
    return 48
  }

  cursorWidth () {
    const digitWidth = this.textWidth('0');
    return this.maxDigits() * digitWidth + this.textPadding() * 2
  }

  cursorX () {
    return this.contentsWidth() - this.cursorWidth() - this.textPadding()
  }

  updateCursor () {
    this.setCursorRect(this.cursorX(), this.itemY(),
      this.cursorWidth(), this.lineHeight());
  }

  maxDigits () {
    return 2
  }

  isOkTriggered () {
    return Input.isTriggered('ok')
  }

  playOkSound () {}

  processNumberChange () {
    if (this.isOpenAndActive()) {
      if (Input.isRepeated('right')) {
        this.changeNumber(1);
      }
      if (Input.isRepeated('left')) {
        this.changeNumber(-1);
      }
      if (Input.isRepeated('up')) {
        this.changeNumber(10);
      }
      if (Input.isRepeated('down')) {
        this.changeNumber(-10);
      }
    }
  }

  changeNumber (amount) {
    const lastNumber = this._number;
    this._number = (this._number + amount).clamp(1, this._max);
    if (this._number !== lastNumber) {
      SoundManager.playCursor();
      this.refresh();
    }
  }

  onDownButton () {
    this.changeNumber(-1);
  }

  onUpButton () {
    this.changeNumber(1);
  }

  onOkButton () {
    this.processOk();
  }
}

function itemType (item) {
  if (DataManager.isItem(item)) {
    return 'item'
  } else if (DataManager.isWeapon(item)) {
    return 'weapon'
  } else if (DataManager.isArmor(item)) {
    return 'armor'
  } else {
    return null
  }
}

class Scene_ItemStashBase extends Scene_ItemBase {
  constructor () {
    super();
    super.initialize();
    this.updateActor();
    this._activeWindow = null;
    this._tradeActor = null;
  }

  start () {
    super.start();
    this._actorSelectWindow.refresh();
  }

  updateHelp () {}

  update () {
    super.update();
    this.updateHelp();
  }

  tradeActor () {
    return this._tradeActor
  }

  setTradeActor (actor) {
    this._tradeActor = actor;
  }

  create () {
    super.create();
    this.createWindowLayer();
    this.createHelpWindow();
  }

  createQuantityWindow () {
    this._quantityWindow = new Window_ItemQuantity(0, 0);
    this._quantityWindow.x = Graphics.boxWidth / 2 - this._quantityWindow.width / 2;
    this._quantityWindow.y = Graphics.boxHeight / 2 - this._quantityWindow.height / 2;
    this._quantityWindow.setHandler('ok', this.onQuantityOk.bind(this));
    this._quantityWindow.setHandler('cancel', this.onQuantityCancel.bind(this));
    this._quantityWindow.hide();
    this.addChild(this._quantityWindow);
  }

  createActorSelectWindow () {
    this._actorSelectWindow = new Window_MenuActor$1();
    this._actorSelectWindow.setHandler('ok', this.onActorOk.bind(this));
    this._actorSelectWindow.setHandler('cancel', this.onActorCancel.bind(this));
    this._actorSelectWindow.setCurrentActor(this._actor);
    this._actorSelectWindow.reserveFaceImages();
    this.addWindow(this._actorSelectWindow);
    /**
     * Set default actorWindow to ours because "actorWindow" is too general of
     * a name and determineItem() will not work without it being named that
     */
    this._actorWindow = this._actorSelectWindow;
  }

  activeWindow () {
    return this._activeWindow
  }

  activateActorSelect () {
    this._helpWindow.setText(_Params.defaultHelpTerms.actorSelect);
    this._actorSelectWindow.selectLast();
    this._actorSelectWindow.activate();
    this._actorSelectWindow.show();
  }

  deactivateActorSelect () {
    this._actorSelectWindow.deactivate();
    this._actorSelectWindow.hide();
  }

  activateWindow (window, show, windowToClose, hide = false) {
    if (windowToClose) {
      this.deactivateWindow(windowToClose, hide);
    }
    if (show) {
      window.show();
    }
    window.activate();
    window.refresh();
    this._activeWindow = window;
  }

  deactivateWindow (window, hide) {
    if (hide) {
      window.hide();
    }
    window.deactivate();
    this._activeWindow = null;
  }

  currentQuantity () {
    return this._quantityWindow.number() || 1
  }

  user () {
    return this._actorSelectWindow.currentActor()
  }

  stashItem () {
    const item = this._itemWindow.item();

    return {
      id: item.id,
      type: itemType(item)
    }
  }

  makeMenuTradeActorNext () {
    const members = $gameParty.members();
    let index = members.indexOf(this._tradeActor);

    if (index >= 0) {
      index = (index + 1) % members.length;
      this.setTradeActor(members[index]);
    } else {
      this.setTradeActor(members[0]);
    }
    this.onTradeActorChange();
  }

  makeMenuTradeActorPrevious () {
    const members = $gameParty.members();
    let index = members.indexOf(this._tradeActor);

    if (index >= 0) {
      index = (index + members.length - 1) % members.length;
      this.setTradeActor(members[index]);
    } else {
      this.setTradeActor(members[0]);
    }
    this.onTradeActorChange();
  }

  performTradeAction (giver = null, receiver = null, item = this.itemStash(), amount, callback) {
    if (receiver && receiver.canStashItems(item, amount) === false) {
      SoundManager.playBuzzer();
      return
    }

    SoundManager.playOk();

    if (receiver === null) {
      $gameParty.addToGlobalStash(item, amount);
    } else {
      receiver.addToStash(item, amount);
    }

    if (giver === null) {
      $gameParty.removeFromGlobalStash(item, amount);
    } else {
      giver.removeFromStash(item, amount);
    }

    if (callback) {
      callback.call(this);
    }
  }

  performDiscardAction (target, item, amount) {
    target.removeFromStash(item, amount);
  }

  onTradeActorChange () {}

  onQuantityOk () {
    $gameParty.setLastItem(this.item());
    this.onQuantityCancel();
  }

  onQuantityCancel () {
    this.deactivateWindow(this._quantityWindow, true);
    this.activateWindow(this._itemWindow);
  }

  onActorOk () {
    const selectedActor = $gameParty.members()[this._actorSelectWindow.index()];
    this.setTradeActor(selectedActor);
  }
}

class Window_GlobalCommands extends Window_Command {
  constructor (x, y) {
    super();
    super.initialize(x, y);
  }

  windowHeight () {
    return this.fittingHeight(4)
  }

  makeCommandList () {
    const terms = _Params.defaultTerms;
    this.addCommand(terms.withdrawTerm, 'withdraw', true);
    this.addCommand(terms.depositTerm, 'deposit', true);
    this.addCommand(terms.discardTerm, 'discard', true);
  }
}

class Window_ItemStashCategory extends Window_Command {
  constructor (x, y) {
    super();
    super.initialize(x, y, this.windowWidth(), this.windowHeight());
    this._itemCommandWindow = null;
  }

  windowWidth () {
    return 240
  }

  setItemCommandWindow (window) {
    this._itemCommandWindow = window;
    this.refresh();
  }

  update () {
    super.update();
    if (this._itemWindow) {
      this._itemWindow.setCategory(this.currentSymbol());
    }
    if (this._tradeWindow) {
      this._tradeWindow.setCategory(this.currentSymbol());
    }
  }

  isCategoryEnabled () {
    if (!this._itemCommandWindow) {
      return
    }
    return this._itemCommandWindow.currentSymbol() !== 'discard'
  }

  makeCommandList () {
    this.addCommand(TextManager.item, 'item');
    this.addCommand(TextManager.weapon, 'weapon');
    this.addCommand(TextManager.armor, 'armor');
    this.addCommand(TextManager.keyItem, 'keyItem', this.isCategoryEnabled());
  }

  setItemWindow (itemWindow) {
    this._itemWindow = itemWindow;
  }

  setTradeWindow (tradeWindow) {
    this._tradeWindow = tradeWindow;
  }
}

function itemDataArray (type) {
  switch (type) {
    case 'armor': return $dataArmors
    case 'weapon': return $dataWeapons
    case 'item': return $dataItems
    default: return null
  }
}

class Window_ItemStashBase extends Window_ItemList {
  constructor (x, y, width, height) {
    super();
    super.initialize(x, y, width, height);
    this._isAlwaysEnabled = false;
    this._stashType = null;
    this._showAllItems = false;
  }

  update () {
    super.update();
  }

  refresh () {
    super.refresh();
  }

  /**
  * We overwrite reselect to ensure the item is not empty before re-selecting
  * it to circumvent MV's bad behavior of selecting an empty slot.
  */
  reselect () {
    const item = this._index > -1 ? this._data[this._index] : null;
    if (item) {
      this.select(this._index);
    } else {
      const newIndex = this._index > 0 ? this._index - 1 : this._index;
      this.select(newIndex);
    }
  }

  setActor (actor) {
    this._actor = actor;
    this.refresh();
  }

  setStashType (type) {
    this._stashType = type;
    this.refresh();
  }

  setShowAllItems (boolean) {
    this._showAllItems = boolean;
    this.refresh();
  }

  isAlwaysEnabled () {
    return this._isAlwaysEnabled
  }

  setAlwaysEnabled (boolean) {
    this._isAlwaysEnabled = boolean;
    this.refresh();
  }

  isEnabled (item) {
    return item && this.isAlwaysEnabled() ? true : $gameParty.canUse(item)
  }

  /**
   * Because the object used for an actors item stash is a simple container with
   * only the item id and the type. We need to fetch the correct $dataItems object
   * and return a an array of default MV items data.
   *
   * @param {*} stashItems - An array of stash item objects
   */

  parseStashData (stashItems) {
    return stashItems.map(stashItem =>
      itemDataArray(stashItem.type)[stashItem.id])
  }

  stashData () {
    switch (this._stashType) {
      case 'actor': return this._actor ? this.parseStashData(this._actor.itemStash()) : []
      case 'global': return this.parseStashData($gameParty.globalItemStash())
      case 'temp': return this.parseStashData($gameParty.tempItemStash())
      default: return []
    }
  }

  numItemsInStash (stashItem) {
    if (!stashItem) { return }
    switch (this._stashType) {
      case 'actor': return this._actor.numItemsInStash(stashItem)
      case 'global': return $gameParty.numItemsInGlobalStash(stashItem)
      case 'temp': return $gameParty.numItemsInTempStash(stashItem)
      default: return 0
    }
  }

  stashItem (index) {
    const item = index >= 0 ? this._data[index] : this.item();
    if (item) {
      return {
        id: item.id,
        type: itemType(item)
      }
    }
  }
}

class Window_Stash extends Window_ItemStashBase {
  constructor (x, y, width, height) {
    super();
    super.initialize(x, y, width, height);
  }

  maxCols () {
    return this.width > Graphics.boxWidth / 2 ? 2 : 1
  }

  includes (item) {
    if (!item) {
      return false
    }

    if (this._showAllItems) {
      return true
    }

    switch (this._category) {
      case 'item':
        return DataManager.isItem(item) && item.itypeId === 1
      case 'weapon':
        return DataManager.isWeapon(item)
      case 'armor':
        return DataManager.isArmor(item)
      case 'keyItem':
        return DataManager.isItem(item) && item.itypeId === 2
      default:
        return false
    }
  }

  drawItem (index) {
    const item = this._data[index];
    if (item) {
      const amount = this.numItemsInStash(this.stashItem(index));
      const numberWidth = this.numberWidth();
      const rect = this.itemRect(index);
      rect.width -= this.textPadding();
      this.changePaintOpacity(this.isEnabled(item));

      this.drawItemName(item, rect.x, rect.y, rect.width - numberWidth);
      this.drawText(`x${amount}`, rect.x, rect.y, rect.width, 'right');
      this.changePaintOpacity(1);
    }
  }

  makeItemList () {
    this._data = this.stashData().filter((stashItem) => this.includes(stashItem));
    if (this.includes(null)) {
      this._data.push(null);
    }
  }
}

class Window_ItemStatus extends Window_SkillStatus {
  constructor (x, y, width, height) {
    super();
    super.initialize(x, y, width, height);
    this._isGlobalStash = false;
  }

  setForGlobalStash (boolean = true) {
    this._isGlobalStash = boolean;
    this.refresh();
  }

  isForGlobalStash () {
    return this._isGlobalStash
  }

  drawActorLevel (actor, x, y) {
    this.changeTextColor(this.systemColor());
    this.drawText(TextManager.levelA, x, y, 48);
    this.resetTextColor();
    this.drawText(actor.level, x + 15, y, 36, 'right');
  }

  drawGlobalStashStatus (x, y) {
    const terms = _Params.defaultTerms;
    const width = this.width;
    const x2 = x + this.textWidth(terms.globalItemsUsedTerm) + this.standardPadding();
    const y2 = y + this.lineHeight();
    const maxSlots = $gameParty._maxGlobalStashSlots;
    const slotsUsed = $gameParty.globalItemStashSlotsUsed();
    this.drawText(terms.globalItemsUsedTerm, x, y, width, 'left');
    this.drawText(terms.globalMaxItemsTerm, x, y2, width, 'left');
    this.drawText(slotsUsed, x2, y, width, 'left');
    this.drawText(maxSlots, x2, y2, width, 'left');
  }

  drawActorItemStashStatus (x, y) {
    const terms = _Params.defaultTerms;
    const width = this.width - 170;
    const x2 = x + this.textWidth(terms.actorItemsUsedTerm) + this.standardPadding();
    const y2 = y + this.lineHeight();
    const maxSlots = this._actor.maxItemStashSlots();
    const maxItemStack = this._actor.maxItemStack();
    const slotsUsed = this._actor.itemStashSlotsUsed();
    this.drawText(terms.actorItemsUsedTerm, x, y, width, 'left');
    this.drawText(terms.actorMaxItemsTerm, x, y2, width, 'left');
    this.drawText(terms.actorItemStackTerm, x, y2 + this.lineHeight(), width, 'left');
    this.drawText(slotsUsed, x2, y, width, 'left');
    this.drawText(maxSlots, x2, y2, width, 'left');
    this.drawText(maxItemStack, x2, y2 + this.lineHeight(), width, 'left');
  }

  refresh () {
    this.contents.clear();
    const h = this.height - this.padding * 2;
    const y = h / 2 - this.lineHeight() * 1.5;

    if (this._actor) {
      this.drawActorFace(this._actor, 0, 0, 144, h);
      this.contents.fontSize = this.standardFontSize() - 4;
      this.drawActorName(this._actor, 162, y);
      this.drawActorLevel(this._actor, 162, y + this.lineHeight() * 1);
      this.drawActorItemStashStatus(280, y);
      this.contents.fontSize = this.standardFontSize();
    } else if (this.isForGlobalStash()) {
      this.contents.fontSize = this.standardFontSize() - 4;
      this.drawGlobalStashStatus(0, y);
    }
  }
}

/**
 * A new Scene to handle new actor stash/trading and discarding of items
 */
class Scene_GlobalStash extends Scene_ItemStashBase {
  constructor () {
    super();
    super.initialize();
    this.updateActor();
    this._activeWindow = null;
  }

  start () {
    super.start();
    this._statusWindow.refresh();
  }

  updateHelp () {
    if (this._commandWindow &&
        (this._commandWindow.active || this._categoryWindow.active)) {
      const helpTerms = _Params.defaultHelpTerms;

      switch (this._commandWindow.currentSymbol()) {
        case 'withdraw':
          this._helpWindow.setText(helpTerms.withdraw);
          break
        case 'deposit':
          this._helpWindow.setText(helpTerms.deposit);
          break
        case 'discard':
          this._helpWindow.setText(helpTerms.discard);
          break

        default:
          this._helpWindow.setText(helpTerms.default);
          break
      }
    }
  }

  create () {
    super.create();
    this.createCommandsWindow();
    this.createStatusWindow();
    this.createCategoryWindow();
    this.createItemWindow();
    this.createActorItemWindow();
    this.createActorSelectWindow();
    this.createQuantityWindow();
    this._actorSelectWindow.setForItemUse(true);
  }

  createCommandsWindow () {
    this._commandWindow = new Window_GlobalCommands();
    this._commandWindow.setHelpWindow(this._helpWindow);
    this._commandWindow.y = this._helpWindow.height;
    this._commandWindow.x = 0;

    this._commandWindow.setHandler('ok', this.onOkCommand.bind(this));
    this._commandWindow.setHandler('cancel', this.popScene.bind(this));
    this.addWindow(this._commandWindow);
  }

  createCategoryWindow () {
    this._categoryWindow = new Window_ItemStashCategory();
    this._categoryWindow.setHelpWindow(this._helpWindow);
    this._categoryWindow.setItemCommandWindow(this._commandWindow);
    this._categoryWindow.y = this._helpWindow.height;
    this._categoryWindow.x = 0;
    this._categoryWindow.hide();
    this._categoryWindow.deactivate();
    this._categoryWindow.setHandler('ok', this.onCategoryOk.bind(this));
    this._categoryWindow.setHandler('cancel', this.onCategoryCancel.bind(this));
    this._categoryWindow.setHandler('pagedown', this.nextActor.bind(this));
    this._categoryWindow.setHandler('pageup', this.previousActor.bind(this));
    this.addWindow(this._categoryWindow);
  }

  createStatusWindow () {
    const wx = this._commandWindow.width;
    const wy = this._helpWindow.height;
    const ww = Graphics.boxWidth - wx;
    const wh = this._commandWindow.height;
    this._statusWindow = new Window_ItemStatus(wx, wy, ww, wh);
    this._statusWindow.reserveFaceImages();
    this._statusWindow.setForGlobalStash();
    this.addWindow(this._statusWindow);
  }

  createItemWindow () {
    const wy = this._commandWindow.y + this._commandWindow.height;
    const wh = Graphics.boxHeight - wy;
    this._itemWindow = new Window_Stash(0, wy, Graphics.boxWidth, wh);
    this._itemWindow.setHelpWindow(this._helpWindow);
    this._itemWindow.setHandler('ok', this.onItemOk.bind(this));
    this._itemWindow.setHandler('cancel', this.onItemCancel.bind(this));
    this._itemWindow.setStashType('global');
    this._itemWindow.setAlwaysEnabled(true);
    this._itemWindow.setShowAllItems(true);
    this.addWindow(this._itemWindow);
    this._categoryWindow.setItemWindow(this._itemWindow);
  }

  createActorItemWindow () {
    const wy = this._commandWindow.y + this._commandWindow.height;
    const wh = Graphics.boxHeight - wy;
    this._actorItemWindow = new Window_Stash(0, wy, Graphics.boxWidth / 2, wh);
    this._actorItemWindow.setHelpWindow(this._helpWindow);
    this._actorItemWindow.setHandler('ok', this.onItemOk.bind(this));
    this._actorItemWindow.setHandler('cancel', this.onItemCancel.bind(this));
    this._actorItemWindow.setActor(this._actor);
    this._actorItemWindow.setStashType('actor');
    this._actorItemWindow.setAlwaysEnabled(true);
    this._actorItemWindow.hide();
    this.addWindow(this._actorItemWindow);
    this._categoryWindow.setTradeWindow(this._actorItemWindow);
  }

  onOkCommand () {
    this.deactivateWindow(this._commandWindow, true);
    this._itemWindow.setShowAllItems(false);

    if (this._commandWindow.currentSymbol() === 'discard') {
      this.activateWindow(this._categoryWindow, true);
      this._categoryWindow.refresh();
    } else {
      this.activateActorSelect();
    }
  }

  onCategoryOk () {
    if (this._commandWindow.currentSymbol() === 'discard' ||
          this._commandWindow.currentSymbol() === 'withdraw') {
      this.activateWindow(this._itemWindow);
      this._itemWindow.selectLast();
    } else {
      this.activateWindow(this._actorItemWindow);
      this._actorItemWindow.selectLast();
    }
  }

  onCategoryCancel () {
    this._itemWindow.deactivate();
    this._categoryWindow.select(0);
    this._categoryWindow.hide();
    this._itemWindow.width = Graphics.boxWidth;
    this._itemWindow.x = 0;
    this._actorItemWindow.hide();
    this._statusWindow.setActor(null);
    if (this._commandWindow.currentSymbol() !== 'discard') {
      this.activateActorSelect();
    } else {
      this.onActorCancel();
    }
  }

  onActorCancel () {
    this._statusWindow.setForGlobalStash(true);
    this.deactivateActorSelect();
    this.activateWindow(this._commandWindow, true);
    this._itemWindow.setShowAllItems(true);
  }

  onActorOk () {
    super.onActorOk();
    this._actor = this.tradeActor();

    this.activateWindow(this._categoryWindow, true);
    this.deactivateActorSelect();

    this._statusWindow.setForGlobalStash(false);
    this._statusWindow.setActor(this.actor());
    this._actorItemWindow.setActor(this.actor());

    this._itemWindow.width = Graphics.boxWidth / 2;
    this._itemWindow.x = this._actorItemWindow.x + this._actorItemWindow.width;
    this._itemWindow.setShowAllItems(false);
    this._itemWindow.refresh();
    this._actorItemWindow.show();
  }

  onActorChange () {
    this._statusWindow.setActor(this._actor);
    this._itemWindow.setActor(this._actor);
    this._actorItemWindow.setActor(this._actor);
    this._statusWindow.refresh();
    this._itemWindow.refresh();
    this._actorItemWindow.refresh();
    this._activeWindow.activate();
  }

  item () {
    return this._itemWindow.stashItem()
  }

  onItemOk () {
    let amount = 0;
    const commandSymbol = this._commandWindow.currentSymbol();

    if (commandSymbol === 'withdraw' || commandSymbol === 'discard') {
      amount = $gameParty.numItemsInGlobalStash(this.item());
    } else if (commandSymbol === 'deposit') {
      const actorItem = this._actorItemWindow.stashItem();
      amount = this.actor().numItemsInStash(actorItem);
    }

    this._quantityWindow.setMax(amount);

    if (amount === 1) {
      this.onQuantityOk();
      return
    }

    this._activeWindow.deactivate();
    this.activateWindow(this._quantityWindow, true);
  }

  onQuantityOk () {
    super.onQuantityOk();
    const amount = this._quantityWindow.number();

    this.onQuantityCancel();

    switch (this._commandWindow.currentSymbol()) {
      case 'withdraw':
        this.performTradeAction(null, this.actor(), this.stashItem(), amount, () => {
          this._itemWindow.selectLast();
          this.activateWindow(this._itemWindow);
        });
        break

      case 'deposit':
        const actorItem = this._actorItemWindow.stashItem();
        this.performTradeAction(this.actor(), null, actorItem, amount, () => {
          this._actorItemWindow.selectLast();
          this.activateWindow(this._actorItemWindow);
        });
        break

      case 'discard':
        $gameParty.removeFromGlobalStash(this.item(), amount);
        this._itemWindow.selectLast();
        this.activateWindow(this._itemWindow);
        break
    }
    this._statusWindow.refresh();
    this._itemWindow.refresh();
    this._actorItemWindow.refresh();
  }

  onQuantityCancel () {
    super.onQuantityCancel();
    const commandSymbol = this._commandWindow.currentSymbol();

    if (commandSymbol === 'withdraw' || commandSymbol === 'discard') {
      this.activateWindow(this._itemWindow);
    } else {
      this.activateWindow(this._actorItemWindow);
    }
  }

  onItemCancel () {
    this._itemWindow.deactivate();
    this._itemWindow.deselect();
    this._actorItemWindow.deactivate();
    this._actorItemWindow.deselect();
    this.activateWindow(this._categoryWindow);
  }
}

_Aliases.gameInterpreterPluginCommand = Game_Interpreter.prototype.pluginCommand;

Game_Interpreter.prototype.pluginCommand = function (command, args) {
  if (command.toLowerCase() === 'itemstash') {
    const actor = $gameActors.actor(Number(args[1])) || null;
    const actorStashItem = { type: args[2], id: Number(args[3]) };
    const actorAmount = Number(args[4]);

    const partyStashItem = { type: args[1], id: Number(args[2]) };
    const partyAmount = Number(args[3]);

    switch (args[0].toLowerCase()) {
      case 'openglobalstash':
        SceneManager.push(Scene_GlobalStash);
        break
      case 'opentempstash':
        $gameParty.openTempStash();
        break
      case 'addtomaxstack':
        actor.setMaxItemStack(actor.maxItemStack() + Number(args[2]));
        break
      case 'addtomaxslots':
        actor.setMaxStashSlots(actor.maxItemStashSlots() + Number(args[2]));
        break
      case 'setmaxstash':
        actor.setMaxStashSlots(args[2]);
        break
      case 'setmaxglobalstash':
        actor.setMaxGlobalStashSlots(args[1]);
        break
      case 'setmaxtempstash':
        $gameParty.setMaxTempStash(args[1]);
        break
      case 'addtoactor':
        actor.addToStash(actorStashItem, actorAmount);
        break
      case 'removefromactor':
        actor.removeFromStash(actorStashItem, actorAmount);
        break
      case 'addtoglobal':
        $gameParty.addToGlobalStash(partyStashItem, partyAmount);
        break
      case 'removefromglobal':
        $gameParty.removeFromGlobalStash(partyStashItem, partyAmount);
        break
      case 'addtotemp':
        $gameParty.addToTempStash(partyStashItem, partyAmount);
        break
      case 'removefromtemp':
        $gameParty.removeFromTempStash(partyStashItem, partyAmount);
        break
      default:
        throw new Error('Unable to find plugin command')
    }
  } else {
    _Aliases.gameInterpreterPluginCommand.call(this, command, args);
  }
};

function doubleMatch (a, b, c, d, action) {
  if (a === b && c === d) {
    if (action) { action(); }
    return true
  }
  return false
}

/**
 * Filters an array by comparing with action function
 *
 * @param {array} array The array to filter
 * @param {function} action A function to compare with the array
 */
function selfFilter (array, action) {
  return array.filter(
    (item, index, self) => index === self.findIndex(t => action(t, item)))
}

function times (amount, action) {
  for (let i = amount; i > 0; i--) {
    action(i);
  }
}

function filterDoubleItems (arr) {
  return selfFilter(arr, (prev, current) => {
    return doubleMatch(prev.id, current.id, prev.type, current.type)
  })
}

function addToStash (item, amount, array) {
  times(amount,
    () => array.push({ id: item.id, type: item.type }));
}

function removeFromStash (item, amount, stash) {
  times(amount, () => {
    let removed = false;

    stash.forEach((stashItem, i) => {
      if (removed) { return }
      doubleMatch(item.id, stashItem.id, item.type, stashItem.type, () => {
        stash.splice(i, 1);
        removed = true;
      });
    });
  });
}

_Aliases.gameActorSetup = Game_Actor.prototype.setup;
Game_Actor.prototype.setup = function (actorId) {
  _Aliases.gameActorSetup.call(this, actorId);
  const actorNotetag = _Notetags.actors[actorId];
  this._itemStash = [];
  this._itemStashSlots = actorNotetag ? actorNotetag.startingSlots : _Params.actorStashSlots;
  this._maxItemStack = actorNotetag ? actorNotetag.startingStack : _Params.actorItemStack;
};

Game_Actor.prototype.itemStashData = function (type) {
  const stash = this.itemStash();
  const matchType = (item, type) => {
    if (item.type === type) {
      return item
    }
  };
  const items = stash.filter(i => matchType(i, 'item')).map(j => $dataItems[j.id]);
  const weapons = stash.filter(i => matchType(i, 'weapon')).map(j => $dataWeapons[j.id]);
  const armors = stash.filter(i => matchType(i, 'armor')).map(j => $dataArmors[j.id]);

  switch (type) {
    case 'items': return items
    case 'weapons': return weapons
    case 'armors': return armors
    default: return items.concat(armors).concat(weapons)
  }
};

Game_Actor.prototype.itemStash = function () {
  return filterDoubleItems(this._itemStash)
};

Game_Actor.prototype.itemStashAmount = function () {
  return this._itemStashSlots - this.itemStash().length
};

Game_Actor.prototype.addToStash = function (item, amount = 1) {
  if (this.canStashItems(item, amount)) {
    addToStash(item, amount, this._itemStash, this._itemStashSlots);
  }
};

Game_Actor.prototype.removeFromStash = function (item, amount = 1) {
  removeFromStash(item, amount, this._itemStash);
};

Game_Actor.prototype.numItemsInStash = function (item) {
  return this._itemStash.filter(
    stashItem => doubleMatch(item.id, stashItem.id, item.type, stashItem.type)
  ).length
};

Game_Actor.prototype.canStashItems = function (item, amount) {
  if (item) {
    const itemOwned = this.numItemsInStash(item) > 0;
    if (itemOwned) {
      return this.canStackItem(item, amount)
    }
    return this.itemStashSlotsUsed() < this._itemStashSlots && this.canStackItem(item, amount)
  } else {
    return this.itemStashSlotsUsed() < this._itemStashSlots
  }
};

Game_Actor.prototype.canStackItem = function (item, amount = 1) {
  return amount + this.numItemsInStash(item) <= this.maxItemStack()
};

Game_Actor.prototype.setMaxStashSlots = function (value) {
  this._itemStashSlots = value;
};

Game_Actor.prototype.setMaxItemStack = function (value) {
  this._maxItemStack = value;
};

Game_Actor.prototype.maxItemStack = function (value) {
  return this._maxItemStack
};

Game_Actor.prototype.maxItemStashSlots = function (value) {
  return this._itemStashSlots
};

Game_Actor.prototype.itemStashSlotsUsed = function () {
  if (_Params.forceStackAsSlots) {
    return this._itemStash.length
  } else {
    return this.itemStash().length
  }
};

Game_Actor.prototype.changeEquip = function (slotId, item) {
  const autoAdd = (item) => {
    if (this.canStashItems(item)) {
      this.addToStash(itemToUnequip);
    } else {
      $gameParty.autoAddToStash(item);
    }
  };

  const itemToUnequip = {
    id: this._equips[slotId].itemId(),
    type: this._equips[slotId]._dataClass
  };

  const canUnequip = itemToUnequip.id > 0;

  // If swapping out equipped item with an empty slot (clear command)
  if (!item && canUnequip) {
    const canMoveItem = this.canStashItems(itemToUnequip) || $gameParty.canAddToGlobalStash(1);

    if (canMoveItem) {
      autoAdd(itemToUnequip);
      this._equips[slotId].setObject(item);
    }
    this.refresh();
  } else if (item) {
    const itemToEquip = { id: item.id, type: itemType(item) };
    const isItemOwned = this.numItemsInStash(itemToEquip) > 0;

    // If both item from slot and item in inventory are the same
    if (itemToUnequip.id === item.id) {
      this._equips[slotId].setObject(null);
      autoAdd(itemToEquip);
      return
    }

    if (isItemOwned && this.equipSlots()[slotId] === item.etypeId) {
      this.removeFromStash(itemToEquip);
      // only add to stash if there is an item to unequip
      if (canUnequip) {
        autoAdd(itemToUnequip);
      }
      this._equips[slotId].setObject(item);
      this.refresh();
    }
  }
};

Game_Actor.prototype.bestEquipItem = function (slotId) {
  const etypeId = this.equipSlots()[slotId];
  const equipItems = this.itemStashData('armors').concat(this.itemStashData('weapons'));
  const items = equipItems.filter((item) => {
    return item.etypeId === etypeId && this.canEquip(item)
  });
  let bestItem = null;
  let bestPerformance = -1000;

  for (let i = 0; i < items.length; i++) {
    const performance = this.calcEquipItemPerformance(items[i]);
    if (performance > bestPerformance) {
      bestPerformance = performance;
      bestItem = items[i];
    }
  }
  return bestItem
};

_Aliases.gamePlayerCanMove = Game_Player.prototype.canMove;

Game_Player.prototype.canMove = function () {
  if ($gameParty.isActorSelectOpen()) {
    return false
  }
  return _Aliases.gamePlayerCanMove.call(this)
};

/**
 * Game_Party
 *
 * A stash item is an item to be added to an actors stash, all items received
 * will be assigned to a temp stash this temp stash will reset upon leaving a
 * map.
 *
 * Overwrites:
 * numItems()
 * allItems()
 *
 * Aliases:
 * gainItem
 *
 */
_Aliases.gamePartyInitialize = Game_Party.prototype.initialize;

Game_Party.prototype.initialize = function () {
  _Aliases.gamePartyInitialize.call(this);
  this._tempItemStash = [];
  this._globalItemStash = [];
  this._maxGlobalStashSlots = _Params.maxGlobalStash;
  this._maxTempStashSlots = _Params.maxTempStash;
  this._isActorSelectOpen = false;
  this._needsStashAssignment = false;
};

_Aliases.gamePartyGainItem = Game_Party.prototype.gainItem;

Game_Party.prototype.gainItem = function (item, amount, includeEquip) {
  _Aliases.gamePartyGainItem.call(this, item, amount, includeEquip);
  const currentScene = SceneManager._scene.constructor.name.toString();

  if (!item) { return }
  const stashItem = { id: item.id, type: itemType(item) };

  if (currentScene === 'Scene_Battle' && amount > 0) {
    if (_Params.autoAddAfterBattle) {
      this.autoAddToStash(stashItem, amount);
      return
    }
  } else if ((currentScene === 'Scene_Map') && amount > 0) {
    this.addToTempStash(stashItem, amount);
  } else if (amount < 0) {
    this.autoRemoveFromStash(stashItem, Math.abs(amount));
  }
};

Game_Party.prototype.numItems = function (item) {
  return this.allStashItems().filter(_item => {
    return doubleMatch(_item.id, item.id, _item.type, itemType(item))
  }).length
};

Game_Party.prototype.allItems = function () {
  const result = [];
  this.members().forEach(actor => result.push(...actor.itemStashData()));
  return result.filter(result => result)
};

Game_Party.prototype.allStashItems = function () {
  const result = [];
  this.members().forEach(actor => result.push(...actor._itemStash));
  return result.filter(result => result)
};

Game_Party.prototype.globalItemStash = function () {
  return filterDoubleItems(this._globalItemStash)
};

Game_Party.prototype.globalItemStashSlotsUsed = function () {
  if (_Params.forceStackAsSlots) {
    return this._globalItemStash.length
  } else {
    return this.globalItemStash()
  }
};

Game_Party.prototype.tempItemStash = function () {
  return filterDoubleItems(this._tempItemStash)
};

Game_Party.prototype.stashItemsToAssign = function () {
  return this._tempItemStash
};

Game_Party.prototype.tempStashHasItems = function () {
  return this._tempItemStash.length > 0
};

Game_Party.prototype.needsStashAssignment = function () {
  return this.tempStashHasItems() && this._needsStashAssignment
};

Game_Party.prototype.openTempStash = function () {
  this._needsStashAssignment = true;
};

Game_Party.prototype.closeTempStash = function () {
  this._needsStashAssignment = false;
};

Game_Party.prototype.tempItemStashAmount = function () {
  return this.tempItemStash().length
};

Game_Party.prototype.numItemsInTempStash = function (item) {
  return this._tempItemStash.filter(
    stashTtem => doubleMatch(item.id, stashTtem.id, item.type, stashTtem.type)
  ).length
};

Game_Party.prototype.numItemsInGlobalStash = function (item) {
  return this._globalItemStash.filter(
    stashTtem => doubleMatch(item.id, stashTtem.id, item.type, stashTtem.type)
  ).length
};

Game_Party.prototype.autoAddToStash = function (item, amount = 1) {
  const actorsWithSpace = this.members().filter(member => member.canStashItems(item, amount));
  if (actorsWithSpace.length > 0) {
    actorsWithSpace[0].addToStash(item, amount);
  } else {
    this.addToGlobalStash(item, amount);
  }
};

Game_Party.prototype.autoRemoveFromStash = function (item, amount = 1) {
  const itemOwners = this.members().filter(member => {
    return member.itemStash().some(
      _item => doubleMatch(_item.id, item.id, _item.type, item.type))
  });

  if (itemOwners.length > 0) {
    itemOwners[0].removeFromStash(item, amount);
  } else {
    this.removeFromGlobalStash(item, amount);
  }
};

Game_Party.prototype.canAddToGlobalStash = function (amount = 1) {
  if ((this.globalItemStashSlotsUsed() + amount) <= this._maxGlobalStashSlots) {
    return true
  }
  return false
};

Game_Party.prototype.addToGlobalStash = function (item, amount = 1) {
  if (this.canAddToGlobalStash(amount)) {
    addToStash(item, amount, this._globalItemStash);
  }
};

Game_Party.prototype.removeFromGlobalStash = function (itemId, amount = 1) {
  removeFromStash(itemId, amount, this._globalItemStash);
};

Game_Party.prototype.addToTempStash = function (item, amount = 1) {
  if (this.tempItemStash().length < this._maxTempStashSlots) {
    addToStash(item, amount, this._tempItemStash);
  }
};

Game_Party.prototype.removeFromTempStash = function (item, amount = 1) {
  removeFromStash(item, amount, this._tempItemStash);
};

Game_Party.prototype.setActorSelectOpen = function (boolean) {
  this._isActorSelectOpen = boolean;
};

Game_Party.prototype.isActorSelectOpen = function () {
  return this._isActorSelectOpen
};

Game_Party.prototype.setMaxGlobalStashSlots = function (value) {
  this._maxGlobalStashSlots = value;
};

Game_Party.prototype.setMaxTempStash = function (value) {
  this._maxTempStashSlots = value;
};

if (_Params.addGlobalStashToMenu) {
  _Aliases.addMainCommands = Window_MenuCommand.prototype.addMainCommands;

  Window_MenuCommand.prototype.addMainCommands = function () {
    _Aliases.addMainCommands.call(this);
    const enabled = this.areMainCommandsEnabled();

    if (this.needsCommand('global')) {
      this.addCommand(_Params.globalMenuName, 'global', enabled);
    }
  };
}

class Window_BattleItem extends Window_Stash {
  constructor (x, y, width, height) {
    super();
    super.initialize(x, y, width, height);
    super.hide();
  }

  includes (item) {
    return $gameParty.canUse(item)
  }

  show () {
    this.selectLast();
    this.showHelpWindow();
    this.visible = true;
  }

  hide () {
    this.hideHelpWindow();
    this.visible = false;
  }
}

class Window_EquipItem extends Window_Stash {
  constructor (x, y, width, height) {
    super();
    super.initialize(x, y, width, height);
  }

  setSlotId (slotId) {
    if (this._slotId !== slotId) {
      this._slotId = slotId;
      this.refresh();
      this.resetScroll();
    }
  }

  includes (item) {
    if (item === null) {
      return true
    }

    if (this._slotId < 0 || item.etypeId !== this._actor.equipSlots()[this._slotId]) {
      return false
    }
    return this._actor.canEquip(item)
  }

  isEnabled (item) {
    const equipSlotItem = this._actor.equips()[this._slotId];
    return !equipSlotItem || (!item && equipSlotItem) || (item && !equipSlotItem) || (this._actor.canStashItems({ id: item.id, type: itemType(item) }) && equipSlotItem === item)
  }

  reselect () {
    Window_Selectable.prototype.reselect.call(this);
  }

  selectLast () {}

  setStatusWindow (statusWindow) {
    this._statusWindow = statusWindow;
    this.callUpdateHelp();
  }

  updateHelp () {
    super.updateHelp();
    if (this._actor && this._statusWindow) {
      const actor = JsonEx.makeDeepCopy(this._actor);
      actor.forceChangeEquip(this._slotId, this.item());
      this._statusWindow.setTempActor(actor);
    }
  }
}

Window_ShopStatus.prototype.drawPossession = function (x, y) {
  if (!this._actor) {
    return
  }
  const width = this.contents.width - this.textPadding() - x;
  const maxStack = this._actor.maxItemStack();
  const numItems = this._actor.numItemsInStash({
    id: this._item.id,
    type: itemType(this._item)
  });
  const possessionWidth = this.textWidth('0000');
  this.changeTextColor(this.systemColor());
  this.drawText(TextManager.possession, x, y, width - possessionWidth);
  this.resetTextColor();
  this.drawText(`${numItems}/${maxStack}`, x, y, width, 'right');
};

Window_ShopStatus.prototype.setActor = function (actor) {
  this._actor = actor;
  this.refresh();
};

Window_ShopStatus.prototype.actor = function () {
  return this._actor
};

class Window_ShopSell extends Window_Stash {
  constructor (x, y, width, height) {
    super();
    super.initialize(x, y, width, height);
  }

  isEnabled (item) {
    return item && item.price > 0
  }
}

Window_ShopBuy.prototype.sellShopExists = function () {
  return typeof $gameTemp.getSellShop !== 'undefined'
};

Window_ShopBuy.prototype.canPurchase = function (item) {
  return item && this.price(item) <= this._money
};

Window_ShopBuy.prototype.isEnabled = function (item) {
  const stashItem = {
    id: item.id,
    type: itemType(item)
  };

  if (!this.sellShopExists() || (this.sellShopExists() && !$gameTemp.getSellShop())) {
    return this._actor && this._actor.canStashItems(stashItem) && this.canPurchase(item)
  } else if (this.sellShopExists() && $gameTemp.getSellShop()) {
    /**
     * Since SRDude's sell shop plugin uses the buy window as a sell window we can only enable
     * item if the amount in possession by actor is greater than 0
     */
    return this._actor && this._actor.numItemsInStash(stashItem) > 0
  }
};

Window_ShopBuy.prototype.setActor = function (actor) {
  this._actor = actor;
  this.refresh();
};

Window_ShopBuy.prototype.actor = function () {
  return this._actor
};

class Window_ItemStashCommands extends Window_Command {
  constructor (x, y) {
    super();
    super.initialize(x, y);
  }

  windowHeight () {
    return this.fittingHeight(4)
  }

  // isCommandEnabled (actor) {
  //   return actor.canStashItems() && $gameParty.tempItemStashAmount() > 0
  // }

  makeCommandList () {
    const terms = _Params.defaultTerms;
    this.addCommand(terms.useTerm, 'use', true);
    this.addCommand(terms.tradeTerm, 'trade', true);
    this.addCommand(terms.discardTerm, 'discard', true);
  }
}

/**
 * A new Scene to handle new actor stash/trading and discarding of items
 */
class Scene_ItemStash extends Scene_ItemStashBase {
  constructor () {
    super();
    super.initialize();
  }

  start () {
    super.start();
    this._statusWindow.refresh();
  }

  updateHelp () {
    if (this._commandWindow &&
      (this._commandWindow.active || this._categoryWindow.active)) {
      const helpTerms = _Params.defaultHelpTerms;

      switch (this._commandWindow.currentSymbol()) {
        case 'use':
          this._helpWindow.setText(helpTerms.use);
          break
        case 'trade':
          this._helpWindow.setText(helpTerms.trade);
          break
        case 'discard':
          this._helpWindow.setText(helpTerms.discard);
          break

        default:
          this._helpWindow.setText(helpTerms.default);
          break
      }
    }
  }

  create () {
    super.create();
    this.createItemCommandsWindow();
    this.createCategoryWindow();
    this.createStatusWindow();
    this.createStatusTradeWindow();
    this.createItemWindow();
    this.createTradeItemWindow();
    this.createActorSelectWindow();
    this.createQuantityWindow();
  }

  createCategoryWindow () {
    this._categoryWindow = new Window_ItemStashCategory();
    this._categoryWindow.setHelpWindow(this._helpWindow);
    this._categoryWindow.y = this._helpWindow.height;
    this._categoryWindow.x = 0;
    this._categoryWindow.hide();
    this._categoryWindow.deactivate();
    this._categoryWindow.setHandler('ok', this.onCategoryOk.bind(this));
    this._categoryWindow.setHandler('cancel', this.onCategoryCancel.bind(this));
    this._categoryWindow.setHandler('pagedown', this.nextActor.bind(this));
    this._categoryWindow.setHandler('pageup', this.previousActor.bind(this));
    this._categoryWindow.setItemCommandWindow(this._commandWindow);
    this.addWindow(this._categoryWindow);
  }

  createStatusWindow () {
    const wx = this._commandWindow.width;
    const wy = this._helpWindow.height;
    const ww = Graphics.boxWidth - wx;
    const wh = this._commandWindow.height;
    this._statusWindow = new Window_ItemStatus(wx, wy, ww, wh);
    this._statusWindow.reserveFaceImages();
    this._statusWindow.setActor(this.actor());
    this.addWindow(this._statusWindow);
  }

  createStatusTradeWindow () {
    const wx = this._commandWindow.width;
    const wy = this._helpWindow.height;
    const ww = Graphics.boxWidth - wx;
    const wh = this._commandWindow.height;
    this._tradeStatusWindow = new Window_ItemStatus(wx, wy, ww, wh);
    this._tradeStatusWindow.reserveFaceImages();
    this._tradeStatusWindow.hide();
    this.addWindow(this._tradeStatusWindow);
  }

  createItemCommandsWindow () {
    this._commandWindow = new Window_ItemStashCommands(0, this._helpWindow.height);
    this._commandWindow.setHelpWindow(this._helpWindow);
    this._commandWindow.setHandler('use', this.onUseCommand.bind(this));
    this._commandWindow.setHandler('trade', this.onTradeCommand.bind(this));
    this._commandWindow.setHandler('discard', this.onDiscardCommand.bind(this));
    this._commandWindow.setHandler('cancel', this.popScene.bind(this));
    this._commandWindow.setHandler('pagedown', this.nextActor.bind(this));
    this._commandWindow.setHandler('pageup', this.previousActor.bind(this));
    this._activeWindow = this._commandWindow;
    this.addWindow(this._commandWindow);
  }

  createItemWindow () {
    const wy = this._commandWindow.y + this._commandWindow.height;
    const wh = Graphics.boxHeight - wy;
    this._itemWindow = new Window_Stash(0, wy, Graphics.boxWidth, wh);
    this._itemWindow.setHelpWindow(this._helpWindow);
    this._itemWindow.setHandler('ok', this.onItemOk.bind(this));
    this._itemWindow.setHandler('cancel', this.onItemCancel.bind(this));
    this._itemWindow.setHandler('pagedown', this.nextActor.bind(this));
    this._itemWindow.setHandler('pageup', this.previousActor.bind(this));
    this._itemWindow.setActor(this.actor());
    this._itemWindow.setStashType('actor');
    this._itemWindow.setAlwaysEnabled(true);
    this._itemWindow.setShowAllItems(true);
    this.addWindow(this._itemWindow);
    this._categoryWindow.setItemWindow(this._itemWindow);
  }

  createTradeItemWindow () {
    const wy = this._commandWindow.y + this._commandWindow.height;
    const wh = Graphics.boxHeight - wy;
    this._tradeWindow = new Window_Stash(0, wy, Graphics.boxWidth / 2, wh);
    this._tradeWindow.setActor(null);
    this._tradeWindow.setStashType('actor');
    this._tradeWindow.hide();
    this._tradeWindow.setAlwaysEnabled(true);
    this.addWindow(this._tradeWindow);
    this._categoryWindow.setTradeWindow(this._tradeWindow);
  }

  setupTradeWindows () {
    const statusWidth = (Graphics.boxWidth - this._commandWindow.width) / 2;

    this._tradeStatusWindow.setActor(this.tradeActor());
    this._tradeWindow.setActor(this.tradeActor());

    this.deactivateActorSelect();
    this.deactivateWindow(this._commandWindow, true);

    // Update item and trade window dimensions
    this._itemWindow.width = Graphics.boxWidth / 2;
    this._tradeWindow.x = this._itemWindow.width;
    // Update status window dimensions
    this._statusWindow.width = statusWidth;
    this._tradeStatusWindow.width = statusWidth;
    this._tradeStatusWindow.x = this._statusWindow.x + this._statusWindow.width;

    this._itemWindow.setAlwaysEnabled(true);
    this._itemWindow.setShowAllItems(false);
    this._tradeWindow.refresh();
    this._tradeWindow.show();
    this._tradeStatusWindow.show();
    this.activateWindow(this._categoryWindow, true);
  }

  onUseCommand () {
    this._itemWindow.setAlwaysEnabled(false);
    this._itemWindow.setShowAllItems(false);
    this._categoryWindow.refresh();
    this.activateWindow(this._categoryWindow, true, this._commandWindow, true);
  }

  onTradeCommand () {
    this._categoryWindow.refresh();
    this.activateActorSelect();
  }

  onDiscardCommand () {
    this._itemWindow.setAlwaysEnabled(true);
    this._categoryWindow.refresh();
    this._itemWindow.setShowAllItems(false);
    this.activateWindow(this._categoryWindow, true, this._commandWindow, true);
  }

  onActorCancel () {
    if (this._commandWindow.currentSymbol() !== 'use') {
      this.activateWindow(this._commandWindow, true);
    } else {
      this._activeWindow.activate();
    }
    this.deactivateActorSelect();
    this._itemWindow.refresh();
  }

  onActorOk () {
    super.onActorOk();
    if (this._commandWindow.currentSymbol() === 'trade') {
      if (this.tradeActor() === this.actor()) {
        SoundManager.playBuzzer();
        return
      }
      this.setupTradeWindows();
    } else if (this.canUse()) {
      this.useItem();
    } else {
      SoundManager.playBuzzer();
    }
  }

  nextActor () {
    const currentSymbol = this._commandWindow.currentSymbol();

    if (this._activeWindow === this._commandWindow && currentSymbol === 'trade') {
      super.nextActor();
      return
    }

    if (currentSymbol === 'trade') {
      this.makeMenuTradeActorNext();

      if (this.actor() === this.tradeActor()) {
        this.makeMenuTradeActorNext();
      }
      return
    }

    super.nextActor();
  }

  previousActor () {
    const currentSymbol = this._commandWindow.currentSymbol();
    if (this._activeWindow === this._commandWindow && currentSymbol === 'trade') {
      super.previousActor();
      return
    }

    if (currentSymbol === 'trade') {
      this.makeMenuTradeActorPrevious();

      if (this.actor() === this.tradeActor()) {
        this.makeMenuTradeActorPrevious();
      }
      return
    }

    super.previousActor();
  }

  onActorChange () {
    this._activeWindow.activate();
    this._statusWindow.setActor(this._actor);
    this._itemWindow.setActor(this._actor);
    this._actorSelectWindow.setCurrentActor(this._actor);
    this._statusWindow.refresh();
    this._itemWindow.refresh();
  }

  onTradeActorChange () {
    this._activeWindow.activate();
    this._tradeWindow.setActor(this._tradeActor);
    this._tradeStatusWindow.setActor(this._tradeActor);
  }

  onCategoryOk () {
    this._itemWindow.activate();
    this._itemWindow.selectLast();
    this._activeWindow = this._itemWindow;
  }

  onCategoryCancel () {
    if (this._commandWindow.currentSymbol() === 'trade') {
      const statusWidth = Graphics.boxWidth - this._commandWindow.width;
      this._itemWindow.width = Graphics.boxWidth;
      this._tradeWindow.hide();
      this._tradeStatusWindow.hide();
      this.activateActorSelect();
      this._helpWindow.setText('Select another party member.');
      this._statusWindow.width = statusWidth;
    }
    this.deactivateWindow(this._itemWindow);
    this._itemWindow.setShowAllItems(true);
    this._itemWindow.setAlwaysEnabled(true);
    this._itemWindow.refresh();
    this._categoryWindow.select(0);
    this.deactivateWindow(this._categoryWindow, true);
    if (this._commandWindow.currentSymbol() !== 'trade') {
      this.activateWindow(this._commandWindow, true);
    }
  }

  useItem () {
    super.useItem();
    this._itemWindow.redrawCurrentItem();
    this._statusWindow.refresh();
  }

  playSeForItem () {
    SoundManager.playUseItem();
  }

  onItemOk () {
    if (this._commandWindow.currentSymbol() === 'use') {
      this._actorSelectWindow.setForItemUse(true);
      this.determineItem();
    } else {
      const amount = this.actor().numItemsInStash(this.stashItem());
      this._quantityWindow.setMax(amount);

      if (amount === 1) {
        this.onQuantityOk();
        return
      }

      this.activateWindow(this._quantityWindow, true);
    }
  }

  onQuantityOk () {
    super.onQuantityOk();

    switch (this._commandWindow.currentSymbol()) {
      case 'trade':
        this.performTradeAction(
          this.actor(),
          this.tradeActor(),
          this.stashItem(),
          this.currentQuantity()
        );
        break
      case 'discard':
        this.performDiscardAction(this.actor(), this.stashItem(), this.currentQuantity());
        break
    }
    this._itemWindow.refresh();
    this._tradeWindow.refresh();
    this._statusWindow.refresh();
    this._itemWindow.activate();
  }

  onItemCancel () {
    this._itemWindow.deselect();
    this._categoryWindow.activate();
    this._activeWindow = this._categoryWindow;
  }
}

Scene_Menu.prototype.createCommandWindow = function () {
  this._commandWindow = new Window_MenuCommand(0, 0);
  this._commandWindow.setHandler('item', this.commandPersonal.bind(this));
  this._commandWindow.setHandler('skill', this.commandPersonal.bind(this));
  this._commandWindow.setHandler('equip', this.commandPersonal.bind(this));
  this._commandWindow.setHandler('status', this.commandPersonal.bind(this));
  if (_Params.addGlobalStashToMenu) {
    this._commandWindow.setHandler('global', this.onPersonalOk.bind(this));
  }
  this._commandWindow.setHandler('formation', this.commandFormation.bind(this));
  this._commandWindow.setHandler('options', this.commandOptions.bind(this));
  this._commandWindow.setHandler('save', this.commandSave.bind(this));
  this._commandWindow.setHandler('gameEnd', this.commandGameEnd.bind(this));
  this._commandWindow.setHandler('cancel', this.popScene.bind(this));
  this.addWindow(this._commandWindow);
};

Scene_Menu.prototype.onPersonalOk = function () {
  switch (this._commandWindow.currentSymbol()) {
    case 'item':
      SceneManager.push(Scene_ItemStash);
      break
    case 'skill':
      SceneManager.push(Scene_Skill);
      break
    case 'equip':
      SceneManager.push(Scene_Equip);
      break
    case 'status':
      SceneManager.push(Scene_Status);
      break
    case 'global':
      SceneManager.push(Scene_GlobalStash);
      break
  }
};

class Window_TempActorSelect extends Window_Command {
  constructor (x, y) {
    super();
    super.initialize(x, y);
  }

  windowWidth () {
    return _Params.tempActorSelectWindow.width || super.windowWidth()
  }

  numVisibleRows () {
    return _Params.tempActorSelectWindow.numVisibleRows || super.numVisibleRows()
  }

  standardFontSize () {
    return _Params.tempActorSelectWindow.fontSize || super.standardFontSize()
  }

  updateHeight () {
    this.height = this.windowHeight();
    super.refresh();
  }

  refresh () {
    super.refresh();
  }

  isCommandEnabled (actor) {
    return actor.canStashItems() && $gameParty.tempItemStashAmount() > 0
  }

  makeCommandList () {
    const terms = _Params.defaultTerms;
    this.addCommand(terms.autoTerm, 'auto', true);
    this.addCommand(terms.discardTerm, 'discard', true);
    $gameParty.members().forEach(actor => {
      this.addCommand(
        actor.name(),
        actor.name().toLowerCase(),
        this.isCommandEnabled(actor),
        actor.actorId()
      );
    });
  }

  show () {
    super.show();
    $gameParty.setActorSelectOpen(true);
  }

  hide () {
    super.hide();
    $gameParty.setActorSelectOpen(false);
  }

  drawItem (index) {
    const actor = $gameParty.members().filter(
      actor => actor && actor.name() === this.commandName(index))[0];
    const rect = this.itemRect(index);
    const align = this.itemTextAlign();
    if (actor) {
      this.resetTextColor();
      this.changePaintOpacity(this.isCommandEnabled(actor));
      this.drawCharacter(actor, rect.x + 20, rect.y);
      this.drawText(this.commandName(index), rect.x + 42, rect.y, rect.width, align);
      this.drawText(actor.itemStashAmount(), rect.x, rect.y, rect.width, 'right');
    } else {
      this.drawIcon(16, rect.x, rect.y);
      this.drawText(this.commandName(index), rect.x + 36, rect.y, rect.width);
    }
  }

  drawCharacter (actor, x, y) {
    const characterName = actor.characterName();
    const characterIndex = actor.characterIndex();
    const bitmap = ImageManager.loadCharacter(characterName);
    const big = ImageManager.isBigCharacter(characterName);
    bitmap.addLoadListener((bitmap) => {
      const pw = bitmap.width / (big ? 3 : 12);
      const ph = bitmap.height / (big ? 4 : 8);
      const n = characterIndex;
      const sx = (n % 4 * 3 + 1) * pw;
      const sy = (Math.floor(n / 4) * 4) * ph;
      this.contents.blt(bitmap, sx, sy, pw, ph - 16, x - pw / 2, y);
    });
  }
}

class Window_TempStash extends Window_ItemStashBase {
  constructor (x, y, width, height) {
    super();
    super.initialize(x, y, this.windowWidth(), height);
    this._actor = null;
    this._actorCommandWindow = null;
    this.refresh();
  }

  windowWidth () {
    return _Params.tempStashWindow.width || 400
  }

  maxCols () {
    return _Params.tempStashWindow.maxCols || super.maxCols()
  }

  numVisibleRows () {
    return _Params.tempStashWindow.numVisibleRows || this._data.length
  }

  windowHeight () {
    return this.fittingHeight(this.numVisibleRows())
  }

  refreshHeight () {
    this.height = this.windowHeight();
    super.refresh();
  }

  setActorCommandWindow (window) {
    this._actorCommandWindow = window;
    this.refresh();
  }

  includes () {
    return true
  }

  isCurrentItemEnabled () {
    return this.isEnabled(this.item())
  }

  isEnabled (item) {
    if (this._actorCommandWindow && this._actorCommandWindow.currentSymbol() === 'discard') {
      return (DataManager.isItem(item) && item.itypeId === 2) === false
    }
    return true
  }

  makeItemList () {
    this._data = this.parseStashData($gameParty.tempItemStash());
  }

  standardFontSize () {
    return _Params.tempStashWindow.fontSize || super.standardFontSize()
  }

  drawItem (index) {
    const rect = this.itemRect(index);
    const item = this._data[index];
    const amount = $gameParty.numItemsInTempStash(this.stashItem(index));
    this.changePaintOpacity(this.isEnabled(item));
    this.drawIcon(item.iconIndex, rect.x, rect.y);
    this.drawText(item.name, rect.x + 36, rect.y, rect.width);
    this.drawText(`x${amount}`, rect.x, rect.y, rect.width, 'right');
    this.changePaintOpacity(1);
  }
}

const actorSelectParams = _Params.tempActorSelectWindow;
const tempStashParams = _Params.tempStashWindow;

_Aliases.sceneMapCreateAllWindows = Scene_Map.prototype.createAllWindows;

Scene_Map.prototype.createAllWindows = function () {
  _Aliases.sceneMapCreateAllWindows.call(this);
  this.createActorStashSelectWindow();
  this.createTempStashListWindow();
  this.createQuantityWindow();
};

_Aliases.sceneMapUpdate = Scene_Map.prototype.update;

Scene_Map.prototype.update = function () {
  _Aliases.sceneMapUpdate.call(this);
  this.updateTempStash();
};

Scene_Map.prototype.updateTempStash = function () {
  const actorSelectVisible = this._actorStashSelect.visible;

  if ($gameParty.tempStashHasItems() === false && actorSelectVisible) {
    $gameParty.closeTempStash();
  }

  if ($gameParty.needsStashAssignment() && !actorSelectVisible) {
    this.openStashAssignment();
  } else if (!$gameParty.needsStashAssignment() && actorSelectVisible) {
    this.closeStashAssignmentWindows();
  }
};

Scene_Map.prototype.createActorStashSelectWindow = function () {
  const x = actorSelectParams.x || 0;
  const y = actorSelectParams.y || 0;
  this._actorStashSelect = new Window_TempActorSelect(x, y);
  this._actorStashSelect.setHandler('ok', this.onActorStashOk.bind(this));
  this._actorStashSelect.setHandler('discard', this.onActorDiscard.bind(this));
  this._actorStashSelect.setHandler('auto', this.onActorAutoStash.bind(this));
  this._actorStashSelect.setHandler('cancel', this.onActorStashCancel.bind(this));
  this._actorStashSelect.hide();
  this._actorStashSelect.deactivate();
  this.addWindow(this._actorStashSelect);
};

Scene_Map.prototype.createTempStashListWindow = function () {
  const x = tempStashParams.x > 0 ? tempStashParams.x : this._actorStashSelect.width;
  const y = tempStashParams.y > 0 ? tempStashParams.y : this._actorStashSelect.y;

  this._tempStashList = new Window_TempStash(x, y);
  this._tempStashList.setHandler('ok', this.onItemOk.bind(this));
  this._tempStashList.setHandler('cancel', this.onItemCancel.bind(this));
  this._tempStashList.hide();
  this._tempStashList.deactivate();
  this.addWindow(this._tempStashList);
};

Scene_Map.prototype.createQuantityWindow = function () {
  this._quantityWindow = new Window_ItemQuantity(0, 0);
  this._quantityWindow.x = Graphics.boxWidth / 2 - this._quantityWindow.width / 2;
  this._quantityWindow.y = Graphics.boxHeight / 2 - this._quantityWindow.height / 2;
  this._quantityWindow.setHandler('ok', this.onQuantityOk.bind(this));
  this._quantityWindow.setHandler('cancel', this.onQuantityCancel.bind(this));
  this._quantityWindow.hide();
  this.addChild(this._quantityWindow);
};

Scene_Map.prototype.closeStashAssignmentWindows = function () {
  this._actorStashSelect.hide();
  this._actorStashSelect.deactivate();
  this._tempStashList.hide();
  this._tempStashList.deactivate();
  $gameParty.closeTempStash();
  $gameSystem.enableMenu();
};

Scene_Map.prototype.openStashAssignment = function () {
  this._actorStashSelect.activate();
  this._actorStashSelect.select(0);
  this._actorStashSelect.show();
  this._tempStashList.show();
  this.refreshWindows();
  $gameParty.openTempStash();
  $gameSystem.disableMenu();
};

Scene_Map.prototype.activateTempStashList = function () {
  this._tempStashList.activate();
  this._tempStashList.selectLast();
  this.refreshWindows();
};

Scene_Map.prototype.onActorAutoStash = function () {
  const items = $gameParty.tempItemStash();

  items.forEach(item => {
    const amount = $gameParty.numItemsInTempStash(item);
    $gameParty.autoAddToStash(item, amount);
    $gameParty.removeFromTempStash(item, amount);
  });

  if ($gameParty.tempItemStash().length <= 0) {
    this.closeStashAssignmentWindows();
  } else {
    this._tempStashList.deactivate();
    this._actorStashSelect.activate();
  }
  this.refreshWindows();
};

Scene_Map.prototype.onActorDiscard = function () {
  this._tempStashList.setActorCommandWindow(this._actorStashSelect);
  this.activateTempStashList();
};

Scene_Map.prototype.onActorStashOk = function () {
  const actorSelectSymbol = this._actorStashSelect.currentSymbol();
  if (actorSelectSymbol !== 'auto' || actorSelectSymbol !== 'discard') {
    this.activateTempStashList();
  }
};

Scene_Map.prototype.onActorStashCancel = function () {
  const action = _Params.tempStashCancelAction;
  const items = $gameParty.tempItemStash();

  if (action === 'discard') {
    items.forEach(item => $gameParty.removeFromTempStash(item));
  } else if (action === 'auto') {
    items.forEach(item => {
      const amount = $gameParty.numItemsInTempStash(item);
      $gameParty.autoAddToStash(item, amount);
      $gameParty.removeFromTempStash(item, amount);
    });
  }

  if (action !== 'disallow') {
    this.closeStashAssignmentWindows();
    $gameParty.closeTempStash();
  } else {
    SoundManager.playBuzzer();
    this._actorStashSelect.activate();
  }
};

Scene_Map.prototype.onItemOk = function () {
  const stashItem = this._tempStashList.stashItem();
  const amount = $gameParty.numItemsInTempStash(stashItem);

  this._quantityWindow.setMax(amount);

  if (amount === 1) {
    this.onQuantityOk();
    return
  }

  this._tempStashList.deactivate();
  this._quantityWindow.show();
  this._quantityWindow.activate();
};

Scene_Map.prototype.onItemCancel = function () {
  this._tempStashList.deactivate();
  this._actorStashSelect.activate();
};

Scene_Map.prototype.onQuantityOk = function () {
  const actor = $gameActors.actor(this._actorStashSelect.currentExt());
  const stashItem = this._tempStashList.stashItem();
  const amount = this._quantityWindow.number();

  this.onQuantityCancel();

  if (this._actorStashSelect.currentSymbol() === 'discard') {
    $gameParty.removeFromTempStash(stashItem, amount);
    this.refreshWindows();
    this._tempStashList.activate();
    if ($gameParty.tempItemStashAmount() <= 0) {
      this.closeStashAssignmentWindows();
    }
    return
  }
  if (actor.canStashItems(stashItem, amount)) {
    $gameParty.removeFromTempStash(stashItem, amount);
    actor.addToStash(stashItem, amount);
  } else {
    SoundManager.playBuzzer();
  }
  this._tempStashList.refresh();
  this._actorStashSelect.refresh();
};

Scene_Map.prototype.onQuantityCancel = function () {
  this._quantityWindow.deactivate();
  this._quantityWindow.hide();

  this._tempStashList.refresh();
  this._tempStashList.activate();
};

Scene_Map.prototype.refreshWindows = function () {
  this._actorStashSelect.refresh();
  this._actorStashSelect.updateHeight();
  this._tempStashList.refresh();
  this._tempStashList.refreshHeight();
};

/* globals Yanfly */

Scene_Battle.prototype.createItemWindow = function () {
  const wy = this._helpWindow.y + this._helpWindow.height;
  const wh = this._statusWindow.y - wy;
  this._itemWindow = new Window_BattleItem(0, wy, Graphics.boxWidth, wh);
  this._itemWindow.setHelpWindow(this._helpWindow);
  this._itemWindow.setHandler('ok', this.onItemOk.bind(this));
  this._itemWindow.setHandler('cancel', this.onItemCancel.bind(this));
  this._itemWindow.setActor(BattleManager.actor());
  this._itemWindow.setStashType('actor');
  this.addWindow(this._itemWindow);

  if (typeof Imported.YEP_BattleEngineCore !== 'undefined') {
    /* eslint-disable no-eval */
    if (eval(Yanfly.Param.BECLowerWindows)) {
      this.adjustLowerWindow(this._itemWindow);
    }
  }
};

_Aliases.sceneBattleUpdate = Scene_Battle.prototype.update;

Scene_Battle.prototype.update = function () {
  _Aliases.sceneBattleUpdate.call(this);
  if (BattleManager.actor() !== null) {
    if (this._itemWindow._actor !== BattleManager.actor()) {
      this._itemWindow.setActor(BattleManager.actor());
    }
  }
};

_Aliases.sceneShopStart = Scene_Shop.prototype.start;
Scene_Shop.prototype.start = function () {
  _Aliases.sceneShopStart.call(this);
  this._actorSelectWindow.refresh();
};

_Aliases.sceneShopCreate = Scene_Shop.prototype.create;
Scene_Shop.prototype.create = function () {
  _Aliases.sceneShopCreate.call(this);
  this.createActorSelectWindow();
};

Scene_Shop.prototype.createSellWindow = function () {
  const wy = this._categoryWindow.y + this._categoryWindow.height;
  const wh = Graphics.boxHeight - wy;
  this._sellWindow = new Window_ShopSell(0, wy, Graphics.boxWidth, wh);
  this._sellWindow.setHelpWindow(this._helpWindow);
  this._sellWindow.hide();
  this._sellWindow.setHandler('ok', this.onSellOk.bind(this));
  this._sellWindow.setHandler('cancel', this.onSellCancel.bind(this));
  this._sellWindow.setStashType('actor');
  this._categoryWindow.setItemWindow(this._sellWindow);
  this.addWindow(this._sellWindow);
};

Scene_Shop.prototype.createActorSelectWindow = function () {
  this._actorSelectWindow = new Window_MenuActor$1();
  this._actorSelectWindow.setHandler('ok', this.onActorOk.bind(this));
  this._actorSelectWindow.setHandler('cancel', this.onActorCancel.bind(this));
  this._actorSelectWindow.hide();
  this._actorSelectWindow.reserveFaceImages();
  this.addWindow(this._actorSelectWindow);
};

Scene_Shop.prototype.onActorOk = function () {
  this._dummyWindow.hide();
  this._buyWindow.setActor(this.user());
  this._statusWindow.setActor(this.user());
  this._sellWindow.setActor(this.user());
  if (this._commandWindow.currentSymbol() === 'buy') {
    this._actorSelectWindow.hide();
    this._actorSelectWindow.deactivate();
    this._buyWindow.select(0);
    this.activateBuyWindow();
  } else if (this._commandWindow.currentSymbol() === 'sell') {
    this._actorSelectWindow.hide();
    this._actorSelectWindow.deactivate();
    this._sellWindow.select(0);
    this.activateSellWindow();
  }
};

Scene_Shop.prototype.user = function () {
  return $gameParty.members()[this._actorSelectWindow.index()]
};

Scene_Shop.prototype.onActorCancel = function () {
  this._actorSelectWindow.hide();
  this._actorSelectWindow.deactivate();
  this._commandWindow.activate();
};

Scene_Shop.prototype.showActorSelectWindow = function (params) {
  this._actorSelectWindow.show();
  this._actorSelectWindow.activate();
};

Scene_Shop.prototype.commandBuy = function () {
  this._commandWindow.deactivate();
  this.showActorSelectWindow();
};

Scene_Shop.prototype.commandSell = function () {
  this._commandWindow.deactivate();
  this.showActorSelectWindow();
};

Scene_Shop.prototype.stashItem = function () {
  const commandSymbol = this._commandWindow.currentSymbol();
  const item = commandSymbol === 'buy' ? this._buyWindow.item() : this._sellWindow.item();
  return {
    id: item.id,
    type: itemType(item)
  }
};

// isSellShop for SRDude SellShop compatibility
Scene_Shop.prototype.isSellShop = function () {
  return typeof $gameTemp.getSellShop !== 'undefined' && $gameTemp.getSellShop()
};

_Aliases.sceneShopOnBuyCancel = Scene_Shop.prototype.onBuyCancel;
Scene_Shop.prototype.onBuyCancel = function () {
  if (this.isSellShop()) {
    this._buyWindow.deselect();
    this.showActorSelectWindow();
    this._statusWindow.setItem(null);
    this._helpWindow.clear();
  } else {
    _Aliases.sceneShopOnBuyCancel.call(this);
    this._commandWindow.deactivate();
    this.showActorSelectWindow();
  }
};

Scene_Shop.prototype.maxBuy = function () {
  const max = this.max() < 1 ? 1 : this.max();
  const price = this.buyingPrice();
  if (price > 0) {
    return Math.min(max, Math.floor(this.money() / price))
  } else {
    return max
  }
};

Scene_Shop.prototype.maxSell = function () {
  return this.user().numItemsInStash(this.stashItem())
};

Scene_Shop.prototype.max = function () {
  return this.user().maxItemStack() - this.user().numItemsInStash(this.stashItem())
};

Scene_Shop.prototype.doBuy = function (number) {
  $gameParty.loseGold(number * this.buyingPrice());
  this.user().addToStash(this.stashItem(), number);
};

Scene_Shop.prototype.doSell = function (number) {
  $gameParty.gainGold(number * this.sellingPrice());
  this.user().removeFromStash(this.stashItem(), number);
};

Scene_Equip.prototype.createItemWindow = function () {
  const wx = 0;
  const wy = this._statusWindow.y + this._statusWindow.height;
  const ww = Graphics.boxWidth;
  const wh = Graphics.boxHeight - wy;
  this._itemWindow = new Window_EquipItem(wx, wy, ww, wh);
  this._itemWindow.setHelpWindow(this._helpWindow);
  this._itemWindow.setStatusWindow(this._statusWindow);
  this._itemWindow.setHandler('ok', this.onItemOk.bind(this));
  this._itemWindow.setHandler('cancel', this.onItemCancel.bind(this));
  this._itemWindow.setStashType('actor');
  this._slotWindow.setItemWindow(this._itemWindow);
  this.addWindow(this._itemWindow);
};

/* eslint-disable */

}());
