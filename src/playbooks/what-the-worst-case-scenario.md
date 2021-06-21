---
title: 5. What is the worst case scenario?
---

When building a new thing, and particularly anything the uses data of real people, a useful question to ask is "what is the worst case scenario?" Ownership bias tends to mean that when we have an idea, because its ours we focus only on the good it can achieve and are blind to the bad.

Tech is now pretty notorious for this kind of careless lack of basic ethics, whether it's failing to train your machine learning with people of colour so your face detection only works on light skin, or building a targeted advertising platform that can also be used to radicalise people, or the ability of harassers to coordinate via social media, much can be achieved by considering the potential misuse and failure of your product as much as its success. There are great tools like Threat Modelling to help with the practicalities of the security side, but there are also the ethical, team and social aspects to consider.

When considering a new piece of work, take some time to talk in really broad terms about what can happen to your system and the people relying on it because of the change you are undertaking.

If we build this thing, what is the worst thing that can happen:

- to the data?
- to the product itself?
- to the users of the product?
- To the maintainers of the product?
- to the organisation?
- To people who aren't your users whose data you store? And do you store any inadvertantly?
- To people who aren't your users who are impacted by your products use?
- To other organisations?
- To the wider community?

This can help you frame other, more detailed questions such as:

- Who might misuse the product and how?
- How might somebody cause harm by using our tools?
- Do our internal staff have too much low level data access?
- How might what we create be combined with something else to cause harm?
- Which bad actors are we facilitating with this product? How do we prevent them from doing that?
- How do we manage the community around this product? Who gets to decide that?
- Which impacts did we not account for? ([see 2nd order consequences](../what-are-the-2nd-order-consequences))
- Who did we fail to consult when building this? Who is impacted that we haven't talked to or tested with?

Beyond this, project your thoughts forward in time to imagine the worst that might happen in the future, given where we expect to be:

- If this product exists for 5 years, what might change about these answers?
- What tech is just aroudn the corner that might be combined with our tool for ill?
- If this product exists for 20 years, what might change about these answers?
- How might this change when we have 100 million users?

This temporal lens is a particularly useful framing when you look to store large amounts of personal data. Do you really need to ask everyone for that piece of personal data? What looks proportional at 100 users may look very different at 100 million users.

 Also, from a team perspective if you make this thing, will you look back at it in twenty years and be proud of it? If you designed in safegaurds against its misuse, I think you will be.
