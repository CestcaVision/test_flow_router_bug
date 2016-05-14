import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';


Template.test.events({
  'click .modal_show'(){
    // $('.modal-wrapper').fadeIn('250');
    $('.red').toggleClass('blue')
  },
});
