/*:
 *
 * @plugindesc v1.0; This Plugin lets you add up to 6 new custom stats to your game.
 * @author FlipelyFlip
 *
 * @param Param 1
 * @type struct<Stats>
 * @desc Define the first Param.
 * @default
 *
 * @param Param 2
 * @type struct<Stats>
 * @desc Define the second Param.
 * @default
 *
 * @param Param 3
 * @type struct<Stats>
 * @desc Define the third Param.
 * @default
 *
 * @param Param 4
 * @type struct<Stats>
 * @desc Define the fourth Param.
 * @default
 *
 * @param Param 5
 * @type struct<Stats>
 * @desc Define the fifth Param.
 * @default
 *
 * @param Param 6
 * @type struct<Stats>
 * @desc Define the sixth Param.
 * @default
 *
 * @param ExtraParam Command Name
 * @desc If YEP_StatusMenuCore plugin is used, this defines the command name.
 * default Extra Parameters
 *
 * @help
 * This plugin allows you to add up to 6 new custom stats to your game.
 * You can do whatever you like with this new stats, like make one stat
 * that displays the hunger of the player, one for how thirsty he is.
 * There is no limit on what you can do with this plugin.
 *
 *=============================================================================
 *   *  Plugin Parameters
 *=============================================================================
 * You define in the plugin parameters the display name of the stat and also
 * its abreviation. The abreviation will be used for the notetags to define
 * values for the stat. The stat name will be displayed at the status menu.
 *
 *=============================================================================
 *   *  How to use the custom stats
 *=============================================================================
 * The method to call those stats for any use is:
 *
 * $gameActors.actor(id).extraParam('stat abreviation');
 *
 * You need to replace the id with the actor id and the stat abreviation with
 * the stat you want to use. If you create a Strength stat and the abreviation
 * is str, this call would look like this for actor 1:
 *
 * $gameActors.actor(1).extraParam('str');
 *
 * To manually add or remove stat points from a extra param, you can use This
 * command:
 *
 * $gameActors.actor(id).addExtraParam('(stat abreviation)', value);
 *
 * Replace the id with the Actor ID and (stat abreviation) with the abreviation
 * of the stat you like to change. Even though it is called addExtraParam, you
 * can reduce the stat if value is a negative number. As Example for a stat
 * increase of 2 for the stat 'stat' it would look like this for Actor 1:
 *
 * $gameActors.actor(1).addExtraParam('stat', 2); 
 *
 *=============================================================================
 *   *  Possible Notetags (case sensitive!!)
 *=============================================================================
 * <(stat abreviation): value>
 * This notetag can be used for enemies, weapons and armors.
 * You need to replace (stat abreviation) with the stat abreviation of the stat
 * you want to use here.
 * Ex: <str: 5>
 * 
 * <start stat (stat abreviation)>
 * String
 * <end stat (stat abreviation)>
 * These notetags are usable for actors, weapons, armors and enemies. With
 * this one you are able to generate a stat curve for your custom stat. You
 * need to use JavaScript statements to use this.
 * Ex.:
 *
 * <start stat str>
 * value = 5;
 * value += this._level * 2;
 * value /= 3;
 * value;
 * <end stat str>
 *
 * With this notetag the stat with the abreviation str would calculate its
 * stat this way:
 * value = (5 + level * 2) / 3
 * This means, that for level 1 the stat str would have a value of 2.
 *
 *=============================================================================
 *   *  Compability to Yanfly
 *=============================================================================
 * This plugin is compatible with Yanflys Plugins.
 * To make the new stats visible in his status menu you need to add in the
 * plugin parameters for which commands are shown the name EXTRAPARAMS.
 * Then your parameter will be also visible in his status menu.
 * Also this plugin has to be below the YEP_StatusMenuCore plugin.
 *
 *=============================================================================
 *   *  Terms of Use & Credits
 *=============================================================================
 * You can use this plugin for all your projects, commercial or non commercial.
 * You are not allowed to redistribute this plugin.
 * You can modify this plugin as you need.
 * Credits need to be given to FlipelyFlip
 *
 */
 /*~struct~Stats:
 *
 * @param Name
 * @desc Name of the Stat which will be displayed at the menu
 * @default
 *
 * @param Abreviation
 * @desc Abreviation which will be used to refer to this stat.
 * @default
 *
 *
 */

