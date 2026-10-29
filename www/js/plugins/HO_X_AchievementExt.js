//=============================================================================
// HO_X_AchievementExt.js
//=============================================================================
/*:
 * @plugindesc Achievement System Extension
 * @author Horst Onager
 * 
 * @param Playtime
 * @type number
 * @desc ID of the playtime achievement.
 * @default 0
 *
 * @param Playtime Unit
 * @parent Playtime
 * @type select
 * @option Seconds
 * @value 1
 * @option Minutes
 * @value 60
 * @option Hours
 * @value 3600
 * @desc What unit is the playtime measured in?
 * @default 3600
 *
 * @param Steps
 * @type number
 * @desc ID of the steps achievement.
 * @default 0
 *
 * @param Total Gold
 * @type number
 * @desc ID of the total gold achievement.
 * @default 0
 *
 * @param Current Gold
 * @type number
 * @desc ID of the current gold achievement.
 * @default 0
 *
 * @param Display Max?
 * @parent Current Gold
 * @type boolean
 * @on Yes
 * @off No
 * @desc Display the maximum current gold the player ever had or the just the current amount?
 * @default true
 *
 * @param Max Level
 * @type number
 * @desc ID of the Max Level achievement.
 * @default 0
 *
 * @param Max Buff
 * @type number
 * @desc ID of the Max Buff achievement.
 * @default 0
 *
 * @param Max Damage
 * @type number
 * @desc ID of the Max Damage achievement.
 * @default 0
 *
 * @param Save Count
 * @type number
 * @desc ID of the Save Count achievement.
 * @default 0
 *
 * @help
 *=============================================================================
 * Usage
 *=============================================================================
 *
 * This achievement offers code for some custom achievements that aren't
 * easily implemented in the editor.
 *
 * Playtime
 * This achievement is awarded for playing a certain amount of time.
 * It is constantly updated while being on the map scene. You can set
 * any amount of tiers with arbitrary tier goals, but the achievement
 * must NOT be repeatable (Repeatable = 1).
 *
 * Steps
 * This achievement is awarded for walking certain amounts of steps.
 * You can set any amount of tiers with arbitrary tier goals, and the
 * achievement can be repeatable.
 *
 * Total Gold
 * This achievement is awarded for gaining certain amounts of gold
 * over the total span of the game, regardless of the player's
 * spending. You can set any amount of tiers with arbitrary tier
 * goals, and the achievement can be repeatable.
 *
 * Current Gold
 * This achievement is awarded for having a certain amount of gold
 * at a time. You can set any amount of tiers with arbitrary tier
 * goals, but the achievement must NOT be repeatable (Repeatable = 1).
 * 
 * Max Level
 * This achievement is award for reaching certain levels with any
 * actor. You can set any amount of tiers with arbitrary tier goals,
 * but the achievement must NOT be repeatable (Repeatable = 1).
 * Also, this is only updated upon any actor levelup, so if you
 * have the achievement visible from the beginning, you should
 * set the achievement's progress according to your main actor's
 * starting level.
 *
 * Max Buff
 * This achievement is awarded for reaching the maximum possible
 * buff limit with any parameter on any actor. Every time an
 * actor reaches the max buff limit with any parameter, 1 progress
 * is added to the achievement, so if you want to have the player
 * max out any buff just once for the achievement, just set a
 * single tier with 1 progress needed, if not, set more progress
 * and so on. You can set any amount of tiers with arbitrary tier
 * goals, and the achievement can be repeatable.
 *
 * Max Damage
 * This achievement is awarded when the player manages to deal a
 * defined amount of damage in a single hit. The achievement can
 * have any amount of tiers, but should not be repeatable.
 *
 * Save Count
 * This achievement is awarded for saving a certain amount of times.
 * You can set any amount of tiers with arbitrary tier goals, and the
 * achievement can be repeatable.
 *
 *=============================================================================
 * Terms of Use
 *=============================================================================
 *
 * See terms of plugin HO_AchievementSystem.
 *
 */

