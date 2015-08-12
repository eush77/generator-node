[![npm](https://nodei.co/npm/<%= name %>.png)](https://npmjs.com/package/<%= name %>)

# <%= name %>

<% if (travis) { %>[![Build Status][travis-badge]][travis] <% } %>[![Dependency Status][david-badge]][david]

<%= /[.!?]$/.test(description) ? description : description + '.' %>

<% if (travis) { %>[travis]: https://travis-ci.org/eush77/<%= name %>
[travis-badge]: https://travis-ci.org/eush77/<%= name %>.svg?branch=master
<% } %>[david]: https://david-dm.org/eush77/<%= name %>
[david-badge]: https://david-dm.org/eush77/<%= name %>.png

## Install

```
npm install <% if (global) { %>-g <% } %><%= name %>
```

## License

MIT
