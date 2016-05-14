import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

FlowRouter.route( '/test', {
  name: 'test',
  action: function() {
    BlazeLayout.render( 'applicationLayout', { main: 'test' } );
  },
});
