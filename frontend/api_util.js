const APIUtil = {

  searchUsers: (queryVal, success) => {
    return $.ajax({
      url: "/users/search",
      method: 'GET',
      dataType: 'json',
      data: {
        query: `${queryVal.value}`,
      },
      success: response => success(response)
    });
  },

  createTweet: data => {
    return $.ajax({
      url: "/tweets",
      method: 'POST',
      dataType: 'json',
      data: data,
      
    });
  }

};

module.exports = APIUtil;
