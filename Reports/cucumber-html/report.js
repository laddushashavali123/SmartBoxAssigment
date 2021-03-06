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
  "duration": 38578738400,
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
  "duration": 838994500,
  "status": "passed"
});
formatter.match({
  "location": "AddBoxCartSteps.i_see_the_homepage()"
});
formatter.result({
  "duration": 7365504500,
  "status": "passed"
});
formatter.match({
  "location": "AddBoxCartSteps.i_hover_to_mainmenu_item_and_select_subcategory()"
});
formatter.result({
  "duration": 17914664100,
  "status": "passed"
});
formatter.match({
  "location": "AddBoxCartSteps.i_see_the_products_associated()"
});
formatter.result({
  "duration": 3043847900,
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
  "duration": 11199321000,
  "status": "passed"
});
formatter.match({
  "location": "AddBoxCartSteps.i_see_the_product_page_with_ajouter_au_panier_button()"
});
formatter.result({
  "duration": 330293200,
  "status": "passed"
});
formatter.match({
  "location": "AddBoxCartSteps.i_click_ajouter_au_panier_button()"
});
formatter.result({
  "duration": 1728201700,
  "status": "passed"
});
formatter.match({
  "location": "AddBoxCartSteps.i_see_articles_ajouts_au_panier_overlay_with_continuer_mes_achats_voir_le_panier_and_vider_le_panier()"
});
formatter.result({
  "duration": 299862800,
  "status": "passed"
});
formatter.match({
  "location": "AddBoxCartSteps.i_click_voir_le_panier_button()"
});
formatter.result({
  "duration": 14820313000,
  "status": "passed"
});
formatter.match({
  "location": "AddBoxCartSteps.i_see_the_product_added_to_cart()"
});
formatter.result({
  "duration": 327196900,
  "status": "passed"
});
formatter.after({
  "duration": 6365443200,
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
  "duration": 14494656200,
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
  "duration": 206873300,
  "status": "passed"
});
formatter.match({
  "location": "AddBoxCartSteps.i_see_the_homepage()"
});
formatter.result({
  "duration": 84840100,
  "status": "passed"
});
formatter.match({
  "location": "AddBoxCartSteps.i_hover_to_mainmenu_item_and_select_subcategory()"
});
formatter.result({
  "duration": 16174093600,
  "status": "passed"
});
formatter.match({
  "location": "AddBoxCartSteps.i_see_the_products_associated()"
});
formatter.result({
  "duration": 3438503100,
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
  "duration": 34789184400,
  "status": "passed"
});
formatter.match({
  "location": "AddBoxCartSteps.i_see_the_product_page_with_ajouter_au_panier_button()"
});
formatter.result({
  "duration": 402013700,
  "status": "passed"
});
formatter.match({
  "location": "AddBoxCartSteps.i_click_ajouter_au_panier_button()"
});
formatter.result({
  "duration": 2554184400,
  "status": "passed"
});
formatter.match({
  "location": "AddBoxCartSteps.i_see_articles_ajouts_au_panier_overlay_with_continuer_mes_achats_voir_le_panier_and_vider_le_panier()"
});
formatter.result({
  "duration": 337557100,
  "status": "passed"
});
formatter.match({
  "location": "AddBoxCartSteps.i_click_voir_le_panier_button()"
});
formatter.result({
  "duration": 10111970000,
  "status": "passed"
});
formatter.match({
  "location": "AddBoxCartSteps.i_see_the_product_added_to_cart()"
});
formatter.result({
  "duration": 2144597300,
  "status": "passed"
});
formatter.match({
  "location": "AddBoxCartSteps.i_click_remove_icon()"
});
formatter.result({
  "duration": 1600958200,
  "status": "passed"
});
formatter.match({
  "location": "AddBoxCartSteps.i_see_overlay_to_confirm()"
});
formatter.result({
  "duration": 46884200,
  "status": "passed"
});
formatter.match({
  "location": "AddBoxCartSteps.i_click_yesremove_these_items()"
});
formatter.result({
  "duration": 19709051300,
  "status": "passed"
});
formatter.match({
  "location": "AddBoxCartSteps.i_see_the_product_removed_form_cart()"
});
formatter.result({
  "duration": 1277849000,
  "status": "passed"
});
formatter.after({
  "duration": 1673079800,
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
  "duration": 18384072500,
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
  "duration": 231717100,
  "status": "passed"
});
formatter.match({
  "location": "AddBoxCartSteps.i_see_the_homepage()"
});
formatter.result({
  "duration": 132157100,
  "status": "passed"
});
formatter.match({
  "location": "AddBoxCartSteps.i_hover_to_mainmenu_item_and_select_subcategory()"
});
formatter.result({
  "duration": 10394684700,
  "status": "passed"
});
formatter.match({
  "location": "AddBoxCartSteps.i_see_the_products_associated()"
});
formatter.result({
  "duration": 3080132800,
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
  "duration": 8954521200,
  "status": "passed"
});
formatter.match({
  "location": "AddBoxCartSteps.i_see_the_product_page_with_ajouter_au_panier_button()"
});
formatter.result({
  "duration": 332015400,
  "status": "passed"
});
formatter.match({
  "location": "AddBoxCartSteps.i_click_ajouter_au_panier_button()"
});
formatter.result({
  "duration": 5796060100,
  "status": "passed"
});
formatter.match({
  "location": "AddBoxCartSteps.i_see_articles_ajouts_au_panier_overlay_with_continuer_mes_achats_voir_le_panier_and_vider_le_panier()"
});
formatter.result({
  "duration": 422363200,
  "status": "passed"
});
formatter.match({
  "location": "AddBoxCartSteps.i_click_voir_le_panier_button()"
});
formatter.result({
  "duration": 13519258400,
  "status": "passed"
});
formatter.match({
  "location": "AddBoxCartSteps.i_see_the_product_added_to_cart()"
});
formatter.result({
  "duration": 510330100,
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
  "duration": 1339806900,
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
  "duration": 10057726700,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@class\u003d\u0027errorMessage\u0027]\"}\n  (Session info: chrome\u003d71.0.3578.98)\n  (Driver info: chromedriver\u003d2.45.615291 (ec3682e3c9061c10f26ea9e5cdcf3c53f3f74387),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.13.0\u0027, revision: \u00272f0d292\u0027, time: \u00272018-06-25T15:24:21.231Z\u0027\nSystem info: host: \u0027EPPLGDAW0090\u0027, ip: \u002710.0.75.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_181\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.45.615291 (ec3682e3c9061c..., userDataDir: C:\\Users\\LADDU_~1\\AppData\\L...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:61788}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, strictFileInteractability: false, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 71.0.3578.98, webStorageEnabled: true}\nSession ID: cb5066cb529a45393a34023c7b38662b\n*** Element info: {Using\u003dxpath, value\u003d//*[@class\u003d\u0027errorMessage\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:322)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:424)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:314)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy21.isDisplayed(Unknown Source)\r\n\tat com.qa.utility.CommonUtility.isElementPresent(CommonUtility.java:145)\r\n\tat com.qa.pages.AddBoxCartPage.verifyErrorMessage(AddBoxCartPage.java:470)\r\n\tat com.qa.steps.AddBoxCartSteps.i_see_an_error_message(AddBoxCartSteps.java:118)\r\n\tat ✽.Then I see an error Message No more than 5 boxes of each title can be purchased per time(AddBoxCart.feature:58)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 4575177300,
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
  "duration": 46210215300,
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
  "duration": 165699500,
  "status": "passed"
});
formatter.match({
  "location": "AddBoxCartSteps.i_see_the_homepage()"
});
formatter.result({
  "duration": 67183500,
  "status": "passed"
});
formatter.match({
  "location": "AddBoxCartSteps.i_see_the_search_field()"
});
formatter.result({
  "duration": 105757700,
  "status": "passed"
});
formatter.match({
  "location": "AddBoxCartSteps.i_search_for_a_box_by_name()"
});
formatter.result({
  "duration": 259341100,
  "status": "passed"
});
formatter.match({
  "location": "AddBoxCartSteps.i_see_suggestions_displayed()"
});
formatter.result({
  "duration": 178561100,
  "status": "passed"
});
formatter.match({
  "location": "AddBoxCartSteps.i_select_the_category()"
});
formatter.result({
  "duration": 6211917900,
  "status": "passed"
});
formatter.match({
  "location": "AddBoxCartSteps.i_see_the_filter_options()"
});
formatter.result({
  "duration": 394399500,
  "status": "passed"
});
formatter.match({
  "location": "AddBoxCartSteps.i_select_custom_types_in_filter()"
});
formatter.result({
  "duration": 2326028300,
  "status": "passed"
});
formatter.match({
  "location": "AddBoxCartSteps.i_see_the_search_result_with_boxes()"
});
formatter.result({
  "duration": 191046783400,
  "status": "passed"
});
formatter.match({
  "location": "AddBoxCartSteps.i_verify_every_box_page_for_link_to_review_section()"
});
formatter.result({
  "duration": 293420601700,
  "status": "passed"
});
formatter.after({
  "duration": 2437664200,
  "status": "passed"
});
});