import Player from '../../player'

let s_flex = function () {
  let player = this
  let root = player.root
  let util = Player.util
  let playceholder = util.createDom('xg-placeholder', `<div class="danmakuBar">
  <div class="danmakuBar__controls">
    <div class="danmakuBarSetting__entry"></div>
    <div class="danmakuBar_switch on"></div>
  </div>
  <div class="danmakuBar__input">
    <div class="danmakuBar__input__wrapper">
      <input type="text" placeholder="发个弹幕，共同记录" value="" />
    </div>
    <div class="danmakuBar__input__send">发送</div>
  </div>
</div>`, {}, 'xgplayer-placeholder')
  player.once('ready', () => {
    player.controls.appendChild(playceholder)
  })
}

Player.install('s_flex', s_flex)
