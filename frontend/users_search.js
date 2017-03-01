const APIUtil = require('./api_util.js');

class UserSearch {
  constructor(el){
    this.$el = $(el);
    this.$input = $(this.$el.input);
    this.$ul = $(this.$el.children('ul'));
  }

  handleInput(e){
    APIUtil.searchUsers(e.target, this.appendToUl.bind(this));
  }

  appendToUl(response) {
    this.$ul.empty();
    response.forEach((res) => {
      let path = `<a href="/users/${res.id}">${res.username}</a>`;
      let button = `<button class="follow-toggle"></button>`;
      let $li = `<li>${path}${button}</li>`;

      this.$ul.append($li);
    });
  }
}

module.exports = UserSearch;
