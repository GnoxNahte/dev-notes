---
publish: true
created: 2026-01-04T07:30:57.837Z
modified: 2026-01-23T06:32:08.911Z
published: 2026-01-23T06:32:08.911Z
---

Links:

- [Manual](https://doxygen.nl/manual/index.html)
  - [Getting Started](https://doxygen.nl/manual/starting.html)
  - [Documentation the code](https://doxygen.nl/manual/docblocks.html)
- [Doxywizard](https://doxygen.nl/manual/doxywizard_usage.html) (GUI for settings. Has a bug where the UI scale is small on large monitors - Fixed on 1.12)

## Tutorial - Setup

![](https://www.youtube.com/watch?v=tLPHQMosF9M)

## Connecting with GitHub

To automatically generate the website on push,
Create a file - `/.github/workflows/build-docs.yml`
Then paste this:

```github-workflow
name: build-docs

# Controls when the workflow will run
on:
  # Triggers the workflow on push or pull request events but only for the "main" branch
  push:
    branches: [ "main" ]
  pull_request:
    branches: [ "main" ]

  # Allows you to run this workflow manually from the Actions tab
  workflow_dispatch:

permissions:
  contents: write
  pages: write
  id-token: write
  
jobs:
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.development.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
        with:
          submodules: recursive 
          fetch-depth: 0
      - name: Install Doxygen
        run: |
          sudo apt-get update
          sudo apt-get install -y doxygen
      - name: Install Graphviz
        run: sudo apt-get install -y graphviz
      - name: Create docs directory
        run: mkdir -p ./docs/html
      - name: Run Doxygen to generate documentation
        run: doxygen
      - name: Setup Pages
        uses: actions/configure-pages@v5
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './docs/html'
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

### Additional Links

- [Guide - How to configure it to document c code](https://embeddedinventor.com/guide-to-configure-doxygen-to-document-c-source-code-for-beginners/)
- [Setup with GitHub pages](https://gist.github.com/francesco-romano/351a6ae457860c14ee7e907f2b0fc1a5)

## Doxygen Awesome

Links:

- [Docs](https://jothepro.github.io/doxygen-awesome-css/index.html)
- [GitHub](https://github.com/jothepro/doxygen-awesome-css)

### Setup (Using git submodules)

Assumes Doxygen is already setup
Link: [Official Installation guide](https://jothepro.github.io/doxygen-awesome-css/index.html#autotoc_md11)

#### Install doxygen-awesome

Run `git submodule add https://github.com/jothepro/doxygen-awesome-css.git`

#### Linking the files

This is assuming you are using all the [extensions](https://jothepro.github.io/doxygen-awesome-css/md_docs_2extensions.html).
Also all of these config are referencing [doxygen-awesome's Doxyfile](https://github.com/jothepro/doxygen-awesome-css/blob/main/Doxyfile). Some parts need to add `doxygen-awesome-css` folder to the path. (Not sure if it's the correct way to do but works for now)

In **HTML\_EXTRA\_STYLESHEET**:

```
HTML_EXTRA_STYLESHEET  = doxygen-awesome-css/doxygen-awesome.css \
                         doxygen-awesome-css/doxygen-custom/custom.css \
                         doxygen-awesome-css/doxygen-awesome-sidebar-only.css \
                         doxygen-awesome-css/doxygen-awesome-sidebar-only-darkmode-toggle.css \
                         doxygen-awesome-css/doxygen-custom/theme-round.css \
                         doxygen-awesome-css/doxygen-custom/theme-robot.css
```

In **HTML\_EXTRA\_FILES**:

```
HTML_EXTRA_FILES       = doxygen-awesome-css/doxygen-awesome-darkmode-toggle.js \
                         doxygen-awesome-css/doxygen-awesome-fragment-copy-button.js \
                         doxygen-awesome-css/doxygen-awesome-paragraph-link.js \
                         doxygen-awesome-css/doxygen-custom/toggle-alternative-theme.js \
                         doxygen-awesome-css/doxygen-awesome-interactive-toc.js \
                         doxygen-awesome-css/doxygen-awesome-tabs.js
```

Also set these:

```
HTML_COLORSTYLE = LIGHT
GENERATE_TREEVIEW = YES
```

#### Setting up the header

Add the header (`header.html`) referencing: [doxygen-awesome's header](https://github.com/jothepro/doxygen-awesome-css/blob/main/doxygen-custom/header.html)

Also link the header in the Doxyfile

```
HTML_HEADER = <header-file-path>
```