var Imported = Imported || {};
Imported.FFP_ExtraParams = true;

var FFP = FFP || {};
FFP.Parameters = PluginManager.parameters('FFP_ExtraParams');
FFP.Param = FFP.Param || {};
FFP.Notetags = FFP.Notetags || {};
var $extraParams = [null];

FFP.Notetags.DataManager_isLoaded = DataManager.isDatabaseLoaded;
DataManager.isDatabaseLoaded = function() {
	if (!FFP.Notetags.DataManager_isLoaded.call(this)) return false;
	if (!FFP.NotetagsLoaded) {
		var paramTypes = DataManager.getParamsAtStart();
		DataManager.readActorNotetag(paramTypes);
		var group = [$dataWeapons, $dataArmors];
		for (var i = 0; i < group.length; i++) {
			DataManager.readEquipNotetag(paramTypes, group[i]);
		};
		FFP.NotetagsLoaded = true;
	};
	return true;
};

DataManager.readActorNotetag = function(extraParams) {
	var calcFormulaExtraParamStart = '<start stat ';
	var calcFormulaExtraParamEnd = '<end stat ';
	
	for (var n = 1; n < $dataActors.length; n++) {
		var obj = $dataActors[n];
		var notedata = obj.note.split(/[\r\n]+/);
		var mode = '';
		var stat = '';
		obj.customParamEval = {};
		for (var j = 0; j < extraParams.length; j++) {
			obj.customParamEval[extraParams[j][1]] = '';
			var start = calcFormulaExtraParamStart + extraParams[j][1] + '>';
			var end = calcFormulaExtraParamEnd + extraParams[j][1] + '>';
			for (var i = 0; i < notedata.length; i++) {
				var line = notedata[i];
				if (line == start) {
					mode = 'in';
				} else if (line == end) {
					mode = '';
				} else if (mode == 'in') {
					obj.customParamEval[extraParams[j][1]] = obj.customParamEval[extraParams[j][1]] + line;
				};
			};
		};
	};
};

DataManager.readEquipNotetag = function(extraParams, group) {
	var changeFormulaExtraParamStat = /<(.*):[ ](\d+)>/i
	var calcFormulaExtraParamStart = '<start stat ';
	var calcFormulaExtraParamEnd = '<end stat ';
	
	for (var n = 1; n < group.length; n++) {
		var obj = group[n];
		var notedata = obj.note.split(/[\r\n]+/);
		var mode = '';
		var stat = '';
		obj.customStatParam = {};
		obj.customStatParamEval = {};
		for (var j = 0; j < extraParams.length; j++) {
			var start = calcFormulaExtraParamStart + extraParams[j][1] + '>';
			var end = calcFormulaExtraParamEnd + extraParams[j][1] + '>';
			obj.customStatParam[extraParams[j][1]] = 0;
			obj.customStatParamEval[extraParams[j][1]] = '';
			for (var i = 0; i < notedata.length; i++) {
				var line = notedata[i];
				if (line.match(changeFormulaExtraParamStat)) {
					var stat = String(RegExp.$1);
					var value = parseInt(RegExp.$2);
					if (stat == $extraParams[j][1]) {
						obj.customStatParam[stat] = value;
					};
				} else if (line == start) {
					mode = 'in';
				} else if (line == end) {
					mode = '';
				} else if (mode == 'in') {
					obj.customStatParamEval[extraParams[j][1]] = obj.customStatParamEval[extraParams[j][1]] + line;
				};
			};
		};
	};
};

