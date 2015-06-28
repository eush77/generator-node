# generator-node

This is my custom generator for Node projects.

## Usage

```
yo node
```

This will ask questions and create `package.json`, `README.md`, `LICENSE`, `.gitignore`, and `.travis.yml` (if requested).

```
yo node:bare
```

This will silently create minimal `package.json` to write scripts and accumulate dependencies in. Similar to `npm init --yes`.

## Install

```
npm install -g eush77/generator-node
```

or from a scoped package

```
npm install -g @eush77/generator-node
```

Note that if you install it as a scoped package, you will need to specify its scope explicitly:

```
yo @eush77/node
yo @eush77/node:bare
```

## License

MIT
