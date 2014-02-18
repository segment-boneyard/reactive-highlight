
var highlight = require('prism').highlightElement;

/**
 * Expose `plugin`.
 */

module.exports = plugin;

/**
 * Plugin to add a syntax highlighting binding to `reactive`.
 *
 * @param {Reactive} reactive
 */

function plugin(reactive){
  reactive.bind('data-highlight', function (el, lang) {
    var val = this.value(lang);
    if (val) lang = val;
    el.classList.add('language-' + lang);
    highlight(el, true); // true for async
  });
}