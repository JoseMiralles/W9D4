function FollowToggle(cb){
    this.cb = cb;
    this.userId = cb.data("id");
    this.followState = cb.data("follow-state");

    this.cb.on("change",(e)=>{
        console.log("Click Listner");
        $.ajax({
            url: "/users/:id/follow",


        })

    });
}

FollowToggle.prototype.render = function(){
    let myString = ("Unfollow");
    console.log( this);
    if (this.followState) 
        myString = "Following";

    $p = $(`<p> ${myString} </p>`);
    $p.insertAfter(this.cb);  
}

module.exports = {
    FollowToggle
}