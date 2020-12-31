/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./frontend/api_util.js":
/*!******************************!*\
  !*** ./frontend/api_util.js ***!
  \******************************/
/***/ ((module) => {

const APIUtil = {
    followUser: id => {
        return $.ajax({
            url: `/users/${id}/follow`,
            method: "POST",
            // data: {user_id: id},
            dataType: "json"
        });
    },
  
    unfollowUser: id => {
        return $.ajax({
            url: `/users/${id}/follow`,
            method: "DELETE",
            // data: {user_id: id},
            dataType: "json"
        });
    }
  };
  
  module.exports = APIUtil;

/***/ }),

/***/ "./frontend/follow_toggle.js":
/*!***********************************!*\
  !*** ./frontend/follow_toggle.js ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const APIUtil = __webpack_require__(/*! ./api_util */ "./frontend/api_util.js");

function FollowToggle(cb){
    this.cb = cb;
    this.userId = cb.data("id");
    this.followState = cb.data("follow-state");

    this.cb.on("change",(e)=>{
        this.cb.attr("disabled", true);
        if (this.followState === false) {
            APIUtil.followUser(this.userId)
            .then(()=>{
                this.followState = true;
                this.render();
                this.cb.removeAttr("disabled");
            });
        } else {
            APIUtil.unfollowUser(this.userId)
            .then(()=>{
                this.followState = false;
                this.render();
                this.cb.removeAttr("disabled");
            });
        }

    });
}

FollowToggle.prototype.render = function(){
    let myString = ("Unfollow");
    if (this.followState) 
        myString = "Following";
    const p = $(`#checkbox_message_${this.userId}`);
    p.text(myString);
}

module.exports = {
    FollowToggle
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
(() => {
/*!*****************************!*\
  !*** ./frontend/twitter.js ***!
  \*****************************/
const {FollowToggle} = __webpack_require__(/*! ./follow_toggle.js */ "./frontend/follow_toggle.js");
// window.FollowToggle = FollowToggle;
$(()=>{
    $(".follow-toggle").each(function(i, el){
        const ele = $(el)
        const toggleElement = new FollowToggle(ele);
        toggleElement.render();
        
    });
})
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map