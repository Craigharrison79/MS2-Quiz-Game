# **Testing Quiz Game**

- ## Testing User Experience and Stories (UX)

- First time visitor goals: 
    - As a first time user/player of the web base game,  I want to be able to navigate through  the site quick and understand everything at first glance.  

        1. The visitor will enter the site and have a simple and clean site to read and follow.
        The is just two option to pick from to move forward in the game.  Instructions and Play Game.

        2. On clicking the instruction button the rules of the game will appear and will explain how to play.  The instruction will be a model so the user/player will know were they are in the website/game.  The model will have a simple X at the top right corner to close the instruction tab.

        3. Click play will start the game and switch the screen to game stage.

    - As a first time user/player I want to understand what it I looking at and what I can interact with.

        1.

    - As a user/player I want to know how much time I have left to answer the question.

        1.

    - As a user/player I would like to know if the answer to the question is right.

        1. Once the user/player has click a answer the right answer will flash up for about  3 second given they a chance to acknowledge the right answer and to educate the player  on the country's flag.

    - As a user/player I want to know what question I am on.
        


# Bugs issues and solutions

## Timer still running on score page

- On the end screen to display the score, the timer was still initiating long after the game had finish.  This was caught when building the scoreRankings functions. To fix this I read through the code and try to figure out the area that was causing the problem.  I identify several area but didn't know which one was initiating from.  So I console.log different error message in the code to see which point it was from.

![timer-error](assets/documents/testing-code/error1-timer.png)
![timer-error](assets/documents/testing-code/error2-timer.png)
[commit-point](https://github.com/Craigharrison79/MS2-Quiz-Game/commit/373d93346ba5343d9eaa981a9e7ec38f8ba23510)

Once found the  initiating error I could trace my steps till I workout the problems.  I remove the clearInterval(timer = 10 + 1) from both the countDown and reset function.

![clearInterval](assets/documents/testing-code/removing-cleartimer-countdown.png)
![clearInterval](assets/documents/testing-code/removing-cleartimer1-set_time_out.png)

Then adding the code to a else statment in the next question function. This  fix the problem.

![clearInterval](assets/documents/testing-code/next-question-set_timer.png)

## Show Answer to Player

I had a issue once the answer was shown to the player that it change to color of the answer box and didn't return back to it's original color when moving to the next question.  Reading my Javascript book JAVASCRIPT & JQUERY BY JON DUCKETT which help me with setTimerout function. This fix the issue.

## High Score Table/list

I wanted to build a table to hold the highest score in and present they.  I could build the table but couldn't not figure out the code to get the score to insert into the table using map function.  I change to a unorder list.  This is something I need to came back to and figure out at a little date.  But with time being sensitive at the of the project I opted for the faster version.

# Testing on devices

Testing was done on different elements to see how the site preforms and the responsiveness of the site.

Browsers:

- Chrome, Firefox, Safari and Opera.

Devices:

- Mac (Macbook), Ipad and Iphone 11 and using developer tools in Chrome: (Moto G4, Galaxy S5, Pixel 2, iPad Pro,
Surface Duo).

### Responsiveness on devices.

With the responsiveness being viewed through different devices and different screen sizes, changes had to be made.

- Galaxy fold: Issue on landscape when folded and also on portrait when unfolded.
- Surface Duo: Breaks when unfolded
![Surface-Duo-break](assets/documents/testing-code/surface-duo.png)
- iPhone 5/SE: Break on lower screen when ask quesitons
![Surface-Duo-break](assets/documents/testing-code/iphone5.png)

- **Issue:**

> - Art work


# Accesibility

Wave Report showed the following issues:


# Google lighthouse

![Lighthouse](assets/documents/testing-code/Lighthouse-start.jpg)

### To improve the rating scores

#### Performance

- 

#### Accesibility

- 

#### Best Practices

- 

#### SEO

- 

# HTML & CSS Validation

## W3C Markup CSS Validation

### HTML CHECKER

- first two error are empty heading.
- third error is a duplicate attribute class.

[HTML-1](./assets/testing-code/HTML-checker-1.jpg)
[HTML-2](./assets/testing-code/HTML-checker-2.jpg)

- Just removing the second class some no duplicate.

### CSS CHECKER

- No error

[CSS](./assets/testing-code/CSS-checker.jpg)













