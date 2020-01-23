webpackJsonp([1],Array(20).concat([
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(144)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(82),
  /* template */
  __webpack_require__(173),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(42);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _assign = __webpack_require__(41);

var _assign2 = _interopRequireDefault(_assign);

var _keys = __webpack_require__(14);

var _keys2 = _interopRequireDefault(_keys);

var _vue = __webpack_require__(21);

var _vue2 = _interopRequireDefault(_vue);

var _vuex = __webpack_require__(36);

var _vuex2 = _interopRequireDefault(_vuex);

var _logger = __webpack_require__(191);

var _logger2 = _interopRequireDefault(_logger);

var _actions = __webpack_require__(70);

var actions = _interopRequireWildcard(_actions);

var _getters2 = __webpack_require__(71);

var getters = _interopRequireWildcard(_getters2);

var _base = __webpack_require__(72);

var _base2 = _interopRequireDefault(_base);

var _setting = __webpack_require__(73);

var _setting2 = _interopRequireDefault(_setting);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.use(_vuex2.default);

var debug = "production" !== 'production';

var store = new _vuex2.default.Store({
  actions: actions,
  getters: getters,
  modules: {
    base: _base2.default,
    setting: _setting2.default
  },
  strict: debug,
  plugins: debug ? [(0, _logger2.default)()] : []
});

var storeModules = {
  loading: {
    show: false,
    title: '加载中',
    full: false,
    position: 'fixed'
  },
  toast: {
    show: false,
    type: 'text',
    time: 2000,
    width: '7.6em',
    isShowMask: false,
    title: '',
    onShow: function onShow() {},
    onHide: function onHide() {}
  },
  alert: {
    show: false,
    title: '',
    content: '',
    buttonText: '确定',
    maskTransition: 'vux-fade',
    dialogTransition: 'vux-dialog',
    onShow: function onShow() {},
    onHide: function onHide() {}
  },
  confirm: {
    show: false,
    title: '',
    content: '',
    confirmText: '确定',
    cancelText: '取消',
    maskTransition: 'vux-fade',
    dialogTransition: 'vux-dialog',
    hideOnBlur: false,
    onCancel: function onCancel() {},
    onConfirm: function onConfirm() {},
    onShow: function onShow() {},
    onHide: function onHide() {}
  }
};

var defaultShow = function defaultShow(payload) {
  if (typeof payload === 'boolean') {
    payload = { show: payload };
  } else if (typeof payload === 'string') {
    payload = { title: payload };
  }
  return payload !== undefined && (0, _keys2.default)(payload).length > 0 ? (0, _assign2.default)({ show: true }, payload) : {};
};

(0, _keys2.default)(storeModules).forEach(function (k) {
  store.registerModule(k, {
    state: storeModules[k],
    mutations: (0, _defineProperty3.default)({}, k, function (state, payload) {
      payload = defaultShow(payload);
      (0, _keys2.default)(payload).forEach(function (k) {
        state[k] = payload[k];
      });
    }),
    getters: (0, _defineProperty3.default)({}, k, function (state) {
      return state;
    })
  });
});

exports.default = store;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var SET_SETTING = exports.SET_SETTING = 'SET_SETTING';

/***/ }),
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__player__ = __webpack_require__(141);
// 化身幽灵Doppelganger,狼人Werewolf,爪牙Minion,守夜人Mason,预言家Seer,强盗Robber,捣蛋鬼Troublemaker,
// 酒鬼Drunk,失眠者Insomniac,皮匠Tanner,猎人Hunter,村民Villager
const _ = __webpack_require__(55)


const LEFT_ROLE_COUNT = 3
/* harmony export (immutable) */ __webpack_exports__["LEFT_ROLE_COUNT"] = LEFT_ROLE_COUNT;

const GameStatusEnum = {
  CONFIG: 1,
  RULE: 2,
  OPERATE1: 3,
  OPERATE2: 4,
  ARGUE: 5,
  VOTE: 6,
  RESULT: 7
}
/* harmony export (immutable) */ __webpack_exports__["GameStatusEnum"] = GameStatusEnum;

const availableRoles = {
  '狼人': 1,
  '爪牙': 1,
  '预言家': 1,
  '强盗': 1,
  '捣蛋鬼': 1,
  '失眠者': 1,
  '酒鬼': 1,
  '村民': 1,
  '守卫': 1,
  '皮匠': 1
}
/* harmony export (immutable) */ __webpack_exports__["availableRoles"] = availableRoles;

const roleNamesSet = {
  3: ['狼人', '狼人', '预言家', '强盗', '捣蛋鬼', '村民'],  // ['狼人', '爪牙', '预言家', '强盗', '酒鬼', '村民']
  4: ['狼人', '狼人', '预言家', '强盗', '捣蛋鬼', '村民', '村民'],  // ['狼人', '爪牙', '预言家', '强盗', '捣蛋鬼', '酒鬼', '村民']
  5: ['狼人', '狼人', '预言家', '强盗', '捣蛋鬼', '村民', '村民', '村民'],  // ['狼人', '爪牙', '预言家', '强盗', '捣蛋鬼', '酒鬼', '村民', '村民']
  6: ['狼人', '狼人', '爪牙', '预言家', '强盗', '捣蛋鬼', '失眠者', '村民', '村民'],  //
  7: ['狼人', '狼人', '爪牙', '预言家', '强盗', '捣蛋鬼', '失眠者', '村民', '村民', '村民'],
  8: ['狼人', '狼人', '爪牙', '预言家', '强盗', '捣蛋鬼', '失眠者', '守卫', '守卫', '村民', '村民'],
  9: ['狼人', '狼人', '爪牙', '预言家', '强盗', '捣蛋鬼', '酒鬼', '村民', '村民', '村民', '村民', '村民']
}

class Game {

  constructor (playerCount = 8, operateTimeout = 20) {
    this.status = GameStatusEnum.CONFIG
    this._playerCount = playerCount
    this._operateTimeout = operateTimeout

    this.defaultRoleNames = []
    this.roleNames = []
    this.players = {}
    this.finalPlayers = {}
    this.rule = ''

    this.curPosition = -1
    this.curRole = null

    this.operateCache = {}
    this.operateLog = {}
  }

  get playerCount () {
    return this._playerCount
  }

  set playerCount (value) {
    value = parseInt(value) || null
    this._playerCount = value
    this.getDefaultRoleNames(value)
  }

  get operateTimeout () {
    return this._operateTimeout
  }

  set operateTimeout (value) {
    this._operateTimeout = value
  }

  get finalRoleNames () {
    let names = []
    if (_.isEmpty(this.finalPlayers)) {
      return names
    }

    for (let i = this.playerCount + LEFT_ROLE_COUNT; i >= 1; i--) {
      names.unshift(this.finalPlayers[i].role.roleName)
    }

    return names
  }

  // 配置阶段
  getDefaultRoleNames (playerCount) {
    if (playerCount === null) {
      return
    }
    // console.log('playerCount', playerCount)

    if (!roleNamesSet[playerCount]) {
      window.alert('unavailable player count')
      throw new Error('unavailable player count')
    }

    this.defaultRoleNames = roleNamesSet[playerCount]
  }

  setRoleNames (rolesString) {
    let roleNames = rolesString.split('、')
    this.checkRoleNames(roleNames)

    this.roleNames = roleNames
  }

  checkRoleNames (roleNames) {
    if (roleNames.length !== this.playerCount + LEFT_ROLE_COUNT) {
      throw new Error(`wrong role count, should be ${(this.playerCount + LEFT_ROLE_COUNT)}`)
    }
    roleNames.map((role) => {
      if (!availableRoles[role]) {
        throw new Error(`unavailable role "${role}"`)
      }
    })
  }

  // 规则说明阶段
  startRuleShow () {
    this.getPlayers()
    this.getRule1()
    this.status = GameStatusEnum.RULE
  }

  getPlayers () {
    let roleNames = _.shuffle(this.roleNames)
    for (let position = this.playerCount + LEFT_ROLE_COUNT; position >= 1; position--) {
      this.players[position] = new __WEBPACK_IMPORTED_MODULE_0__player__["a" /* default */](roleNames[position - 1], position, this)
      this.finalPlayers[position] = new __WEBPACK_IMPORTED_MODULE_0__player__["a" /* default */](roleNames[position - 1], position, this)
    }
  }

  getRule1 () {
    this.rule = `请各位玩家闭眼，按照顺时针方向传递手机，每人有${this._operateTimeout}s时间操作`
  }

  // 操作阶段
  startOperate1 () {
    this.status = GameStatusEnum.OPERATE1
    this.operate1(1)
  }

  startOperate2 () {
    this.finishOperate1()

    if (!_.includes(this.roleNames, '失眠者')) {
      this.status = GameStatusEnum.ARGUE
      return
    }

    this.status = GameStatusEnum.OPERATE2
    this.operate2(1)
  }

  operate1 (position) {
    this.operateResultShow = false
    if (position > this.playerCount) {
      this.startOperate2()
      return
    }

    this.curPlayer = this.players[position]
    this.curPosition = position
    setTimeout(() => {
      // this.curRole.operate()
      // this.operateResult = this.getOperateResult()
      // this.operateResultShow = true
      // setTimeout(() => {
      //   this.operate(i + 1)
      // }, 5 * 1000)
    }, this._operateTimeout)
  }

  operate2 (position) {
    this.operateResultShow = false
    if (position > this.playerCount) {
      this.status = GameStatusEnum.ARGUE
      return
    }

    this.curPlayer = this.players[position]
    this.curPosition = position
    setTimeout(() => {
      // this.curRole.operate()
      // this.operateResult = this.getOperateResult()
      // this.operateResultShow = true
      // setTimeout(() => {
      //   this.operate(i + 1)
      // }, 5 * 1000)
    }, this._operateTimeout)
  }

  finishOperate1 () {
    ['强盗', '捣蛋鬼', '酒鬼'].map((roleName) => {
      if (this.operateCache[roleName]) {
        this.switchRole(...this.operateCache[roleName])
      }
    })
  }

  getRule2 () {
    this.rule = `请各位玩家闭眼，按照顺时针方向传递手机，每人有${this._operateTimeout}s时间操作，最后一位玩家操作后大家睁眼`
  }

  // 结果阶段
  getKillTargets () {
    return Array.from(new Array(this.playerCount + LEFT_ROLE_COUNT), (val, index) => index + 1)
  }

  getKillResult () {
    return (list) => {
      if (list.length === 0) {
        throw new Error('请选择操作目标')
      }
      if (list.length > 1) {
        throw new Error('最多票决1名玩家')
      }

      let killedPosition = list[0]
      let killedRoleName = this.finalPlayers[killedPosition].role.roleName
      let result

      if (killedPosition <= this.playerCount) {
        if (_.includes([
          '爪牙',
          '预言家',
          '强盗',
          '捣蛋鬼',
          '失眠者',
          '酒鬼',
          '村民',
          '守卫'
        ], killedRoleName)) {
          result = `${killedPosition}玩家的角色是${killedRoleName}，狼人胜利`
        }
        if (_.includes([
          '狼人'
        ], killedRoleName)) {
          result = `${killedPosition}玩家的角色是${killedRoleName}，平民胜利`
        }
        if (_.includes([
          '皮匠'
        ], killedRoleName)) {
          result = `${killedPosition}玩家的角色是${killedRoleName}，皮匠胜利`
        }
      } else {
        if (_.includes(this.finalRoleNames.slice(0, -3), '狼人')) {
          result = `场上有狼人，狼人胜利`
        } else {
          result = `狼人都在底牌中，平民胜利`
        }
      }

      this.status = GameStatusEnum.RESULT
      return result
    }
  }
  
  // 辅助操作
  findOtherPlayers (position, roleName) {
    let players = this.players
    let otherRoles = []

    for (let i = this.playerCount; i >= 1; i--) {
      let player = players[i]
      if (player.role.roleName === roleName && player.position !== position) {
        otherRoles.unshift(player.position)
      }
    }

    return otherRoles
  }

  findPlayers (roleName) {
    let players = this.players
    let wolfs = []

    for (let i = this.playerCount; i >= 1; i--) {
      let player = players[i]
      if (player.role.roleName === roleName) {
        wolfs.unshift(player.position)
      }
    }

    return wolfs
  }

  getRoleName (position) {
    let players = this.players

    return players[position].role.roleName
  }

  getFinalRoleName (position) {
    let players = this.finalPlayers

    return players[position].role.roleName
  }

  switchRole (position1, position2) {
    let players = this.finalPlayers

    let temp = players[position1]
    players[position1] = players[position2]
    players[position2] = temp
  }
}
/* harmony export (immutable) */ __webpack_exports__["default"] = Game;


/***/ }),
/* 55 */,
/* 56 */,
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(152)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(81),
  /* template */
  __webpack_require__(182),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(149)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(85),
  /* template */
  __webpack_require__(179),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(153)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(87),
  /* template */
  __webpack_require__(183),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 60 */,
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (Vue) {
  __webpack_require__(140).attach(document.body);
  if (typeof window._ === 'undefined') {
    window._ = __webpack_require__(161);
  }
  if (typeof window.Moment === 'undefined') {
    window.Moment = __webpack_require__(162);
  }

  if (typeof window._ === 'undefined') {
    window._ = {};
    window._.noop = function () {};
  }
};

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (Vue) {
  if (!__webpack_require__.i({"NODE_ENV":"production"}).IS_BUILD) {} else if (__webpack_require__.i({"NODE_ENV":"production"}).env === 'production') {}
};

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {};

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _store = __webpack_require__(37);

var _store2 = _interopRequireDefault(_store);

var _vue = __webpack_require__(21);

var _vue2 = _interopRequireDefault(_vue);

var _vueRouter = __webpack_require__(189);

var _vueRouter2 = _interopRequireDefault(_vueRouter);

var _Hello = __webpack_require__(192);

var _Hello2 = _interopRequireDefault(_Hello);

var _Index = __webpack_require__(193);

var _Index2 = _interopRequireDefault(_Index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.use(_vueRouter2.default);

var routes = [{
  path: '/',
  name: 'Index',
  component: _Index2.default
}, {
  path: '/hello',
  name: 'Hello',
  component: _Hello2.default
}, {
  path: '/user',
  name: 'User',
  component: _Hello2.default
}];

var router = new _vueRouter2.default({
  routes: routes,

  base: '/app/'
});

router.beforeEach(function (to, from, next) {
  _store2.default.commit('loading', { show: true });
  next();
});

router.afterEach(function (to) {
  _store2.default.commit('loading', { show: false });
});

exports.default = router;

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = __webpack_require__(14);

var _keys2 = _interopRequireDefault(_keys);

var _mixins = __webpack_require__(75);

var _mixins2 = _interopRequireDefault(_mixins);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (Vue) {
  (0, _keys2.default)(_mixins2.default).forEach(function (k) {
    Vue.mixin(_mixins2.default[k]);
  });
};

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(157)
  __webpack_require__(158)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(90),
  /* template */
  __webpack_require__(187),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 67 */,
/* 68 */,
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vue = __webpack_require__(21);

var _vue2 = _interopRequireDefault(_vue);

var _App = __webpack_require__(66);

var _App2 = _interopRequireDefault(_App);

var _store = __webpack_require__(37);

var _store2 = _interopRequireDefault(_store);

var _router = __webpack_require__(64);

var _router2 = _interopRequireDefault(_router);

var _installStyles = __webpack_require__(63);

var _installStyles2 = _interopRequireDefault(_installStyles);

var _installCommonLibs = __webpack_require__(61);

var _installCommonLibs2 = _interopRequireDefault(_installCommonLibs);

var _installCommonUtils = __webpack_require__(62);

var _installCommonUtils2 = _interopRequireDefault(_installCommonUtils);

var _vueExtend = __webpack_require__(65);

var _vueExtend2 = _interopRequireDefault(_vueExtend);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _installStyles2.default)();

