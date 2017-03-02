class FollowToggle{
  constructor(el, options){
    this.$el = $(el);
    this.userId = $(el).data("user-id");
    this.initialFollowState = $(el).data("follow");
    this.followState = this.followString();
    this.render();
  }

  render() {
    this.$el.text(this.followState === "unfollowed" ? "Follow!" : "Unfollow!");
    this.$el.prop("disabled", false);
  }

  followString(){
    if(this.initialFollowState){
      return "followed";
    } else {
      return "unfollowed";
    }
  }

  handleClick(event){
    event.preventDefault();
    this.$el.prop("disabled", true);

    let methodName = "";
    methodName = this.followState === "followed" ? 'DELETE' : 'POST';
    $.ajax({
      url: `/users/${this.userId}/follow`,
      method: methodName,
      dataType: 'JSON'
    }).then(response => this.toggleState())
      .then(response => this.render());
  }

  toggleState() {
    this.followState = this.followState === "followed" ? "unfollowed" : "followed";
  }

  disableWhilePromise(){
    this.$el.prop("disable", true);
  }

}

module.exports = FollowToggle;
