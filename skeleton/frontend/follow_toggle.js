function FollowToggle(cb){
    this.cb = cb;
    this.userId = cb.data("id");
    this.followState = cb.data("follow-state");

    this.cb.on("change",(e)=>{
        console.log(e);
    });
}

module.exports = {
    FollowToggle
}