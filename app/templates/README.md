[![npm](https://nodei.co/npm/<%= name %>.png)](https://nodei.co/npm/<%= name %>/)

# <%= name %>

<% if (travis) { %>[![Build Status][travis-badge]][travis] <% } %>[![Dependency Status][david-badge]][david]

*Nothing just yet.*

<% if (travis) { %>[travis]: https://travis-ci.org/eush77/<%= name %>
[travis-badge]: https://travis-ci.org/eush77/<%= name %>.svg
<% } %>[david]: https://david-dm.org/eush77/<%= name %>
[david-badge]: https://david-dm.org/eush77/<%= name %>.png

## Install

```
npm install <% if (global) { %>-g <% } %><%= name %>
```

## License

MIT
