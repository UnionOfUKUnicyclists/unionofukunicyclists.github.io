---
title: "The transition to Jekyll and GitHub pages"
author: "Dan Liew"
---

After many years of volunteering his time to maintain the UUU website
Gavin McGreggor (GKMac) decided to step down from his role as UUU webmaster.
Thanks for all your effort GK, we wish you all the best!

It looks like maintaining the website has fallen to me again. With the existing
hosting for the UUU website about the expire it was time to look else where.

Given that the UUU no longer hosts a forum and the rest of the content is static
I decided it didn't make much sense to use any server side scripting at all.

Instead I went down the route of using a [static site generator](https://staticsitegenerators.net/).
I also decided I'd like to try using [GitHub pages](https://pages.github.com/) for hosting which
limited my choice to using [Jekyll](http://jekyllrb.com/).

Doing this gives us many advantages

* The content generated is static HTML so it is portable. It can be dumped on to
  any webserver and it should just work.
* We let GitHub worry about the hosting. They do all the load-balancing for us
  meaning the website should scale to many users without us having to do anything.
  WIN!. It's also free, so we don't pay for web hosting anymore. Sweet!
* [The code for our website is now GitHub](https://github.com/UnionOfUKUnicyclists/unionofukunicyclists.github.io)
  which means people can fork it and contribute back improvements.
* No more PHP. I'm not a big fan of the language and using a static website
  generator means I don't need to use it anymore :)
* Deploying changes to our website is buttery smooth. We just push to our GitHub repo
  and GitHub takes care of doing the rest. Nice!

The only real downside is that we can't have any server side scripting at all
(e.g. some sort of submission form). Right now we don't need it so I'll keep things
how they are.

It was a non-trivial amount of work to port the old website to Jekyll but now that
it's done I think it paves the way for some fun and intersting things we could do.

### Guest blogs

Jekyll is designed for blogging and it makes doing so very easy. Just take a look at
[the code for this blog post](https://raw.githubusercontent.com/UnionOfUKUnicyclists/unionofukunicyclists.github.io/master/_posts/2015-03-18-Transition-to-Jekyll-and-GitHubPages.md).
It's very easy to read because it is written using [markdown](http://daringfireball.net/projects/markdown/syntax).

I'm hoping that it's simple enough that we could have something like monthly
(too optimistic?) "guest blog" articles. These could be about anything unicycle
related. For example like a recent ride someone went on or a guide to fixing
something on your unicycle.

### Better handling of club data

[Our club data is seperated from its presentation in YAML files](https://github.com/UnionOfUKUnicyclists/unionofukunicyclists.github.io/blob/master/_data/clubs.yaml).
This could let us do some neat things.

* Adding/removing or editing club entries is now really simple. Some just needs to edit this file
  and it will automatically appear on the website. Asking people to do pull requests on GitHub
  might be asking too much so we may need to take contributions manually by e-mail or on our
  [issue tracker](https://github.com/UnionOfUKUnicyclists/unionofukunicyclists.github.io/issues).

* We could generate JSON files from this data and in effect provide a JSON API that others
  could pull in. This would be really cool because it means that there is **ONE DEFINITIVE LIST**
  that everyone can use.

* I'd like to add a Google Maps (or OpenStreet Map) widget showing the location of the clubs. I think
  this is a much better way to visualise the data we have. **UPDATE: This has been done. I went for
  Google Maps. There is a limit on requests but we're unlikely to hit that.**

### Modernise the design

Our website isn't particularlly pretty but now that we've transitioned to Jekyll a lot of the data
and presentation have been seperated which should make it fairly simple for us to use a fancy web framework
to make our website look pretty. I'm thinking [Twitter's Bootstrap](http://getbootstrap.com/) would be a good choice.

### Better handling of "Where to ride" data

A feature on the old website not available anymore is locations suitable for riding.
We could put these locations into a structured data format (i.e. YAML) like we did for
our club data and present this data on the website and also as a JSON API for other websites
to pull in.

There is a [work in progress here](https://github.com/UnionOfUKUnicyclists/unionofukunicyclists.github.io/blob/master/_data/muni_where_to_ride.yaml)
but it's not anywhere near complete.

Right that's enough yacking from me. Feel free to comment below.