DataManager.getParamsAtStart = function() {
	var name = 'Param ';
	var paramName;
	var extraParam = [];
	for (var i = 1; i <= 6; i++) {
		paramName = name + i;
		var params = JSON.parse(FFP.Parameters[paramName] || 'null');
		if (!params) continue;
		var ary = [params['Name'], params['Abreviation']];
		extraParam[i-1] = ary;
	};
	return extraParam;
};

$extraParams = DataManager.getParamsAtStart();

var FFP_Game_Actor_setup = Game_Actor.prototype.setup;
Game_Actor.prototype.setup = function(actorId) {
	FFP_Game_Actor_setup.call(this, actorId);
	this.createExtraParams();
	this.clearExtraParams();
	this.calcExtraParams();
};

Game_Actor.prototype.createExtraParams = function() {
	this._extraParam = {};
	this._addExtraParam = {};
	for (var i = 0; i < $extraParams.length; i++) {
		this._extraParam[$extraParams[i][1]] = 0;
		this._addExtraParam[$extraParams[i][1]] = 0;
	};
};

Game_Actor.prototype.calcExtraParams = function() {
	for (var i = 0; i < $extraParams.length; i++) {
		var value = 0;
		if (this.actor().customParamEval[$extraParams[i][1]] !== '') {
			this._extraParam[$extraParams[i][1]] = eval(this.actor().customParamEval[$extraParams[i][1]]);
			this._extraParam[$extraParams[i][1]] = Math.round(this._extraParam[$extraParams[i][1]]);
		};
	};
};

Game_Actor.prototype.clearExtraParams = function() {
	for (var i = 0; i < $extraParams.length; i++) {
		if ($extraParams[i]) {
			this._addExtraParam[$extraParams[i][1]] = 0;
		};
	};
};

Game_Actor.prototype.addExtraParam = function(paramName, value) {
	this._addExtraParam[paramName] += value;
};

Game_Actor.prototype.plusExtraParam = function(paramName) {
    var value = 0;
	var equips = this.equips();
    for (var i = 0; i < equips.length; i++) {
        var item = equips[i];
        if (item) {
            value += item.customStatParam[paramName];
			if (item.customStatParamEval[paramName] !== '') {
				value += eval(item.customStatParamEval[paramName]);
			};
        };
    };
	value += this._addExtraParam[paramName];
	console.log(value);
	if (value.isNaN) value = 0;
	return value;
};

Game_Actor.prototype.extraParam = function(paramName) {
	var value = this._extraParam[paramName] + this.plusExtraParam(paramName);
	if (value < 0) value = 0;
	return value;
};

FFP_Game_Actor_LevelUp = Game_Actor.prototype.levelUp;
Game_Actor.prototype.levelUp = function() {
    FFP_Game_Actor_LevelUp.call(this);
	this.calcExtraParams();
};

FFP_Game_Actor_LevelDown = Game_Actor.prototype.levelDown;
Game_Actor.prototype.levelDown = function() {
    FFP_Game_Actor_LevelDown.call(this);
	this.calcExtraParams();
};

FFP_Game_Enemy_setup = Game_Enemy.prototype.setup;
Game_Enemy.prototype.setup = function(enemyId, x, y) {
	FFP_Game_Enemy_setup.call(this, enemyId, x, y);
	this._extraParam = {};
	this.calcExtraParam();
};

