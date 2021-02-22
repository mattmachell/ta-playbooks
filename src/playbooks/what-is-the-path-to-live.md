---
title: 4. What is the path to live for this?
---

All software goes from a developer's laptop to the live system.

How it makes that journey varies. It may be nice and simple. It may be something like this:

![A very complex squiggly path to live with no clear point](../../imgs/path-to-live.svg#diag)

Which is to say, nobody quite knows how the change moves from a developers machine to being live, which environments it passes through, the value of those environments, who's involved, what manual or automated tests and checks are performed and who owns the gates at each stage.

For any agile software product there's a great deal of value in mapping out the path to live for the code as a team. Covering:

1. Who is involved at each stage?
2. What checks take place at each stage?
3. What gate's proceeding to the next stage? Who owns that?
4. What differs in the stage's environments or data? Why?
5. What value is provided by each stage?
6. How is all this orchestrated in your build tools?
7. What risks are these steps here to mitigate?

For each of these questions you may discover that nobody is quite sure why a particular step exists, which is often a good reason to remove it and thereby optimise the process. However you can only answer those questions if the whole team are present (dev, product, delivery, infrstructure, QA if you have them). You need that so you can know that, for example, product are doing "testing" on a release on the preproduction environment simply because that's what they were told to do half a decade ago. You can then followup by asking where they would prefer to test and what value that manual intervention is giving.

You can then follow up with asking:

1. Where is best for those checks to take place?
2. Can the checks be automated?
3. Can the assurance they need be provided in another way?

By working and reworking the path to live and actively questioning the value of steps in it you can end up with a new idealised workflow to implement. Hopefully with fewer environments, fewer manual checks and gates, and more confidence in delivery of the thing to live.

An idealised modern flow might be something like:

1. Branch created on local dev machine for the smallest slice of change
2. Local checks for quality with precommit hooks (linting, unit tests, code coverage and so on)
3. Push of branch to source control creates starts build pipeline.
4. Pipeline builds isolated real infra in your cloud provider
5. Pipeline runs full intregration and user journey tests against isolated development environment
6. Use of the isolated environment to demo the new feature to product and team
7. Successful build allows merge to mainline code of the branch
8. Pipeline runs all lint, unit, integration and user journeys on the new mainline in the integration environment
9. Successful build allows promotion to a staging environment with synthetic data at scale where security and targeted performance tests take place
10. If successful change is rolled out to live as a blue/green deploy wehre traffic is slowly cut across to new build and reverted if key metrics degrade.

This is illustrative only and you shouldn't copy it without asking if those steps fit your team's and software's needs. If you have no automated tests, well, that's going to make your path to live very different indeed. Smaller or larger teams and organisations will also have differning concerns about differing risks and you need to build your path to live around reducing those, not the ones that led to the example above.