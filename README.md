# The Union of UK Unicyclists website sources

These are the sources used to generate the static website.

## Getting started

### Installing dependencies

We depend on [Jekyll](http://jekyllrb.com/) and [Bundler](http://bundler.io/).

Once you have these installed, run the following.

```
$ cd /path/to/repository/root
$ bundler
```

Bundler will go fetch Jekyll and all its dependencies. Note the ``Gemfile``
ensures we use the same version of Jekyll as GitHub.

### Developing

Jekyll has a preview mode that can be used to test
changes live (Jekyll watches for file changes).

```
$ bundler exec jekyll serve --verbose
```

Then navigate your browser to ``http://localhost:4000/``.
