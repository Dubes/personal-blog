---
path: '/can-i-build-website-only-with-browser-update-1'
date: '2019-01-05'
title: 'Progress Check #1 : Building my blog only using the browser'
tags: ['challenge']
excerpt: 'How did I go about the challenge and how far I have come so far.'
---

This is an update to the [challenge](/can-i-build-website-only-with-browser) I set for my self. Building a website only using a browser. In this post, I will go through the stack I have chosen, the progress I have made and lessons I have learnt.

### Chosen stack

- IDE: [codesandbox](https://codesandbox.io)

- Source control: [github](https://github.com)

  _Reason_: I have an account there and it integrates nicely with codesandbox.

- Tech stack: [gatsbyjs](https://gatsbyjs.org)

  _Reason_: I am comfortable with React and I am somewhat familiar with Gatsby. Also I get to play with GraphQL!

- Styling: CSS

  _Reason_: I am the Jon Snow of CSS. Now is the time to change that.

- Hosting Platform: [netlify](https://netlify.com)

  _Reason_: It plays well with Gatsby and has good integration with Github. I also wanted to try out [surge](surge.sh), but I have some plans for using functions in the future and the fact that it was a breeze to deploy to netlify made me stop looking further.

### What Have I done so far?

The first challenge I faced was setting up the Github repo and make it work with codesandbox. I had some false starts:

- Cloning the gatsby starter git repo. I did not like it as I could not disconnect that fork in Github.
- Creating an empty github repo and starting from scratch. It was too much effort and was easy to mess things up. I kept this as a nuclear option.
- Forked the sandbox of the starter kit and try to change its git repo to mine. Cannot do that.

I messed up some more codesandboxes, as I, in my infinite wisdom, chose to not RTFM 😊.

In the end, this is what I had to do:

1. Fork the official gatsby-starter-sandbox
2. Use "Export to Github" functionality of codesandbox to create my repo.
3. Use the import from Github wizard in codesandbox to create a sandbox from my repo.
4. The step above opened an editor view, but I was missing the sandbox functionality. Turns out I had to <KBD>CTRL</KBD> + <KBD>S</KBD> to create a sandbox.

It was not so difficult, but to be honest, not very intuitive. But it could also be me _skimming_ the docs rather than _reading_ them.

> Please note: At the time of writing, the github support in codesandbox is in beta.

I started with the [gatsby-starter-default](https://github.com/gatsbyjs/gatsby-starter-default). I started reading their docs, but I wanted to focus on building a blog from markdown files. Turns out [@taylorbell](https://twitter.com/taylorbell) has a nice [course](https://egghead.io/courses/build-a-blog-with-react-and-markdown-using-gatsby) on [egghead.io](egghead.io). This made me understand the fundamentals very quickly and was able to catch up on the rest from the official GatsbyJS docs.
Next challenge for me was to style the layout ONLY using CSS, thankfully, the course on [CSS Grid](http://www.gridcritters.com/) by [@geddski](https://twitter.com/geddski) had my back! Check it out if you can! I highly recommend it!

### Achievements so far:

1. I am able to consume markdown files and display them as blogs and also show them on the home page.
2. I am able to use codesandbox as my IDE and commit to Github directly.
3. Every commit to master gets deployed by netlify.
4. Layout does not suck. It is not responsive, as I have not covered that part of the course yet, but it does not suck.

### Notes on codesandbox as an IDE

Codesandbox holds up quite well! It is quite fast. Faster than developing on some of my machines!
I did face two problems though:

##### Working with images.

Codesandbox handles images differently, it uploads them to a separate storage and links them when you need it. It makes sense, but it does not work when you want to commit to github.

##### Github diffs and resolving merge conflicts.

I managed to create a merge conflict, but could not find a way to resolve it in codesandbox. But I did not spend much time on it, as I could just throw away my sandbox and create a new one.
