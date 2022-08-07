Feature: Browsing the PLE example game content as a student

    As a student
    I want to check a specific challenge content
    So that I can decide what to start with

    Background:
        Given the student is signed in
        And a publicly available Python 3 game named "PyCourse PL | ENG"
        And the student is assigned to the "PyCourse PL | ENG" game

    Scenario: Student briefly explores an exercise of a specific game
        When the student clicks on the "PyCourse PL | ENG" game
        Then the page should display the game challenges
        And one of the game challenges should be named "Lesson 1"

        When the student clicks on the "Lesson 1" challenge
        Then the page should display the "Lesson 1" challenge
        And the first exercise of the "Lesson 1" challenge should be active
        And the statement of the first exercise of the "Lesson 1" challenge should be visible

        When the student clicks on the <exercise> exercise
        And the student waits for the <exercise> to load
        Then the <exercise> exercise should be active
        And the <exercise> statement, terminal and code editor should be visible and clickable

        When the student clicks the "Logout" button in the navigation
        Then the page should redirect the user to the homepage

        Examples:
            | exerciseName                          |
            | 1. Basic arithmetic operators         |
            | 2. Nested parentheses                 |
            | 3. The order of arithmetic operations |
            | 4. Exponentiation                     |
            | 5. Other number systems               |
            | 6. Real numbers and Integers          |
            | 7. Scientific notation                |
            | 8. Remainder calculator               |