(0, _installCommonLibs2.default)(_vue2.default);

(0, _installCommonUtils2.default)(_vue2.default);

(0, _vueExtend2.default)(_vue2.default);

_vue2.default.config.productionTip = false;

new _vue2.default({
  el: '#app',
  store: _store2.default,
  router: _router2.default,
  render: function render(createElement) {
    return createElement(_App2.default);
  }
});

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSetting = undefined;

var _mutationTypes = __webpack_require__(38);

var types = _interopRequireWildcard(_mutationTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var getSetting = exports.getSetting = function getSetting(_ref, options) {
  var commit = _ref.commit;

  commit(types.SET_SETTING, options);
};

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var setting = exports.setting = function setting(_ref) {
  var setting = _ref.setting;

  return setting;
};

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _browser = __webpack_require__(74);

var someUrlRegEx = new RegExp('^' + location.origin + '/#/member/wallet/[^/]*$');

var state = {
  notSomeUrl: typeof firstHref !== 'undefined' ? !someUrlRegEx.test(firstHref) : 'no firstHref',
  browserVersions: (0, _browser.browserVersions)()
};

exports.default = {
  state: state
};

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(42);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _mutationTypes = __webpack_require__(38);

var types = _interopRequireWildcard(_mutationTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var state = {};

var mutations = (0, _defineProperty3.default)({}, types.SET_SETTING, function (state, setting) {
  var localCurrTime = Moment().format('YYYY-MM-DD HH:mm:ss');
  var serverCurrTime = setting.serverTime || localCurrTime;
  state = setting;
  state.serverLocalDiffTime = Moment(serverCurrTime).diff(Moment(localCurrTime));
});

exports.default = {
  state: state,
  mutations: mutations
};

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var browserVersions = exports.browserVersions = function browserVersions() {
  var u = navigator.userAgent;
  return {
    trident: u.indexOf('Trident') > -1,
    presto: u.indexOf('Presto') > -1,
    webKit: u.indexOf('AppleWebKit') > -1,
    gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') === -1,
    mobile: !!u.match(/AppleWebKit.*Mobile.*/),
    ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
    android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1,
    iPhone: u.indexOf('iPhone') > -1,
    iPad: u.indexOf('iPad') > -1,
    webApp: u.indexOf('Safari') === -1 };
};

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(43);

var _extends3 = _interopRequireDefault(_extends2);

var _vuex = __webpack_require__(36);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  base: {
    computed: {
      setting: function setting() {
        return this.$store.state.setting;
      },
      base: function base() {
        return this.$store.state.base;
      }
    },
    methods: (0, _extends3.default)({}, (0, _vuex.mapMutations)(['loading', 'toast', 'alert', 'confirm']), {
      setTitle: function setTitle(title) {
        document.title = title;
        document.getElementById('iframe').contentWindow.location.reload();
      }
    })
  }
};

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _xDialog = __webpack_require__(59);

var _xDialog2 = _interopRequireDefault(_xDialog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'alert',
  components: {
    XDialog: _xDialog2.default
  },
  created: function created() {
    if (typeof this.value !== 'undefined') {
      this.showValue = this.value;
    }
  },

  props: {
    value: Boolean,
    title: String,
    content: String,
    buttonText: String,
    hideOnBlur: {
      type: Boolean,
      default: false
    },
    maskTransition: {
      type: String,
      default: 'vux-mask'
    },
    dialogTransition: {
      type: String,
      default: 'vux-dialog'
    },
    maskZIndex: [Number, String]
  },
  data: function data() {
    return {
      showValue: false
    };
  },

  methods: {
    _onHide: function _onHide() {
      this.showValue = false;
    }
  },
  watch: {
    value: function value(val) {
      this.showValue = val;
    },
    showValue: function showValue(val) {
      this.$emit('input', val);
    }
  }
};

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _inlineDesc = __webpack_require__(20);

var _inlineDesc2 = _interopRequireDefault(_inlineDesc);

var _router = __webpack_require__(40);

var _props = __webpack_require__(93);

var _props2 = _interopRequireDefault(_props);

var _cleanStyle = __webpack_require__(39);

var _cleanStyle2 = _interopRequireDefault(_cleanStyle);

var _getParentProp = __webpack_require__(96);

var _getParentProp2 = _interopRequireDefault(_getParentProp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'cell',
  components: {
    InlineDesc: _inlineDesc2.default
  },
  props: (0, _props2.default)(),
  created: function created() {
    if (false) {
      console.warn('[VUX] 抱歉，当前组件[cell]要求更新依赖 vux-loader@latest');
    }
  },
  beforeMount: function beforeMount() {
    this.hasTitleSlot = !!this.$slots.title;

    if (this.$slots.value && "production" === 'development') {
      console.warn('[VUX] [cell] slot=value 已经废弃，请使用默认 slot 替代');
    }
  },

  computed: {
    labelStyles: function labelStyles() {
      return (0, _cleanStyle2.default)({
        width: (0, _getParentProp2.default)(this, 'labelWidth'),
        textAlign: (0, _getParentProp2.default)(this, 'labelAlign'),
        marginRight: (0, _getParentProp2.default)(this, 'labelMarginRight')
      });
    },
    valueClass: function valueClass() {
      return {
        'vux-cell-primary': this.primary === 'content' || this.valueAlign === 'left',
        'vux-cell-align-left': this.valueAlign === 'left',
        'vux-cell-arrow-transition': !!this.arrowDirection,
        'vux-cell-arrow-up': this.arrowDirection === 'up',
        'vux-cell-arrow-down': this.arrowDirection === 'down'
      };
    },
    labelClass: function labelClass() {
      return {
        'vux-cell-justify': (0, _getParentProp2.default)(this, 'justify') === 'justify'
      };
    },
    style: function style() {
      if (this.alignItems) {
        return {
          alignItems: this.alignItems
        };
      }
    }
  },
  methods: {
    onClick: function onClick() {
      !this.disabled && (0, _router.go)(this.link, this.$router);
    }
  },
  data: function data() {
    return {
      hasTitleSlot: true,
      hasMounted: false
    };
  }
};

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = __webpack_require__(14);

var _keys2 = _interopRequireDefault(_keys);

var _stringify = __webpack_require__(101);

var _stringify2 = _interopRequireDefault(_stringify);

var _base = __webpack_require__(22);

var _base2 = _interopRequireDefault(_base);

var _tip = __webpack_require__(200);

var _tip2 = _interopRequireDefault(_tip);

var _icon = __webpack_require__(57);

var _icon2 = _interopRequireDefault(_icon);

var _inlineDesc = __webpack_require__(20);

var _inlineDesc2 = _interopRequireDefault(_inlineDesc);

var _objectFilter = __webpack_require__(94);

var _arrayShuffle = __webpack_require__(67);

var _arrayShuffle2 = _interopRequireDefault(_arrayShuffle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'checklist',
  components: {
    Tip: _tip2.default,
    Icon: _icon2.default,
    InlineDesc: _inlineDesc2.default
  },
  filters: {
    getValue: _objectFilter.getValue,
    getKey: _objectFilter.getKey
  },
  mixins: [_base2.default],
  props: {
    name: String,
    showError: Boolean,
    title: String,
    required: {
      type: Boolean,
      default: false
    },
    options: {
      type: Array,
      required: true
    },
    value: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    max: Number,
    min: Number,
    fillMode: Boolean,
    randomOrder: Boolean,
    checkDisabled: {
      type: Boolean,
      default: true
    },
    labelPosition: {
      type: String,
      default: 'right'
    },
    disabled: Boolean
  },
  data: function data() {
    return {
      currentValue: [],
      currentOptions: this.options,
      tempValue: '' };
  },
  beforeUpdate: function beforeUpdate() {
    if (this.isRadio) {
      var length = this.currentValue.length;
      if (length > 1) {
        this.currentValue = [this.currentValue[length - 1]];
      }
      var val = pure(this.currentValue);
      this.tempValue = val.length ? val[0] : '';
    }
  },
  created: function created() {
    this.handleChangeEvent = true;
    if (this.value) {
      this.currentValue = this.value;
      if (this.isRadio) {
        this.tempValue = this.isRadio ? this.value[0] : this.value;
      }
    }
    if (this.randomOrder) {
      this.currentOptions = (0, _arrayShuffle2.default)(this.options);
    } else {
      this.currentOptions = this.options;
    }
  },

  methods: {
    getValue: _objectFilter.getValue,
    getKey: _objectFilter.getKey,
    getInlineDesc: _objectFilter.getInlineDesc,
    getFullValue: function getFullValue() {
      var labels = (0, _objectFilter.getLabels)(this.options, this.value);
      return this.currentValue.map(function (one, index) {
        return {
          value: one,
          label: labels[index]
        };
      });
    },
    isDisabled: function isDisabled(key) {
      if (!this.checkDisabled) {
        return false;
      }
      if (this._max > 1) {
        return this.currentValue.indexOf(key) === -1 && this.currentValue.length === this._max;
      }
      return false;
    }
  },
  computed: {
    isRadio: function isRadio() {
      if (typeof this.max === 'undefined') {
        return false;
      } else {
        return this.max === 1;
      }
    },
    _total: function _total() {
      return this.fillMode ? this.options.length + 1 : this.options.length;
    },
    _min: function _min() {
      if (!this.required && !this.min) {
        return 0;
      }
      if (!this.required && this.min) {
        return Math.min(this._total, this.min);
      }
      if (this.required) {
        if (this.min) {
          var max = Math.max(1, this.min);
          return Math.min(this._total, max);
        } else {
          return 1;
        }
      }
    },
    _max: function _max() {
      if (!this.required && !this.max) {
        return this._total;
      }
      if (this.max) {
        if (this.max > this._total) {
          return this._total;
        }
        return this.max;
      } else {
        return this._total;
      }
    },
    valid: function valid() {
      return this.currentValue.length >= this._min && this.currentValue.length <= this._max;
    }
  },
  watch: {
    tempValue: function tempValue(val) {
      var _val = val ? [val] : [];
      this.$emit('input', _val);
      this.$emit('on-change', _val, (0, _objectFilter.getLabels)(this.options, _val));
    },
    value: function value(newVal) {
      if ((0, _stringify2.default)(newVal) !== (0, _stringify2.default)(this.currentValue)) {
        this.currentValue = newVal;
      }
    },
    options: function options(val) {
      this.currentOptions = val;
    },
    currentValue: function currentValue(newVal) {
      var val = pure(newVal);

      if (!this.isRadio) {
        this.$emit('input', val);
        this.$emit('on-change', val, (0, _objectFilter.getLabels)(this.options, val));
        var err = {};
        if (this._min) {
          if (this.required) {
            if (this.currentValue.length < this._min) {
              err = {
                min: this._min
              };
            }
          } else {
            if (this.currentValue.length && this.currentValue.length < this._min) {
              err = {
                min: this._min
              };
            }
          }
        }
        if (!this.valid && this.dirty && (0, _keys2.default)(err).length) {
          this.$emit('on-error', err);
        } else {
          this.$emit('on-clear-error');
        }
      }
    }
  }
};

function pure(obj) {
  return JSON.parse((0, _stringify2.default)(obj));
}

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _xDialog = __webpack_require__(59);

var _xDialog2 = _interopRequireDefault(_xDialog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'confirm',
  components: {
    XDialog: _xDialog2.default
  },
  props: {
    value: {
      type: Boolean,
      default: false
    },
    showInput: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: ''
    },
    theme: {
      type: String,
      default: 'ios'
    },
    hideOnBlur: {
      type: Boolean,
      default: false
    },
    title: String,
    confirmText: String,
    cancelText: String,
    maskTransition: {
      type: String,
      default: 'vux-fade'
    },
    maskZIndex: [Number, String],
    dialogTransition: {
      type: String,
      default: 'vux-dialog'
    },
    content: String,
    closeOnConfirm: {
      type: Boolean,
      default: true
    },
    inputAttrs: Object,
    showContent: {
      type: Boolean,
      default: true
    },
    confirmType: {
      type: String,
      default: 'primary'
    }
  },
  created: function created() {
    this.showValue = this.show;
    if (this.value) {
      this.showValue = this.value;
    }
  },

  watch: {
    value: function value(val) {
      this.showValue = val;
    },
    showValue: function showValue(val) {
      var _this = this;

      this.$emit('input', val);
      if (val) {
        if (this.showInput) {
          this.msg = '';
          setTimeout(function () {
            if (_this.$refs.input) {
              _this.setInputFocus();
            }
          }, 300);
        }
        this.$emit('on-show');
      }
    }
  },
  data: function data() {
    return {
      msg: '',
      showValue: false
    };
  },

  methods: {
    setInputValue: function setInputValue(val) {
      this.msg = val;
    },
    setInputFocus: function setInputFocus() {
      this.$refs.input.focus();
    },
    _onConfirm: function _onConfirm() {
      if (!this.showValue) {
        return;
      }
      if (this.closeOnConfirm) {
        this.showValue = false;
      }
      this.$emit('on-confirm', this.msg);
    },
    _onCancel: function _onCancel() {
      if (!this.showValue) {
        return;
      }
      this.showValue = false;
      this.$emit('on-cancel');
    }
  }
};

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _cleanStyle = __webpack_require__(39);

var _cleanStyle2 = _interopRequireDefault(_cleanStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'group',
  methods: {
    cleanStyle: _cleanStyle2.default
  },
  props: {
    title: String,
    titleColor: String,
    labelWidth: String,
    labelAlign: String,
    labelMarginRight: String,
    gutter: [String, Number]
  }
};

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  name: 'icon',
  props: {
    type: String,
    isMsg: Boolean
  },
  computed: {
    className: function className() {
      return 'weui-icon weui_icon_' + this.type + ' weui-icon-' + this.type.replace(/_/g, '-');
    }
  }
};

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  name: 'inline-desc'
};

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  name: 'loading',
  model: {
    prop: 'show',
    event: 'change'
  },
  props: {
    show: Boolean,
    text: String,
    position: String,
    transition: {
      type: String,
      default: 'vux-mask'
    }
  },
  watch: {
    show: function show(val) {
      this.$emit('update:show', val);
    }
  }
};

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  name: 'tip',
  props: {
    align: {
      type: String,
      default: 'left'
    }
  }
};

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _safariFix = __webpack_require__(99);

