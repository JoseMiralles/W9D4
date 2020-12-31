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