if (Imported.HO_AchievementSystem) {

//=============================================================================

Horsti.AS.Ext1 = Horsti.AS.Ext1 || {};
Horsti.Parameters = PluginManager.parameters('HO_X_AchievementExt');
Horsti.AS.Ext1.playtime = Number(Horsti.Parameters['Playtime']);
Horsti.AS.Ext1.playtimeUnit = Number(Horsti.Parameters['Playtime Unit']);
Horsti.AS.Ext1.steps = Number(Horsti.Parameters['Steps']);
Horsti.AS.Ext1.totalGold = Number(Horsti.Parameters['Total Gold']);
Horsti.AS.Ext1.currentGold = Number(Horsti.Parameters['Current Gold']);
Horsti.AS.Ext1.displayMax = (Horsti.Parameters['Display Max?'] === 'true');
Horsti.AS.Ext1.maxLevel = Number(Horsti.Parameters['Max Level']);
Horsti.AS.Ext1.maxBuff = Number(Horsti.Parameters['Max Buff']);
Horsti.AS.Ext1.maxDamage = Number(Horsti.Parameters['Max Damage']);
Horsti.AS.Ext1.saveCount = Number(Horsti.Parameters['Save Count']);

//=============================================================================
// Playtime
//=============================================================================

if (Horsti.AS.Ext1.playtime > 0) {

Horsti.AS.Ext1.Scene_Map_update = Scene_Map.prototype.update;
Scene_Map.prototype.update = function() {
	Horsti.AS.Ext1.Scene_Map_update.call(this);
	this.updatePlaytimeAchievement();
};

Scene_Map.prototype.updatePlaytimeAchievement = function() {
	var achievement = $gameParty.achievement(Horsti.AS.Ext1.playtime);
	if (achievement !== undefined) {
		var playtime = $gameSystem.playtime();
		if (Graphics.frameCount % 60 === 0 && playtime > 0) {
			progress = Math.floor(playtime / Horsti.AS.Ext1.playtimeUnit);
			achievement.setProgress(progress);
		}
	}
};

}

//=============================================================================
// Steps
//=============================================================================

if (Horsti.AS.Ext1.steps > 0) {

Horsti.AS.Ext1.Game_Party_increaseSteps = Game_Party.prototype.increaseSteps;
Game_Party.prototype.increaseSteps = function() {
	Horsti.AS.Ext1.Game_Party_increaseSteps.call(this);
	var index = Horsti.AS.Ext1.steps;
	if (this.achievement(index)) {
		this.achievement(index).addProgress(1);
	}
};

}

//=============================================================================
// Total Gold
//=============================================================================

if (Horsti.AS.Ext1.totalGold > 0) {

Horsti.AS.Ext1.Game_Party_initialize = Game_Party.prototype.initialize;
Game_Party.prototype.initialize = function() {
	Horsti.AS.Ext1.Game_Party_initialize.call(this);
	this._goldTotal = 0;
};

Game_Party.prototype.goldTotal = function() {
	if (this._goldTotal === undefined) this._goldTotal = 0;
	return this._goldTotal;
};

Horsti.AS.Ext1.Game_Party_gainGold1 = Game_Party.prototype.gainGold;
Game_Party.prototype.gainGold = function(amount) {
	Horsti.AS.Ext1.Game_Party_gainGold1.call(this, amount);
	if (amount > 0) {
		this._goldTotal += amount;
		var index = Horsti.AS.Ext1.totalGold;
		if (index > 0 && this.achievement(index)) {
			this.achievement(index).addProgress(amount);
		}
	}
};

}

//=============================================================================
// Current Gold
//=============================================================================

if (Horsti.AS.Ext1.currentGold > 0) {

Horsti.AS.Ext1.Game_Party_gainGold2 = Game_Party.prototype.gainGold;
Game_Party.prototype.gainGold = function(amount) {
	Horsti.AS.Ext1.Game_Party_gainGold2.call(this, amount);
	var index = Horsti.AS.Ext1.currentGold;
	var achievement = this.achievement(index);
	if (index > 0 && achievement) {
		if (Horsti.AS.Ext1.displayMax) {
			var progress = Math.max(this.gold(), achievement.getProgress());
			achievement.setProgress(progress);
		}
		else achievement.setProgress(this.gold());
	}
};

}

//=============================================================================
// Max Level
//=============================================================================

if (Horsti.AS.Ext1.maxLevel > 0) {

Horsti.AS.Ext1.Game_Actor_levelUp = Game_Actor.prototype.levelUp;
Game_Actor.prototype.levelUp = function() {
	Horsti.AS.Ext1.Game_Actor_levelUp.call(this);
	var achievement = $gameParty.achievement(Horsti.AS.Ext1.maxLevel);
	if (achievement) {
		var difference = this.level - achievement.getProgress();
		if (difference > 0) achievement.addProgress(difference);
	}
};

}

//=============================================================================
// Max Buff
//=============================================================================

if (Horsti.AS.Ext1.maxBuff > 0) {

Horsti.AS.Ext1.Game_Actor_addBuff = Game_Actor.prototype.addBuff;
Game_Actor.prototype.addBuff = function(paramId, turns) {
	var previouslyMaxed = [];
	for (var i = 0; i < 8; ++i) {
		previouslyMaxed.push(this.isMaxBuffAffected(i));
	}
	Horsti.AS.Ext1.Game_Actor_addBuff.call(this, paramId, turns);
	var achievement = $gameParty.achievement(Horsti.AS.Ext1.maxBuff);
	if (achievement) {
		for (var i = 0; i < 8; ++i) {
			if (this.isMaxBuffAffected(i) && !previouslyMaxed[i]) {
				achievement.addProgress(1);
			}
		}
	}
};

}

//=============================================================================
// Max Damage
//=============================================================================

if (Horsti.AS.Ext1.maxDamage > 0) {

Horsti.AS.Ext1.Game_Action_executeHpDamage = Game_Action.prototype.executeHpDamage;
Game_Action.prototype.executeHpDamage = function(target, value) {
	Horsti.AS.Ext1.Game_Action_executeHpDamage.call(this, target, value);
	if (this.subject().isActor()) {
		var achievement = $gameParty.achievement(Horsti.AS.Ext1.maxDamage);
		if (achievement && value > achievement.getProgress()) {
			achievement.addProgress(value - achievement.getProgress());
		}
	}
};

}

//=============================================================================
// Save Count
//=============================================================================

if (Horsti.AS.Ext1.saveCount > 0) {

Horsti.AS.Ext1.Game_System_onBeforeSave = Game_System.prototype.onBeforeSave;
Game_System.prototype.onBeforeSave = function() {
	Horsti.AS.Ext1.Game_System_onBeforeSave.call(this);
	$gameParty.achievement(Horsti.AS.Ext1.saveCount).addProgress(1);
};

}

//=============================================================================

} else console.error('Please put the plugin HO_AchievementSystem above this one.');

//=============================================================================
// End of file
//=============================================================================