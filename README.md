# The Union of UK Unicyclists website sources

These are the sources used to generate the static website.

## Getting started

### Installing dependencies

We depend on [Jekyll](http://jekyllrb.com/) and [Bundler](http://bundler.io/)
which are both written in [Ruby](https://www.ruby-lang.org/).  So first you
need to install Ruby, see the Ruby website on how to do this.

Once you have Ruby installed you then need to install Bundler.  Typically you
would install Bundler like so

```
$ gem install bundler
```

Once you have Bundler installed, run the following where
``/path/to/repository/root`` is the path to the root of this repository (i.e.
the path to the directory containing this README.md file)

```
$ cd /path/to/repository/root
$ bundler
```

Bundler will go fetch Jekyll and all its dependencies. Note the ``Gemfile``
ensures we use the same version of Jekyll as GitHub.

Note if when you try to run the ``bundler`` command you get a message about the
command not being found then you probably don't have the Ruby binary directory
in your ``PATH``. One way resolve this if you're using a shell like bash to put
the following in your ``~/.bashrc`` file.

```
PATH="`ruby -e 'print Gem.user_dir'`/bin:$PATH"
export GEM_HOME=$(ruby -e 'print Gem.user_dir')
```

### Developing

Jekyll has a preview mode that can be used to test
changes live on your local machine (Jekyll watches for file changes).

```
$ bundler exec jekyll serve --verbose
```

Then navigate your browser to ``http://localhost:4000/``.
