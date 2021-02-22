---
title: 3. What are the consequences? What are the 2nd order consequences?
---

For a given path in development, ask what the consequences of the choice are. Then from each of those ask what the 2nd order consequences are.

This is basically the core of systems thinking. Elements don't existing in isolation. You can't make a choice based purely on the immidiate impact. You have to be sure to look for ripple impacts beyond that you can't initially see.

You might be totally fine with those consquences and the risks they present. Or you might not. The important thing is to map them out. A spider diagram or a post-it session on a (virtual) whiteboard can be useful for this.

Be sure to ask what the consequences are for people beyond your team too. What impact is there to users, stakeholders, the organisation, providers, 3rd parties, legal and so on.

A classic example is a choice to use a single page app Javascript framework (like Angular or React). This (sometimes) makes develoepr's lives easier, but has a knock on impact on performance (slow rendering speed), accessibility (very few SPAs do accessibility well), maintainability (update cycles for SPAs have an impact). That in turn has an impact on recruiting staff with the right skills combinations, regulatory compliance and even conversion rates (slow rendering == few sales) of a web product.

This technique is particularly useful when you are documenting choices in [Architectural Decision Records](use-adrs). As part of the consequences piece also look at the consequnces of the consequences.
