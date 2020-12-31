const APIUtil = require("./api_util");

function FollowToggle(cb){
    this.cb = cb;
    this.userId = cb.data("id");
    this.followState = cb.data("follow-state");
    this.setupListeners();
}

FollowToggle.prototype.setupListeners = function(){
    this.cb.on("change",(e)=>{
        this.cb.attr("disabled", true);
        if (this.followState === false) {
            this.followState = true;
            this.render();
            APIUtil.followUser(this.userId)
            .then(()=>{
                this.cb.removeAttr("disabled");
            }).fail(()=>{
                this.followState = false;
                this.render();
            });
        } else {
            this.followState = false;
            this.render();
            APIUtil.unfollowUser(this.userId)
            .then(()=>{
                this.cb.removeAttr("disabled");
            }).fail(()=>{
                this.followState = true;
                this.render();
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