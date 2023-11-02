---
title: "My Project Setup"
date: "2023-10-26T00:05:37+02:00"
outputs:
    - html
image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=1770&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
tags:
    - GitHub
    - Repository
categories: Tooling
summary: How I start any new project
---

## Intro
Whenever I start a new project, I often use a specific workflow to make the most out of my development speed.
Whether it's a frontend project, or a backend project, I use a similar template for each project.


## Tooling
I normally use GitHub as my go-to SCM. Depending on the type of project, I start out with adding specific GitHub Actions.
If it's a project that i want to deploy (on NPM), I use the [release-please GitHub Action.](https://github.com/marketplace/actions/release-please-action).

### Dependabot

I use [Dependabot](https://docs.github.com/en/code-security/dependabot/dependabot-version-updates/configuring-dependabot-version-updates) to create auto pull requests whenever a dependency has a version update.

{{< gist pascalwilbrink 0a72babfa2720922bbfe6251c53eb30c >}}

### SonarCloud

For code quality, I make use of [SonarCloud](https://sonarcloud.io).

My `sonar-project.properties` in the root of my project looks like this:

{{< highlight properties >}}
sonar.projectKey=[PROJECT_KEY]
sonar.organization=[ORGANIZATION]
sonar.javascript.lcov.reportPAths=./coverage/lcov.info
sonar.coverage.exclusions=/tests/**
{{< / highlight >}}

I normally set up SonarCloud to be CI-driven, because i want to display the Code Coverage.


{{< highlight yaml >}}
name: Build
on:
 push:
   branches:
     - master
 pull_request:
   types: [opened, synchronize, reopened]
jobs:
  sonarcloud:
    name: SonarCloud
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
        with:
          fetch-depth: 0 
      - name: Install dependencies
        run: npm ci
      - name: Test and coverage
        run: npm jest --coverage
      - name: SonarCloud Scan
        uses: SonarSource/sonarcloud-github-action@master
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
          SONAR_TOKEN: ${{ secrets. SONARCLOUD_TOKEN }}
{{< / highlight >}}

### Allstar

Once this is setup, I add a Branch Protection Rule on `main` which blocks direct commits.
I'm using [Allstar](https://github.com/ossf/allstar) as a GitHub app that forces me to add specific protection settings.
You can see my Allstar configuration [here](https://github.com/pascalwilbrink/.allstar).
