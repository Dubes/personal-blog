---
path: '/impressions-first-2-weeks-at-inxm'
date: '2026-03-13'
title: 'Experience Report: Switching from enterprise setup to startup'
tags: ['impressions', 'culture', 'agile']
excerpt: 'My newest adventure came with lots of changes: from working in an enterprise-y setup to joining a startup, from leading a globally distributed setup of almost 200 people to being one of the 4 devs, and from leveraging an AI-assisted ecosystem to building one. This blog post records my impressions from the first two weeks of this adventure.'
---
# Foreword
I joined INXM two weeks ago. This switch came with lots of changes for me. I went from working in enterprise setups to a startup. I went from leading a globally distributed program of almost 200 people to being one of the 4 devs on the team. I went from almost exclusively reading code to writing lots of it. I went from dabbling in AI-assisted tools and the agentic ecosystem to being at the bleeding edge of it. I had my hopes, but I also had my share of fears.

At the end of these two weeks, I feel like I am actively contributing to our product. This is the most autonomous and productive I have felt at this milestone in my career so far. This blog post presents my reflections on what enabled me to get to this state and what I need to continue to work on.

# What enabled me?
## Company culture that enables focus
All my colleagues here prefer and practice async-first work to a very high standard.

- Key messages are overcommunicated consistently.
- Chatter is there, but there is no obligation to join any live threads.
- Repeated questions are answered with patience and empathy. This helped me overcome the FOMO (fear of missing out) on important information, allowing me to pull it at my convenience and based on my interest.

This is coupled with a good meeting culture:
- Meetings that do not provide enough value for the time invested are discarded.
- Meetings happen only when people have done their homework.
- People are aware of and respect availability and meeting overload.

This made me feel that my focus was not only respected, but actively encouraged.

## Social nature of our jobs is understood and valued
Sociotechnical systems have been researched and talked about for almost half a century now. However, their benefits and necessity are still not widely understood or adopted. The larger the ecosystem, the harder it gets. It was refreshing to see that, as a collective, we all understood the value this brings. Being a young startup, there is a lot on everyone's plate. Despite that, people made time to get to know each other. We shared what was important to us as people and as professionals. We talked about work, but not just about work.

All this investment of time leads to high trust and safety, which makes everything more efficient. Help is asked for and offered freely. PR (pull request) reviews are done thoroughly, and the feedback is brutally honest. We are not afraid of being judged, and we do not spend time clarifying the context of feedback or explaining how it should not be taken personally.

## Strong emphasis on orientation & dogfooding over onboarding and reading documentation
Our onboarding sessions were focused on orienting us in the product, codebase, and the org. The sessions were not tailored toward taking over something concrete within a set timeframe. This, combined with the strong emphasis on dogfooding our product, had the following effects:

- Our fresh eyes and insights were not tarnished by information overload. We could already contribute by exploring, failing, asking around, and fixing.
- We felt the pains our users would. We felt that pain consistently, and it pushed us to look at things in depth.
- By the end of the second day, we had a good grasp of how the overall flow is and the components involved.
- Not having a set plan let us self-organize.

## Solid foundations of the code base
When I got access to our GitHub and saw 96 repositories, I had a mild panic attack. But this setup was created with our craft at the forefront. Each repo does one thing. Structures are uniform. Context is contained and does not leak. This works very well for AI coding assistant tools like Claude, but also for humans like me.

# What did I struggle with?
The theme of this section could be: I need to learn a lot, but also unlearn a lot.

## Context overload
I spent a significant amount of time worrying about the context I was providing to the agents. In hindsight, I should first have paid attention to the context load I was subjecting myself to. It was very easy to fire off a bunch of agents to do a bunch of things, but then I had to look at what they produced. All that context overloaded my brain.

Every day by 1500, I was exhausted. My brain would not retain anything. What also caught me off guard were the hunger pangs at that time. I had forgotten that intense focus + high brain activity burns calories.

I have tried some small changes that have helped, but I think I need to keep experimenting to find my ideal working rhythm. One thing is for sure: 9 to 5 days, split into 4-hour blocks, will not work. I also need to squeeze in more nature and screen-free activities. The Pomodoro technique of 25 on / 5 off, or 50 on / 10 off, is not enough.

## LLMs -- Lazy Lying Maniacs
Agentic AI assistants really accelerate my work, but I need to look carefully at what they do. They have wowed me, but also frustrated me greatly, sometimes within a span of 15 minutes.

They can be lazy. "Oh, that test is failing, you know what, let's delete it".
They can lie to your face, very confidently. "No, Azure can't do that. You are wrong". When I send them to the Azure documentation, they at least apologize. 
They can be maniacs. They agree to everything you asked them to do, and to the guardrails they should follow, but every now and then, they still yolo it and try to git force-push their nonsense.

I also hate the fact that they respond well to threats. I have spent decades trying to improve my non-violent communication skills. Threats and shouting are things I never want to see in any workplace. But if me threatening Claude makes it do what I had set it to do, I fear that the behavior will be reinforced in my brain.

Do not get me wrong, they are still amazing and very valuable. But human oversight is very much needed, even for trivial tasks. I need to learn how to micromanage these agents. Again, that is a skill I do not possess and have always hated.

## My T shape needs broadening
I have always been proud of being an [expert generalist](https://martinfowler.com/articles/expert-generalist.html). I also had the privilege and luck to work with some very cool Business Analysts (BA), Product people, and Quality Assurance (QA) folks. They were kind enough to teach me some of their tricks. In this agentic AI-assisted coding world, I realize I need to sharpen and polish my BA and QA skills. For me to thrive, I will need to elevate my knowledge of how to slice and sequence work. I will also need to learn how to write and structure tests that let me ship with confidence.

# Concluding words
Why even write this? Sharing is the best way to learn and grow that I know of. 

I am empathetic to the challenges of enterprises. These are things we are able to do because we are small. However, I hope some of these aspects can be adapted by the wider industry in some form. Even if you adapt them only partially and only in a team context, I truly believe that it would make your work life slightly easier and slightly less stressful.

Please also do not let this post set the wrong expectations. One big reason I was able to perform at this level is that the core dev team has worked well together in the past. We all know and trust each other. We have a shared DNA when it comes to our craft and also to life. We all have pre-established communication patterns that we were able to revive quickly. This helped us accelerate our forming stage a lot.
