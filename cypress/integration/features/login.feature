Feature: Login

    Background:
        Given User navigates to sausedemo.com

    Scenario Outline: Users unsuccessful login to application
        When User login with username as '<username>' and password as '<password>'
        Then Users sees a validation '<error>'
        Examples:
            | username         | password      | error                |
            |                  |               | Username is required |
            |                  | secret_sauce  | Username is required |
            | standard_user    |               | Password is required |
            | standard_user    | invalid_pass  | Username and password do not match any user in this service |
            | invalid_user     | secret_sauce  | Username and password do not match any user in this service |
            | locked_out_user  | secret_sauce  | Sorry, this user has been locked out |


    Scenario Outline: Users successful login to application
        When User login with username as '<username>' and password as '<password>'
        Then User redirects to /inventory on success
        And User logout
        Examples:
            | username                   | password     |
            | standard_user              | secret_sauce |
            | problem_user               | secret_sauce |
            | performance_glitch_user    | secret_sauce |

    Scenario Outline: Security validations: Users not logged in should not access inventory page
        When User try to visit inventory page without login
        Then Users sees a validation '<error>'
        Examples:
            | error                                                        |
            | You can only access "/inventory.html" when you are logged in |

    Scenario Outline: Security validations: Users logout and hit browser back button should not access inventory page
        When User login with username as '<username>' and password as '<password>'
        Then User redirects to /inventory on success
        And User logout
        And User click browser back button to access inventory page
        Then Users sees a validation '<error>'
        Examples:
            | username         | password      | error                |
            | standard_user    | secret_sauce  | You can only access "/inventory.html" when you are logged in |

    Scenario Outline: Cookies: Users authenticated successfuly should have a cookie set
        When User login with username as '<username>' and password as '<password>'
        Then User redirects to /inventory on success
        And Our cookie is set to '<cookie>'
        Examples:
            | username         | password      | cookie             |
            | standard_user    | secret_sauce  | session-username   |