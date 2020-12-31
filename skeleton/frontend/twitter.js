const {FollowToggle} = require("./follow_toggle.js");
// window.FollowToggle = FollowToggle;
$(()=>{
    $(".follow-toggle").each(function(i, el){
        const ele = $(el)
        const toggleElement = new FollowToggle(ele);
        toggleElement.render();
        
    });
})