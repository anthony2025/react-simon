$(document).ready(() => {
  'use strict';
  // This program uses the PAC Pattern
  // PRESENTATION ≈ view
  // ABSTRACTION ≈ model
  // CONTROL ≈ controller
  // but in PAC the controller acts as a middleman
  // 0 = green, 1 = red, 2 = blue, 3 = yellow

  var ABSTRACTION = ((exports = {})=> {
    // PRIVATE VARIABLES
    const DIFFICULTY = 5;
    var sequence = [];
    var played = [];
    var level = 1;

    // PRIVATE METHODS
    var isCorrect = ()=> _(sequence).take(played.length).isEqual(played);
    var clearLevel = (wrong)=> {
      if (wrong || played.length === level) {
        played.length = 0;
        return (wrong) ? 'wrong' : ++level;
      }
    };

    // PUBLIC METHODS
    exports.getLevel = ()=> _.take(sequence, level);
    exports.reset = ()=> {
      sequence = _.range(DIFFICULTY).map(()=> _.random(3));
      played.length = 0;
      level = 1;
      return 'reset';
    };
    exports.update = (index, strict)=> {
      if (level >= DIFFICULTY)
        return 'victory';
      played.push(index);
      if (isCorrect())
        return clearLevel();
      return (strict) ? exports.reset() : clearLevel(true);
    };
    return exports;
  })();



  var PRESENTATION = ((exports = {})=> {
    // PRIVATE VARIABLES
    var sounds = [
      new Audio('https://s3-us-west-2.amazonaws.com/s.cdpn.io/331546/simon_sound_1.mp3'),
      new Audio('https://s3-us-west-2.amazonaws.com/s.cdpn.io/331546/simon_sound_2.mp3'),
      new Audio('https://s3-us-west-2.amazonaws.com/s.cdpn.io/331546/simon_sound_3.mp3'),
      new Audio('https://s3-us-west-2.amazonaws.com/s.cdpn.io/331546/simon_sound_4.mp3'),
    ];

    // PUBLIC METHODS
    exports.sound = (index)=> sounds[index].play();
    // We need to replace whatever blink library we were using here
    exports.screen = (val = '00', blink)=> {
      val = _.padLeft(val, 2, '0');
      $('.screen').text(val);
      if (blink) $('.screen').blink({'times': 4, 'speed': 150});
    };
    exports.light = (sequence)=> {
      for (let i = 0; i < sequence.length; i++) {
        var btn = $('.trapezoid').eq(i);
        var original = btn.css('background-color');
        var lightened = tinycolor(original).lighten(20).toRgbString();
        setTimeout(()=> btn.css('background-color', lightened), 100 * i);
        setTimeout(()=> btn.css('background-color', original), 100 * i);
      }
    };
    return exports;
  })();



  var CONTROL = (()=> {
    // PRIVATE GETTERS
    var strict = ()=> $('.strict').prop('checked');
    var sequence = ()=> ABSTRACTION.getLevel();
    var level = ()=> sequence().length;

    // BUTTON LISTENERS
    $('.start').click(function() {
      ABSTRACTION.reset();
      PRESENTATION.screen(level(), true);
      PRESENTATION.light(sequence());
    });
    $( ".circle" ).on( "click", ".trapezoid", function() {
      var index =  $(this).index();
      PRESENTATION.sound(index);
      switch (ABSTRACTION.update(index, strict())) {
        case 'victory':
          return PRESENTATION.screen(level(), true);
        case 'wrong':
          PRESENTATION.screen(level(), true);
        default:
          PRESENTATION.screen(level());
          PRESENTATION.light(sequence());
      }
    });
  })();
});
