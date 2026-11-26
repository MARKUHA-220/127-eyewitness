/*:
 * @plugindesc Плагин которы блокирует возможность исользования мыши как способ управление персонажем
 * @author MARKUHA
 *
 * @help
 * Комманды плагина :
 *
 * MouseMove ON   → Ножно ходить по нажатию на место
 * MouseMove OFF  → На оборот
 */

(function () {

    let mouseMoveEnabled = true;

    const _Game_Temp_setDestination = Game_Temp.prototype.setDestination;

    Game_Temp.prototype.setDestination = function (x, y) {
        if (!mouseMoveEnabled) {
            return;
        }
        _Game_Temp_setDestination.call(this, x, y);
    };

    const _Game_Interpreter_pluginCommand =
        Game_Interpreter.prototype.pluginCommand;

    Game_Interpreter.prototype.pluginCommand = function (command, args) {
        _Game_Interpreter_pluginCommand.call(this, command, args);

        if (command === "MouseMove") {
            if (args[0] === "ON") {
                mouseMoveEnabled = true;
            }
            if (args[0] === "OFF") {
                mouseMoveEnabled = false;
                $gameTemp.clearDestination();
            }
        }
    };

})();