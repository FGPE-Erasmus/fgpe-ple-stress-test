Feature: Basic use of the PLE as Teacher

    As a teacher
    I want to check my student's submissions in a specific game
    So that I can check my student's progress

    Background:
        Given the teacher is signed in
        And a publicly available Python 3 game named "PyCourse PL | ENG"
        And the teacher is assigned to the "PyCourse PL | ENG" game
        And the game has at least one player
        And the game players have submitted at least one submission

    Scenario: Teacher checks the student's progress
        Given the Teacher is signed in
        Then the PLE displays the main teacher dashboard

        When the teacher expands the "Your games" section
        Then the page displays a table with all available games

        When the teacher clicks the "Refresh" button in the context menu of the "Your games" section
        Then the "Your games" section data is refreshed

        When the teacher filters the table by typing the "PyCourse PL | ENG" game name in the first table input "Game name"
        And the teacher filters the table by typing "Python Course - Polish and English (12 Lessons)" in the second table input "Detailed description"
        Then the table should display only one game

        When the teacher clicks the "PyCourse PL | ENG" game in the filtered table
        Then the page displays the game dashboard

        When the teacher expands the "Students" section in the game dashboard
        Then the page displays a table with all game players

        When the teacher clicks the "Refresh" button in the context menu of the "Students" section
        Then the "Students" section data is refreshed

        When the teacher selects the "Student_FGPE" student
        Then the page displays the player details

        When the teacher expands the "Submissions" section
        And the teacher waits for the section to load
        Then the page displays all of the player's submissions

        When the teacher clicks on the first row
        And the teacher waits for the submission to load
        Then the page displays a popup with the submission details

        When the teacher closes the popup
        And the teacher clicks the back button in the browser
        Then the page displays the player details

        When the teacher cliks the logout button
        Then the page displays the homepage