var _safariFix2 = _interopRequireDefault(_safariFix);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'toast',
  mixins: [_safariFix2.default],
  props: {
    value: Boolean,
    time: {
      type: Number,
      default: 2000
    },
    type: {
      type: String,
      default: 'success'
    },
    transition: String,
    width: {
      type: String,
      default: '7.6em'
    },
    isShowMask: {
      type: Boolean,
      default: false
    },
    text: String,
    position: String
  },
  data: function data() {
    return {
      show: false
    };
  },
  created: function created() {
    if (this.value) {
      this.show = true;
    }
  },

  computed: {
    currentTransition: function currentTransition() {
      if (this.transition) {
        return this.transition;
      }
      if (this.position === 'top') {
        return 'vux-slide-from-top';
      }
      if (this.position === 'bottom') {
        return 'vux-slide-from-bottom';
      }
      return 'vux-fade';
    },
    toastClass: function toastClass() {
      return {
        'weui-toast_forbidden': this.type === 'warn',
        'weui-toast_cancel': this.type === 'cancel',
        'weui-toast_success': this.type === 'success',
        'weui-toast_text': this.type === 'text',
        'vux-toast-top': this.position === 'top',
        'vux-toast-bottom': this.position === 'bottom',
        'vux-toast-middle': this.position === 'middle'
      };
    },
    style: function style() {
      if (this.type === 'text' && this.width === 'auto') {
        return { padding: '10px' };
      }
    }
  },
  watch: {
    show: function show(val) {
      var _this = this;

      if (val) {
        this.$emit('input', true);
        this.$emit('on-show');
        this.fixSafariOverflowScrolling('auto');

        clearTimeout(this.timeout);
        this.timeout = setTimeout(function () {
          _this.show = false;
          _this.$emit('input', false);
          _this.$emit('on-hide');
          _this.fixSafariOverflowScrolling('touch');
        }, this.time);
      }
    },
    value: function value(val) {
      this.show = val;
    }
  }
};

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _router = __webpack_require__(40);

exports.default = {
  name: 'x-button',
  props: {
    type: {
      default: 'default'
    },
    disabled: Boolean,
    mini: Boolean,
    plain: Boolean,
    text: String,
    actionType: String,
    showLoading: Boolean,
    link: [String, Object],
    gradients: {
      type: Array,
      validator: function validator(val) {
        return val.length === 2;
      }
    }
  },
  methods: {
    onClick: function onClick() {
      !this.disabled && (0, _router.go)(this.link, this.$router);
    }
  },
  computed: {
    noBorder: function noBorder() {
      return Array.isArray(this.gradients);
    },
    buttonStyle: function buttonStyle() {
      if (this.gradients) {
        return {
          background: 'linear-gradient(90deg, ' + this.gradients[0] + ', ' + this.gradients[1] + ')',
          color: '#FFFFFF'
        };
      }
    },
    classes: function classes() {
      return [{
        'weui-btn_disabled': !this.plain && this.disabled,
        'weui-btn_plain-disabled': this.plain && this.disabled,
        'weui-btn_mini': this.mini,
        'vux-x-button-no-border': this.noBorder
      }, !this.plain ? 'weui-btn_' + this.type : '', this.plain ? 'weui-btn_plain-' + this.type : '', this.showLoading ? 'weui-btn_loading' : ''];
    }
  }
};

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _preventBodyScroll = __webpack_require__(98);

var _preventBodyScroll2 = _interopRequireDefault(_preventBodyScroll);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  mixins: [_preventBodyScroll2.default],
  name: 'x-dialog',
  model: {
    prop: 'show',
    event: 'change'
  },
  props: {
    show: {
      type: Boolean,
      default: false
    },
    maskTransition: {
      type: String,
      default: 'vux-mask'
    },
    maskZIndex: [String, Number],
    dialogTransition: {
      type: String,
      default: 'vux-dialog'
    },
    dialogClass: {
      type: String,
      default: 'weui-dialog'
    },
    hideOnBlur: Boolean,
    dialogStyle: Object,
    scroll: {
      type: Boolean,
      default: true,
      validator: function validator(val) {
        if (false) {
          console.warn('[VUX warn] x-dialog:scroll 已经废弃。如果你是 100% 布局，请参照文档配置 $layout 以实现阻止滚动');
        }
        return true;
      }
    }
  },
  computed: {
    maskStyle: function maskStyle() {
      if (typeof this.maskZIndex !== 'undefined') {
        return {
          zIndex: this.maskZIndex
        };
      }
    }
  },
  mounted: function mounted() {
    if (typeof window !== 'undefined') {
      if (window.VUX_CONFIG && window.VUX_CONFIG.$layout === 'VIEW_BOX') {
        this.layout = 'VIEW_BOX';
      }
    }
  },

  watch: {
    show: function show(val) {
      this.$emit('update:show', val);
      this.$emit(val ? 'on-show' : 'on-hide');
      if (val) {
        this.addModalClassName();
      } else {
        this.removeModalClassName();
      }
    }
  },
  methods: {
    shouldPreventScroll: function shouldPreventScroll() {
      var iOS = /iPad|iPhone|iPod/i.test(window.navigator.userAgent);
      var hasInput = this.$el.querySelector('input') || this.$el.querySelector('textarea');
      if (iOS && hasInput) {
        return true;
      }
    },
    hide: function hide() {
      if (this.hideOnBlur) {
        this.$emit('update:show', false);
        this.$emit('change', false);
        this.$emit('on-click-mask');
      }
    }
  },
  data: function data() {
    return {
      layout: ''
    };
  }
};

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = __webpack_require__(14);

var _keys2 = _interopRequireDefault(_keys);

var _base = __webpack_require__(22);

var _base2 = _interopRequireDefault(_base);

var _icon = __webpack_require__(57);

var _icon2 = _interopRequireDefault(_icon);

var _toast = __webpack_require__(58);

var _toast2 = _interopRequireDefault(_toast);

var _inlineDesc = __webpack_require__(20);

var _inlineDesc2 = _interopRequireDefault(_inlineDesc);

var _isEmail = __webpack_require__(168);

var _isEmail2 = _interopRequireDefault(_isEmail);

var _isMobilePhone = __webpack_require__(170);

var _isMobilePhone2 = _interopRequireDefault(_isMobilePhone);

var _debounce = __webpack_require__(100);

var _debounce2 = _interopRequireDefault(_debounce);

var _vanillaMasker = __webpack_require__(171);

var _vanillaMasker2 = _interopRequireDefault(_vanillaMasker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var validators = {
  'email': {
    fn: _isEmail2.default,
    msg: '邮箱格式'
  },
  'china-mobile': {
    fn: function fn(str) {
      return (0, _isMobilePhone2.default)(str, 'zh-CN');
    },

    msg: '手机号码'
  },
  'china-name': {
    fn: function fn(str) {
      return str.length >= 2 && str.length <= 6;
    },

    msg: '中文姓名'
  }
};
exports.default = {
  name: 'x-input',
  created: function created() {
    var _this = this;

    this.currentValue = this.value === undefined || this.value === null ? '' : this.mask ? this.maskValue(this.value) : this.value;

    if (false) {
      if (!this.title && !this.placeholder && !this.currentValue) {
        console.warn('no title and no placeholder?');
      }
    }

    if (this.required && typeof this.currentValue === 'undefined') {
      this.valid = false;
    }
    this.handleChangeEvent = true;
    if (this.debounce) {
      this._debounce = (0, _debounce2.default)(function () {
        _this.$emit('on-change', _this.currentValue);
      }, this.debounce);
    }
  },
  beforeMount: function beforeMount() {
    if (this.$slots && this.$slots['restricted-label']) {
      this.hasRestrictedLabel = true;
    }
  },
  beforeDestroy: function beforeDestroy() {
    if (this._debounce) {
      this._debounce.cancel();
    }
  },

  mixins: [_base2.default],
  components: {
    Icon: _icon2.default,
    InlineDesc: _inlineDesc2.default,
    Toast: _toast2.default
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    placeholder: String,
    value: [String, Number],
    name: String,
    readonly: Boolean,
    disabled: Boolean,
    keyboard: String,
    inlineDesc: String,
    isType: [String, Function],
    min: Number,
    max: Number,
    showClear: {
      type: Boolean,
      default: true
    },
    equalWith: String,
    textAlign: String,

    autocomplete: {
      type: String,
      default: 'off'
    },
    autocapitalize: {
      type: String,
      default: 'off'
    },
    autocorrect: {
      type: String,
      default: 'off'
    },
    spellcheck: {
      type: String,
      default: 'false'
    },
    novalidate: {
      type: Boolean,
      default: false
    },
    iconType: String,
    debounce: Number,
    placeholderAlign: String,
    labelWidth: String,
    mask: String,
    shouldToastError: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    labelStyles: function labelStyles() {
      return {
        width: this.labelWidthComputed || this.$parent.labelWidth || this.labelWidthComputed,
        textAlign: this.$parent.labelAlign,
        marginRight: this.$parent.labelMarginRight
      };
    },
    labelClass: function labelClass() {
      return {
        'vux-cell-justify': this.$parent.labelAlign === 'justify' || this.$parent.$parent.labelAlign === 'justify'
      };
    },
    pattern: function pattern() {
      if (this.keyboard === 'number' || this.isType === 'china-mobile') {
        return '[0-9]*';
      }
    },
    labelWidthComputed: function labelWidthComputed() {
      var width = this.title.replace(/[^x00-xff]/g, '00').length / 2 + 1;
      if (width < 10) {
        return width + 'em';
      }
    },
    hasErrors: function hasErrors() {
      return (0, _keys2.default)(this.errors).length > 0;
    },
    inputStyle: function inputStyle() {
      if (this.textAlign) {
        return {
          textAlign: this.textAlign
        };
      }
    },
    showWarn: function showWarn() {
      return !this.novalidate && !this.equalWith && !this.valid && this.firstError && (this.touched || this.forceShowError);
    }
  },
  methods: {
    onClickErrorIcon: function onClickErrorIcon() {
      if (this.shouldToastError && this.firstError) {
        this.showErrorToast = true;
      }
      this.$emit('on-click-error-icon', this.firstError);
    },
    maskValue: function maskValue(val) {
      var val1 = this.mask ? _vanillaMasker2.default.toPattern(val, this.mask) : val;
      return val1;
    },
    reset: function reset() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

      this.dirty = false;
      this.currentValue = value;
      this.firstError = '';
      this.valid = true;
    },
    clear: function clear() {
      this.currentValue = '';
      this.focus();
    },
    focus: function focus() {
      this.$refs.input.focus();
    },
    blur: function blur() {
      this.$refs.input.blur();
    },
    focusHandler: function focusHandler($event) {
      this.$emit('on-focus', this.currentValue, $event);
    },
    onBlur: function onBlur($event) {
      this.setTouched();
      this.validate();
      this.$emit('on-blur', this.currentValue, $event);
    },
    onKeyUp: function onKeyUp(e) {
      if (e.key === 'Enter') {
        e.target.blur();
        this.$emit('on-enter', this.currentValue, e);
      }
    },
    getError: function getError() {
      var key = (0, _keys2.default)(this.errors)[0];
      this.firstError = this.errors[key];
    },
    validate: function validate() {
      if (typeof this.equalWith !== 'undefined') {
        this.validateEqual();
        return;
      }
      this.errors = {};

      if (!this.currentValue && !this.required) {
        this.valid = true;
        return;
      }

      if (!this.currentValue && this.required) {
        this.valid = false;
        this.errors.required = '必填哦';
        this.getError();
        return;
      }

      if (typeof this.isType === 'string') {
        var validator = validators[this.isType];
        if (validator) {
          var value = this.currentValue;

          if (this.isType === 'china-mobile' && this.mask === '999 9999 9999') {
            value = this.currentValue.replace(/\s+/g, '');
          }

          this.valid = validator['fn'](value);
          if (!this.valid) {
            this.forceShowError = true;
            this.errors.format = validator['msg'] + '格式不对哦~';
            this.getError();
            return;
          } else {
            delete this.errors.format;
          }
        }
      }

      if (typeof this.isType === 'function') {
        var validStatus = this.isType(this.currentValue);
        this.valid = validStatus.valid;
        if (!this.valid) {
          this.errors.format = validStatus.msg;
          this.forceShowError = true;
          this.getError();
          return;
        } else {
          delete this.errors.format;
        }
      }

      if (this.min) {
        if (this.currentValue.length < this.min) {
          this.errors.min = '\u6700\u5C11\u5E94\u8BE5\u8F93\u5165' + this.min + '\u4E2A\u5B57\u7B26\u54E6';
          this.valid = false;
          this.getError();
          return;
        } else {
          delete this.errors.min;
        }
      }

      if (this.max) {
        if (this.currentValue.length > this.max) {
          this.errors.max = '\u6700\u591A\u53EF\u4EE5\u8F93\u5165' + this.max + '\u4E2A\u5B57\u7B26\u54E6';
          this.valid = false;
          this.forceShowError = true;
          return;
        } else {
          this.forceShowError = false;
          delete this.errors.max;
        }
      }

      this.valid = true;
    },
    validateEqual: function validateEqual() {
      if (!this.equalWith && this.currentValue) {
        this.valid = false;
        this.errors.equal = '输入不一致';
        return;
      }
      var willCheck = this.dirty || this.currentValue.length >= this.equalWith.length;

      if (willCheck && this.currentValue !== this.equalWith) {
        this.valid = false;
        this.errors.equal = '输入不一致';
        return;
      } else {
        if (!this.currentValue && this.required) {
          this.valid = false;
        } else {
          this.valid = true;
          delete this.errors.equal;
        }
      }
    }
  },
  data: function data() {
    var data = {
      hasRestrictedLabel: false,
      firstError: '',
      forceShowError: false,
      hasLengthEqual: false,
      valid: true,
      currentValue: '',
      showErrorToast: false
    };
    return data;
  },

  watch: {
    mask: function mask(val) {
      if (val && this.currentValue) {
        this.currentValue = this.maskValue(this.currentValue);
      }
    },
    valid: function valid() {
      this.getError();
    },
    value: function value(val) {
      this.currentValue = val;
    },
    equalWith: function equalWith(newVal) {
      if (newVal && this.equalWith) {
        if (newVal.length === this.equalWith.length) {
          this.hasLengthEqual = true;
        }
        this.validateEqual();
      } else {
        this.validate();
      }
    },
    currentValue: function currentValue(newVal) {
      if (!this.equalWith && newVal) {
        this.validateEqual();
      }
      if (newVal && this.equalWith) {
        if (newVal.length === this.equalWith.length) {
          this.hasLengthEqual = true;
        }
        this.validateEqual();
      } else {
        this.validate();
      }
      this.$emit('input', this.maskValue(newVal));
      if (this._debounce) {
        this._debounce();
      } else {
        this.$emit('on-change', newVal);
      }
    }
  }
};

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _base = __webpack_require__(22);

var _base2 = _interopRequireDefault(_base);

var _inlineDesc = __webpack_require__(20);

var _inlineDesc2 = _interopRequireDefault(_inlineDesc);

var _autosize = __webpack_require__(68);

