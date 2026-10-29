/*:
 * @plugindesc Показывает фоны в меню на основе включённых переключателей. Поддержка нескольких сцен и картинок.
 * @author MARKUHA
 *
 * @param Background Settings
 * @type struct<Background>[]
 * @default []
 * @desc Массив настроек: {switchId, imageName, scene}
 *
 * @help
 * Помести изображения в папку img/pictures.
 * Укажи ID переключателя, имя картинки (без расширения) и сцену (например, Scene_Item).
 * Поддерживаются:
 *   Scene_Menu, Scene_Item, Scene_Skill, Scene_Equip, Scene_Status, Scene_Options
 *
 * Пример сцены: Scene_Item
 */

/*~struct~Background:
 * @param switchId
 * @type switch
 * @desc ID переключателя, активирующего фон.
 *
 * @param imageName
 * @type file
 * @dir img/pictures
 * @desc Название изображения (без расширения .png)
 *
 * @param scene
 * @type select
 * @option Scene_Menu
 * @option Scene_Item
 * @option Scene_Skill
 * @option Scene_Equip
 * @option Scene_Status
 * @option Scene_Options
 * @desc Название сцены, в которой использовать фон.
 */

(function() {
    const parameters = PluginManager.parameters('DynamicMenuBackgrounds');
    const bgSettingsRaw = JSON.parse(parameters['Background Settings'] || '[]');
    const bgSettings = bgSettingsRaw.map(str => JSON.parse(str));

    const _Scene_MenuBase_createBackground = Scene_MenuBase.prototype.createBackground;
    Scene_MenuBase.prototype.createBackground = function() {
        const sceneName = this.constructor.name;
        const matchedSetting = bgSettings.find(setting => {
            return setting.scene === sceneName && $gameSwitches.value(Number(setting.switchId));
        });

        if (matchedSetting) {
            const sprite = new Sprite(ImageManager.loadPicture(matchedSetting.imageName));
            sprite.x = 0;
            sprite.y = 0;
            sprite.opacity = 255;
            sprite.z = -1;
            this.addChild(sprite);
        } else {
            _Scene_MenuBase_createBackground.call(this);
        }
    };
})();
