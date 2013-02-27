
// - - - - - - - - - - - - - - -
// Posting functionality on index
// - - - - - - - - - - - - - - -

Template.index.events = {
    'click #post-type > li': function(event) {
        var $this = $(event.currentTarget);

        $('#post-inner').attr('rel', $this.data('type'));
        $this.addClass('selected').siblings().removeClass('selected');

        $('#post-content')
        .children('#post-'+$this.data('type'))
        .addClass('selected')
        .siblings()
        .removeClass('selected');
    }
};