var _autosize2 = _interopRequireDefault(_autosize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'x-textarea',
  minxins: [_base2.default],
  mounted: function mounted() {
    var _this = this;

    if (this.$slots && this.$slots['restricted-label']) {
      this.hasRestrictedLabel = true;
    }

    this.$nextTick(function () {
      if (_this.autosize) {
        _this.bindAutosize();
      }
    });
  },

  components: {
    InlineDesc: _inlineDesc2.default
  },
  props: {
    title: String,
    inlineDesc: String,
    showCounter: {
      type: Boolean,
      default: true
    },
    max: Number,
    value: String,
    name: String,
    placeholder: String,
    readonly: Boolean,
    rows: {
      type: Number,
      default: 3
    },
    cols: {
      type: Number,
      default: 30
    },
    height: Number,

    autocomplete: {
      type: String,
      default: 'off'
    },
    autocapitalize: {
      type: String,
      default: 'off'
    },
    autocorrect: {
      type: String,
      default: 'off'
    },
    spellcheck: {
      type: String,
      default: 'false'
    },
    autosize: Boolean },
  created: function created() {
    this.currentValue = this.value;
  },

  watch: {
    autosize: function autosize(val) {
      this.unbindAutosize();
      if (val) {
        this.bindAutosize();
      }
    },
    value: function value(val) {
      this.currentValue = val;
    },
    currentValue: function currentValue(newVal) {
      if (this.max && newVal && newVal.length > this.max) {
        this.currentValue = newVal.slice(0, this.max);
      }
      this.$emit('input', this.currentValue);
      this.$emit('on-change', this.currentValue);
    }
  },
  data: function data() {
    return {
      hasRestrictedLabel: false,
      currentValue: ''
    };
  },

  computed: {
    count: function count() {
      var len = 0;
      if (this.currentValue) {
        len = this.currentValue.replace(/\n/g, 'aa').length;
      }
      return len > this.max ? this.max : len;
    },
    textareaStyle: function textareaStyle() {
      if (this.height) {
        return {
          height: this.height + 'px'
        };
      }
    },
    labelStyles: function labelStyles() {
      return {
        width: this.$parent.labelWidth || this.labelWidth + 'em',
        textAlign: this.$parent.labelAlign,
        marginRight: this.$parent.labelMarginRight
      };
    },
    labelWidth: function labelWidth() {
      return this.title.replace(/[^x00-xff]/g, '00').length / 2 + 1;
    },
    labelClass: function labelClass() {
      return {
        'vux-cell-justify': this.$parent.labelAlign === 'justify' || this.$parent.$parent.labelAlign === 'justify'
      };
    }
  },
  methods: {
    updateAutosize: function updateAutosize() {
      _autosize2.default.update(this.$refs.textarea);
    },
    bindAutosize: function bindAutosize() {
      (0, _autosize2.default)(this.$refs.textarea);
    },
    unbindAutosize: function unbindAutosize() {
      _autosize2.default.destroy(this.$refs.textarea);
    },
    focus: function focus() {
      this.$refs.textarea.focus();
    }
  },
  beforeDestroy: function beforeDestroy() {
    this.unbindAutosize();
  }
};

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(43);

var _extends3 = _interopRequireDefault(_extends2);

var _index = __webpack_require__(199);

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(58);

var _index4 = _interopRequireDefault(_index3);

var _index5 = __webpack_require__(194);

var _index6 = _interopRequireDefault(_index5);

var _index7 = __webpack_require__(197);

var _index8 = _interopRequireDefault(_index7);

var _vuex = __webpack_require__(36);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'app',
  components: {
    Loading: _index2.default,
    Toast: _index4.default,
    Alert: _index6.default,
    Confirm: _index8.default
  },
  computed: (0, _extends3.default)({}, (0, _vuex.mapGetters)({
    loadingXp: 'loading',
    toastXp: 'toast',
    alertXp: 'alert',
    confirmXp: 'confirm'
  }), {
    toastXpShow: {
      get: function get() {
        return this.toastXp.show;
      },
      set: function set(show) {
        this.$store.commit('toast', { show: show });
      }
    },
    alertXpShow: {
      get: function get() {
        return this.alertXp.show;
      },
      set: function set(show) {
        this.$store.commit('alert', { show: show });
      }
    },
    confirmXpShow: {
      get: function get() {
        return this.confirmXp.show;
      },
      set: function set(show) {
        this.$store.commit('confirm', { show: show });
      }
    }
  })
};

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  data: function data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    };
  }
};

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(198);

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(195);

var _index4 = _interopRequireDefault(_index3);

var _index5 = __webpack_require__(202);

var _index6 = _interopRequireDefault(_index5);

var _index7 = __webpack_require__(201);

var _index8 = _interopRequireDefault(_index7);

var _index9 = __webpack_require__(203);

var _index10 = _interopRequireDefault(_index9);

var _index11 = __webpack_require__(196);

var _index12 = _interopRequireDefault(_index11);

var _game = __webpack_require__(54);

var _game2 = _interopRequireDefault(_game);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DEFAULT_PLAYER_COUNT = 8;
var DEFAULT_OPERATE_TIMEOUT = 20;

exports.default = {
  components: {
    Group: _index2.default,
    Cell: _index4.default,
    XInput: _index6.default,
    XButton: _index8.default,
    XTextarea: _index10.default,
    Checklist: _index12.default
  },
  data: function data() {
    return {
      game: new _game2.default(localStorage.getItem('gamePlayerCount') || DEFAULT_PLAYER_COUNT, localStorage.getItem('gameOperateTimeout') || DEFAULT_OPERATE_TIMEOUT),
      GameStatusEnum: _game.GameStatusEnum,
      rolesString: localStorage.getItem('gameRolesString') || '',
      operateStatus: 'stage_1',
      operateArgs: [],
      operateResult: ''
    };
  },

  watch: {
    'game.defaultRoleNames': function gameDefaultRoleNames(value) {
      if (!this.rolesString.length) {
        this.rolesString = value.join('、');
      }
    },
    'game.curPosition': function gameCurPosition() {}
  },
  computed: {},
  created: function created() {
    this.game.playerCount = this.game.playerCount;
  },

  methods: {
    saveConfig: function saveConfig() {
      localStorage.setItem('gamePlayerCount', this.game.playerCount);
      localStorage.setItem('gameOperateTimeout', this.game.operateTimeout);
      localStorage.setItem('gameRolesString', this.rolesString);
    },
    confirmConfig: function confirmConfig() {
      try {
        this.game.setRoleNames(this.rolesString);
        this.game.startRuleShow();
        this.saveConfig();
      } catch (e) {
        this.alert(e.message);
      }
    },
    confirmRule: function confirmRule() {
      this.game.startOperate1();
    },
    startOperate1: function startOperate1() {
      this.operateStatus = 'stage_2';
    },
    finishOperate1: function finishOperate1() {
      try {
        this.operateResult = this.game.curPlayer.role.operate1(this.game.curPosition)(this.operateArgs);
        this.operateStatus = 'stage_3';
      } catch (e) {
        this.alert(e.message);
      }
    },
    nextOperate1: function nextOperate1() {
      this.operateStatus = 'stage_1';
      this.operateArgs = [];
      this.operateResult = '';
      this.game.operate1(this.game.curPosition + 1);
    },
    finishOperate2: function finishOperate2() {
      try {
        this.operateResult = this.game.curPlayer.role.operate2(this.game.curPosition)();
        this.operateStatus = 'stage_3';
      } catch (e) {
        this.alert(e.message);
      }
    },
    nextOperate2: function nextOperate2() {
      this.operateStatus = 'stage_1';
      this.operateArgs = [];
      this.operateResult = '';
      this.game.operate2(this.game.curPosition + 1);
    },
    finishArgue: function finishArgue() {
      try {
        this.operateResult = this.game.getKillResult()(this.operateArgs);
      } catch (e) {
        this.alert(e.message);
      }
    },
    restart: function restart() {
      var _this = this;

      var playerCount = localStorage.getItem('gamePlayerCount') || DEFAULT_PLAYER_COUNT;
      var operateTimeout = localStorage.getItem('gameOperateTimeout') || DEFAULT_OPERATE_TIMEOUT;
      var rolesString = localStorage.getItem('gameRolesString');
      this.game = new _game2.default(playerCount, operateTimeout);
      if (rolesString && rolesString.length) {
        this.$nextTick(function () {
          _this.rolesString = rolesString;
        });
      }
      this.operateStatus = 'stage_1';
      this.operateArgs = [];
    }
  }

};

