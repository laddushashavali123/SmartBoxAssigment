$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("AddBoxCart.feature");
formatter.feature({
  "line": 2,
  "name": "As a Customer I want to find a desired box and add it to the cart",
  "description": "                   So I can make adjustments prior to checkout\r\n                   Acceptance Criteria\r\n                   When searching for a box by name on the main search field (top of the page), suggestions are displayed as the customer types\r\n                   After selecting a category or sub-category, filter options are displayed\r\n                   When searching for a box by name on a filter, suggestions are displayed as the customer types\r\n                   Every Box page must display a link to the reviews section",
  "id": "as-a-customer-i-want-to-find-a-desired-box-and-add-it-to-the-cart",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@addBox"
    }
  ]
});
formatter.scenarioOutline({
  "line": 10,
  "name": "Product page shows Ajouter au panier1 option,When click on Ajouter au panier, Article(s) ajouté(s) au panier2 overlay appears,The options Continuer mes Achats3, Voir le Panier4 and Vider le Panier5 are on the add to cart overlay,The product added to cart is on shopping cart page",
  "description": "",
  "id": "as-a-customer-i-want-to-find-a-desired-box-and-add-it-to-the-cart;product-page-shows-ajouter-au-panier1-option,when-click-on-ajouter-au-panier,-article(s)-ajouté(s)-au-panier2-overlay-appears,the-options-continuer-mes-achats3,-voir-le-panier4-and-vider-le-panier5-are-on-the-add-to-cart-overlay,the-product-added-to-cart-is-on-shopping-cart-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "I navigate to smartbox homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I see the homepage",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "I hover to mainmenu item and select subcategory",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I see the products associated",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "I select product \u003cproductID\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I see the product page with Ajouter au panier button",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "I click Ajouter au panier button",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I see Articles ajoutes au panier Overlay with Continuer mes Achats, Voir le Panier and Vider le Panier",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "I click Voir le Panier button",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I see the product added to cart",
  "keyword": "Then "
});
formatter.examples({
  "line": 23,
  "name": "",
  "description": "",
  "id": "as-a-customer-i-want-to-find-a-desired-box-and-add-it-to-the-cart;product-page-shows-ajouter-au-panier1-option,when-click-on-ajouter-au-panier,-article(s)-ajouté(s)-au-panier2-overlay-appears,the-options-continuer-mes-achats3,-voir-le-panier4-and-vider-le-panier5-are-on-the-add-to-cart-overlay,the-product-added-to-cart-is-on-shopping-cart-page;",
  "rows": [
    {
      "cells": [
        "productID"
      ],
      "line": 24,
      "id": "as-a-customer-i-want-to-find-a-desired-box-and-add-it-to-the-cart;product-page-shows-ajouter-au-panier1-option,when-click-on-ajouter-au-panier,-article(s)-ajouté(s)-au-panier2-overlay-appears,the-options-continuer-mes-achats3,-voir-le-panier4-and-vider-le-panier5-are-on-the-add-to-cart-overlay,the-product-added-to-cart-is-on-shopping-cart-page;;1"
    },
    {
      "cells": [
        "Y067"
      ],
      "line": 25,
      "id": "as-a-customer-i-want-to-find-a-desired-box-and-add-it-to-the-cart;product-page-shows-ajouter-au-panier1-option,when-click-on-ajouter-au-panier,-article(s)-ajouté(s)-au-panier2-overlay-appears,the-options-continuer-mes-achats3,-voir-le-panier4-and-vider-le-panier5-are-on-the-add-to-cart-overlay,the-product-added-to-cart-is-on-shopping-cart-page;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 43578694300,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Product page shows Ajouter au panier1 option,When click on Ajouter au panier, Article(s) ajouté(s) au panier2 overlay appears,The options Continuer mes Achats3, Voir le Panier4 and Vider le Panier5 are on the add to cart overlay,The product added to cart is on shopping cart page",
  "description": "",
  "id": "as-a-customer-i-want-to-find-a-desired-box-and-add-it-to-the-cart;product-page-shows-ajouter-au-panier1-option,when-click-on-ajouter-au-panier,-article(s)-ajouté(s)-au-panier2-overlay-appears,the-options-continuer-mes-achats3,-voir-le-panier4-and-vider-le-panier5-are-on-the-add-to-cart-overlay,the-product-added-to-cart-is-on-shopping-cart-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@addBox"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I navigate to smartbox homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I see the homepage",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "I hover to mainmenu item and select subcategory",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I see the products associated",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "I select product Y067",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I see the product page with Ajouter au panier button",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "I click Ajouter au panier button",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I see Articles ajoutes au panier Overlay with Continuer mes Achats, Voir le Panier and Vider le Panier",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "I click Voir le Panier button",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I see the product added to cart",
  "keyword": "Then "
});
formatter.match({
  "location": "AddBoxCartSteps.i_navigate_to_smartbox_homepage()"
});
formatter.result({
  "duration": 609236900,
  "status": "passed"
});
formatter.match({
  "location": "AddBoxCartSteps.i_see_the_homepage()"
});
formatter.result({
  "duration": 74334900,
  "status": "passed"
});
formatter.match({
  "location": "AddBoxCartSteps.i_hover_to_mainmenu_item_and_select_subcategory()"
});
formatter.result({
  "duration": 10391210500,
  "status": "passed"
});
formatter.match({
  "location": "AddBoxCartSteps.i_see_the_products_associated()"
});
formatter.result({
  "duration": 1384250700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Y067",
      "offset": 17
    }
  ],
  "location": "AddBoxCartSteps.i_select_product(String)"
});
formatter.result({
  "duration": 5605357300,
  "status": "passed"
});
formatter.match({
  "location": "AddBoxCartSteps.i_see_the_product_page_with_ajouter_au_panier_button()"
});
formatter.result({
  "duration": 333121000,
  "status": "passed"
});
formatter.match({
  "location": "AddBoxCartSteps.i_click_ajouter_au_panier_button()"
});
formatter.result({
  "duration": 2514748000,
  "status": "passed"
});
formatter.match({
  "location": "AddBoxCartSteps.i_see_articles_ajouts_au_panier_overlay_with_continuer_mes_achats_voir_le_panier_and_vider_le_panier()"
});
formatter.result({
  "duration": 312334200,
  "status": "passed"
});
formatter.match({
  "location": "AddBoxCartSteps.i_click_voir_le_panier_button()"
});
formatter.result({
  "duration": 10157895500,
  "status": "passed"
});
formatter.match({
  "location": "AddBoxCartSteps.i_see_the_product_added_to_cart()"
});
formatter.result({
  "duration": 228943600,
  "status": "passed"
});
formatter.after({
  "duration": 1201216800,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 26,
  "name": "A selected box can be removed from the cart",
  "description": "",
  "id": "as-a-customer-i-want-to-find-a-desired-box-and-add-it-to-the-cart;a-selected-box-can-be-removed-from-the-cart",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 28,
  "name": "I navigate to smartbox homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "I see the homepage",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "I hover to mainmenu item and select subcategory",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "I see the products associated",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "I select product \u003cproductID\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "I see the product page with Ajouter au panier button",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "I click Ajouter au panier button",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "I see Articles ajoutes au panier Overlay with Continuer mes Achats, Voir le Panier and Vider le Panier",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "I click Voir le Panier button",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "I see the product added to cart",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "I click remove icon",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "I see overlay to confirm",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "I click Yes,remove these items",
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "I see the product removed form cart",
  "keyword": "Then "
});
formatter.examples({
  "line": 43,
  "name": "",
  "description": "",
  "id": "as-a-customer-i-want-to-find-a-desired-box-and-add-it-to-the-cart;a-selected-box-can-be-removed-from-the-cart;",
  "rows": [
    {
      "cells": [
        "productID"
      ],
      "line": 44,
      "id": "as-a-customer-i-want-to-find-a-desired-box-and-add-it-to-the-cart;a-selected-box-can-be-removed-from-the-cart;;1"
    },
    {
      "cells": [
        "Y067"
      ],
      "line": 45,
      "id": "as-a-customer-i-want-to-find-a-desired-box-and-add-it-to-the-cart;a-selected-box-can-be-removed-from-the-cart;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 23508209400,
  "status": "passed"
});
formatter.scenario({
  "line": 45,
  "name": "A selected box can be removed from the cart",
  "description": "",
  "id": "as-a-customer-i-want-to-find-a-desired-box-and-add-it-to-the-cart;a-selected-box-can-be-removed-from-the-cart;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@addBox"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "I navigate to smartbox homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "I see the homepage",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "I hover to mainmenu item and select subcategory",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "I see the products associated",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "I select product Y067",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "I see the product page with Ajouter au panier button",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "I click Ajouter au panier button",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "I see Articles ajoutes au panier Overlay with Continuer mes Achats, Voir le Panier and Vider le Panier",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "I click Voir le Panier button",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "I see the product added to cart",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "I click remove icon",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "I see overlay to confirm",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "I click Yes,remove these items",
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "I see the product removed form cart",
  "keyword": "Then "
});
formatter.match({
  "location": "AddBoxCartSteps.i_navigate_to_smartbox_homepage()"
});
formatter.result({
  "duration": 98203300,
  "status": "passed"
});
formatter.match({
  "location": "AddBoxCartSteps.i_see_the_homepage()"
});
formatter.result({
  "duration": 41266400,
  "status": "passed"
});
formatter.match({
  "location": "AddBoxCartSteps.i_hover_to_mainmenu_item_and_select_subcategory()"
});
formatter.result({
  "duration": 6074399100,
  "status": "passed"
});
formatter.match({
  "location": "AddBoxCartSteps.i_see_the_products_associated()"
});
formatter.result({
  "duration": 1397553700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Y067",
      "offset": 17
    }
  ],
  "location": "AddBoxCartSteps.i_select_product(String)"
});
formatter.result({
  "duration": 6198076400,
  "status": "passed"
});
formatter.match({
  "location": "AddBoxCartSteps.i_see_the_product_page_with_ajouter_au_panier_button()"
});
formatter.result({
  "duration": 210976000,
  "status": "passed"
});
formatter.match({
  "location": "AddBoxCartSteps.i_click_ajouter_au_panier_button()"
});
formatter.result({
  "duration": 1515308100,
  "status": "passed"
});
formatter.match({
  "location": "AddBoxCartSteps.i_see_articles_ajouts_au_panier_overlay_with_continuer_mes_achats_voir_le_panier_and_vider_le_panier()"
});
formatter.result({
  "duration": 350823800,
  "status": "passed"
});
formatter.match({
  "location": "AddBoxCartSteps.i_click_voir_le_panier_button()"
});
formatter.result({
  "duration": 7793408800,
  "status": "passed"
});
formatter.match({
  "location": "AddBoxCartSteps.i_see_the_product_added_to_cart()"
});
formatter.result({
  "duration": 309518000,
  "status": "passed"
});
formatter.match({
  "location": "AddBoxCartSteps.i_click_remove_icon()"
});
formatter.result({
  "duration": 1137075400,
  "status": "passed"
});
formatter.match({
  "location": "AddBoxCartSteps.i_see_overlay_to_confirm()"
});
formatter.result({
  "duration": 64027900,
  "status": "passed"
});
formatter.match({
  "location": "AddBoxCartSteps.i_click_yesremove_these_items()"
});
formatter.result({
  "duration": 1238938100,
  "status": "passed"
});
formatter.match({
  "location": "AddBoxCartSteps.i_see_the_product_removed_form_cart()"
});
formatter.result({
  "duration": 4989638800,
  "status": "passed"
});
formatter.after({
  "duration": 1243876100,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 46,
  "name": "No more than 5 boxes of each title can be purchased per time",
  "description": "",
  "id": "as-a-customer-i-want-to-find-a-desired-box-and-add-it-to-the-cart;no-more-than-5-boxes-of-each-title-can-be-purchased-per-time",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 47,
  "name": "I navigate to smartbox homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 48,
  "name": "I see the homepage",
  "keyword": "Then "
});
formatter.step({
  "line": 49,
  "name": "I hover to mainmenu item and select subcategory",
  "keyword": "When "
});
formatter.step({
  "line": 50,
  "name": "I see the products associated",
  "keyword": "Then "
});
formatter.step({
  "line": 51,
  "name": "I select product \u003cproductID\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 52,
  "name": "I see the product page with Ajouter au panier button",
  "keyword": "Then "
});
formatter.step({
  "line": 53,
  "name": "I click Ajouter au panier button",
  "keyword": "When "
});
formatter.step({
  "line": 54,
  "name": "I see Articles ajoutes au panier Overlay with Continuer mes Achats, Voir le Panier and Vider le Panier",
  "keyword": "Then "
});
formatter.step({
  "line": 55,
  "name": "I click Voir le Panier button",
  "keyword": "When "
});
formatter.step({
  "line": 56,
  "name": "I see the product added to cart",
  "keyword": "Then "
});
formatter.step({
  "line": 57,
  "name": "I update items number to \u003cnumber\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "I see an error Message \u003cmessage\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 60,
  "name": "",
  "description": "",
  "id": "as-a-customer-i-want-to-find-a-desired-box-and-add-it-to-the-cart;no-more-than-5-boxes-of-each-title-can-be-purchased-per-time;",
  "rows": [
    {
      "cells": [
        "number",
        "productID",
        "message"
      ],
      "line": 61,
      "id": "as-a-customer-i-want-to-find-a-desired-box-and-add-it-to-the-cart;no-more-than-5-boxes-of-each-title-can-be-purchased-per-time;;1"
    },
    {
      "cells": [
        "6",
        "Y067",
        "No more than 5 boxes of each title can be purchased per time"
      ],
      "line": 62,
      "id": "as-a-customer-i-want-to-find-a-desired-box-and-add-it-to-the-cart;no-more-than-5-boxes-of-each-title-can-be-purchased-per-time;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 25326283200,
  "status": "passed"
});
formatter.scenario({
  "line": 62,
  "name": "No more than 5 boxes of each title can be purchased per time",
  "description": "",
  "id": "as-a-customer-i-want-to-find-a-desired-box-and-add-it-to-the-cart;no-more-than-5-boxes-of-each-title-can-be-purchased-per-time;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@addBox"
    }
  ]
});
formatter.step({
  "line": 47,
  "name": "I navigate to smartbox homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 48,
  "name": "I see the homepage",
  "keyword": "Then "
});
formatter.step({
  "line": 49,
  "name": "I hover to mainmenu item and select subcategory",
  "keyword": "When "
});
formatter.step({
  "line": 50,
  "name": "I see the products associated",
  "keyword": "Then "
});
formatter.step({
  "line": 51,
  "name": "I select product Y067",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 52,
  "name": "I see the product page with Ajouter au panier button",
  "keyword": "Then "
});
formatter.step({
  "line": 53,
  "name": "I click Ajouter au panier button",
  "keyword": "When "
});
formatter.step({
  "line": 54,
  "name": "I see Articles ajoutes au panier Overlay with Continuer mes Achats, Voir le Panier and Vider le Panier",
  "keyword": "Then "
});
formatter.step({
  "line": 55,
  "name": "I click Voir le Panier button",
  "keyword": "When "
});
formatter.step({
  "line": 56,
  "name": "I see the product added to cart",
  "keyword": "Then "
});
formatter.step({
  "line": 57,
  "name": "I update items number to 6",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "I see an error Message No more than 5 boxes of each title can be purchased per time",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "AddBoxCartSteps.i_navigate_to_smartbox_homepage()"
});
formatter.result({
  "duration": 103394500,
  "status": "passed"
});
formatter.match({
  "location": "AddBoxCartSteps.i_see_the_homepage()"
});
formatter.result({
  "duration": 68425700,
  "status": "passed"
});
formatter.match({
  "location": "AddBoxCartSteps.i_hover_to_mainmenu_item_and_select_subcategory()"
});
formatter.result({
  "duration": 4861043000,
  "status": "passed"
});
formatter.match({
  "location": "AddBoxCartSteps.i_see_the_products_associated()"
});
formatter.result({
  "duration": 1597369400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Y067",
      "offset": 17
    }
  ],
  "location": "AddBoxCartSteps.i_select_product(String)"
});
formatter.result({
  "duration": 5828819200,
  "status": "passed"
});
formatter.match({
  "location": "AddBoxCartSteps.i_see_the_product_page_with_ajouter_au_panier_button()"
});
formatter.result({
  "duration": 177545800,
  "status": "passed"
});
formatter.match({
  "location": "AddBoxCartSteps.i_click_ajouter_au_panier_button()"
});
formatter.result({
  "duration": 1873718800,
  "status": "passed"
});
formatter.match({
  "location": "AddBoxCartSteps.i_see_articles_ajouts_au_panier_overlay_with_continuer_mes_achats_voir_le_panier_and_vider_le_panier()"
});
formatter.result({
  "duration": 344161900,
  "status": "passed"
});
formatter.match({
  "location": "AddBoxCartSteps.i_click_voir_le_panier_button()"
});
formatter.result({
  "duration": 9294241000,
  "status": "passed"
});
formatter.match({
  "location": "AddBoxCartSteps.i_see_the_product_added_to_cart()"
});
formatter.result({
  "duration": 275301800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "6",
      "offset": 25
    }
  ],
  "location": "AddBoxCartSteps.i_update_items_number_to(String)"
});
formatter.result({
  "duration": 933664500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "No more than 5 boxes of each title can be purchased per time",
      "offset": 23
    }
  ],
  "location": "AddBoxCartSteps.i_see_an_error_message(String)"
});
formatter.result({
  "duration": 10067570200,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@class\u003d\u0027errorMessage\u0027]\"}\n  (Session info: chrome\u003d71.0.3578.98)\n  (Driver info: chromedriver\u003d2.45.615291 (ec3682e3c9061c10f26ea9e5cdcf3c53f3f74387),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.13.0\u0027, revision: \u00272f0d292\u0027, time: \u00272018-06-25T15:24:21.231Z\u0027\nSystem info: host: \u0027EPPLGDAW0090\u0027, ip: \u002710.0.75.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_181\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.45.615291 (ec3682e3c9061c..., userDataDir: C:\\Users\\LADDU_~1\\AppData\\L...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:52631}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, strictFileInteractability: false, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 71.0.3578.98, webStorageEnabled: true}\nSession ID: a06a5d5835958faf1b3b6bb22330e40a\n*** Element info: {Using\u003dxpath, value\u003d//*[@class\u003d\u0027errorMessage\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:322)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:424)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:314)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy21.isDisplayed(Unknown Source)\r\n\tat com.qa.utility.CommonUtility.isElementPresent(CommonUtility.java:140)\r\n\tat com.qa.pages.AddBoxCartPage.verifyErrorMessage(AddBoxCartPage.java:457)\r\n\tat com.qa.steps.AddBoxCartSteps.i_see_an_error_message(AddBoxCartSteps.java:118)\r\n\tat ✽.Then I see an error Message No more than 5 boxes of each title can be purchased per time(AddBoxCart.feature:58)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 3224153900,
  "status": "passed"
});
formatter.uri("BoxView.feature");
formatter.feature({
  "line": 2,
  "name": "As a customer",
  "description": "       I want to view a list of products\r\n       So I can select some to purchase\r\n       Acceptance Criteria\r\n        When searching for a box by name on the main search field (top of the page), suggestions are displayed as the customer types\r\n        After selecting a category or sub-category, filter options are displayed\r\n        When searching for a box by name on a filter, suggestions are displayed as the customer types\r\n        Every Box page must display a link to the reviews section",
  "id": "as-a-customer",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@boxReview"
    }
  ]
});
formatter.before({
  "duration": 24028937200,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "When searching for a box by name on the main search field (top of the page), suggestions are displayed as the customer types,After selecting a category or sub-category, filter options are displayed,When searching for a box by name on a filter, suggestions are displayed as the customer types,Every Box page must display a link to the reviews section",
  "description": "",
  "id": "as-a-customer;when-searching-for-a-box-by-name-on-the-main-search-field-(top-of-the-page),-suggestions-are-displayed-as-the-customer-types,after-selecting-a-category-or-sub-category,-filter-options-are-displayed,when-searching-for-a-box-by-name-on-a-filter,-suggestions-are-displayed-as-the-customer-types,every-box-page-must-display-a-link-to-the-reviews-section",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "I navigate to smartbox homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I see the homepage",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I see the search field",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I search for a box by name",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I see suggestions displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "I select the category",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I see the filter options",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "I select custom types in filter",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I see the search result with boxes",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "I verify every box page for link to review section",
  "keyword": "And "
});
formatter.match({
  "location": "AddBoxCartSteps.i_navigate_to_smartbox_homepage()"
});
formatter.result({
  "duration": 93104200,
  "status": "passed"
});
formatter.match({
  "location": "AddBoxCartSteps.i_see_the_homepage()"
});
formatter.result({
  "duration": 42892900,
  "status": "passed"
});
formatter.match({
  "location": "AddBoxCartSteps.i_see_the_search_field()"
});
formatter.result({
  "duration": 47580800,
  "status": "passed"
});
formatter.match({
  "location": "AddBoxCartSteps.i_search_for_a_box_by_name()"
});
formatter.result({
  "duration": 191046500,
  "status": "passed"
});
formatter.match({
  "location": "AddBoxCartSteps.i_see_suggestions_displayed()"
});
formatter.result({
  "duration": 421161100,
  "status": "passed"
});
formatter.match({
  "location": "AddBoxCartSteps.i_select_the_category()"
});
formatter.result({
  "duration": 4810086600,
  "status": "passed"
});
formatter.match({
  "location": "AddBoxCartSteps.i_see_the_filter_options()"
});
formatter.result({
  "duration": 243017100,
  "status": "passed"
});
formatter.match({
  "location": "AddBoxCartSteps.i_select_custom_types_in_filter()"
});
formatter.result({
  "duration": 352140600,
  "status": "passed"
});
formatter.match({
  "location": "AddBoxCartSteps.i_see_the_search_result_with_boxes()"
});
formatter.result({
  "duration": 6766850800,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: Selenium Timeout Exception (tried for 5 second(s) with 200 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.FluentWait.timeoutException(FluentWait.java:303)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:271)\r\n\tat com.qa.utility.CommonUtility.waitForVisibilityOfElement(CommonUtility.java:41)\r\n\tat com.qa.pages.AddBoxCartPage.boxesSearchResults(AddBoxCartPage.java:432)\r\n\tat com.qa.steps.AddBoxCartSteps.i_see_the_search_result_with_boxes(AddBoxCartSteps.java:128)\r\n\tat ✽.Then I see the search result with boxes(BoxView.feature:21)\r\nCaused by: org.openqa.selenium.StaleElementReferenceException: stale element reference: element is not attached to the page document\n  (Session info: chrome\u003d71.0.3578.98)\n  (Driver info: chromedriver\u003d2.45.615291 (ec3682e3c9061c10f26ea9e5cdcf3c53f3f74387),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/stale_element_reference.html\nBuild info: version: \u00273.13.0\u0027, revision: \u00272f0d292\u0027, time: \u00272018-06-25T15:24:21.231Z\u0027\nSystem info: host: \u0027EPPLGDAW0090\u0027, ip: \u002710.0.75.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_181\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.45.615291 (ec3682e3c9061c..., userDataDir: C:\\Users\\LADDU_~1\\AppData\\L...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:52832}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, strictFileInteractability: false, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 71.0.3578.98, webStorageEnabled: true}\nSession ID: c9c79b5a118864d9b2a0cf9d49eae20f\r\n\tat sun.reflect.GeneratedConstructorAccessor16.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:276)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.isDisplayed(RemoteWebElement.java:317)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.elementIfVisible(ExpectedConditions.java:315)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$100(ExpectedConditions.java:44)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:301)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:298)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:248)\r\n\tat com.qa.utility.CommonUtility.waitForVisibilityOfElement(CommonUtility.java:41)\r\n\tat com.qa.pages.AddBoxCartPage.boxesSearchResults(AddBoxCartPage.java:432)\r\n\tat com.qa.steps.AddBoxCartSteps.i_see_the_search_result_with_boxes(AddBoxCartSteps.java:128)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:37)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:299)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.internal.runners.statements.RunBefores.evaluate(RunBefores.java:26)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\r\n\tat com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:47)\r\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:242)\r\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "AddBoxCartSteps.i_verify_every_box_page_for_link_to_review_section()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1890668500,
  "status": "passed"
});
});