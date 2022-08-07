Feature: Checking attempts of each game player

    As a teacher
    I want to find students with the biggest number of submissions and validations
    So that I can check what are there are struggling with most

    Background:
        Given the teacher is signed in
        And a publicly available Python 3 game named "PyCourse PL | ENG"
        And the teacher is assigned to the "PyCourse PL | ENG" game
        And the game has at least three players
        And the game players have submitted at least three submissions
        And the game players have submitted at least three validations

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

        When the teacher clicks the "Refresh" button in the context menu of the game dashboard
        Then the data is refreshed and the button contains the "Refreshed" text

        When the teacher expands the "Students" section in the game dashboard
        Then the page displays a table with all game players

        When the teacher clicks the "Refresh" button in the context menu of the "Students" section
        Then the "Students" section data is refreshed

        When the teacher sorts the table descending by submissions by double clicking the submissions column
        Then the table is sorted by submissions

        When the teacher clicks on the row with a student that has the biggest number of submissions
        Then the PLE should display the "Game profile" page of the student with the biggest number of submissions

        When the teacher expands the "Submissions" section
        Then the page displays a table with the player's submissions

        When the teacher clicks the "Refresh" button in the "Submissions" section
        Then the submissions data is refreshed

        When the teacher clicks the "Game" card in the details section of the "Game profile"
        Then the PLE should go back to the Game page

        When the teacher expands the "Students" section in the game dashboard again
        Then the page displays a table with all game players again

        When the teacher sorts the table descending by submissions by double clicking the validations column
        Then the table is sorted by validations

        When the teacher clicks on the row with a student that has the biggest number of submissions
        Then the PLE should display the "Game profile" page of the student with the biggest number of validations

        When the teacher expands the "Validations" section
        Then the page displays a table with the player's validations

        When the teacher clicks the "Refresh" button in the "Validations" section
        Then the validations data is refreshed

        When the teacher cliks the logout button
        Then the page displays the homepage



