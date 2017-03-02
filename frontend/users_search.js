const APIUtil = require('./api_util.js');
const FollowToggle = require('./follow_toggle.js');

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

      let options = {userId: res.id, initialFollowState: false};

      let button = `<button class="follow-toggle" data-user-id=${options.userId}
        data-follow=${options.initialFollowState}></button>`;

      let $li = `<li>${path}${button}</li>`;

      this.$ul.append($li);

      let $selected = $($(`button[data-user-id='${res.id}']`));
      let obj = new FollowToggle($selected);
      obj.$el.on("click", (e) => obj.handleClick(e));
    });
  }
}

module.exports = UserSearch;
