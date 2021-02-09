# Web Developer Code Review

## Situation
An intern developed an initial logon page for Acme Math. The intern was unable to complete the project. Acme needs to transition this project and put it into production. They are looking to you to review the code and find issues that should be corrected. 

## Known Issues

* The page has a section that should be loading the number of the day and determining if it is a prime number. The `js/numberOfDay.js` uses jQuery to connect to the [Number of the Day API](https://math.tools/api/numbers/). The page is not loading the data.

* The page has "Lorum Ipsum" placeholder text. This text will be changed later and should be considered valid for this challenge.

* The `/Logon` action of the login form should be considered valid.

## Instructions

1. What issues have you identified on the `Logon.html` page? There are a number of issues and you may not find them all. Spend between 30 to 60 minutes trying to identify as many as you can.  
    * Categorize the priority of correcting the issues as _high_, or _standard_. Provide any additional explanations of why you consider the code to be problematic.
        * *Standard* priority should be used for any coding issues that you consider to be not following best web development practices.
        * *High* priority should be used for any issues that could be potential security or accessibility issues or things that are broken.

2. Without changing the javascript file, how would you make the number of the day/prime number load properly?

