const APIUtil = require('./api_util.js');

class TweetCompose {
  constructor(el){
    this.$el = $(el);
    $(this.$el).on('submit', event => this.submit(event));
  }

  submit(event) {
    event.preventDefault();
    let tweetData = $(event.currentTarget).serialize();
    $( ":input" ).prop("disabled", true);

    APIUtil.createTweet(tweetData).then(res => this.handleSuccess(res));
  }

  clearInput(){
    $( "select" ).val("");
    $( "textarea" ).val("");
  }

  handleSuccess(response){
    this.clearInput();
    $( ":input" ).prop("disabled", false);

    let liList = '';
    response.mentions.forEach((mention) => {
      let innerLi = `<li><a href="/users/${mention.user_id}">
        ${mention.user.username}</a></li>`;
      liList = liList.concat(innerLi);
    });

    let content = `${response.content}`;
    let anchor = `<a href="/users/${response.user_id}">
                    ${response.user.username}</a>`;

    let li = `<li>${content} -- ${anchor} -- ${response.created_at}
              <ul>${liList}</ul></li>`;

    $(`${this.$el.data('tweetsUl')}`).prepend(li);
  }
}

module.exports = TweetCompose;
