# Markdown Plus

<img src="docs/icon.svg" alt="icon" width="256" height="256"/>

Markdown Plus ("M+" or "mdp" for short) is a markdown editor with extra features.

## [Online Demo](https://chuntaoliu.com/markdown-plus/)

![Markdown Plus](screenshot.png)

## Setup & Run

Optionally :star: this project, then:

```
fork it
git clone to your local
yarn install
yarn serve
open http://localhost:1234/ in your browser
```

## License

MIT

Copyright © 2015 - 2024 [Tyler Liu](https://github.com/tylerlong/)

---

## Todo

- Write Playwright tests
- Support mobile devices
  - codemirror support mobile devices
- Make it an easy-to-embed library
- Replace mermaid with lightweight alternatives
  - elk.js + dynamically render to get element size
- Make an app for ebook authoring
- Rewrite markdown-core, a mono repo for all the plugins
- Upgrade all dependencies to latest version, no exception
- Must have a render finished event
  - mdc.init must be a Promise
- Create a VS Code extension
- Enable react strict mode
  - only after we could properly dispose all side effects
- gantt diagram x-axis format should be part of the diagram code, not a settings
- Release a React library so that everyone can use it easily
  - a few lines of code to embed mdp to their own app
- Download as pdf/png/html/html code
- Add explict typings to most code
- Make it support node.js, means it could run without browser
- Close most GitHub issues
- Replace codemirror with ACE?
  - codemirror 6 released 2 years ago, codemirror 5 is actively maintained
- preview dark mode
- https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting
