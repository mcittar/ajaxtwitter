const FollowToggle = require('./follow_toggle.js');
const UserSearch = require('./users_search.js');
const APIUtil = require('./api_util.js');
const TweetCompose = require('./tweet_compose.js');

$(() => {
  $('button.follow-toggle').each((_, el) => {
    let obj = new FollowToggle(el);
    obj.$el.on("click", (e) => obj.handleClick(e));
  });

  $('nav.users-search').each((_, el) => {
    let userSearch = new UserSearch(el);
    userSearch.$el.on("input", (e) => userSearch.handleInput(e));
  });

  $('form.tweet-compose').each((_, el) => {
    let tweetCompose = new TweetCompose(el);

  });
});
