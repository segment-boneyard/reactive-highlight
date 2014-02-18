
# reactive-highlight

  Add synxtax highlighting to an element.

## Installation

    $ component install segmentio/reactive-highlight

## Usage

  Either set the language:

```html
<pre data-highlight="javascript"><code>CODE</code></pre>
```

  Or it can be a method on your view if it's dynamic:

```js
View.prototype.language = function(val){
  return desiredLanguage;
};
```
```html
<pre data-highlight="language"><code>CODE</code></pre>
```

## License

  MIT