
/**
 * Expose `plugin`.
 */

module.exports = plugin;

/**
 * Plugin to add a syntax highlighting binding to `reactive`.
 *
 * @param {Reactive} reactive
 */

function plugin(highlight){
  return function(reactive){
    reactive.bind('data-highlight', function (el, language) {
      highlight.element(el, this.value(language));
    });
  };
}