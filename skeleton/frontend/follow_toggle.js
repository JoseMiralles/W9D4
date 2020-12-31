const APIUtil = require("./api_util");

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