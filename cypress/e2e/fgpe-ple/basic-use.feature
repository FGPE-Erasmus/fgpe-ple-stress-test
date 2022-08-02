Feature: Basic use of the PLE as Teacher and Student

    As a student
    I want to solve a specific exercise within a specific challenge using Python 3 language
    So that I can progress in a specific game

    As a teacher
    I want to check my student submissions in a specific game
    So that I can check my student progress

    Background:
        Given the student is signed in
        And a publicly available Python 3 game named "PyCourse PL | ENG"
        And the student is assigned to the "PyCourse PL | ENG" game

    Scenario: Student solves three exercises
        # Given the student is not assigned to the "PyCourse PL | ENG" game
        # When the student looks for the "PyCourse PL | ENG" game in the table
        # And the student clicks the "Assign me" button in the same row
        # And the student waits for the system response
        # Then the clicked button turns into "You're assigned" text


        When the student clicks on the "PyCourse PL | ENG" game
        Then the page should display the game challenges
        And one of the game challenges should be named "Lesson 1"

        When the student clicks on the "Lesson 1" challenge
        Then the page should display the playground
        And the first unsolved exercise should be active
# And the playground status should be equal to "Ready"

# When the student clicks the active language dropdown button
# Then the student sees the list of all available programming languages
# And the student clicks the "Python 3" language
# And the active language button displays the "Python 3" name

# When the student enters an incorrect solution "print(abc)"
# And the student clicks the "Submit" button
# And the student waits for the terminal message
# Then the terminal displays an error message

# When the student enters a correct solution "print(4 * 2 - 1)"
# And the student clicks the "Submit" button
# And the student waits for the terminal message
# Then the terminal displays a success message
# And the "Next" button should change its color to blue

# When the student clicks the blue "Next" button
# Then the student waits for the playground to load next unsolved exercise
# Then the PLE displays next unsolved exercise content
# And the second unsolved exercise should be active

# When the student enters an incorrect solution "print(abc)"
# And the student clicks the "Submit" button
# And the student waits for the terminal message
# Then the terminal displays an error message

# When the student enters a correct solution "print((((4 + 16) / 2 + (5 + 15) / 2)) ** (1/2))"
# And the student clicks the "Submit" button
# And the student waits for the terminal message
# Then the terminal displays a success message
# And the "Next" button should change its color to blue

# When the student clicks the blue "Next" button
# Then the student waits for the playground to load next unsolved exercise
# Then the PLE displays next unsolved exercise content
# And the third unsolved exercise should be active

# When the student enters an incorrect solution "print(abc)"
# And the student clicks the "Submit" button
# And the student waits for the terminal message
# Then the terminal displays an error message

# When the student enters a correct solution "print(int((4 + 6) / 2))"
# And the student clicks the "Submit" button
# And the student waits for the terminal message
# Then the terminal displays a success message
# And the "Next" button should change its color to blue

# When the student clicks the blue "Next" button
# Then the student waits for the playground to load next unsolved exercise
# Then the PLE displays next unsolved exercise content
# And the fourth unsolved exercise should be active

# When the student clicks the "PyCourse PL | ENG" name in the navigation
# Then the page should display a list the "PyCourse PL | ENG" game challenges

# When the student clicks the "Logout" button in the navigation
# Then the page should redirect the user to the homepage


# Scenario: Teacher checks the student's progress
#     Given the Teacher is signed in
#     Then the PLE displays the main teacher dashboard

#     Given the teacher is assigned to the "PyCourse PL | ENG" game
#     When the teacher expands the "Your games" section
#     Then the page displays a table with all available games

#     When the teacher filters the table by typing the "PyCourse PL | ENG" game name in the first table input
#     Then the table shows only one game called "PyCourse PL | ENG"

#     When the teacher clicks the "PyCourse PL | ENG" game in the table
#     And the teacher waits for the game to load
#     Then the page displays the game dashboard

#     When the teacher expands the "Students" section
#     And the teacher waits for the section to load
#     Then the page displays a table with all game players

#     When the teacher selects the "Student_FGPE" student
#     And the teacher waits for the player page to load
#     Then the page displays the player details

#     When the teacher expands the "Submissions" section
#     And the teacher waits for the section to load
#     Then the page displays all of the player's submissions

#     When the teacher clicks on the first row
#     And the teacher waits for the submission to load
#     Then the page displays a popup with the submission details

#     When the teacher closes the popup
#     And the teacher clicks the back button in the browser
#     Then the page displays the player details

#     When the teacher cliks the logout button
#     Then the page displays the homepage
