/*:
 * @plugindesc [v1.0] Меняет фон титульного экрана в зависимости от состояния переключателей через Plugin Manager.
 * @author MARKUHA
 *
 * @param Backgrounds
 * @type struct<Background>[]
 * @desc Список фонов и переключателей.
 * @default []
 *
 * @help
 * Создавайте переключатели и задавайте их вместе с фонами через настройки плагина.
 *
 * Картинки должны быть в папке img/titles1/ и img/titles2/.
 */

/*~struct~Background:
 * @param SwitchId
 * @type switch
 * @desc ID переключателя, который активирует этот фон.
 *
 * @param Title1
 * @type file
 * @dir img/titles1/
 * @desc Картинка основного фона (Title1).
 *
 * @param Title2
 * @type file
 * @dir img/titles2/
 * @desc Картинка наложения фона (Title2).
 */

(function() {

    const parameters = PluginManager.parameters('TitleScreen_SwitchChange');
    const backgrounds = JSON.parse(parameters['Backgrounds'] || '[]').map(str => JSON.parse(str));

    const _Scene_Title_createBackground = Scene_Title.prototype.createBackground;

    Scene_Title.prototype.createBackground = function() {
        let found = false;
        for (let i = 0; i < backgrounds.length; i++) {
            const bg = backgrounds[i];
            if ($gameSwitches.value(Number(bg.SwitchId))) {
                this._backSprite1 = new Sprite(ImageManager.loadTitle1(bg.Title1));
                this._backSprite2 = new Sprite(ImageManager.loadTitle2(bg.Title2));
                console.log(`TitleScreen: Активирован Switch ID ${bg.SwitchId}, фоны: ${bg.Title1}, ${bg.Title2}`);
                found = true;
                break;
            }
        }

        if (!found) {
            this._backSprite1 = new Sprite(ImageManager.loadTitle1($dataSystem.title1Name));
            this._backSprite2 = new Sprite(ImageManager.loadTitle2($dataSystem.title2Name));
            console.log('TitleScreen: Используются стандартные титульные фоны.');
        }

        this.addChild(this._backSprite1);
        this.addChild(this._backSprite2);
    };

})();