/***/ }),
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;;(function () {
  'use strict';

  /**
   * @preserve FastClick: polyfill to remove click delays on browsers with touch UIs.
   *
   * @codingstandard ftlabs-jsv2
   * @copyright The Financial Times Limited [All Rights Reserved]
   * @license MIT License (see LICENSE.txt)
   */

  /*jslint browser:true, node:true*/
  /*global define, Event, Node*/


  /**
   * Instantiate fast-clicking listeners on the specified layer.
   *
   * @constructor
   * @param {Element} layer The layer to listen on
   * @param {Object} [options={}] The options to override the defaults
   */
  function FastClick(layer, options) {
    var oldOnClick;

    options = options || {};

    /**
     * Whether a click is currently being tracked.
     *
     * @type boolean
     */
    this.trackingClick = false;


    /**
     * Timestamp for when click tracking started.
     *
     * @type number
     */
    this.trackingClickStart = 0;


    /**
     * The element being tracked for a click.
     *
     * @type EventTarget
     */
    this.targetElement = null;


    /**
     * X-coordinate of touch start event.
     *
     * @type number
     */
    this.touchStartX = 0;


    /**
     * Y-coordinate of touch start event.
     *
     * @type number
     */
    this.touchStartY = 0;


    /**
     * ID of the last touch, retrieved from Touch.identifier.
     *
     * @type number
     */
    this.lastTouchIdentifier = 0;


    /**
     * Touchmove boundary, beyond which a click will be cancelled.
     *
     * @type number
     */
    this.touchBoundary = options.touchBoundary || 10;


    /**
     * The FastClick layer.
     *
     * @type Element
     */
    this.layer = layer;

    /**
     * The minimum time between tap(touchstart and touchend) events
     *
     * @type number
     */
    this.tapDelay = options.tapDelay || 200;

    /**
     * The maximum time for a tap
     *
     * @type number
     */
    this.tapTimeout = options.tapTimeout || 700;

    if (FastClick.notNeeded(layer)) {
      return;
    }

    // Some old versions of Android don't have Function.prototype.bind
    function bind(method, context) {
      return function() { return method.apply(context, arguments); };
    }


    var methods = ['onMouse', 'onClick', 'onTouchStart', 'onTouchMove', 'onTouchEnd', 'onTouchCancel'];
    var context = this;
    for (var i = 0, l = methods.length; i < l; i++) {
      context[methods[i]] = bind(context[methods[i]], context);
    }

    // Set up event handlers as required
    if (deviceIsAndroid) {
      layer.addEventListener('mouseover', this.onMouse, true);
      layer.addEventListener('mousedown', this.onMouse, true);
      layer.addEventListener('mouseup', this.onMouse, true);
    }

    layer.addEventListener('click', this.onClick, true);
    layer.addEventListener('touchstart', this.onTouchStart, false);
    layer.addEventListener('touchmove', this.onTouchMove, false);
    layer.addEventListener('touchend', this.onTouchEnd, false);
    layer.addEventListener('touchcancel', this.onTouchCancel, false);

    // Hack is required for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
    // which is how FastClick normally stops click events bubbling to callbacks registered on the FastClick
    // layer when they are cancelled.
    if (!Event.prototype.stopImmediatePropagation) {
      layer.removeEventListener = function(type, callback, capture) {
        var rmv = Node.prototype.removeEventListener;
        if (type === 'click') {
          rmv.call(layer, type, callback.hijacked || callback, capture);
        } else {
          rmv.call(layer, type, callback, capture);
        }
      };

      layer.addEventListener = function(type, callback, capture) {
        var adv = Node.prototype.addEventListener;
        if (type === 'click') {
          adv.call(layer, type, callback.hijacked || (callback.hijacked = function(event) {
            if (!event.propagationStopped) {
              callback(event);
            }
          }), capture);
        } else {
          adv.call(layer, type, callback, capture);
        }
      };
    }

    // If a handler is already declared in the element's onclick attribute, it will be fired before
    // FastClick's onClick handler. Fix this by pulling out the user-defined handler function and
    // adding it as listener.
    if (typeof layer.onclick === 'function') {

      // Android browser on at least 3.2 requires a new reference to the function in layer.onclick
      // - the old one won't work if passed to addEventListener directly.
      oldOnClick = layer.onclick;
      layer.addEventListener('click', function(event) {
        oldOnClick(event);
      }, false);
      layer.onclick = null;
    }
  }

  /**
  * Windows Phone 8.1 fakes user agent string to look like Android and iPhone.
  *
  * @type boolean
  */
  var deviceIsWindowsPhone = navigator.userAgent.indexOf("Windows Phone") >= 0;

  /**
   * Android requires exceptions.
   *
   * @type boolean
   */
  var deviceIsAndroid = navigator.userAgent.indexOf('Android') > 0 && !deviceIsWindowsPhone;


  /**
   * iOS requires exceptions.
   *
   * @type boolean
   */
  var deviceIsIOS = /iP(ad|hone|od)/.test(navigator.userAgent) && !deviceIsWindowsPhone;


  /**
   * iOS 4 requires an exception for select elements.
   *
   * @type boolean
   */
  var deviceIsIOS4 = deviceIsIOS && (/OS 4_\d(_\d)?/).test(navigator.userAgent);


  /**
   * iOS 6.0-7.* requires the target element to be manually derived
   *
   * @type boolean
   */
  var deviceIsIOSWithBadTarget = deviceIsIOS && (/OS [6-7]_\d/).test(navigator.userAgent);

  /**
   * BlackBerry requires exceptions.
   *
   * @type boolean
   */
  var deviceIsBlackBerry10 = navigator.userAgent.indexOf('BB10') > 0;

  /**
   * Determine whether a given element requires a native click.
   *
   * @param {EventTarget|Element} target Target DOM element
   * @returns {boolean} Returns true if the element needs a native click
   */
  FastClick.prototype.needsClick = function(target) {
    switch (target.nodeName.toLowerCase()) {

    // Don't send a synthetic click to disabled inputs (issue #62)
    case 'button':
    case 'select':
    case 'textarea':
      if (target.disabled) {
        return true;
      }

      break;
    case 'input':

      // File inputs need real clicks on iOS 6 due to a browser bug (issue #68)
      if ((deviceIsIOS && target.type === 'file') || target.disabled) {
        return true;
      }

      break;
    case 'label':
    case 'iframe': // iOS8 homescreen apps can prevent events bubbling into frames
    case 'video':
      return true;
    }

    return (/\bneedsclick\b/).test(target.className);
  };


  /**
   * Determine whether a given element requires a call to focus to simulate click into element.
   *
   * @param {EventTarget|Element} target Target DOM element
   * @returns {boolean} Returns true if the element requires a call to focus to simulate native click.
   */
  FastClick.prototype.needsFocus = function(target) {
    switch (target.nodeName.toLowerCase()) {
    case 'textarea':
      return true;
    case 'select':
      return !deviceIsAndroid;
    case 'input':
      switch (target.type) {
      case 'button':
      case 'checkbox':
      case 'file':
      case 'image':
      case 'radio':
      case 'submit':
        return false;
      }

      // No point in attempting to focus disabled inputs
      return !target.disabled && !target.readOnly;
    default:
      return (/\bneedsfocus\b/).test(target.className);
    }
  };


  /**
   * Send a click event to the specified element.
   *
   * @param {EventTarget|Element} targetElement
   * @param {Event} event
   */
  FastClick.prototype.sendClick = function(targetElement, event) {
    var clickEvent, touch;

    // On some Android devices activeElement needs to be blurred otherwise the synthetic click will have no effect (#24)
    if (document.activeElement && document.activeElement !== targetElement) {
      document.activeElement.blur();
    }

    touch = event.changedTouches[0];

    // Synthesise a click event, with an extra attribute so it can be tracked
    clickEvent = document.createEvent('MouseEvents');
    clickEvent.initMouseEvent(this.determineEventType(targetElement), true, true, window, 1, touch.screenX, touch.screenY, touch.clientX, touch.clientY, false, false, false, false, 0, null);
    clickEvent.forwardedTouchEvent = true;
    targetElement.dispatchEvent(clickEvent);
  };

  FastClick.prototype.determineEventType = function(targetElement) {

    //Issue #159: Android Chrome Select Box does not open with a synthetic click event
    if (deviceIsAndroid && targetElement.tagName.toLowerCase() === 'select') {
      return 'mousedown';
    }

    return 'click';
  };


  /**
   * @param {EventTarget|Element} targetElement
   */
  FastClick.prototype.focus = function(targetElement) {
    var length;

    // Issue #160: on iOS 7, some input elements (e.g. date datetime month) throw a vague TypeError on setSelectionRange. These elements don't have an integer value for the selectionStart and selectionEnd properties, but unfortunately that can't be used for detection because accessing the properties also throws a TypeError. Just check the type instead. Filed as Apple bug #15122724.
    if (deviceIsIOS && targetElement.setSelectionRange && targetElement.type.indexOf('date') !== 0 && targetElement.type !== 'time' && targetElement.type !== 'month' && targetElement.type !== 'number') {
      length = targetElement.value.length;
      targetElement.setSelectionRange(length, length);
    } else {
      targetElement.focus();
    }
  };


  /**
   * Check whether the given target element is a child of a scrollable layer and if so, set a flag on it.
   *
   * @param {EventTarget|Element} targetElement
   */
  FastClick.prototype.updateScrollParent = function(targetElement) {
    var scrollParent, parentElement;

    scrollParent = targetElement.fastClickScrollParent;

    // Attempt to discover whether the target element is contained within a scrollable layer. Re-check if the
    // target element was moved to another parent.
    if (!scrollParent || !scrollParent.contains(targetElement)) {
      parentElement = targetElement;
      do {
        if (parentElement.scrollHeight > parentElement.offsetHeight) {
          scrollParent = parentElement;
          targetElement.fastClickScrollParent = parentElement;
          break;
        }

        parentElement = parentElement.parentElement;
      } while (parentElement);
    }

    // Always update the scroll top tracker if possible.
    if (scrollParent) {
      scrollParent.fastClickLastScrollTop = scrollParent.scrollTop;
    }
  };


  /**
   * @param {EventTarget} targetElement
   * @returns {Element|EventTarget}
   */
  FastClick.prototype.getTargetElementFromEventTarget = function(eventTarget) {

    // On some older browsers (notably Safari on iOS 4.1 - see issue #56) the event target may be a text node.
    if (eventTarget.nodeType === Node.TEXT_NODE) {
      return eventTarget.parentNode;
    }

    return eventTarget;
  };


  /**
   * On touch start, record the position and scroll offset.
   *
   * @param {Event} event
   * @returns {boolean}
   */
  FastClick.prototype.onTouchStart = function(event) {
    var targetElement, touch, selection;

    // Ignore multiple touches, otherwise pinch-to-zoom is prevented if both fingers are on the FastClick element (issue #111).
    if (event.targetTouches.length > 1) {
      return true;
    }

    targetElement = this.getTargetElementFromEventTarget(event.target);
    touch = event.targetTouches[0];

    if (deviceIsIOS) {

      // Only trusted events will deselect text on iOS (issue #49)
      selection = window.getSelection();
      if (selection.rangeCount && !selection.isCollapsed) {
        return true;
      }

      if (!deviceIsIOS4) {

        // Weird things happen on iOS when an alert or confirm dialog is opened from a click event callback (issue #23):
        // when the user next taps anywhere else on the page, new touchstart and touchend events are dispatched
        // with the same identifier as the touch event that previously triggered the click that triggered the alert.
        // Sadly, there is an issue on iOS 4 that causes some normal touch events to have the same identifier as an
        // immediately preceeding touch event (issue #52), so this fix is unavailable on that platform.
        // Issue 120: touch.identifier is 0 when Chrome dev tools 'Emulate touch events' is set with an iOS device UA string,
        // which causes all touch events to be ignored. As this block only applies to iOS, and iOS identifiers are always long,
        // random integers, it's safe to to continue if the identifier is 0 here.
        if (touch.identifier && touch.identifier === this.lastTouchIdentifier) {
          event.preventDefault();
          return false;
        }

        this.lastTouchIdentifier = touch.identifier;

        // If the target element is a child of a scrollable layer (using -webkit-overflow-scrolling: touch) and:
        // 1) the user does a fling scroll on the scrollable layer
        // 2) the user stops the fling scroll with another tap
        // then the event.target of the last 'touchend' event will be the element that was under the user's finger
        // when the fling scroll was started, causing FastClick to send a click event to that layer - unless a check
        // is made to ensure that a parent layer was not scrolled before sending a synthetic click (issue #42).
        this.updateScrollParent(targetElement);
      }
    }

    this.trackingClick = true;
    this.trackingClickStart = event.timeStamp;
    this.targetElement = targetElement;

    this.touchStartX = touch.pageX;
    this.touchStartY = touch.pageY;

    // Prevent phantom clicks on fast double-tap (issue #36)
    if ((event.timeStamp - this.lastClickTime) < this.tapDelay) {
      event.preventDefault();
    }

    return true;
  };


  /**
   * Based on a touchmove event object, check whether the touch has moved past a boundary since it started.
   *
   * @param {Event} event
   * @returns {boolean}
   */
  FastClick.prototype.touchHasMoved = function(event) {
    var touch = event.changedTouches[0], boundary = this.touchBoundary;

    if (Math.abs(touch.pageX - this.touchStartX) > boundary || Math.abs(touch.pageY - this.touchStartY) > boundary) {
      return true;
    }

    return false;
  };


  /**
   * Update the last position.
   *
   * @param {Event} event
   * @returns {boolean}
   */
  FastClick.prototype.onTouchMove = function(event) {
    if (!this.trackingClick) {
      return true;
    }

    // If the touch has moved, cancel the click tracking
    if (this.targetElement !== this.getTargetElementFromEventTarget(event.target) || this.touchHasMoved(event)) {
      this.trackingClick = false;
      this.targetElement = null;
    }

    return true;
  };


  /**
   * Attempt to find the labelled control for the given label element.
   *
   * @param {EventTarget|HTMLLabelElement} labelElement
   * @returns {Element|null}
   */
  FastClick.prototype.findControl = function(labelElement) {

    // Fast path for newer browsers supporting the HTML5 control attribute
    if (labelElement.control !== undefined) {
      return labelElement.control;
    }

    // All browsers under test that support touch events also support the HTML5 htmlFor attribute
    if (labelElement.htmlFor) {
      return document.getElementById(labelElement.htmlFor);
    }

    // If no for attribute exists, attempt to retrieve the first labellable descendant element
    // the list of which is defined here: http://www.w3.org/TR/html5/forms.html#category-label
    return labelElement.querySelector('button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea');
  };


  /**
   * On touch end, determine whether to send a click event at once.
   *
   * @param {Event} event
   * @returns {boolean}
   */
  FastClick.prototype.onTouchEnd = function(event) {
    var forElement, trackingClickStart, targetTagName, scrollParent, touch, targetElement = this.targetElement;

    if (!this.trackingClick) {
      return true;
    }

    // Prevent phantom clicks on fast double-tap (issue #36)
    if ((event.timeStamp - this.lastClickTime) < this.tapDelay) {
      this.cancelNextClick = true;
      return true;
    }

    if ((event.timeStamp - this.trackingClickStart) > this.tapTimeout) {
      return true;
    }

    // Reset to prevent wrong click cancel on input (issue #156).
    this.cancelNextClick = false;

    this.lastClickTime = event.timeStamp;

    trackingClickStart = this.trackingClickStart;
    this.trackingClick = false;
    this.trackingClickStart = 0;

    // On some iOS devices, the targetElement supplied with the event is invalid if the layer
    // is performing a transition or scroll, and has to be re-detected manually. Note that
    // for this to function correctly, it must be called *after* the event target is checked!
    // See issue #57; also filed as rdar://13048589 .
    if (deviceIsIOSWithBadTarget) {
      touch = event.changedTouches[0];

      // In certain cases arguments of elementFromPoint can be negative, so prevent setting targetElement to null
      targetElement = document.elementFromPoint(touch.pageX - window.pageXOffset, touch.pageY - window.pageYOffset) || targetElement;
      targetElement.fastClickScrollParent = this.targetElement.fastClickScrollParent;
    }

    targetTagName = targetElement.tagName.toLowerCase();
    if (targetTagName === 'label') {
      forElement = this.findControl(targetElement);
      if (forElement) {
        this.focus(targetElement);
        if (deviceIsAndroid) {
          return false;
        }

        targetElement = forElement;
      }
    } else if (this.needsFocus(targetElement)) {

      // Case 1: If the touch started a while ago (best guess is 100ms based on tests for issue #36) then focus will be triggered anyway. Return early and unset the target element reference so that the subsequent click will be allowed through.
      // Case 2: Without this exception for input elements tapped when the document is contained in an iframe, then any inputted text won't be visible even though the value attribute is updated as the user types (issue #37).
      if ((event.timeStamp - trackingClickStart) > 100 || (deviceIsIOS && window.top !== window && targetTagName === 'input')) {
        this.targetElement = null;
        return false;
      }

      this.focus(targetElement);
      this.sendClick(targetElement, event);

      // Select elements need the event to go through on iOS 4, otherwise the selector menu won't open.
      // Also this breaks opening selects when VoiceOver is active on iOS6, iOS7 (and possibly others)
      if (!deviceIsIOS4 || targetTagName !== 'select') {
        this.targetElement = null;
        event.preventDefault();
      }

      return false;
    }

    if (deviceIsIOS && !deviceIsIOS4) {

      // Don't send a synthetic click event if the target element is contained within a parent layer that was scrolled
      // and this tap is being used to stop the scrolling (usually initiated by a fling - issue #42).
      scrollParent = targetElement.fastClickScrollParent;
      if (scrollParent && scrollParent.fastClickLastScrollTop !== scrollParent.scrollTop) {
        return true;
      }
    }

    // Prevent the actual click from going though - unless the target node is marked as requiring
    // real clicks or if it is in the whitelist in which case only non-programmatic clicks are permitted.
    if (!this.needsClick(targetElement)) {
      event.preventDefault();
      this.sendClick(targetElement, event);
    }

    return false;
  };


  /**
   * On touch cancel, stop tracking the click.
   *
   * @returns {void}
   */
  FastClick.prototype.onTouchCancel = function() {
    this.trackingClick = false;
    this.targetElement = null;
  };


  /**
   * Determine mouse events which should be permitted.
   *
   * @param {Event} event
   * @returns {boolean}
   */
  FastClick.prototype.onMouse = function(event) {

    // If a target element was never set (because a touch event was never fired) allow the event
    if (!this.targetElement) {
      return true;
    }

    if (event.forwardedTouchEvent) {
      return true;
    }

    // Programmatically generated events targeting a specific element should be permitted
    if (!event.cancelable) {
      return true;
    }

    // Derive and check the target element to see whether the mouse event needs to be permitted;
    // unless explicitly enabled, prevent non-touch click events from triggering actions,
    // to prevent ghost/doubleclicks.
    if (!this.needsClick(this.targetElement) || this.cancelNextClick) {

      // Prevent any user-added listeners declared on FastClick element from being fired.
      if (event.stopImmediatePropagation) {
        event.stopImmediatePropagation();
      } else {

        // Part of the hack for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
        event.propagationStopped = true;
      }

      // Cancel the event
      event.stopPropagation();
      event.preventDefault();

      return false;
    }

    // If the mouse event is permitted, return true for the action to go through.
    return true;
  };


  /**
   * On actual clicks, determine whether this is a touch-generated click, a click action occurring
   * naturally after a delay after a touch (which needs to be cancelled to avoid duplication), or
   * an actual click which should be permitted.
   *
   * @param {Event} event
   * @returns {boolean}
   */
  FastClick.prototype.onClick = function(event) {
    var permitted;

    // It's possible for another FastClick-like library delivered with third-party code to fire a click event before FastClick does (issue #44). In that case, set the click-tracking flag back to false and return early. This will cause onTouchEnd to return early.
    if (this.trackingClick) {
      this.targetElement = null;
      this.trackingClick = false;
      return true;
    }

    // Very odd behaviour on iOS (issue #18): if a submit element is present inside a form and the user hits enter in the iOS simulator or clicks the Go button on the pop-up OS keyboard the a kind of 'fake' click event will be triggered with the submit-type input element as the target.
    if (event.target.type === 'submit' && event.detail === 0) {
      return true;
    }

    permitted = this.onMouse(event);

    // Only unset targetElement if the click is not permitted. This will ensure that the check for !targetElement in onMouse fails and the browser's click doesn't go through.
    if (!permitted) {
      this.targetElement = null;
    }

    // If clicks are permitted, return true for the action to go through.
    return permitted;
  };


  /**
   * Remove all FastClick's event listeners.
   *
   * @returns {void}
   */
  FastClick.prototype.destroy = function() {
    var layer = this.layer;

    if (deviceIsAndroid) {
      layer.removeEventListener('mouseover', this.onMouse, true);
      layer.removeEventListener('mousedown', this.onMouse, true);
      layer.removeEventListener('mouseup', this.onMouse, true);
    }

    layer.removeEventListener('click', this.onClick, true);
    layer.removeEventListener('touchstart', this.onTouchStart, false);
    layer.removeEventListener('touchmove', this.onTouchMove, false);
    layer.removeEventListener('touchend', this.onTouchEnd, false);
    layer.removeEventListener('touchcancel', this.onTouchCancel, false);
  };


  /**
   * Check whether FastClick is needed.
   *
   * @param {Element} layer The layer to listen on
   */
  FastClick.notNeeded = function(layer) {
    var metaViewport;
    var chromeVersion;
    var blackberryVersion;
    var firefoxVersion;

    // Devices that don't support touch don't need FastClick
    if (typeof window.ontouchstart === 'undefined') {
      return true;
    }

    // Chrome version - zero for other browsers
    chromeVersion = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [,0])[1];

    if (chromeVersion) {

      if (deviceIsAndroid) {
        metaViewport = document.querySelector('meta[name=viewport]');

        if (metaViewport) {
          // Chrome on Android with user-scalable="no" doesn't need FastClick (issue #89)
          if (metaViewport.content.indexOf('user-scalable=no') !== -1) {
            return true;
          }
          // Chrome 32 and above with width=device-width or less don't need FastClick
          if (chromeVersion > 31 && document.documentElement.scrollWidth <= window.outerWidth) {
            return true;
          }
        }

      // Chrome desktop doesn't need FastClick (issue #15)
      } else {
        return true;
      }
    }

    if (deviceIsBlackBerry10) {
      blackberryVersion = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/);

      // BlackBerry 10.3+ does not require Fastclick library.
      // https://github.com/ftlabs/fastclick/issues/251
      if (blackberryVersion[1] >= 10 && blackberryVersion[2] >= 3) {
        metaViewport = document.querySelector('meta[name=viewport]');

        if (metaViewport) {
          // user-scalable=no eliminates click delay.
          if (metaViewport.content.indexOf('user-scalable=no') !== -1) {
            return true;
          }
          // width=device-width (or less than device-width) eliminates click delay.
          if (document.documentElement.scrollWidth <= window.outerWidth) {
            return true;
          }
        }
      }
    }

    // IE10 with -ms-touch-action: none or manipulation, which disables double-tap-to-zoom (issue #97)
    if (layer.style.msTouchAction === 'none' || layer.style.touchAction === 'manipulation') {
      return true;
    }

    // Firefox version - zero for other browsers
    firefoxVersion = +(/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [,0])[1];

    if (firefoxVersion >= 27) {
      // Firefox 27+ does not have tap delay if the content is not zoomable - https://bugzilla.mozilla.org/show_bug.cgi?id=922896

      metaViewport = document.querySelector('meta[name=viewport]');
      if (metaViewport && (metaViewport.content.indexOf('user-scalable=no') !== -1 || document.documentElement.scrollWidth <= window.outerWidth)) {
        return true;
      }
    }

    // IE11: prefixed -ms-touch-action is no longer supported and it's recomended to use non-prefixed version
    // http://msdn.microsoft.com/en-us/library/windows/apps/Hh767313.aspx
    if (layer.style.touchAction === 'none' || layer.style.touchAction === 'manipulation') {
      return true;
    }

    return false;
  };


  /**
   * Factory method for creating a FastClick object
   *
   * @param {Element} layer The layer to listen on
   * @param {Object} [options={}] The options to override the defaults
   */
  FastClick.attach = function(layer, options) {
    return new FastClick(layer, options);
  };


  if (true) {

    // AMD. Register as an anonymous module.
    !(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
      return FastClick;
    }.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof module !== 'undefined' && module.exports) {
    module.exports = FastClick.attach;
    module.exports.FastClick = FastClick;
  } else {
    window.FastClick = FastClick;
  }
}());


