Feature: Basic use of the PLE as Student

    As a student
    I want to solve a specific exercise within a specific challenge using the Python 3 language
    So that I can progress in a specific game

    Background:
        Given the student is signed in
        And a publicly available Python 3 game named "PyCourse PL | ENG"
        And the student is assigned to the "PyCourse PL | ENG" game


    Scenario: Student solves one exercise at once
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

        When the student clicks on the <exercise> exercise
        Then the <exercise> exercise should be active
        When the student enters an incorrect <incorrect> solution
        Then the terminal displays an error message for the <exercise> exercise
        When the student enters a correct <correct> solution
        Then the terminal displays a success message for the <exercise> exercise

        When the student clicks the "PyCourse PL | ENG" name in the navigation
        Then the page should display a list of the "PyCourse PL | ENG" game challenges

        When the student clicks the "Logout" button in the navigation
        Then the page should redirect the user to the homepage

        Examples:
            | exercise | incorrect                     | correct                         |
            | 0        | print(4324234234 * 463726472) | print(4 * 2 - 1)                |
            | 1        | print(2 + 2 + 2 + 2 * 15435)  | print(((4+16)/2*(5+15)/2)**0.5) |
            | 2        | print(2 + 2 + 2 + 2 * 15435)  | print(int((4 + 6) / 2))         |