Game_Enemy.prototype.calcExtraParam = function() {
	var baseParam = 1
	var note = /<(.*):[ ](\d*\.\d+)>/i;
	var calcFormulaExtraParamStart = '<start stat ';
	var calcFormulaExtraParamEnd = '<end stat ';
	var notedata = this.enemy().note.split(/[\r\n]+/);
	var stat = '';
	var mode = '';
	var evalParam = {};
	
	for (var j = 0; j < $extraParams.length; j++) {
		stat = $extraParams[j][1];
		
		var start = calcFormulaExtraParamStart + stat + '>';
		var end = calcFormulaExtraParamEnd + stat + '>';
		
		evalParam[stat] = '';
		
		this._extraParam[$extraParams[j][1]] = baseParam;
		
		for (var i = 0; i < notedata.length; i++) {
			var line = notedata[i];
			if (line.match(note)) {
				var stat = String(RegExp.$1);
				var value = parseInt(RegExp.$2);
				if (stat == $extraParams[j][1]) {
					this._extraParam[stat] = value;
				};
			} else if (line == start) {
				mode = 'in';
			} else if (line == end) {
				mode = '';
			} else if (mode == 'in') {
				evalParam[stat] = evalParam[stat] + line;
				console.log(evalParam[stat]);
			};
		};
		if (evalParam[stat] !== '') {
			var value = 0;
			value += eval(evalParam[stat]);
			this._extraParam[stat] += value;
		};
	};
};

Game_Enemy.prototype.extraParam = function(paramName) {
	return this._extraParam[paramName];
};

console.log(Imported.YEP_StatusMenuCore);

if (Imported.YEP_StatusMenuCore) {

	FFP_Window_StatusCommand_createCommand = Window_StatusCommand.prototype.createCommand;
	Window_StatusCommand.prototype.createCommand = function(command) {
		FFP_Window_StatusCommand_createCommand.call(this, command);
		
		command = command.toUpperCase();
		
		if (['EXTRAPARAMS', 'EXTRAPARAM'].contains(command)) {
			this.addCommand(FFP.Parameters['ExtraParam Command Name'], 'extraparams', true);
		};
	};
	
	// FFP_Window_StatusInfo_drawInfoContents = Window_StatusInfo.prototype.drawInfoContents;
	Window_StatusInfo.prototype.drawInfoContents = function(symbol) {
		// FFP_Window_StatusInfo_drawInfoContents.call(this, symbol);
		if (!symbol) return;
		switch (symbol.toLowerCase()) {
			case 'extraparams':
			this.drawExtraParams();
			break;
			case 'parameters':
			this.drawParameters();
			break;
			case 'elements':
			this.drawElements();
			break;
			case 'states':
			this.drawStates();
			break;
			case 'attributes':
			this.drawAttributes();
			break;
			default:
			this.drawGeneral();
			break;
		};
	};
	
	Window_StatusInfo.prototype.drawExtraParams = function() {
		var rect = new Rectangle();
		rect.width = (this.contents.width - this.standardPadding());
		rect.y = this.lineHeight() * 2 - this.lineHeight();
		rect.height = this.lineHeight();
		var dx = rect.x + this.textPadding();
		var dw = rect.width - this.textPadding() * 2;
		for (var i = 0; i < $extraParams.length; ++i) {
			rect.y += this.lineHeight();

			this.drawDarkRect(rect.x, rect.y, rect.width, rect.height);
			this.changeTextColor(this.systemColor());
			this.drawText($extraParams[i][0], dx, rect.y, dw, 'left');
			this.changeTextColor(this.normalColor());
			text = '' + this._actor.extraParam([$extraParams[i][1]]);
			this.drawText(text, dx, rect.y, dw, 'right');
		};
	};

} else {

	Window_Status.prototype.drawBlock3 = function(y) {
		this.drawParameters(16, y);
		this.drawExtraParameters(282, y);
		this.drawEquipments(548, y);
	};

	Window_Status.prototype.drawExtraParameters = function(x, y) {
		var lineHeight = this.lineHeight();
		for (var i = 0; i < $extraParams.length; i++) {
			var y2 = y + lineHeight * i;
			this.changeTextColor(this.systemColor());
			this.drawText($extraParams[i][0], x, y2, 160);
			this.resetTextColor();
			this.drawText(this._actor.extraParam($extraParams[i][1]), x + 160, y2, 60, 'right');
		};
	};
};