/***/ }),
/* 141 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__role__ = __webpack_require__(142);


class Player {

  constructor (roleName, position, game) {
    this.game = game
    this.role = new __WEBPACK_IMPORTED_MODULE_0__role__["a" /* default */](roleName, game)
    // this.id = id
    this.position = position
    this.hasOperated = false
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Player;


/***/ }),
/* 142 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__game__ = __webpack_require__(54);
const _ = __webpack_require__(55)



const NightNight = `漫漫长夜。。。`

class Role {

  constructor (roleName, game) {
    this.game = game
    this.roleName = roleName
  }

  get operateGuide () {
    switch (this.roleName) {
      case '狼人':
        return '看看我的狼同伴，或者看看剩下了什么好东西'
      case '爪牙':
        return '我的主人，你在哪里'
      case '预言家':
        return '请选择查验目标'
      case '强盗':
        return '请选择抢劫目标'
      case '捣蛋鬼':
        return '请选择两个目标（不能选择自己）'
      case '失眠者':
        return '等待是我今生做过最有意思的事情'
      case '酒鬼':
        return '请选择两个目标'
      case '村民':
        return '励志做个愚民，闭眼到底'
      case '守卫':
        return '看看我的好基友在哪里'
      default:
        return '你木有技能！'
    }
  }

  get operateTargets () {
    switch (this.roleName) {
      case '狼人':
        return []
      case '爪牙':
        return []
      case '预言家':
        return Array.from(new Array(this.game.playerCount + __WEBPACK_IMPORTED_MODULE_0__game__["LEFT_ROLE_COUNT"]), (val, index) => index + 1)
      case '强盗':
        return Array.from(new Array(this.game.playerCount), (val, index) => index + 1)
      case '捣蛋鬼':
        return Array.from(new Array(this.game.playerCount), (val, index) => index + 1)
      case '失眠者':
        return []
      case '酒鬼':
        return Array.from(new Array(__WEBPACK_IMPORTED_MODULE_0__game__["LEFT_ROLE_COUNT"]), (val, index) => this.game.playerCount + index + 1)
      case '村民':
        return []
      case '皮匠':
        return []
      case '守卫':
        return []
      default:
        return []
    }
  }

  operate1 (position) {
    switch (this.roleName) {
      case '狼人':
        return () => {
          let otherWolfs = this.game.findOtherPlayers(position, '狼人')
          if (otherWolfs.length === 0) {
            let randomIndex = _.random(1, __WEBPACK_IMPORTED_MODULE_0__game__["LEFT_ROLE_COUNT"])
            let randomRole = this.game.players[this.game.playerCount + randomIndex].role
            this.game.operateLog[position] = {roleName: this.game.players[position].role.roleName, operate: `底牌${randomRole.roleName}`}
            return `底牌中有一个角色是${randomRole.roleName}`
          }

          this.game.operateLog[position] = {roleName: this.game.players[position].role.roleName, operate: `${otherWolfs.join('、')}号同伴`}
          return `你的同伴是${otherWolfs.join('、')}号玩家`
        }
      case '爪牙':
        return () => {
          let wolfs = this.game.findPlayers('狼人')
          if (wolfs.length === 0) {
            this.game.operateLog[position] = {roleName: this.game.players[position].role.roleName, operate: `无狼`}
            return `场上没有狼人`
          }

          this.game.operateLog[position] = {roleName: this.game.players[position].role.roleName, operate: `${wolfs.join('、')}号狼`}
          return `你的狼小主是${wolfs.join('、')}号玩家`
        }
      case '预言家':
        return (list) => {
          if (list.length === 0) {
            throw new Error('请选择操作目标')
          }
          if (list.length > 2) {
            throw new Error('最多查验2名目标')
          }
          if (list[0] <= this.game.playerCount || list[1] <= this.game.playerCount) {
            if (list.length > 1) {
              throw new Error('最多查验1名玩家')
            }
            if (list[0] === position) {
              throw new Error('不能查验自己')
            }
          } else {
            if (list.length !== 2) {
              throw new Error('请查看2张底牌')
            }
          }

          this.game.operateLog[position] = {roleName: this.game.players[position].role.roleName, operate: `查验${list.join('、')}`}
          return list.map((item) => {
            return `${item}号玩家身份是${this.game.getRoleName(item)}`
          }).join('；')
        }
      case '强盗':
        return (list) => {
          if (list.length === 0) {
            throw new Error('请选择操作目标')
          }
          if (list.length > 1) {
            throw new Error('最多抢夺1张底牌')
          }
          if (_.includes(list, position)) {
            throw new Error('不能抢夺自己')
          }

          this.game.operateCache[this.roleName] = [position, list[0]]

          this.game.operateLog[position] = {roleName: this.game.players[position].role.roleName, operate: `抢夺${list[0]}`}
          return `你抢夺了${list[0]}号玩家的角色`
        }
      case '捣蛋鬼':
        return (list) => {
          if (list.length === 0) {
            throw new Error('请选择操作目标')
          }
          if (list.length !== 2) {
            throw new Error('需要2个操作目标')
          }
          if (_.includes(list, position)) {
            throw new Error('不能交换自己')
          }

          this.game.operateCache[this.roleName] = list

          this.game.operateLog[position] = {roleName: this.game.players[position].role.roleName, operate: `交换${list[0]}、${list[1]}`}
          return `你交换了${list[0]}号玩家与${list[1]}号玩家的角色`
        }
      case '失眠者':
        return () => {
          this.game.operateLog[position] = {roleName: this.game.players[position].role.roleName, operate: `无`}
          return NightNight
        }
      case '酒鬼':
        return () => {
          if (list.length === 0) {
            throw new Error('请选择操作目标')
          }
          if (list.length > 1) {
            throw new Error('最多交换1张底牌')
          }

          this.game.operateLog[position] = {roleName: this.game.players[position].role.roleName, operate: `list[0]号`}
          this.game.operateCache[this.roleName] = [position, list[0]]

          return `你已撒酒疯`
        }
      case '村民':
        return () => {
          this.game.operateLog[position] = {roleName: this.game.players[position].role.roleName, operate: `无`}
          return NightNight
        }
      case '皮匠':
        return () => {
          this.game.operateLog[position] = {roleName: this.game.players[position].role.roleName, operate: `无`}
          return NightNight
        }
      case '守卫':
        return () => {
          let otherGuards = this.game.findOtherPlayers(position, '守卫')
          if (otherGuards.length === 0) {
            this.game.operateLog[position] = {roleName: this.game.players[position].role.roleName, operate: `无同伴`}
            return `你是孤独的勇士！`
          }

          this.game.operateLog[position] = {roleName: this.game.players[position].role.roleName, operate: `${otherGuards.join('、')}号同伴`}
          return `你的同伴是${otherGuards.join('、')}号玩家`
        }
      default:
        return () => {
          return '错误的操作'
        }
    }
  }

  operate2 (position) {
    switch (this.roleName) {
      case '狼人':
        return () => {
          return NightNight
        }
      case '爪牙':
        return () => {
          return NightNight
        }
      case '预言家':
        return () => {
          return NightNight
        }
      case '强盗':
        return () => {
          return NightNight
        }
      case '捣蛋鬼':
        return () => {
          return NightNight
        }
      case '失眠者':
        return () => {
          return `你现在的角色是${this.game.getFinalRoleName(position)}`
        }
      case '酒鬼':
        return () => {
          return NightNight
        }
      case '村民':
        return () => {
          return NightNight
        }
      case '皮匠':
        return () => {
          return NightNight
        }
      case '守卫':
        return () => {
          return NightNight
        }
      default:
        return () => {
          return NightNight
        }
    }
  }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = Role;


/***/ }),
/* 143 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 144 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 145 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 146 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 147 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 148 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 149 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 150 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 151 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 152 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 153 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 154 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 155 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 156 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 157 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 158 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 159 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDE0IDc5LjE1Njc5NywgMjAxNC8wOC8yMC0wOTo1MzowMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTk2QkI4RkE3NjE2MTFFNUE4NEU4RkIxNjQ5MTYyRDgiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTk2QkI4Rjk3NjE2MTFFNUE4NEU4RkIxNjQ5MTYyRDgiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NjU2QTEyNzk3NjkyMTFFMzkxODk4RDkwQkY4Q0U0NzYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NjU2QTEyN0E3NjkyMTFFMzkxODk4RDkwQkY4Q0U0NzYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5WHowqAAAXNElEQVR42uxda4xd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"

/***/ }),
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "vux-x-input weui-cell",
    class: {
      'weui-cell_warn': _vm.showWarn, 'disabled': _vm.disabled
    }
  }, [_c('div', {
    staticClass: "weui-cell__hd"
  }, [(_vm.hasRestrictedLabel) ? _c('div', {
    style: (_vm.labelStyles)
  }, [_vm._t("restricted-label")], 2) : _vm._e(), _vm._t("label", [(_vm.title) ? _c('label', {
    staticClass: "weui-label",
    class: _vm.labelClass,
    style: ({
      width: _vm.labelWidth || _vm.$parent.labelWidth || _vm.labelWidthComputed,
      textAlign: _vm.$parent.labelAlign,
      marginRight: _vm.$parent.labelMarginRight
    }),
    attrs: {
      "for": ("vux-x-input-" + _vm.uuid)
    },
    domProps: {
      "innerHTML": _vm._s(_vm.title)
    }
  }) : _vm._e(), (_vm.inlineDesc) ? _c('inline-desc', [_vm._v(_vm._s(_vm.inlineDesc))]) : _vm._e()])], 2), _c('div', {
    staticClass: "weui-cell__bd weui-cell__primary",
    class: _vm.placeholderAlign ? ("vux-x-input-placeholder-" + _vm.placeholderAlign) : ''
  }, [(!_vm.type || _vm.type === 'text') ? _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.currentValue),
      expression: "currentValue"
    }],
    ref: "input",
    staticClass: "weui-input",
    style: (_vm.inputStyle),
    attrs: {
      "id": ("vux-x-input-" + _vm.uuid),
      "maxlength": _vm.max,
      "autocomplete": _vm.autocomplete,
      "autocapitalize": _vm.autocapitalize,
      "autocorrect": _vm.autocorrect,
      "spellcheck": _vm.spellcheck,
      "type": "text",
      "name": _vm.name,
      "pattern": _vm.pattern,
      "placeholder": _vm.placeholder,
      "readonly": _vm.readonly,
      "disabled": _vm.disabled
    },
    domProps: {
      "value": (_vm.currentValue)
    },
    on: {
      "focus": _vm.focusHandler,
      "blur": _vm.onBlur,
      "keyup": _vm.onKeyUp,
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.currentValue = $event.target.value
      }
    }
  }) : _vm._e(), (_vm.type === 'number') ? _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.currentValue),
      expression: "currentValue"
    }],
    ref: "input",
    staticClass: "weui-input",
    style: (_vm.inputStyle),
    attrs: {
      "id": ("vux-x-input-" + _vm.uuid),
      "maxlength": _vm.max,
      "autocomplete": _vm.autocomplete,
      "autocapitalize": _vm.autocapitalize,
      "autocorrect": _vm.autocorrect,
      "spellcheck": _vm.spellcheck,
      "type": "number",
      "name": _vm.name,
      "pattern": _vm.pattern,
      "placeholder": _vm.placeholder,
      "readonly": _vm.readonly,
      "disabled": _vm.disabled
    },
    domProps: {
      "value": (_vm.currentValue)
    },
    on: {
      "focus": _vm.focusHandler,
      "blur": _vm.onBlur,
      "keyup": _vm.onKeyUp,
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.currentValue = $event.target.value
      }
    }
  }) : _vm._e(), (_vm.type === 'email') ? _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.currentValue),
      expression: "currentValue"
    }],
    ref: "input",
    staticClass: "weui-input",
    style: (_vm.inputStyle),
    attrs: {
      "id": ("vux-x-input-" + _vm.uuid),
      "maxlength": _vm.max,
      "autocomplete": _vm.autocomplete,
      "autocapitalize": _vm.autocapitalize,
      "autocorrect": _vm.autocorrect,
      "spellcheck": _vm.spellcheck,
      "type": "email",
      "name": _vm.name,
      "pattern": _vm.pattern,
      "placeholder": _vm.placeholder,
      "readonly": _vm.readonly,
      "disabled": _vm.disabled
    },
    domProps: {
      "value": (_vm.currentValue)
    },
    on: {
      "focus": _vm.focusHandler,
      "blur": _vm.onBlur,
      "keyup": _vm.onKeyUp,
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.currentValue = $event.target.value
      }
    }
  }) : _vm._e(), (_vm.type === 'password') ? _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.currentValue),
      expression: "currentValue"
    }],
    ref: "input",
    staticClass: "weui-input",
    style: (_vm.inputStyle),
    attrs: {
      "id": ("vux-x-input-" + _vm.uuid),
      "maxlength": _vm.max,
      "autocomplete": _vm.autocomplete,
      "autocapitalize": _vm.autocapitalize,
      "autocorrect": _vm.autocorrect,
      "spellcheck": _vm.spellcheck,
      "type": "password",
      "name": _vm.name,
      "pattern": _vm.pattern,
      "placeholder": _vm.placeholder,
      "readonly": _vm.readonly,
      "disabled": _vm.disabled
    },
    domProps: {
      "value": (_vm.currentValue)
    },
    on: {
      "focus": _vm.focusHandler,
      "blur": _vm.onBlur,
      "keyup": _vm.onKeyUp,
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.currentValue = $event.target.value
      }
    }
  }) : _vm._e(), (_vm.type === 'tel') ? _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.currentValue),
      expression: "currentValue"
    }],
    ref: "input",
    staticClass: "weui-input",
    style: (_vm.inputStyle),
    attrs: {
      "id": ("vux-x-input-" + _vm.uuid),
      "maxlength": _vm.max,
      "autocomplete": _vm.autocomplete,
      "autocapitalize": _vm.autocapitalize,
      "autocorrect": _vm.autocorrect,
      "spellcheck": _vm.spellcheck,
      "type": "tel",
      "name": _vm.name,
      "pattern": _vm.pattern,
      "placeholder": _vm.placeholder,
      "readonly": _vm.readonly,
      "disabled": _vm.disabled
    },
    domProps: {
      "value": (_vm.currentValue)
    },
    on: {
      "focus": _vm.focusHandler,
      "blur": _vm.onBlur,
      "keyup": _vm.onKeyUp,
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.currentValue = $event.target.value
      }
    }
  }) : _vm._e()]), _c('div', {
    staticClass: "weui-cell__ft"
  }, [_c('icon', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.equalWith && _vm.showClear && _vm.currentValue && !_vm.readonly && !_vm.disabled),
      expression: "!equalWith && showClear && currentValue && !readonly && !disabled"
    }],
    attrs: {
      "type": "clear"
    },
    nativeOn: {
      "click": function($event) {
        _vm.clear($event)
      }
    }
  }), _c('icon', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.showWarn),
      expression: "showWarn"
    }],
    staticClass: "vux-input-icon",
    attrs: {
      "type": "warn",
      "title": !_vm.valid ? _vm.firstError : ''
    },
    nativeOn: {
      "click": function($event) {
        _vm.onClickErrorIcon($event)
      }
    }
  }), (!_vm.novalidate && _vm.hasLengthEqual && _vm.dirty && _vm.equalWith && !_vm.valid) ? _c('icon', {
    staticClass: "vux-input-icon",
    attrs: {
      "type": "warn"
    },
    nativeOn: {
      "click": function($event) {
        _vm.onClickErrorIcon($event)
      }
    }
  }) : _vm._e(), _c('icon', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.novalidate && _vm.equalWith && _vm.equalWith === _vm.currentValue && _vm.valid),
      expression: "!novalidate && equalWith && equalWith === currentValue && valid"
    }],
    attrs: {
      "type": "success"
    }
  }), _c('icon', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.novalidate && _vm.iconType === 'success'),
      expression: "novalidate && iconType === 'success'"
    }],
    staticClass: "vux-input-icon",
    attrs: {
      "type": "success"
    }
  }), _c('icon', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.novalidate && _vm.iconType === 'error'),
      expression: "novalidate && iconType === 'error'"
    }],
    staticClass: "vux-input-icon",
    attrs: {
      "type": "warn"
    }
  }), _vm._t("right")], 2), _c('toast', {
    attrs: {
      "type": "text",
      "width": "auto",
      "time": 600
    },
    model: {
      value: (_vm.showErrorToast),
      callback: function($$v) {
        _vm.showErrorToast = $$v
      },
      expression: "showErrorToast"
    }
  }, [_vm._v(_vm._s(_vm.firstError))])], 1)
},staticRenderFns: []}

