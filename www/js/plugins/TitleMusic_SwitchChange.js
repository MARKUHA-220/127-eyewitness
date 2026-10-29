/*:
 * @plugindesc [v0.3] Меняет музыку титульного экрана в зависимости от переключателей. (Срабатывает вместе с createBackground) 
 * @author MARKUHA
 *
 * @param MusicList
 * @type struct<MusicItem>[]
 * @desc Список соответствий Switch -> BGM. Приоритет по порядку в списке.
 * @default []
 *
 * @help
 * Помещайте BGM файлы в /audio/bgm/.
 * Убедитесь, что имя параметра в PluginManager.parameters(...) соответствует имени файла плагина.
 */

/*~struct~MusicItem:
 * @param SwitchId
 * @type switch
 * @desc ID переключателя, который активирует этот трек.
 * 
 * @param BgmName
 * @type file
 * @dir audio/bgm/
 * @desc Имя файла BGM.
 *
 * @param Volume
 * @type number
 * @min 0
 * @max 100
 * @default 90
 *
 * @param Pitch
 * @type number
 * @min 50
 * @max 150
 * @default 100
 *
 * @param Pan
 * @type number
 * @min -100
 * @max 100
 * @default 0
 */

(function() {
    const parameters = PluginManager.parameters('TitleMusic_SwitchChange');
    let musicList = [];
    try {
        musicList = JSON.parse(parameters['MusicList'] || '[]').map(function(item){
            return JSON.parse(item);
        });
    } catch (e) {
        console.warn('TitleMusic_SwitchChange: Ошибка парсинга параметров MusicList', e);
        musicList = [];
    }
    // keep a reference to the original method so we can call it when
    // none of the custom switches are active.
    const _Scene_Title_playTitleMusic = Scene_Title.prototype.playTitleMusic;

    // override playTitleMusic instead of createBackground.  The original
    // `Scene_Title.start()` calls `this.playTitleMusic()` *after*
    // `createBackground`, so if we choose the music inside createBackground the
    // default implementation is always run a few lines later and overwrites
    // our track.  By intercepting the music-playing method itself we avoid the
    // problem.
    Scene_Title.prototype.playTitleMusic = function() {
        try {
            if (!musicList || musicList.length === 0) {
                // fall back to original behaviour when there is no data
                console.log('TitleMusic_SwitchChange: Список музыки пуст — стандартный трек сохранён.');
                _Scene_Title_playTitleMusic.call(this);
                return;
            }
            for (let i = 0; i < musicList.length; i++) {
                const m = musicList[i];
                const id = Number(m.SwitchId || 0);
                if ($gameSwitches && id > 0 && $gameSwitches.value(id)) {
                    AudioManager.playBgm({
                        name: String(m.BgmName || ''),
                        volume: Number(m.Volume || 90),
                        pitch: Number(m.Pitch || 100),
                        pan: Number(m.Pan || 0)
                    });
                    console.log(`TitleMusic_SwitchChange: Включён Switch ${id}, играет: ${m.BgmName}`);
                    return;
                }
            }
            // no switch matched, run the original method
            console.log('TitleMusic_SwitchChange: Ни один из Switch не активен — стандартный трек.');
            _Scene_Title_playTitleMusic.call(this);
        } catch (err) {
            console.error('TitleMusic_SwitchChange: Ошибка при выборе музыки для титула:', err);
            try { _Scene_Title_playTitleMusic.call(this); } catch(e) { /* ignore */ }
        }
    };

})();
