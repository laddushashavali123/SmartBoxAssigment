@addBox
Feature: As a Customer I want to find a desired box and add it to the cart
                     So I can make adjustments prior to checkout
                     Acceptance Criteria
                     When searching for a box by name on the main search field (top of the page), suggestions are displayed as the customer types
                     After selecting a category or sub-category, filter options are displayed
                     When searching for a box by name on a filter, suggestions are displayed as the customer types
                     Every Box page must display a link to the reviews section

Scenario Outline: Product page shows Ajouter au panier1 option,When click on Ajouter au panier, Article(s) ajouté(s) au panier2 overlay appears,The options Continuer mes Achats3, Voir le Panier4 and Vider le Panier5 are on the add to cart overlay,The product added to cart is on shopping cart page

    Given I navigate to smartbox homepage
    Then I see the homepage
    When I hover to mainmenu item and select subcategory
    Then I see the products associated
    When I select product <productID>
    Then I see the product page with Ajouter au panier button
    When I click Ajouter au panier button
    Then I see Articles ajoutes au panier Overlay with Continuer mes Achats, Voir le Panier and Vider le Panier
    When I click Voir le Panier button
    Then I see the product added to cart

Examples:
 |productID|
 |Y067|
Scenario Outline: A selected box can be removed from the cart

    Given I navigate to smartbox homepage
    Then I see the homepage
    When I hover to mainmenu item and select subcategory
    Then I see the products associated
    When I select product <productID>
    Then I see the product page with Ajouter au panier button
    When I click Ajouter au panier button
    Then I see Articles ajoutes au panier Overlay with Continuer mes Achats, Voir le Panier and Vider le Panier
    When I click Voir le Panier button
    Then I see the product added to cart
    When I click remove icon
       	Then I see overlay to confirm
       	When I click Yes,remove these items
       	Then I see the product removed form cart

Examples:
 |productID|
 |Y067|
Scenario Outline: No more than 5 boxes of each title can be purchased per time
          Given I navigate to smartbox homepage
            Then I see the homepage
            When I hover to mainmenu item and select subcategory
            Then I see the products associated
            When I select product <productID>
            Then I see the product page with Ajouter au panier button
     	   When I click Ajouter au panier button
         Then I see Articles ajoutes au panier Overlay with Continuer mes Achats, Voir le Panier and Vider le Panier
         When I click Voir le Panier button
         Then I see the product added to cart
        	   And I update items number to <number>
            Then I see an error Message <message>

 Examples:
  |number|productID|message|
  |6|Y067|No more than 5 boxes of each title can be purchased per time|