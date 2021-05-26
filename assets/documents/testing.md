# **Testing Quiz Game**

- ## Testing User Experience and Stories (UX)




# Bugs issues and solutions

## Timer still running on score page

- On the end screen to display the score, the timer was still initiating long after the game had finish.  This was caught when building the scoreRankings functions. To fix this I read through the code and try to figure out the area that was causing the problem.  I identify several area but didn't know which one was initiating from.  So I console.log different error message in the code to see which point it was from.

![timer-error](assets/documents/test-code/error1-timer.png)
![timer-error](assets/documents/test-code/error2-timer.png)
[commit-point](https://github.com/Craigharrison79/MS2-Quiz-Game/commit/373d93346ba5343d9eaa981a9e7ec38f8ba23510)

Once found the  initiating error I could trace my steps till I workout the problems.  I remove the clearInterval(timer = 10 + 1) from both the countDown and reset function.

![clearInterval](assets/documents/test-code/removing-cleartimer-countdown.png)
![clearInterval](assets/documents/test-code/removing-cleartimer1-set_time_out.png)

Then adding the code to a else statment in the next question function. This  fix the problem.

![clearInterval](assets/documents/test-code/next-question-set_timer.png)

## Show Answer to Player

I had a issue once the answer was shown to the player that it change to color of the answer box and didn't return back to it's original color when moving to the next question.  Reading my Javascript book JAVASCRIPT & JQUERY BY JON DUCKETT which help me with setTimerout function. This fix the issue.






