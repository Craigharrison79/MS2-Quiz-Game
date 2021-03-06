# [Flag Quiz Game](https://craigharrison79.github.io/MS2-Quiz-Game/)

For my first milestone project, I had to build a static responsive front-end website as part of my Diploma Course with the Code Institute.  I wanted to build a game of some kind.  I was watching an old episode of Big Bang Theory and Sheldon was doing Fun With Flags and it gave me the idea to do a quiz game for my project.

[Veiw Quiz Game](https://craigharrison79.github.io/MS2-Quiz-Game/)
![Flag Quiz](./assets/documents/images/mock-up.jpg)

## Table of Content

- [UX Design](#ux-design)
    - [Strategy](#strategy)
    - [Goals](#goals)
- [Design](#design)
    - [Wireframes](#wireframes)
    - [Typography](#Typography)
    - [Color Scheme](#color-scheme)
    - [Image](#image)
- [Features](#features)
    - [Layout](#layout)
    - [Features to implement in the future](#features-to-implement-in-the-future)
- [Technologies used](#technologies-used)
- [Testing](#testing)
- [Deployment](#deployment)
- [Credits](#credits)
    - [Acknowlegements](#acknowlegements)
    - [Inspiration from website](#Inspiration-for-website)
    - [Code](#code)
    

# UX

## Strategy

The idea for this web based game was to build a fun quiz game that all ages could play.  To take the world flags and see how much of our world the player knows.


## Goals

#### The design of the game:

As the designer of this game, I wanted to build a simple and clean-looking design.  A user-friendly interface that any player of any age could just start playing. As this is my first project in Javascript, I wanted to start to understand how javascript works without overwhelming myself with too many complex and detailed procedures. I wanted to provide an enjoyable and stimulating game that the player/players would want to play again and again.


#### Design Goals:

 - A fun and easy to play game that all ages can play.
 - To be able to educate the players as they play the game.
 - To be able to play the game multiple times and still be challenged.
 - To have the player want to play the game again to better his/her score.
 - Build something I am proud of.
 - To understand and use the knowledge of the course effectively.


#### User Stories:

- First time player
    - Easy to understand how to play the game and how to navigate throughout the game.
    - Something that is fun and looks good to play.
    - Something to challenge them without overwhelming them at the same time.

- Returning players
    - To challenge even after playing the game a few times.
    - To improve his/her scores on the leaderboard.
    - To educate themselfs to the country flags.


## Scope

- Responsive interface.
- Simple menu.
- Easy and simple section to find instructions on how to play the game.
- To have a random question asks from at array.
- Display the generated questions on the page.
- To generate the right image for each question.
- Have a countdown counter to run down as the player goes through each question.
- To have an updateable score which will be shown at the end of the game.
- Identify the right answer once the player has taken a guess (to help educate the player on the subject).
- To indicate how well the player has done between each game or other players games.
- To restart the game once finished.

## Building Constraints

- Design
    - First time building a game like this.
    - Understand how UX works for web based games.
- Technical
    - Just started with javascript and I am new at programing.
    - Time frame a lot to build the features needed.
    - The ability to research and find the answers to the coded questions once the problems presents themselfs.

    
# Design

To build a clear looking game that is simple on the eye and that has a modern look but will not age.

### Wireframes

I used mockup [mockflow.com](https://www.mockflow.com/) once again to design the idea for the web based game. Link below to the design.

- [Wireframes Download PDF](https://github.com/Craigharrison79/MS2-Quiz-Game/blob/master/assets/documents/images/flag-game-wireframes.pdf)

### Typography

I wanted to use a font that look good and that almost everyone has used. Everyone has used this font before and I find Arial very readable. So this makes sense to use as the font for the game. It is clean and has a nice flow between the letters.

Font-family used are: Arial, Helvetica, sans-serif,;

### Color Scheme

The colour scheme - I wanted to keep the game clean looking and not use too many colours. The midnight green was a nice starting colour as it's a good dark colour that still pops a little without overwhelming the user's eyes.  Orange was a nice pop of colour to contrast the background and give the user a simple indicator of where to look. The cadet blue is again a nice clean difference in colour to help indicate the buttons on the page.

![Colour Scheme](assets/documents/images/colour-scheme.png)

### Image

 Landing Page, the two images are from
    - [undraw](https://undraw.co/illustrations): Around the world but I removed the figure's to just have the world in [figma](https://www.figma.com) this was then exported to an SVG "world SVG". 
    - [handz 3D](https://www.handz.design/): A package of different hands that I made into an image also in Figma and exported it to SVG "hands SVG".
    
Both change to PNG from SVG.

# Features

- #### Landing Page or menu

    - A clean inviting page to indicate what site/game the user is looking at.
    - Two call to action buttons. One to start the game and a second one of the instructions on how to play the game which will show up in a modal to help the user with navigation.

- #### Game Page

    - First, an area to indicate which question the player/user is on.
    - The question itself.
    - The image to the questions.
    - The 4 answer boxes. One of the boxes will indicate the right answer once the player/user has answered the question. This will help educate the player/user.
    - The timer which counts down shows the player/user and time left they have to answer the questions.

- #### Score Page

    - The player/user overall score for the game.
    - Right answer will be 10 points and a wrong answer will remove -5 points from the score.
    - A form (input and button) to allow the player/user to enter his/her name so he/she can save the score and maybe be enter into the high scorecard.
    - Buttons: The first one to save player/user score once a name is entered.  Second to open up the scorecard table and see who the top player/user are. And third button to enter back to the landing/menu page.
    - All scores and the highest scores table will be held in local storage.

### Future Features

- To build on the web base game:
    - Adding a lot of different arrays to give the user a different subject/question to pick from.
    - The highest scoreboard to be seen by a different player on a different computer and not just local Storage.
    - Adding a choice of levels, from beginner to pro.
    - Have a battle game to compete against players online.


# Technologies Used

- [HTML5](https://en.wikipedia.org/wiki/HTML5) 
    - used to structure the page.
- [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets) 
    - used to add style and look of the page.
- [Javascript](https://en.wikipedia.org/wiki/JavaScript) 
    - used to build interactive elements of the website/page.
- [Font Awesome:](https://fontawesome.com/) 
    - a library full of icons.
- [Google Fonts:](https://fonts.google.com/)
    - a library full of fonts.
- [Git](https://git-scm.com/)
    - Version control from gitpod, save, commits, and push code to Github.
- [GitHub:](https://github.com/)
    - Live site to save code.
- [GitPod:](https://www.gitpod.io) 
    - Local repository to read the develop code.
- [mockflow.com](https://www.mockflow.com/) 
    - Used to design my wireframes.
- [W3C CSS Validator](https://validator.w3.org) 
    - Used to check of errors in HTML code.
- [W3C HTML Checker](https://validator.w3.org)
    - Used to check of errors in CSS code.
- [Am I responsive](http://ami.responsivedesign.is) 
    - is a high fidelity responsive design tool for previewing your site across a variety of popular devices.
- [W3C Spell Checker](https://www.w3.org/2002/01/spellchecker) 
    - This tool allows you to check the spelling of a web page.
- [Chrome Development Tools](https://developer.chrome.com/docs/devtools/)
    - Web developer tools built directly into the Google Chrome browser. To help developers diagnose problems as they work on projects.
- [Responsive viewer](https://chrome.google.com/webstore/detail/responsive-viewer/inmopeiepgfljkpkidclfgbgbmfcennb?hl=en) 
    - To test your website responsiveness across different devices.
- [Wave Accessibility](https://wave.webaim.org) 
    - helps you make their web content more accessible to different people with disabilities.
- [Google lighthouse](https://developers.google.com/web/tools/lighthouse) 
    - Check your site Performance, Accessibility, Best Practices, and SEO and give it a rating out of a 100.
- [JShints](https://jshint.com) 
    - a tool that helps to detect errors and potential.

### Media

- [undraw](https://undraw.co/illustrations)
- [handz 3D](https://www.handz.design/)
- [figma](https://www.figma.com) 

# Testing

## Testing process can be read [here](assets/documents/testing.md).

- ## Testing User Experience and Stories (UX)

# Deployment

Deployment of the project is on GitHub Pages, this is how I deploy it:

- With the code being done in Gitpod and push to my repository in GitHub.
- Log in to GitHub and moving to my repository and finding and opening MS2-Quiz-Game.
- Locating and clicking on the settings in the menu bar on the top of the page.
- Scroll down the page till you reach the GitHub Pages section.
- In this section under the source click the dropdown select that read ???None??? and select master and then save.
- Refresh the page and scroll back down the same section and you find the published link for your site.

![deployment](assets/documents/images/deployment.png)

## Cloning the Project

Cloning the project

When you finish log into Github, navigate to the repository page, and select MS2-Quiz-Game.
Above the file list, click on the Code button next to the Gitpod button (green button).
Copy the URL.
Open your terminal.
Change the working directory to the location where you want the cloned directory.
Paste the URL after you have type git clone. eg
    $ git clone https://github.com/Username/repository-name
Press enter and this will create a local clone.

More information on cloning repository:
[Github Information](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository)

![Clone](assets/documents/images/cloning.png)

## Forking the Project

Forking the project

When you finish log into Github, navigate to the repository page, and select MS2-Quiz-Game.
Top right of the page click on the fork button.

More information on fork repository:
[Github Information](https://docs.github.com/en/github/getting-started-with-github/fork-a-repo)

# Credits

## Acknowledgements

- My Wife: for her support and looking after the kids.
- My little girl: For the hours playing the game and testing.
- My newborn boy: For sleeping so well so I could get time to finish this project.
- Mentor: Oluwafemi Medale for his feedback and help.
- Code Institue: for the knowledge you gave me.
- W3School: For helpful reminders.
- Kevin Powell: inspiration and knowledge.
- James Q Quick: inspiration and knowledge.

## Inspiration for website

Big Bang Theory and Sheldon for Fun with Flags.

## Code

- [James Q Quick](https://www.youtube.com/watch?v=jfOv18lCMmw&t=363s) : Referenced in the code.  Help with many problems in the project. Did my best to rewrite code best I could using help from the codes below.  

- [Dani Krossing](https://youtu.be/kPtS4vO42II) : Help with building and information about 404 page.

- [developer.mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) : For more information about splice and how it works.
    
- [w3schools](https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_map3) : ideas on how to write the map function in a different way.

- [w3schools](https://www.w3schools.com/jsref/prop_win_localstorage.asp) : help with local storage.

- [stackoverflow](https://stackoverflow.com/questions/35273539/json-parse-from-localstorage-issue) : look over this for local storage issues.

- [w3schools](https://www.w3schools.com/js/tryit.asp?filename=tryjs_array_sort2) : help to rewrite the code.

- [dev.to](https://dev.to/minna_xd/adding-a-high-score-table-to-javascript30-whack-a-mole-4adk) : idea on how to do the table with map, but run into lot of problems so pivoted to unordered list like in [James Q Quick](https://www.youtube.com/watch?v=jfOv18lCMmw&t=363s) video.

- [stackoverflow](https://stackoverflow.com/questions/14643617/create-table-using-javascript/14644462) also use to try and build the table.

- [w3schools](https://www.w3schools.com/charsets/tryit.asp?deci=215&ent=times) : use &times for a button and [get.foundation](https://get.foundation/sites/docs/close-button.html) : help with the data close button.
