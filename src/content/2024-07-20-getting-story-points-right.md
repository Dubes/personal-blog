---
path: '/making-story-points-work'
date: '2024-07-20'
title: 'Making Story Points Work'
tags: ['isAgileDead', 'transformation', 'agile', 'estimation']
excerpt: 'Story Points were invented to ease the pain of estimates, are they still being used as they were designed?'
---

# Motivation

This series of posts is in response to **#IsAgileDead**. I therorize that agile isn't dead, but in the rush to transform, people have lost track of its foundations & orign. I am trying to correct that by sharing my learnings. I do not claim that I know everything or what I say will solve all the problems, but my hope is that by sharing my tools, I make it easier for others to adopt and tailor the processes. This post looks at Story Points based estimates.

# Before we begin

Here is what [Ron Jeffries](https://ronjeffries.com/), the creator of Story Points, concluded in his [blog post](https://ronjeffries.com/articles/019-01ff/story-points/Index.html). It is a good read if you want to know the full history of how the term was coined.

> Well, if I did invent story points, I’m probably a little sorry now, but not very sorry. I do think that they are frequently misused and that we can avoid many pitfalls by not using story estimates at all. If they’re not providing great value to your team or company, I’d advise dropping them on the grounds that they are waste. If, on the other hand, you just love them, well, carry on!

There are better alternatives to story points but in this post, I want to focus on the ‘how not to misuse them' part. It may be easier to fix story points based estimations than to move away from it.

# Why do we estimate?

"Estimate" has to be one of the most misunderstood words in our industry. A simple word, which gives us comfort to not talk about it, but causes misery because we did not talk about it.

In an ideal world we would work on an item till it is done or no longer the top most priority (note: I can't find the source, but I am pretty sure Kent Beck talked or wrote about it somewhere). But we don't work in an ideal world, we operate in world with constraints, dependencies & shifting priorities.

This is why estimates are necessary. When someone ask us for estimates, they are really asking for information. Information that will help them:

## Understand the investment they are making, what they are getting & when.

Product Managers (PMs) & Product Owners (POs) likely have 200 things to do, but have funding for 40. Their job is to balance investments and value created, thus depending on the estimate, something might not be worth doing as the returns on investment are disproportional or has to be re-priotized or shifted. This balancing act needs some indication of costs to execute.

## Manage dependencies in the org

Teams rarely exist in a void, usually there are dependencies to and from them. For e.x. We need to provide data to a team in other value stream, which is building something for the marketing team which needs to be ready before a planned global product launch event. Someone has to ensure that these dependencies are actually fulfilled. At some scale, plans do require commitments, as the alternative relies on the other teams being truly agile & efficient. POs job is to craft & execute the optimal way forward by balancing the estimates and capacity.

# Human Brain & Measuring things

Our brains are amazing at many things and suck at so many other things. Accurate measurements are one of the things we suck at after a limit.

Let's do an experiment.

Look at someone around you, try to guess their weight or height, don't judge, just guess. Odds are you would not be off by much.

Now look at the photo below (Photo by [David Rodrigo](https://unsplash.com/@david__r?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash) on [Unsplash](https://unsplash.com/photos/aerial-photo-of-city-highway-surrounded-by-high-rise-buildings-Fr6zexbmjmc?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash))

![Landscape photo showing many skyscrapers. Tallest building labeled as Building 1 & a bit shorter skyscraper next to it labeled as Building 2](../assets/img/story-points-blogpost.jpeg)

Try to answer the following:

- How much does Building 1 weigh?
- How much does Building 1 weigh compared to Building 2?

Almost certainly you struggled with question 1. How do you answer it? It depends on so many things! If you come up with a number, it is most likely a random guess & you are way off.

But question 2 might have been easier to answer. I came up with somewhere between 1.5 to 2x. This was much faster to do, almost no processing power was needed & I am reasonably certain that I am not too far off. I am not super accurate, but should be within tolerable limits.

Our brains are good at comparing things!

This is how story points are supposed to be used. As a comparison & not a conversion between person days and a number.

# Tips for those producing estimates in Story Points

## Getting Started

Agree on the scale that you as a team would use. The smallest bit of work worth estimating, i.e. where the effort to estimate would be more than the work itself will be 1. The largest ticket which would fit into a sprint could be 13 or 20. I don't recommend going higher than that.

If you are getting started with your estimations, just start estimating without worrying about accuracy. The next tip will help you deal with calibrating your scale.

## Calibrating your scales for comparison

If you are a new team or just getting started, at the end of the iteration adjust the story points of the tickets you delivered. for e.x. if two tickets were originally estimated as 3, but one took significantly longer, that may be your reference to `5`, depending on where the time was spent. I recommend doing it for 3 iterations before using the scale.

If you are a team that is reforming or wants to reset the scales, meet with the team to find reference tickets where you all agree on the estimation. Note down the arguments made, they may be a good source of things to improve on!

## Agree on what you are going to estimate

So, what is it that we are estimating?

"We don't estimate effort, rather estimate complexity". This is the most common answer I have heard, but the term **complexity** is never well defined. Also, ultimately the estimations do get used to calculate effort, thus making the statement void.

We are estimating the work that needs to be done and giving an _indication_ of effort it _may_ require. I think this statement warrants a post on its own, but for now, let me try to give an example.

Say we have an established codebase with Spring Boot, the story you are going to work on requires connecting to an external system and making it available in your APIs. One ticket may be a `3`, because you have already solved some problems, but a similar ticket could also be an `8`, if it requires introducing a new mechanism for authentication or a new spring configuration. If you don't break down the scope, the discussions would either be hypothetical and/or estimates unreliable.

## Using the scales

When estimating a new story, break it down into the chunks of work & try to map the tasks to your scales. You may not find a perfect match, but will always be close enough.

> Instead of asking "How many story points is this story?" ask "Where does this story fall in our scale?"

The second question will always be easier to answer, as we will rely on comparison instead of measuring.

# Tips for those consuming the story points

## Do not convert story points to person days to plan

Story Points do not convert to person days, that was the whole reason for them to be invented in the first place! Instead use Velocity & Capacity to find the balance.

## Do not try to manipulate velocity

Velocity is a derived metric, not a defined one. If you try to influence it directly, people will find the path of least resistance. If you ask your team to increase the velocity, teams will almost always inflate their estimates.

> Instead of asking: "How can we increase our velocity?", ask "What is slowing us down?"

Remember to continuously frame and reframe the problem statement, inspect, try out new things, monitor & repeat. There is always room for improvement!

## Do not negotiate on story points, negotiate on scope

When you ask the team if a story could be done cheaper or in less complex ways, message can be interpreted by team as "Oh, we need to reduce story points? Ok, we will estimate lesser from next time around". Reframing the question to something like: "The story/feature seems to be much bigger than we estimated, can we look at what we can cut out safely from it?". My other post on [breaking down work]("../making-scope-negotiable") has some practical tips.

## Manage plans via backlog instead of capacity

Instead of continuously checking capacity, holidays & estimates, keep things light weight. Plan conservatively & work towards a setup where everyone is able and encouraged to pick up the next item in the backlog. Then as a PO you just need to make sure the next 3 or 4 items on the backlog are accurate and prepared.

# Conclusion

All this work & more is necessary to make sure the estimates are reliable & plans predictable. Attempts to short circuit it almost always lead to less desirable outcomes. Outcomes which, ironically, you may have been trying to avoid.

Hope this helps!
