# string-slice

> An implementation of String.prototype.slice that works with arbitrary strings, including those containing astral symbols.

## Install
```sh
$ npm install --save string-slice
```

## Usage
The API is identical to that of `String.prototype.slice`.

```js
stringSlice('foobar', 1, 3);
// => 'oo'

stringSlice('𝐀𝐁𝐂𝐃', -1));
// => '𝐃'
```

## License

MIT © Martin Svanberg
