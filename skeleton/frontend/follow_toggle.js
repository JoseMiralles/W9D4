function FollowToggle(cb){
    this.cb = cb;
    this.userId = cb.data("id");
    this.followState = cb.data("follow-state");

    this.cb.on("change",(e)=>{

        if (this.followState === false) {
            this.followState = true;
            this.render();
            $.ajax({
                url: `/users/${this.userId}/follow`,
                // accept: ,
                method: "POST",
                // data: {user_id: this.userId},
                dataType: "json"
            });
        } else {
            this.followState = false;
            this.render();
            $.ajax({
                url: `/users/${this.userId}/follow`,
                method: "DELETE",
                // data: {user_id: this.userId},
                dataType: "json"
            });
        }

    });
}

FollowToggle.prototype.render = function(){
    let myString = ("Unfollow");
    console.log( this);
    if (this.followState) 
        myString = "Following";
    const p = $(`#checkbox_message_${this.userId}`);
    p.text(myString);
}

module.exports = {
    FollowToggle
}