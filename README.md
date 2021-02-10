# Calculator
Link to official project:
https://www.theodinproject.com/courses/foundations/lessons/calculator

## Reflection
Hi guys!

The project is self-explanatory, its functions are almost identical to the apple calculator without the
more advanced math.

This project took about 3 days to complete, with easily 90% of the time spent on JavaScript, and the rest on
HTML/CSS. Honestly I didn't think I'd take this long but the logic required to make it work seamlessly was
much harder than I expected. The user wasn't just gonna type 3 + 3 and press '=', instead of + the user might
want - and change it, or the user might want to calculate 3 + 3 * 5.

Some of the spirals I went down included:

1. What if an operator is pressed before anything is typed?
2. What if people pressed multiple decimal points?
3. How do I allow the user to chain multiple operators? (e.g. 3 * 5 + 2 - 4)

Essentially, I tried to account for any random thing a user could possibly do and make sure my calculator
works as it should.

On the first day I was completely overwhelmed when trying to piece the logic together but ultimately what
helped was to make sure the calculator could do the most basic functions, before working on contingencies
and improving the user experience.

##Things to improve/learn
1. Testing
- If theres one thing I REALLY wanna learn its this. Everytime I changed the code I made sure every function
worked as it should. Even for this tiny project, it was relatively time consuming calculating random numbers
and making sure it worked. Ultimately I want a code to run that tests random calculations and runs a specified
sequence of button presses to see if the result is correct. It saves a tremendous amount of time and effort.

I realised that in the future when it boils down to massive projects, everything is going to depend on each
other and when I change one thing I don't want to manually check every bit of functionality to see if they're
affected.

In conclusion, this project was an unexpected challenge but nonetheless it was a valuable experience in dealing
with projects which I'm not great at.
