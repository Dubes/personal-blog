---
path: '/can-i-build-website-only-with-browser-update-2'
date: '2019-02-11'
title: 'Concluding the experiment : Building my blog only using the browser'
tags: ['challenge']
excerpt: "My blog is now in a state I am reasonably happy with, but I need to pause this experiment as I have to get ready for some new challenges. Let's recap what I have learnt."
---

This is an update to the [challenge](/blog/can-i-build-website-only-with-browser) I set for my self. Building a website only using a browser. In this post, I will go through the stack I have chosen, the progress I have made and lessons I have learnt.

### What have I achieved so far?

- The layout is responsive, powered by CSS Grid, which I used without having to look up docs! This may not be a big deal for you, but for someone who can't align a div, this was an awesome feeling!
- I have the blog automatically deploy with Netlify.
- The blog is now deployed on a custom domain, which was also a breeze to setup with Netlify, along with HTTPS ❤ !!!
- Lighthouse audits aren't that bad.
- I am happy with the font and color choices.
- It also has a favicon which was also generated in the browser!

### Shortcuts taken:

I had to look at other websites for inspiration on design choices, font color, weight etc. This area is entirely new to me but is super interesting! I will continue learning more about them, but for now, I had to get this blog running.
I looked at a few blogs and the clean aesthetics of [@Dan_Abramov](https://twitter.com/dan_abramov)'s blog: https://overreacted.io/ really appealed to me. I purposely did not just copy it, I only took the bare minimum that I needed, so that when I add posts with code snippets, etc, I will still have to learn and put it in.

### Verdict

Honestly, the **only** real pain I had was with the way `images` are handled in Codesandbox.
I am still new to the whole "Platform" (as [@theKitze](https://twitter.com/thekitze) calls it), so even a simple task like adding a favicon was a learning experience for me (I honestly thought having a favicon.ico was the only way to do it!). Without being able to see the static assets in the browser IDE was not efficient, I had to move to a desktop to get this done.

I would like to note, I did not reach out to any one in the Codesandbox community for help on this, so, it is possible that the feature may exists or be available only to Patreons of Codesandbox.

I don't see myself continuing with this experiment though. I am too used to my local development setup and honestly I don't face any pain which forces me to move to the browser based environment. I am really impressed and hopeful for this evolution though. I can see this as lifting a significant barrier of entry from developers who face constraints. Decent developer machines are costly. Working with nodejs requires bandwidth. Things we take for granted, but are not something others are priviliged to have. I really look forward to what these people will create!

#### Other notes

- Would also like to give a shoutout to Github, Chrome audits and Firefox dev tools. They have such awesome features, at time I did not even need to open the IDE for small fixes or debugging.
- Having a browser based IDE was actually fun and had some unintended consequences.
  - Most noticeably, it is awesome for getting some quick fix/experiment done. I remember I once had ten minutes to kill, but my PC was off, I was able to bootup, work on that component, verify the changes and push to git! No way I was going to get that much done on my local IDE.
  - Being able to browse the sandboxes from others on my cell and on the go! I didn't do it often, but whenever I did, it worked like a charm. I found it better to learn compared to reading the docs! Also helped with my sanity during the public transport woes in the winter.
