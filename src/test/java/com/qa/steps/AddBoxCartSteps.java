package com.qa.steps;

import com.aventstack.extentreports.ExtentTest;
import com.qa.pages.AddBoxCartPage;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucumber.api.java.en.And;

import org.apache.log4j.Logger;

import static com.qa.utility.ReportUtility.*;

public class AddBoxCartSteps {

    AddBoxCartPage addBoxCartPage = new AddBoxCartPage();
    // ExtentTest test = createTest(getExtentReports(), "Add a box to the cart && Boxes display");

    @Given("^I navigate to smartbox homepage$")
    public void i_navigate_to_smartbox_homepage() {
        addBoxCartPage.verifyHomePage();
    }

    @When("^I hover to mainmenu item and select subcategory$")
    public void i_hover_to_mainmenu_item_and_select_subcategory() {
        addBoxCartPage.selectSubCategory();
    }

    @Then("^I see the products associated$")
    public void i_see_the_products_associated() {
        addBoxCartPage.isSearchListDisplayed();
    }

    @When("^I select product (.+)$")
    public void i_select_product(String productid) {
        addBoxCartPage.isProductDetailsPageDisplayed(/*test,*/productid);
    }

    @When("^I click Ajouter au panier button$")
    public void i_click_ajouter_au_panier_button() {
        addBoxCartPage.clickAddToCart();
    }

    @Then("^I see Articles ajoutes au panier Overlay with Continuer mes Achats, Voir le Panier and Vider le Panier$")
    public void i_see_articles_ajouts_au_panier_overlay_with_continuer_mes_achats_voir_le_panier_and_vider_le_panier() {
        addBoxCartPage.iscontinueButtonOverlayDisplayed();
        addBoxCartPage.isViewCartOverlayDisplayed();
        addBoxCartPage.isItemsaddedtocartOverlayDisplayed();
    }

    @When("^I click Voir le Panier button$")
    public void i_click_voir_le_panier_button() {
        addBoxCartPage.clickViewCartAndVerifyItemsInCart();
    }

    @When("^I click remove icon$")
    public void i_click_remove_icon() {
        addBoxCartPage.deleteItem();
    }

    @When("^I click Yes,remove these items$")
    public void i_click_yesremove_these_items() {
        addBoxCartPage.deleteItemConfirmation();
    }

    @Then("^I see the homepage$")
    public void i_see_the_homepage() {
        addBoxCartPage.verifyHomePage();
    }

    @And("^I see the search field$")
    public void i_see_the_search_field() {
        addBoxCartPage.verifyHomePage();
    }

    @When("^I search for a box by name$")
    public void i_search_for_a_box_by_name() {
        addBoxCartPage.enterTextSearch(/*test,*/ "Roman");
    }

    @Then("^I see suggestions displayed$")
    public void i_see_suggestions_displayed() {
        addBoxCartPage.verifySuggestions(/*test,*/ "Romancos");
    }

    @When("^I select the category$")
    public void i_select_the_category() {
        addBoxCartPage.selectCategory(/*test,*/ "Romancos");
    }

    @When("^I select custom types in filter$")
    public void i_select_custom_types_in_filter() {
        addBoxCartPage.selectFilterOption();
    }

    @Then("^I see the product page with Ajouter au panier button$")
    public void i_see_the_product_page_with_ajouter_au_panier_button() {
        addBoxCartPage.verifyProductPage();
    }

    @Then("^I see the product added to cart$")
    public void i_see_the_product_added_to_cart() {
        addBoxCartPage.verifyCartItemAdded();
    }

    @Then("^I see overlay to confirm$")
    public void i_see_overlay_to_confirm() {
        addBoxCartPage.verifydeleteOverlay();
    }

    @Then("^I see the product removed form cart$")
    public void i_see_the_product_removed_form_cart() {
        addBoxCartPage.verifyCartItemRemoved();
    }

    @Then("^I see an error Message (.+)$")
    public void i_see_an_error_message(String message) {
        addBoxCartPage.verifyErrorMessage(/*test,*/ message);
    }

    @Then("^I see the filter options$")
    public void i_see_the_filter_options() {
        addBoxCartPage.verifyFilterOptions();
    }

    @Then("^I see the search result with boxes$")
    public void i_see_the_search_result_with_boxes() {
        addBoxCartPage.boxesSearchResults();
    }

    @And("^I update items number to (.+)$")
    public void i_update_items_number_to(String number) {
        addBoxCartPage.increaseItemNumbersToMorethanFive(/*test,*/ number);
    }

    @And("^I verify every box page for link to review section$")
    public void i_verify_every_box_page_for_link_to_review_section() {
        addBoxCartPage.productDetailsPageDisplayedWithAllReviews();
    }
}
