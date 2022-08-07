Feature: Basic use of the PLE as Student

    As a student
    I want to solve a specific exercise within a specific challenge using Python 3 language
    So that I can progress in a specific game

    Background:
        Given the student is signed in
        And a publicly available Python 3 game named "PyCourse PL | ENG"
        And the student is assigned to the "PyCourse PL | ENG" game

    Scenario: Student solves three exercises
        When the student clicks on the "PyCourse PL | ENG" game
        Then the page should display the game challenges
        And one of the game challenges should be named "Lesson 1"

        When the student clicks on the "Lesson 1" challenge
        Then the page should display the playground
        And an exercise should be active
        And the playground status should be equal to "READY"

        When the student clicks the active language dropdown button
        Then the student sees the list of all available programming languages
        And the student clicks the "Python 3" language
        And the active language button displays the "Python 3" name

        When the student submits wrong solution for the first exercise
        Then the terminal displays an error message for the first exercise

        When the student submits a correct solution for the first exercise
        Then the terminal displays a success message for the first exercise
        And the "Next" button at the bottom right of the first exercise statement should be clickable

        When the student clicks the second exercise from the exercise list
        Then the student waits for the playground to load the second exercise
        And the second exercise should be active

        When the student enters an incorrect solution for the second exercise
        Then the terminal displays an error message for the second exercise

        When the student submits a correct solution for the second exercise
        Then the terminal displays a success message for the second exercise

        When the student clicks the third exercise from the exercise list
        Then the student waits for the playground to load the third exercise
        And the third exercise should be active

        When the student enters an incorrect solution for the third exercise
        Then the terminal displays an error message for the third exercise

        When the student submits a correct solution for the third exercise
        Then the terminal displays a success message for the third exercise

        When the student clicks the fourth exercise from the exercise list
        Then the student waits for the playground to load the fourth exercise
        And the fourth exercise should be active

        When the student clicks the "PyCourse PL | ENG" name in the navigation
        Then the page should display a list of the "PyCourse PL | ENG" game challenges

        When the student clicks the "Logout" button in the navigation
        Then the page should redirect the user to the homepage


