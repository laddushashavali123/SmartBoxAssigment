@boxReview
Feature: As a customer
         I want to view a list of products
         So I can select some to purchase
         Acceptance Criteria
          When searching for a box by name on the main search field (top of the page), suggestions are displayed as the customer types
          After selecting a category or sub-category, filter options are displayed
          When searching for a box by name on a filter, suggestions are displayed as the customer types
          Every Box page must display a link to the reviews section

  Scenario: When searching for a box by name on the main search field (top of the page), suggestions are displayed as the customer types,After selecting a category or sub-category, filter options are displayed,When searching for a box by name on a filter, suggestions are displayed as the customer types,Every Box page must display a link to the reviews section

          Given I navigate to smartbox homepage
          Then I see the homepage
          And I see the search field
          When I search for a box by name
          Then I see suggestions displayed
          When I select the category
          Then I see the filter options
          When I select custom types in filter
          Then I see the search result with boxes
          And I verify every box page for link to review section