/***/ }),
/* 173 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('span', {
    staticClass: "vux-label-desc"
  }, [_vm._t("default")], 2)
},staticRenderFns: []}

/***/ }),
/* 174 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "index"
  }, [_c('div', {
    staticClass: "head"
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.game.status === _vm.GameStatusEnum.OPERATE1 || _vm.game.status === _vm.GameStatusEnum.OPERATE2),
      expression: "game.status === GameStatusEnum.OPERATE1 || game.status === GameStatusEnum.OPERATE2"
    }],
    staticClass: "global-restart",
    on: {
      "click": function($event) {
        $event.preventDefault();
        _vm.restart($event)
      }
    }
  }, [_vm._v("重新开始")])]), _c('div', {
    staticClass: "head-placeholder"
  }), (_vm.game.status === _vm.GameStatusEnum.CONFIG) ? _c('div', {
    staticClass: "config"
  }, [_c('h2', [_vm._v("一夜终极狼人杀")]), _c('group', [_c('x-input', {
    attrs: {
      "title": "游戏人数",
      "type": "number",
      "text-align": "right",
      "required": "",
      "should-toast-error": ""
    },
    model: {
      value: (_vm.game.playerCount),
      callback: function($$v) {
        _vm.$set(_vm.game, "playerCount", $$v)
      },
      expression: "game.playerCount"
    }
  }), _c('x-input', {
    attrs: {
      "title": "操作时间",
      "type": "number",
      "text-align": "right",
      "required": ""
    },
    model: {
      value: (_vm.game.operateTimeout),
      callback: function($$v) {
        _vm.$set(_vm.game, "operateTimeout", $$v)
      },
      expression: "game.operateTimeout"
    }
  }), _c('x-textarea', {
    attrs: {
      "title": "角色",
      "autosize": ""
    },
    model: {
      value: (_vm.rolesString),
      callback: function($$v) {
        _vm.rolesString = $$v
      },
      expression: "rolesString"
    }
  })], 1), _c('footer', [_c('x-button', {
    attrs: {
      "type": "primary"
    },
    nativeOn: {
      "click": function($event) {
        _vm.confirmConfig($event)
      }
    }
  }, [_vm._v("确定")])], 1)], 1) : _vm._e(), (_vm.game.status === _vm.GameStatusEnum.RULE) ? _c('div', {
    staticClass: "rule"
  }, [_c('div', {
    staticClass: "text",
    domProps: {
      "innerHTML": _vm._s(_vm.game.rule)
    }
  }), _c('footer', [_c('x-button', {
    attrs: {
      "type": "primary"
    },
    nativeOn: {
      "click": function($event) {
        _vm.confirmRule($event)
      }
    }
  }, [_vm._v("知道了")])], 1)]) : _vm._e(), (_vm.game.status === _vm.GameStatusEnum.OPERATE1) ? _c('div', {
    staticClass: "operate"
  }, [_c('h2', [_vm._v(_vm._s(_vm.game.curPosition) + "号玩家操作")]), (_vm.operateStatus === 'stage_2') ? _c('div', [_c('div', {
    staticClass: "role"
  }, [_vm._v("你的身份是"), _c('span', {
    staticClass: "role-name",
    domProps: {
      "innerHTML": _vm._s(_vm.game.curPlayer.role.roleName)
    }
  })]), _c('div', [(_vm.game.curPlayer.role.roleName === '狼人') ? _c('div', [_vm._v("\n          点击“完成操作”查看结果\n          ")]) : _vm._e(), (_vm.game.curPlayer.role.roleName === '爪牙') ? _c('div', [_vm._v("\n          点击“完成操作”查看结果\n          ")]) : _vm._e(), (_vm.game.curPlayer.role.roleName === '预言家') ? _c('div', [_c('checklist', {
    attrs: {
      "title": _vm.game.curPlayer.role.operateGuide,
      "options": _vm.game.curPlayer.role.operateTargets,
      "max": 2
    },
    model: {
      value: (_vm.operateArgs),
      callback: function($$v) {
        _vm.operateArgs = $$v
      },
      expression: "operateArgs"
    }
  })], 1) : _vm._e(), (_vm.game.curPlayer.role.roleName === '强盗') ? _c('div', [_c('checklist', {
    attrs: {
      "title": _vm.game.curPlayer.role.operateGuide,
      "options": _vm.game.curPlayer.role.operateTargets,
      "max": 1
    },
    model: {
      value: (_vm.operateArgs),
      callback: function($$v) {
        _vm.operateArgs = $$v
      },
      expression: "operateArgs"
    }
  })], 1) : _vm._e(), (_vm.game.curPlayer.role.roleName === '捣蛋鬼') ? _c('div', [_c('checklist', {
    attrs: {
      "title": _vm.game.curPlayer.role.operateGuide,
      "options": _vm.game.curPlayer.role.operateTargets,
      "max": 2
    },
    model: {
      value: (_vm.operateArgs),
      callback: function($$v) {
        _vm.operateArgs = $$v
      },
      expression: "operateArgs"
    }
  })], 1) : _vm._e(), (_vm.game.curPlayer.role.roleName === '失眠者') ? _c('div', [_vm._v("\n          点击“完成操作”查看结果\n          ")]) : _vm._e(), (_vm.game.curPlayer.role.roleName === '酒鬼') ? _c('div', [_c('checklist', {
    attrs: {
      "title": _vm.game.curPlayer.role.operateGuide,
      "options": _vm.game.curPlayer.role.operateTargets,
      "max": 2
    },
    model: {
      value: (_vm.operateArgs),
      callback: function($$v) {
        _vm.operateArgs = $$v
      },
      expression: "operateArgs"
    }
  })], 1) : _vm._e(), (_vm.game.curPlayer.role.roleName === '村民') ? _c('div', [_vm._v("\n          点击“完成操作”查看结果\n          ")]) : _vm._e(), (_vm.game.curPlayer.role.roleName === '守卫') ? _c('div', [_vm._v("\n          点击“完成操作”查看结果\n          ")]) : _vm._e()])]) : _vm._e(), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.operateStatus === 'stage_3'),
      expression: "operateStatus === 'stage_3'"
    }]
  }, [_c('div', {
    staticClass: "result",
    domProps: {
      "innerHTML": _vm._s(_vm.operateResult)
    }
  })]), _c('div', {
    staticClass: "footer-placeholder"
  }), _c('footer', [_c('x-button', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.operateStatus === 'stage_1'),
      expression: "operateStatus === 'stage_1'"
    }],
    attrs: {
      "type": "primary"
    },
    nativeOn: {
      "click": function($event) {
        _vm.startOperate1($event)
      }
    }
  }, [_vm._v("开始操作")]), _c('x-button', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.operateStatus === 'stage_2'),
      expression: "operateStatus === 'stage_2'"
    }],
    attrs: {
      "type": "primary"
    },
    nativeOn: {
      "click": function($event) {
        _vm.finishOperate1($event)
      }
    }
  }, [_vm._v("完成操作")]), _c('x-button', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.operateStatus === 'stage_3'),
      expression: "operateStatus === 'stage_3'"
    }],
    attrs: {
      "type": "primary"
    },
    nativeOn: {
      "click": function($event) {
        _vm.nextOperate1($event)
      }
    }
  }, [_vm._v("下一位")])], 1)]) : _vm._e(), (_vm.game.status === _vm.GameStatusEnum.OPERATE2) ? _c('div', {
    staticClass: "operate"
  }, [_c('h2', [_vm._v(_vm._s(_vm.game.curPosition) + "号玩家操作")]), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.operateStatus === 'stage_3'),
      expression: "operateStatus === 'stage_3'"
    }]
  }, [_c('div', {
    staticClass: "operate-result",
    domProps: {
      "innerHTML": _vm._s(_vm.operateResult)
    }
  }), _c('div', {
    staticClass: "operate-log"
  }, [_vm._v("\n        上轮操作：" + _vm._s(_vm.game.operateLog[_vm.game.curPosition].roleName + '，' + _vm.game.operateLog[_vm.game.curPosition].operate) + "\n      ")])]), _c('footer', [_c('x-button', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.operateStatus === 'stage_1'),
      expression: "operateStatus === 'stage_1'"
    }],
    attrs: {
      "type": "primary"
    },
    nativeOn: {
      "click": function($event) {
        _vm.finishOperate2($event)
      }
    }
  }, [_vm._v("查看结果")]), _c('x-button', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.operateStatus === 'stage_3'),
      expression: "operateStatus === 'stage_3'"
    }],
    attrs: {
      "type": "primary"
    },
    nativeOn: {
      "click": function($event) {
        _vm.nextOperate2($event)
      }
    }
  }, [_vm._v("下一位")])], 1)]) : _vm._e(), (_vm.game.status === _vm.GameStatusEnum.ARGUE) ? _c('div', {
    staticClass: "argue"
  }, [_c('h2', [_vm._v("请开始你们的表演")]), _c('checklist', {
    attrs: {
      "title": "选择投票对象",
      "options": _vm.game.getKillTargets(),
      "max": 1
    },
    model: {
      value: (_vm.operateArgs),
      callback: function($$v) {
        _vm.operateArgs = $$v
      },
      expression: "operateArgs"
    }
  }), _c('div', {
    staticClass: "footer-placeholder"
  }), _c('footer', [_c('x-button', {
    attrs: {
      "type": "primary"
    },
    nativeOn: {
      "click": function($event) {
        _vm.finishArgue($event)
      }
    }
  }, [_vm._v("投票")])], 1)], 1) : _vm._e(), (_vm.game.status === _vm.GameStatusEnum.RESULT) ? _c('div', {
    staticClass: "result"
  }, [_c('h2', [_vm._v("游戏结束")]), _c('div', {
    staticClass: "operate-result",
    domProps: {
      "innerHTML": _vm._s(_vm.operateResult)
    }
  }), _c('group', {
    attrs: {
      "title": "当前玩家角色情况为"
    }
  }, _vm._l((_vm.game.finalPlayers), function(player, key) {
    return _c('cell', {
      key: key,
      attrs: {
        "title": key + '号',
        "value": player.role.roleName,
        "primary": "content",
        "value-align": "right"
      }
    })
  })), _c('ol', {
    staticClass: "log"
  }, _vm._l((_vm.game.operateLog), function(log, key) {
    return _c('li', {
      domProps: {
        "innerHTML": _vm._s((key + "号：" + (log.roleName) + ", " + (log.operate)))
      }
    })
  })), _c('div', {
    staticClass: "footer-placeholder"
  }), _c('footer', [_c('x-button', {
    attrs: {
      "type": "primary"
    },
    nativeOn: {
      "click": function($event) {
        _vm.restart($event)
      }
    }
  }, [_vm._v("重新开始")])], 1)], 1) : _vm._e()])
},staticRenderFns: []}

/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "hello"
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__(166)
    }
  }), _c('h1', [_vm._v(_vm._s(_vm.msg))])])
},staticRenderFns: []}

/***/ }),
/* 176 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [(_vm.title) ? _c('div', {
    staticClass: "weui-cells__title",
    style: (_vm.cleanStyle({
      color: _vm.titleColor
    })),
    domProps: {
      "innerHTML": _vm._s(_vm.title)
    }
  }) : _vm._e(), _vm._t("title"), _c('div', {
    staticClass: "weui-cells",
    class: {
      'vux-no-group-title': !_vm.title
    },
    style: (_vm.cleanStyle({
      marginTop: typeof _vm.gutter === 'number' ? (_vm.gutter + 'px') : _vm.gutter
    }))
  }, [_vm._t("after-title"), _vm._t("default")], 2)], 2)
},staticRenderFns: []}

/***/ }),
/* 177 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "vux-alert"
  }, [_c('x-dialog', {
    attrs: {
      "mask-transition": _vm.maskTransition,
      "dialog-transition": _vm.dialogTransition,
      "hide-on-blur": _vm.hideOnBlur,
      "mask-z-index": _vm.maskZIndex
    },
    on: {
      "on-hide": function($event) {
        _vm.$emit('on-hide')
      },
      "on-show": function($event) {
        _vm.$emit('on-show')
      }
    },
    model: {
      value: (_vm.showValue),
      callback: function($$v) {
        _vm.showValue = $$v
      },
      expression: "showValue"
    }
  }, [_c('div', {
    staticClass: "weui-dialog__hd"
  }, [_c('strong', {
    staticClass: "weui-dialog__title"
  }, [_vm._v(_vm._s(_vm.title))])]), _c('div', {
    staticClass: "weui-dialog__bd"
  }, [_vm._t("default", [_c('div', {
    domProps: {
      "innerHTML": _vm._s(_vm.content)
    }
  })])], 2), _c('div', {
    staticClass: "weui-dialog__ft"
  }, [_c('a', {
    staticClass: "weui-dialog__btn weui-dialog__btn_primary",
    attrs: {
      "href": "javascript:;"
    },
    on: {
      "click": _vm._onHide
    }
  }, [_vm._v(_vm._s(_vm.buttonText || '确定'))])])])], 1)
},staticRenderFns: []}

/***/ }),
/* 178 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "vux-group-tip",
    style: ({
      'text-align': _vm.align
    })
  }, [_vm._t("default")], 2)
},staticRenderFns: []}

/***/ }),
/* 179 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "vux-toast"
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.isShowMask && _vm.show),
      expression: "isShowMask && show"
    }],
    staticClass: "weui-mask_transparent"
  }), _c('transition', {
    attrs: {
      "name": _vm.currentTransition
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.show),
      expression: "show"
    }],
    staticClass: "weui-toast",
    class: _vm.toastClass,
    style: ({
      width: _vm.width
    })
  }, [_c('i', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.type !== 'text'),
      expression: "type !== 'text'"
    }],
    staticClass: "weui-icon-success-no-circle weui-icon_toast"
  }), (_vm.text) ? _c('p', {
    staticClass: "weui-toast__content",
    style: (_vm.style),
    domProps: {
      "innerHTML": _vm._s(_vm.text)
    }
  }) : _c('p', {
    staticClass: "weui-toast__content",
    style: (_vm.style)
  }, [_vm._t("default")], 2)])])], 1)
},staticRenderFns: []}

/***/ }),
/* 180 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "weui-cell",
    class: {
      'vux-tap-active': _vm.isLink || !!_vm.link,
        'weui-cell_access': _vm.isLink || !!_vm.link,
        'vux-cell-no-border-intent': !_vm.borderIntent,
        'vux-cell-disabled': _vm.disabled
    },
    style: (_vm.style),
    on: {
      "click": _vm.onClick
    }
  }, [_c('div', {
    staticClass: "weui-cell__hd"
  }, [_vm._t("icon")], 2), _c('div', {
    staticClass: "vux-cell-bd",
    class: {
      'vux-cell-primary': _vm.primary === 'title' && _vm.valueAlign !== 'left'
    }
  }, [_c('p', [(_vm.title || _vm.hasTitleSlot) ? _c('label', {
    staticClass: "vux-label",
    class: _vm.labelClass,
    style: (_vm.labelStyles)
  }, [_vm._t("title", [_vm._v(_vm._s(_vm.title))])], 2) : _vm._e(), _vm._t("after-title")], 2), _c('inline-desc', [_vm._t("inline-desc", [_vm._v(_vm._s(_vm.inlineDesc))])], 2)], 1), _c('div', {
    staticClass: "weui-cell__ft",
    class: _vm.valueClass
  }, [_vm._t("value"), _vm._t("default", [_vm._v(_vm._s(_vm.value))]), (_vm.isLoading) ? _c('i', {
    staticClass: "weui-loading"
  }) : _vm._e()], 2), _vm._t("child")], 2)
},staticRenderFns: []}

/***/ }),
/* 181 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('button', {
    staticClass: "weui-btn",
    class: _vm.classes,
    style: (_vm.buttonStyle),
    attrs: {
      "disabled": _vm.disabled,
      "type": _vm.actionType
    },
    on: {
      "click": _vm.onClick
    }
  }, [(_vm.showLoading) ? _c('i', {
    staticClass: "weui-loading"
  }) : _vm._e(), _vm._t("default", [_vm._v(_vm._s(_vm.text))])], 2)
},staticRenderFns: []}

/***/ }),
/* 182 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('i', {
    class: [_vm.className, _vm.isMsg ? 'weui-icon_msg' : '']
  })
},staticRenderFns: []}

/***/ }),
/* 183 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "vux-x-dialog",
    class: {
      'vux-x-dialog-absolute': _vm.layout === 'VIEW_BOX'
    }
  }, [_c('transition', {
    attrs: {
      "name": _vm.maskTransition
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.show),
      expression: "show"
    }],
    staticClass: "weui-mask",
    style: (_vm.maskStyle),
    on: {
      "click": _vm.hide
    }
  })]), _c('transition', {
    attrs: {
      "name": _vm.dialogTransition
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.show),
      expression: "show"
    }],
    class: _vm.dialogClass,
    style: (_vm.dialogStyle)
  }, [_vm._t("default")], 2)])], 1)
},staticRenderFns: []}

/***/ }),
/* 184 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "vux-confirm"
  }, [_c('x-dialog', {
    attrs: {
      "dialog-class": _vm.theme === 'android' ? 'weui-dialog weui-skin_android' : 'weui-dialog',
      "mask-transition": _vm.maskTransition,
      "dialog-transition": _vm.theme === 'android' ? 'vux-fade' : _vm.dialogTransition,
      "hide-on-blur": _vm.hideOnBlur,
      "mask-z-index": _vm.maskZIndex
    },
    on: {
      "on-hide": function($event) {
        _vm.$emit('on-hide')
      }
    },
    model: {
      value: (_vm.showValue),
      callback: function($$v) {
        _vm.showValue = $$v
      },
      expression: "showValue"
    }
  }, [(!!_vm.title) ? _c('div', {
    staticClass: "weui-dialog__hd",
    class: {
      'with-no-content': !_vm.showContent
    }
  }, [_c('strong', {
    staticClass: "weui-dialog__title"
  }, [_vm._v(_vm._s(_vm.title))])]) : _vm._e(), (_vm.showContent) ? [(!_vm.showInput) ? _c('div', {
    staticClass: "weui-dialog__bd"
  }, [_vm._t("default", [_c('div', {
    domProps: {
      "innerHTML": _vm._s(_vm.content)
    }
  })])], 2) : _c('div', {
    staticClass: "vux-prompt",
    on: {
      "touchstart": function($event) {
        $event.preventDefault();
        _vm.setInputFocus($event)
      }
    }
  }, [_c('input', _vm._b({
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.msg),
      expression: "msg"
    }],
    ref: "input",
    staticClass: "vux-prompt-msgbox",
    attrs: {
      "placeholder": _vm.placeholder
    },
    domProps: {
      "value": (_vm.msg)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.msg = $event.target.value
      }
    }
  }, 'input', _vm.inputAttrs, false))])] : _vm._e(), _c('div', {
    staticClass: "weui-dialog__ft"
  }, [_c('a', {
    staticClass: "weui-dialog__btn weui-dialog__btn_default",
    attrs: {
      "href": "javascript:;"
    },
    on: {
      "click": _vm._onCancel
    }
  }, [_vm._v(_vm._s(_vm.cancelText || '取消'))]), _c('a', {
    staticClass: "weui-dialog__btn",
    class: ("weui-dialog__btn_" + _vm.confirmType),
    attrs: {
      "href": "javascript:;"
    },
    on: {
      "click": _vm._onConfirm
    }
  }, [_vm._v(_vm._s(_vm.confirmText || '确定'))])])], 2)], 1)
},staticRenderFns: []}

/***/ }),
/* 185 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: _vm.disabled ? 'vux-checklist-disabled' : ''
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.title),
      expression: "title"
    }],
    staticClass: "weui-cells__title"
  }, [_vm._v(_vm._s(_vm.title))]), _vm._t("after-title"), _c('div', {
    staticClass: "weui-cells weui-cells_checkbox"
  }, _vm._l((_vm.currentOptions), function(one, index) {
    return _c('label', {
      staticClass: "weui-cell weui-check_label",
      class: {
        'vux-checklist-label-left': _vm.labelPosition === 'left'
      },
      attrs: {
        "for": ("checkbox_" + _vm.uuid + "_" + index)
      }
    }, [_c('div', {
      staticClass: "weui-cell__hd"
    }, [_c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: (_vm.currentValue),
        expression: "currentValue"
      }],
      staticClass: "weui-check",
      attrs: {
        "type": "checkbox",
        "name": ("vux-checkbox-" + _vm.uuid),
        "id": _vm.disabled ? '' : ("checkbox_" + _vm.uuid + "_" + index),
        "disabled": _vm.isDisabled(_vm.getKey(one))
      },
      domProps: {
        "value": _vm.getKey(one),
        "checked": Array.isArray(_vm.currentValue) ? _vm._i(_vm.currentValue, _vm.getKey(one)) > -1 : (_vm.currentValue)
      },
      on: {
        "change": function($event) {
          var $$a = _vm.currentValue,
            $$el = $event.target,
            $$c = $$el.checked ? (true) : (false);
          if (Array.isArray($$a)) {
            var $$v = _vm.getKey(one),
              $$i = _vm._i($$a, $$v);
            if ($$el.checked) {
              $$i < 0 && (_vm.currentValue = $$a.concat([$$v]))
            } else {
              $$i > -1 && (_vm.currentValue = $$a.slice(0, $$i).concat($$a.slice($$i + 1)))
            }
          } else {
            _vm.currentValue = $$c
          }
        }
      }
    }), _c('i', {
      staticClass: "weui-icon-checked vux-checklist-icon-checked"
    })]), _c('div', {
      staticClass: "weui-cell__bd"
    }, [_c('p', {
      domProps: {
        "innerHTML": _vm._s(_vm.getValue(one))
      }
    }), (_vm.getInlineDesc(one)) ? _c('inline-desc', [_vm._v(_vm._s(_vm.getInlineDesc(one)))]) : _vm._e()], 1)])
  })), _vm._t("footer")], 2)
},staticRenderFns: []}

/***/ }),
/* 186 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "weui-cell vux-x-textarea"
  }, [_c('div', {
    staticClass: "weui-cell__hd"
  }, [(_vm.hasRestrictedLabel) ? _c('div', {
    style: (_vm.labelStyles)
  }, [_vm._t("restricted-label")], 2) : _vm._e(), _vm._t("label", [(_vm.title) ? _c('label', {
    staticClass: "weui-label",
    class: _vm.labelClass,
    style: ({
      width: _vm.$parent.labelWidth || (_vm.labelWidth + 'em'),
      textAlign: _vm.$parent.labelAlign,
      marginRight: _vm.$parent.labelMarginRight
    }),
    domProps: {
      "innerHTML": _vm._s(_vm.title)
    }
  }) : _vm._e(), (_vm.inlineDesc) ? _c('inline-desc', [_vm._v(_vm._s(_vm.inlineDesc))]) : _vm._e()])], 2), _c('div', {
    staticClass: "weui-cell__bd"
  }, [_c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.currentValue),
      expression: "currentValue"
    }],
    ref: "textarea",
    staticClass: "weui-textarea",
    style: (_vm.textareaStyle),
    attrs: {
      "autocomplete": _vm.autocomplete,
      "autocapitalize": _vm.autocapitalize,
      "autocorrect": _vm.autocorrect,
      "spellcheck": _vm.spellcheck,
      "placeholder": _vm.placeholder,
      "readonly": _vm.readonly,
      "name": _vm.name,
      "rows": _vm.rows,
      "cols": _vm.cols,
      "maxlength": _vm.max
    },
    domProps: {
      "value": (_vm.currentValue)
    },
    on: {
      "focus": function($event) {
        _vm.$emit('on-focus')
      },
      "blur": function($event) {
        _vm.$emit('on-blur')
      },
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.currentValue = $event.target.value
      }
    }
  }), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.showCounter && _vm.max),
      expression: "showCounter && max"
    }],
    staticClass: "weui-textarea-counter",
    on: {
      "click": _vm.focus
    }
  }, [_c('span', [_vm._v(_vm._s(_vm.count))]), _vm._v("/" + _vm._s(_vm.max) + "\n    ")])])])
},staticRenderFns: []}

/***/ }),
/* 187 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "app"
    }
  }, [_c('router-view'), _c('loading', {
    class: {
      full: _vm.loadingXp.full
    },
    attrs: {
      "position": _vm.loadingXp.position,
      "text": _vm.loadingXp.title
    },
    model: {
      value: (_vm.loadingXp.show),
      callback: function($$v) {
        _vm.$set(_vm.loadingXp, "show", $$v)
      },
      expression: "loadingXp.show"
    }
  }), _c('toast', {
    attrs: {
      "type": _vm.toastXp.type,
      "time": _vm.toastXp.time,
      "width": _vm.toastXp.width,
      "is-show-mask": _vm.toastXp.isShowMask,
      "text": _vm.toastXp.title
    },
    on: {
      "on-show": _vm.toastXp.onShow,
      "on-hide": _vm.toastXp.onHide
    },
    model: {
      value: (_vm.toastXpShow),
      callback: function($$v) {
        _vm.toastXpShow = $$v
      },
      expression: "toastXpShow"
    }
  }), _c('alert', {
    attrs: {
      "title": _vm.alertXp.title,
      "button-text": _vm.alertXp.buttonText,
      "mask-transition": _vm.alertXp.maskTransition,
      "dialog-transition": _vm.alertXp.dialogTransition
    },
    on: {
      "on-show": _vm.alertXp.onShow,
      "on-hide": _vm.alertXp.onHide
    },
    model: {
      value: (_vm.alertXpShow),
      callback: function($$v) {
        _vm.alertXpShow = $$v
      },
      expression: "alertXpShow"
    }
  }, [(_vm.alertXp.content) ? _c('span', {
    domProps: {
      "innerHTML": _vm._s(_vm.alertXp.content)
    }
  }) : _vm._e()]), _c('confirm', {
    attrs: {
      "title": _vm.confirmXp.title,
      "confirm-text": _vm.confirmXp.confirmText,
      "cancel-text": _vm.confirmXp.cancelText,
      "mask-transition": _vm.confirmXp.maskTransition,
      "dialog-transition": _vm.confirmXp.dialogTransition,
      "hide-on-blur": _vm.confirmXp.hideOnBlur
    },
    on: {
      "on-cancel": _vm.confirmXp.onCancel,
      "on-confirm": _vm.confirmXp.onConfirm,
      "on-show": _vm.confirmXp.onShow,
      "on-hide": _vm.confirmXp.onHide
    },
    model: {
      value: (_vm.confirmXpShow),
      callback: function($$v) {
        _vm.confirmXpShow = $$v
      },
      expression: "confirmXpShow"
    }
  }, [(_vm.confirmXp.content) ? _c('span', {
    domProps: {
      "innerHTML": _vm._s(_vm.confirmXp.content)
    }
  }) : _vm._e()])], 1)
},staticRenderFns: []}

/***/ }),
/* 188 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('transition', {
    attrs: {
      "name": _vm.transition
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.show),
      expression: "show"
    }],
    staticClass: "weui-loading_toast vux-loading"
  }, [_c('div', {
    staticClass: "weui-mask_transparent"
  }), _c('div', {
    staticClass: "weui-toast",
    style: ({
      position: _vm.position
    })
  }, [_c('i', {
    staticClass: "weui-loading weui-icon_toast"
  }), _c('p', {
    staticClass: "weui-toast__content"
  }, [_vm._v(_vm._s(_vm.text || '加载中')), _vm._t("default")], 2)])])])
},staticRenderFns: []}

/***/ }),
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(91),
  /* template */
  __webpack_require__(175),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(145)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(92),
  /* template */
  __webpack_require__(174),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-49799d47",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(147)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(76),
  /* template */
  __webpack_require__(177),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)


module.exports = Component.exports


/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(150)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(77),
  /* template */
  __webpack_require__(180),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(155)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(78),
  /* template */
  __webpack_require__(185),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(154)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(79),
  /* template */
  __webpack_require__(184),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)


module.exports = Component.exports


/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(146)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(80),
  /* template */
  __webpack_require__(176),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(159)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(83),
  /* template */
  __webpack_require__(188),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)


module.exports = Component.exports


/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(148)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(84),
  /* template */
  __webpack_require__(178),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(151)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(86),
  /* template */
  __webpack_require__(181),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(143)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(88),
  /* template */
  __webpack_require__(172),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(156)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(89),
  /* template */
  __webpack_require__(186),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ })
]),[69]);
//# sourceMappingURL=app.9d2007d8f2809327ff41.js.map