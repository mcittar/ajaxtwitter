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
  }

};

module.exports = APIUtil;
