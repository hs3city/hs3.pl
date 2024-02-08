# The main website for hs3.pl

## In order to run the website locally

- Install hugo extended edition: https://gohugo.io/installation/
- (Fork &) clone repo
- Do a `git submodule update --init`
- `hugo serve`
- Go to http:/localhost:1313/

Also read the [I18n notes](i18n.md) and the [calendar/event notes](calendar.md).

## To contribute

There are 2 main ways of contributing to the website.

1. Create a PR with proposed changes from your fork of the repository.
2. If you want to make a contribution in the ["projekty"](https://hs3.pl/projekty/) or ["zasoby"](https://hs3.pl/zasoby/) subpage, you can do so via [Decap CMS GUI](https://decapcms.org/). Go to https://hs3.pl/admin, create a personal account and add your contribution.

Both ways of contribution require a review from the website's maintainers before the changes can be integrated.

Be mindful that no matter where you access Decap CMS - whether running locally, or in your published site — it will always fetch and commit files in the hosted repository. You can read more about it [here](https://decapcms.org/docs/configuration-options/).
