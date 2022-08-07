Feature: Browsing the PLE example game content as a student

    As a student
    I want to check a specific game content
    So that I can decide what to start with

    Background:
        Given the student is signed in
        And a publicly available Python 3 game named "PyCourse PL | ENG"
        And the student is assigned to the "PyCourse PL | ENG" game

    Scenario: Student briefly explores three challenges of a specific game
        When the student clicks on the "PyCourse PL | ENG" game
        Then the page should display the game challenges
        And one of the game challenges should be named "Lesson 1"

        When the student clicks on the "Lesson 1" challenge
        Then the page should display the "Lesson 1" challenge
        And the first exercise of the "Lesson 1" challenge should be active
        And the statement of the first exercise of the "Lesson 1" challenge should be visible

        When the student clicks the "Back" button in the browser first time
        Then the page should display the game challenges second time

        When the student clicks on the "Lesson 2" challenge
        Then the page should display the "Lesson 2" challenge
        And the first exercise of the "Lesson 2" challenge should be active
        And the first exercise of the "Lesson 2" challenge statement should be visible

        When the student clicks the "Back" button in the browser second time
        Then the page should display the game challenges third time

        When the student clicks on the "Lesson 3" challenge
        Then the page should display the "Lesson 3" challenge
        And the first exercise of the "Lesson 3" challenge should be active
        And the first exercise of the "Lesson 3" challenge statement should be visible

        When the student clicks the "Logout" button in the navigation
        Then the page should redirect the user to the homepage


