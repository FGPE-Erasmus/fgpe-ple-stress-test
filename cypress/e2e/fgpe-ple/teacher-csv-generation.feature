Feature: Checking attempts of each game player

    As a teacher
    I want to export all important data of a specific game
    So that I can store it locally

    Background:
        Given the teacher is signed in
        And a publicly available Python 3 game named "PyCourse PL | ENG"
        And the teacher is assigned to the "PyCourse PL | ENG" game
        And the game has at least three players
        And the game players have submitted at least three submissions
        And the game players have submitted at least three validations

    Scenario: Teacher exports all game data to CSV
        Given the Teacher is signed in
        Then the PLE displays the main teacher dashboard

        When the teacher expands the "Your games" section
        Then the page displays a table with all available games

        When the teacher filters the table by typing the "PyCourse PL | ENG" game name in the first table input "Game name"
        And the teacher filters the table by typing "Python Course - Polish and English (12 Lessons)" in the second table input "Detailed description"
        Then the table should display only one game

        When the teacher clicks the "PyCourse PL | ENG" game in the filtered table
        Then the page displays the game dashboard

        When the teacher clicks the "CSV" button in the context menu of the game dashboard
        Then the "CSV Export" modal is visible

        When the teacher clicks the "Download" button in the "Game profiles" row
        And the teacher waits for the "Game profiles" data to load
        Then the button in the "Game profiles" row should contain the "Export" text

        When the teacher clicks the "Download" button in the "Submissions" row
        And the teacher waits for the "Submissions" data to load
        Then the button in the "Submissions" row should contain the "Export" text

        When the teacher clicks the "Download" button in the "Validations" row
        And the teacher waits for the "Validations" data to load
        Then the button in the "Validations" row should contain the "Export" text

        When the teacher clicks the "Download" button in the "Rewards" row
        And the teacher waits for the "Rewards" data to load
        Then the button in the "Rewards" row should contain the "Export" text

        When the teacher clicks the "Download" button in the "Challenges" row
        And the teacher waits for the "Challenges" data to load
        Then the button in the "Challenges" row should contain the "Export" text

        When the teacher cliks the logout button
        Then the page displays the homepage
