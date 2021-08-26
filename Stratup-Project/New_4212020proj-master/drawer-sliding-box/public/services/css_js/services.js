(function(animatelo) {
    'use strict';
    // add your plugin name 
    animatelo.myAmazingPlugin = function(selector, options) {
        // add css properties to be animated
        var keyframeset = [
            {
                opacity: 0,
                transform: 'rotate(-45deg)',
                offset: 0   // keyframe 0%
            }, {
                opacity: 1,
                transform: 'rotate(0deg) scale(1.5)',
                offset: 1   // keyframe 100%
            }
        ];
        return animatelo._animate(selector, keyframeset, options);
    }
})(window.animatelo = window.animatelo || {});

// animate using your plugin!
window.animatelo.myAmazingPlugin('#img1', {
  duration: 2000
});