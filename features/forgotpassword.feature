Feature: The Internet Guinea Pig Website Forgot Password

  Scenario Outline: As an unauthenticated user, I retrieve my password

    Given I am on the forgot_password page
    When I enter <email> in the email textbox and click retrieve password
    # Then I should see a flash message saying <message>

    Examples:
      | email             | message               |
      | tester  | Internal Server Error |
      | tester2  | Internal Server Error |

