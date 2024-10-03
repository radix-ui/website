# Contributing to the Radix Website

## Code of Conduct

Radix has adopted the [Contributor Covenant](https://www.contributor-covenant.org/) as its Code of Conduct, and we expect project participants to adhere to it.

Please read [the full text](../CODE_OF_CONDUCT.md) so that you can understand what actions will and will not be tolerated.

## How to contribute

There are many ways to contribute to the project. Code is just one possible means of contribution.

- **Feedback.** Tell us what we're doing well or where we can improve.
- **Support.** Provide solutions for others in [open issues](https://github.com/radix-ui/website/issues).
- **Report.** Create issues with bug reports so we can make our website even better.

## Working on your first Pull Request?

There are a lot of great resources on creating a good pull request. We've included a few below, but don't be shy—we appreciate all contriibutions and are happy to help those who are willing to help us!

- [How to Contribute to a Project on GitHub](https://egghead.io/courses/how-to-contribute-to-an-open-source-project-on-github)

## Preparing a Pull Request

[Pull Requests](https://docs.github.com/en/free-pro-team@latest/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request) are always welcome, but before working on a large change, it is best to open an issue first to discuss it with maintainers.

A good PR is small, focuses on a single feature or improvement, and clearly communicates the problem it solves. Try not to include more than one issue in a single PR. It's much easier for us to review multiple small pull requests than one that is large and unwieldy.

1. [Fork the repository](https://docs.github.com/en/free-pro-team@latest/github/getting-started-with-github/fork-a-repo).

2. Clone the fork to your local machine and add upstream remote:

```sh
git clone https://github.com/<your username>/website.git
cd website
git remote add upstream https://github.com/radix-ui/website.git
```

1. Synchronize your local `main` branch with the upstream remote:

```sh
git checkout main
git pull upstream main
```

1. Install dependencies with [pnpm](https://pnpm.io):

```sh
pnpm install
```

1. Create a new branch related to your PR:

```sh
git checkout -b my-bug-fix
```

6. Make changes, then commit and push to your forked repository:

```sh
git push -u origin HEAD
```

7. Go to [the repository](https://github.com/radix-ui/website) and [make a Pull Request](https://docs.github.com/en/free-pro-team@latest/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).

8. We will review your Pull Request and either merge it, request changes to it, or close it with an explanation.

## Working locally

### Development

```bash
# install dependencies
pnpm install

# start the local server and see the site in your browser
pnpm dev
```

Make your changes and check that they resolve the problem as expected.

Finally, run `pnpm build` to ensure that the build runs successfully before submitting the pull request.
