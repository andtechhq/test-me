# &TECH GitHub Guide: Getting started with GitHub

This repository will walk you through the basic GitHub actions like cloning a repo, pulling updates, committing changes, and pushing updates.

You will essentially be editing this test website by adding your name onto the home page. You should see the names of people who have followed this guide before you. Likewise, other people who follow this guide after you will be able to see that you also contributed to the site.

> By the end of this tutorial, you will be able to confidently contribute to other GitHub repos.

***Pre-req:** You should have a dev environment set up on your computer. Checkout the &TECH Dev Environment Set Up Guide if you haven't already*

# Some Background Info

## Repository ("repo"): A space used to organize a project
This repo is called "test-me" and it contains:
- Different types of files (.js, .json, .css, and more)
- Images (.png images, favicons)
- Folders to organize the files

Repos can also contain videos, spreadsheets, data sets, and more - really anything you need for your project.

## README: A file with information about the project
You are currently reading a README for the test-me repo. It is written using the [Markdown language](https://www.markdownguide.org/cheat-sheet/).

READMEs can be edited right on github.com or through a code editor (like VS Code) using Markdown.

# Let's get started!

## `Clone` this repo

1. In the top right corner of this page, click on the **Code** button in green.
2. Make sure the **HTTPS** option is selected.
3. Copy the URL provided. It should look something like https://github.com/andtechnology/test-me.git
4. Open up the terminal on your computer and navigate to the folder you want to put this code in. *If you're not sure how to do this, check out the &TECH Terminal Guide.*
5. Type `git clone https://github.com/andtechnology/test-me.git`, which is the URL you copied in step 3.
> This should take a few seconds. The `clone` command basically makes a local copy of the test-me repo onto your computer, while keeping a connection to the version of the test-me repo on github.com.
6. Once it's done, type `cd test-me`, which should take you inside the newly-created test-me folder on your computer.

## BEFORE YOU START CODING: Do a `pull`
*Anytime* you're getting ready to start making code changes on a repo (not just the first time), **always** run `git pull` inside the project directory.

This *pulls* any and all updates from the "remote" repo, which is the version of the repo that's on github.com. If someone else is working on the same repo and they made updates sometime when you weren't making updates, then your local copy of the project will not have their changes unless you `pull` them down. So make sure to do this so that you're not missing any important code changes since you last touched the project.

1. Type `git pull`
2. If this is your first time following the guide, it should say that everything is up to date (since probably no one made updates between the time it took you to get from the previous section to this one).

## Create your own `branch`
"Branching" is the way to work on different versions of a repo at one time. It lets many people work on the same project at the same time without running into conflicting code. At this moment in time, someone else on the other side of the world could be following this exact guide and you and them are able to do that without messing up the main code because of branches.

1. Type `git branch`. This will list all the branches that are currently open in the test-me project.
2. Type `git checkout -b yourgithubusername-test-me`. This command will create a new branch off of the `main` branch, which you were on just a few seconds ago. Running this command makes a copy of `main` (all the files in the test-me project) at that point in time. On your own branch (conveniently titled with your GitHub username so that no one else can take the name of your branch), you can make as many edits to the code as you want and it won't mess up any of the *main* code that's on github.com!

Now we're really ready to start breaking things - I mean... coding

## Check out what the test-me project even does
Feel free to stop here and take some time to look through the files inside of the test-me directory. If you have zero clue what any of it means, don't worry! We'll walk through it together.

The test-me project basically has starter code for a [React](https://reactjs.org/docs/create-a-new-react-app.html) website, with a [Shards React UI](https://designrevision.com/docs/shards-react/getting-started).

Huh??

React is a popular framework that lets folks like you and me create the front-end of a website super easily. Shards React UI basically helps make things like buttons, words, images, etc. on a site look pretty. Check out the links above to learn more!

There are a lot of files in this test-me project but the only one we will really be editing is `App.js`, which is the main file that generates what the website looks like. But first, let's see what the website looks like right now!

1. Run `npm install`. This will automatically download any *dependencies* the test-me project has. Kind of like when you're getting ready to paint something, you need to buy the necessary paint colors - same thing here but for us to be able to run the website and see it, we need to install some additional packages.
2. Run `npm start`. This will automatically start up the website on your computer.
3. In your browser, type in `localhost:3000` for the URL. This takes you to a specific location (called a "port") on your computer (called "localhost"). In this case, the website is being run on port 3000.
4. You should now be able to see the website as it stands the moment you last did a `git pull`.

## Contribute to the project
Let's contribute to the test-me repo by editing the website a bit!

1. Open up VS Code or your code editor of choice.
2. Open the test-me project in your code editor.
3. Open up the `src/App.js` file. You should see the code that generates the website on `localhost:3000` here.
4. Inside `function App()`, there is a `<ListGroup>` tag with a bunch of `<ListGroupItem>` lines inside of it, with a bunch of different people's names. These are all the folks who have followed the guide and contributed to the test-me repo so far. Now it's your turn to contribute!
5. After the last `<ListGroupItem>` line, hit enter and then type `<ListGroupItem>Put your name and a message here</ListGroupItem>`, putting in whatever text contribution you want.
6. Save the file and then refresh `localhost:3000`. You should now see the changes you made on the website!

## `Commit` your changes
The changes you just made in the previous section are pretty much only visible to you, yourself, and your computer. Sad face.

In order to really contribute to the repo, you'll need to make your changes visible to other people following this guide and cloning test-me on github.com. "Committing" your changes is the first step.

1. Go back to your terminal and make sure you have a prompt up to type commands. If you still have the website running on `localhost:3000`, you may need to open up a new terminal window or stop the website using `CTRL+C`. You should also be in the test-me directory, on your own branch (not `main`).
2. Type `git status`. This will show you all the files that have been edited on your local computer. We need to take these changes and make them visible to everyone else.
3. Type `git add *`. This puts all those changed files from step 2 into something called a "staging area". It's basically a rough draft space where things live until you are ready to make the next version of your project (a commit).
4. Type `git status` again. This is just to check that everything got put into the staging area, as intended.
5. Type `git commit -m "put a brief message in here explaining the changes included in this commit"`. This commits your changes with a description to remind you and to explain to other people checking out your code what changes happened at this point in time. Your commit message can be something like "[your name] contributed to test-me project".

## `Push` your changes
Committing your changes was the first step in really contributing to the repo. Now we need to update the remote test-me repo with your local branch and all your changes. This will make your branch and your changes visible to anyone who goes to the test-me repo on github.com

1. Type `git push -u origin yourbranchnamegoeshere`, replacing "yourbranchnamegoeshere" with the branch name you created on step 2 of the branching section above. *Note: If it is not your first time doing a push on this branch, you don't need to include the `-u`*.
2. Refresh this page (in your browser) that you are reading right now.
3. Click the dropdown at the top left corner where it says `main`. You should now see your branch in this list. If you click on it, you will be able to see the changes you made to the `App.js` file, along with the commit message you typed in the previous section.

## Submit a **pull request**
This is the very last step to fully contributing to a repo! It's super cool that you have your branch out there for the world to see but, unfortunately, unless people clone right from your branch (which they most likely won't), they're never going to see your awesome website contribution. Sad face again.

Soooo... we need to submit a **pull request** on GitHub that will basically ask someone else contributing to the test-me repo if they would be so kind to **merge** your changes into the `main` branch, which *is* what everyone else in the world would clone from.

*Note: Technically, you can submit and approve your own pull requests but that's not fun teamwork so we don't really do that here. BUT, we'll make an exception for this tutorial.*

1. Still in your browser on this very page, click on **Pull requests** at the top navigation bar right under the name of this repo.
2. Click the green **New pull request** button at the top right corner.
3. Choose `base: main` and `compare: [choose your branch here]`. This tells GitHub which branch we want to merge with `main` (in case there are many other branches other people are working on).
4. Add a title and a brief description (if you want) about the changes you made on your branch, much like the commit message you made earlier.
5. Click **Create pull request**

## **Merge** your pull request
This is the very very last step to fully contributing to a repo! If you have a friend doing this with you, have them do this last section for you and vice versa - it's good practice to let someone else (who's not you) actually do the final merge of your code into `main`. This makes sure at least a second set of eyes reviewed your code and changes and that no bugs exist. If you're riding solo on this guide, no worries! We've made some pretty simple edits so we trust you to merge on your own (no pressure). On the off chance something gets messed up, it's no problem - GitHub is the queen of receipts.

1. Make sure you get the message "This branch has no conflicts with the base branch". If there are conflicts, you'll need to resolve them first. If you don't know how to do that, drop a line in our Discord channel and we'll help out!
2. Click **Merge pull request**. Ahh, big step!
3. Click **Confirm merge**. Ahh, other big step!
4. Click **Delete branch** if you want to get rid of your branch. This is totally okay since all your changes have now been merged into main and the whole world can see your name on the website if they decide to follow this guide! If you're nostalgic and don't want to delete it, fine by us. It'll be there forever and ever.

## Congrats!
You just contributed to the coolest GitHub repo out there and learned SO much in such a short amount of time about GitHub, websites, and the command line. Totally joking about this being the coolest GitHub repo though - seriously, check out *allllll* the other super cool project people just put up openly and for free on github.com. Read their documentation and, now that you know how to contribute, feel free to clone their projects and play around with their code!

Make sure to visit https://guides.github.com/ for a bunch of other GitHub tutorials. There's still so much to learn and explore!

Also make sure to visit www.andtechnology.org for more &TECH guides and information about our upcoming hackathon, Hack&TECH 2021!

### **Thanks for hanging with &TECH!**
