---
publish: true
created: 2026-01-04T15:31:00.776+08:00
modified: 2026-06-06T20:55:32.827+08:00
published: 2026-06-06T20:55:32.827+08:00
---

## Content of this website

This is just my collection of notes on what I've learnt (Mainly for game/web development). Made it a website to easily share notes with others.
I also like the search in Quartz! It's extremely fast and the UI is nice and useful.

**If you find anything that's wrong in the website or have any feedback, please let me know!** Thanks!
(I think if you know this website you should know my contact?)

> [!WARNING] Disclaimer
> These notes mainly summaries of what I've learnt.
> They might be wrong and should not be used as a trusted source as:
>
> - I'm still a student
> - There's probably better sources elsewhere
>
> I still try to be as accurate as possible though. In most of my notes I've also linked to other sources such as the official documentation ([cppreference](https://en.cppreference.com/), [mdn](https://developer.mozilla.org/en-US/)), forums ([StackOverflow](https://stackoverflow.com/)) or various articles.

## How the website is built

The website is

- edited with [Obsidian](https://obsidian.md/) - a note-taking app that uses markdown
- built with [Quartz](https://quartz.jzhao.xyz/) - static-site generator that transforms markdown into a website

It's very fast to update a note and publish it, see [kepano's workflow with Obsidian](https://www.reddit.com/r/ObsidianMD/comments/1hi3qff/a_quick_demo_of_how_i_edit_my_website_with/) for reference. (I use [Quartz](https://quartz.jzhao.xyz/) and [Quartz Syncer](https://github.com/saberzero1/quartz-syncer) but the workflow is roughly the same)

Other cool [Quartz websites](https://github.com/quartz-community/awesome-quartz?tab=readme-ov-file#sites-showcase).

For the Quartz website, main changes I made from Quartz's initial setup...

- changed some [Quartz configs](https://quartz.jzhao.xyz/configuration)
- add a hover box for the Explorer and Table of content - inspired by a feature in Vercel's dashboard (Code inspired by - [CodePen snippet](https://codepen.io/lvtgsfkc-the-scripter/pen/rNXaVOE))
- added the [Clickable Images Zoom Plugin](https://github.com/vazome/quartz-clickable-images-zoom-plugin?tab=readme-ov-file) - allows clicking on images to expand (Only works on images, SVGs like the Excalidraw drawings doesn't work yet)
- Created a [Tab Panels](https://github.com/GnoxNahte/obsidian-tab-panels) plugin (Still WIP - more details below)
- Add [PWA](https://web.dev/explore/progressive-web-apps) support (Works in Chrome, Firefox and Edge, not sure why doesn't work fully for iOS. Haven't tested any other browsers)
- and other many other minor changes

Stuff WIP for this website:

- The current notes uses the [Tab Panels syntax](https://github.com/GnoxNahte/obsidian-tab-panels#syntax). Since it's not standard markdown, I need to build a custom plugin for it to render properly in this website. Currently it parses the tabs correctly but the content of the tab is just shown as raw text. It should be converted from markdown to HTML which I'm still working on
- \~~Excalidraw support - I'm using the [Quartz Syncer](https://github.com/saberzero1/quartz-syncer) plugin to upload files from Obsidian to Quartz. Recently, I've added a [pull request](https://github.com/saberzero1/quartz-syncer/pull/96) that exports the Excalidraw drawings as SVG. Just waiting for the Quartz Syncer dev to merge and update the plugin and the website should have Excalidraw support!~~ Plugin was updated! I'll update the website whenever I'm free

## Others

By the way, I've built 2 plugins for Obsidian, please check them out and give any feedback (bad ones too so it can be better) if you use Obsidian too:

- [Tab Panels](https://github.com/GnoxNahte/obsidian-tab-panels)
- [Auto Embed](https://github.com/GnoxNahte/obsidian-auto-embed)

I really like [Obsidian](https://obsidian.md/) and [Quartz](https://quartz.jzhao.xyz/)! Highly recommend them to anyone who's interested in note-taking to use it :)
