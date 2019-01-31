package com.qa.pages;

import com.aventstack.extentreports.ExtentTest;
import com.qa.driver.DriverManager;
import com.qa.steps.AddBoxCartSteps;
import org.apache.log4j.Logger;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.TimeUnit;

import static com.qa.utility.CommonUtility.*;
import static com.qa.utility.ReportUtility.createTest;
import static com.qa.utility.ReportUtility.getExtentReports;
import static com.qa.utility.ReportUtility.setLogStatus;

public class AddBoxCartPage extends DriverManager {
    private String cartName = "";
    Logger logger = Logger.getLogger(AddBoxCartPage.class);
   // ExtentTest test = createTest(getExtentReports(), "Adding or viewing box in the cart");

    public AddBoxCartPage() {
        PageFactory.initElements(driver, this);
    }

    @FindBy(xpath = "//*[text()='Séjour']")
    @CacheLookup
    WebElement mainMenu;

    @FindBy(xpath = "//*[text()='1 nuit']")
    WebElement subMenu;

    @FindBy(xpath = "//*[@class='thematic__wrapper-link']")
    WebElement searchResultItem;

    @FindBy(xpath = "//*[@class='button add-to-cart primary primary-link add-to-cart--sticky js-add-to-cart box-type-classic-box center']")
    WebElement addTocartButton;

    @FindBy(xpath = "//*[@class='js-product-name product-info__title']")
    WebElement productTitle;

    @FindBy(xpath = "//*[@class='header4-dark no-margin-top']")
    WebElement itemsAdded;

    @FindBy(xpath = "//*[text()='Continuer mes achats']")
    WebElement continueOverLay;

    @FindBy(xpath = "//*[contains(text(),'Voir le panier')]")
    WebElement viewCartOverLay;

    @FindBy(xpath = "//*[text()='Vider le Panier']")
    WebElement emptyCartOverLay;

    @FindBy(xpath = "//*[@class='quote-item-version-qty']")
    WebElement quantityProductDetails;

    @FindBy(xpath = "//*[@class='item__box-qty__remove button no-arrow']")
    WebElement removeButtonProductDetails;

    @FindBy(xpath = "//*[@class='basket-count']")
    WebElement basketCountProductDetails;

    @FindBy(id = "cart-remove-confirm-accept")
    WebElement yesRemoveButtonLayout;
    //*[@id="header-dropdown-wrapper"]/div[2]/div/span[1]/span/font/font
    /*@FindBy(xpath = "//*[@class='empty-cart reveal__tooltip']/font/font")
    WebElement emptyCartHomePage;*/
    @FindBy(xpath = "//*[@class='si si-cart']")
    WebElement emptyCartHomePage;

    @FindBy(xpath = "//*[@class='search-input']")
    WebElement searchFieldHomePage;

    @FindBy(id = "sortby")
    WebElement sortBy;

    @FindBy(xpath = "//*[@data-bind='click: goBack']")
    WebElement returnButtonProductPage;

    @FindBy(xpath = "//*[@class='product-info__review-link']")
    WebElement reviewsLinkProductPage;

    @FindBy(xpath = "//*[@class='product-info__review-link']")
    WebElement reviewsNumberHeaderProductPage;

    @FindBy(xpath = "//*[@class='dark-grey item__box-title text-5']")
    WebElement productHeaderProductPage;

    @FindBy(xpath = "//*[@class='quote-item-version-qty']")
    WebElement selectItemNumbers;

    @FindBy(xpath = "//*[@class='errorMessage']")
    WebElement errorMessage;


    public void enterTextSearch(String partialString) {
        //Enter partial string
        searchFieldHomePage.sendKeys(partialString);
        boolean flag=searchFieldHomePage.getAttribute("placeholder") != null;
        if (flag)
            setLogStatus(test, "Pass", "Partial Search word is entered successfully");
        else
            setLogStatus(test, "Fail", "Partial Search word is not entered successfully");
    }

    public void verifySuggestions(String valueToBeSelected) {
        WebDriverWait wait = new WebDriverWait(driver, 10);
        // ="Romano D'ezzelino"
        WebElement element = driver.findElement(By.xpath("//*[@data-label='" + valueToBeSelected + "']"));
        wait.until(ExpectedConditions.visibilityOf(element));
        if (isElementPresent(element))
            setLogStatus(test, "Pass", "Suggestions are displayed");
        else
            setLogStatus(test, "Fail", "Suggestions are not displayed");

    }

    public void selectCategory(String valueToBeSelected) {
        WebElement element = driver.findElement(By.xpath("//*[@data-label='" + valueToBeSelected + "']"));
        element.click();
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        if (isElementPresent(searchResultItem))
            setLogStatus(test, "Pass", "Search criteria is selected in the suggestions");
        else
            setLogStatus(test, "Fail", "Search criteria is not selected in the suggestions");
    }

    public void verifyFilterOptions(/*ExtentTest test */) {
        if (isElementPresent(sortBy)
        && sortBy.isEnabled())
            setLogStatus(test, "Pass", "Filter Option is visible");
        else
            setLogStatus(test, "Fail", "Filter Option is not visible");
    }

    public void selectFilterOption( ) {
        selectFilter(sortBy, "rating_desc");
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        if (isElementPresent(searchResultItem))
            setLogStatus(test, "Pass", "Filter Criteria Option is selected");
        else
            setLogStatus(test, "Fail", "Filter Criteria Option is not selected");
    }

    public void productDetailsPageDisplayedWithAllReviews() {
        boolean flag = false;
        List<WebElement> listImages = driver.findElements(By.xpath("//*[@class='thematic__wrapper-link']"));
        List<Boolean> myFinalList = new ArrayList<>();
        for (int i = 0; i <= listImages.size() - 1; i++) {
            WebElement elemnt = driver.findElement(By.xpath("(//*[@class='thematic__wrapper-link'])[" + (i + 1) + "]"));
            //Highlight and Scroll into View
            Boolean productID = elemnt.getAttribute("data-product-id") != null
                    && !elemnt.getAttribute("data-product-id").equalsIgnoreCase("");
            highlight(driver, elemnt);
            scrollToElement(driver, elemnt);
            logger.info("Product ID : " + elemnt.getAttribute("data-product-id"));
            setLogStatus(test, "Info", "Product ID under check is : "+elemnt.getAttribute("data-product-id"));

            if (!myFinalList.contains(false)
                    && elemnt.isDisplayed()) {
                elemnt.click();
                driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
            }
            //Check if product details page is visible
            if (isElementPresent(returnButtonProductPage)
                    && productID
                    && verifyNumberOfReviews()) {
                flag = true;
            } else {
                flag = false;
            }
            logger.info("flag for reviews :"+flag);
            logger.info("returnButtonProductPage element is  : " + returnButtonProductPage.isEnabled() + " and the size of images : " + listImages.size());
            //Click Return
            if (isClickable(driver, returnButtonProductPage))
                returnButtonProductPage.click();
            driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        }
        if (isElementPresent(searchResultItem))
            setLogStatus(test, "Pass", "Product Detail page has review links");
        else
            setLogStatus(test, "Fail", "Product Detail page doesnot have review links");
    }

    public void verifyReviewLink( ) {
        boolean flag= isElementPresent(reviewsLinkProductPage)
                && verifyNumberOfReviews();
        if (flag)
            setLogStatus(test, "Pass", "Review link is displayed");
        else
            setLogStatus(test, "Fail", "Review link is not displayed");
    }

    public void verifyHomePage() {
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        boolean flag=isElementPresent(mainMenu) &&
                isElementPresent(searchFieldHomePage);
        if (flag)
            setLogStatus(test, "Pass", "Home page is displayed with Mainmenu and searchField");
        else
            setLogStatus(test, "Fail", "Home page is not displayed with Mainmenu and searchField");
    }

    public void selectSubCategory( ) {
        moveToSubMenuItem(driver, mainMenu, subMenu);
        boolean flag = isElementPresent(searchResultItem);
        List<WebElement> listImages = driver.findElements(By.xpath("//*[@class='thematic__wrapper-link']"));
        if (flag && listImages.size() >= 1)
            setLogStatus(test, "Pass", "Submenu item is selected which displays valid results");
        else
            setLogStatus(test, "Fail", "Submenu item is not selected which didnot display valid results");
    }

    public void isSearchListDisplayed( ) {
        List<WebElement> listImages = driver.findElements(By.xpath("//*[@class='thematic__wrapper-link']"));
        List<Boolean> myFinalList = new ArrayList<>();
        List<String> products = new ArrayList<>();
        for (int i = 0; i <= listImages.size() - 1; i++) {
            WebElement item = driver.findElement(By.xpath("(//*[@class='thematic__wrapper-link'])[" + (i + 1) + "]"));
            myFinalList.add(item.getAttribute("data-product-id") != null || !item.getAttribute("data-product-id").equalsIgnoreCase(" "));
            products.add(item.getAttribute("data-product-id"));
        }
        logger.info("Full list of items: " + myFinalList);
        logger.info("Size of list items: " + myFinalList.size());
        setLogStatus(test, "Info", "Search Criteria has the list of "+products+" Boxes");
        if (!myFinalList.contains(false))
            setLogStatus(test, "Pass", "Boxes are available according to search Criteria are displayed ");
        else
            setLogStatus(test, "Fail", "Boxes are available according to search Criteria are not displayed");
    }

    public void isProductDetailsPageDisplayed(String productID) {
        boolean flag = false;
        List<WebElement> listImages = driver.findElements(By.xpath("//*[@class='thematic__wrapper-link']"));
        List<Boolean> myFinalList = new ArrayList<>();
        for (int i = 0; i <= listImages.size() - 1; i++) {
            WebElement item = driver.findElement(By.xpath("(//*[@class='thematic__wrapper-link'])[" + (i + 1) + "]"));
            myFinalList.add(item.getAttribute("data-product-id") != null || !item.getAttribute("data-product-id").equalsIgnoreCase(" "));
        }
        logger.info("Full list of items: " + myFinalList);
        logger.info("Size of list items: " + myFinalList.size());
        WebElement elemnt = driver.findElement(By.xpath("//*[@data-product-id='" + productID + "']"));
        //Highlight and Scroll into View
        highlight(driver, elemnt);
        scrollToElement(driver, elemnt);
        setLogStatus(test, "Info", "Product ID under check is : "+elemnt.getAttribute("data-product-id"));
        logger.info("ProductID : " + elemnt.getAttribute("data-product-id"));
        if (!myFinalList.contains(false)
                && elemnt.isDisplayed()) {
            elemnt.click();
            driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        }
        //Check if product details page is visible
        if (addTocartButton.isDisplayed()
                && addTocartButton.isEnabled()
                && isClickable(driver, addTocartButton)
                && isElementPresent(returnButtonProductPage)) {
            flag = true;
        }
        if (flag)
            setLogStatus(test, "Pass", "Product details page is displayed when user click on box item and Add to cart button ,return button are displayed");
        else
            setLogStatus(test, "Fail", "Product details page is not displayed when user click on box item and Add to cart button ,return button are displayed");
    }

    public void verifyProductPage( ) {
        boolean flag=(addTocartButton.isDisplayed()
                && addTocartButton.isEnabled()
                && isClickable(driver, addTocartButton)
                && isElementPresent(returnButtonProductPage));
        if (flag)
            setLogStatus(test, "Pass", "Product details page is displayed with Add to cart button ,return button");
        else
            setLogStatus(test, "Fail", "Product details page is not displayed with Add to cart button ,return button");
    }

    public void clickAddToCart() {
        cartName = productTitle.getText();
        //Click Add to Cart
        addTocartButton.click();
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        if (isElementPresent(continueOverLay))
            setLogStatus(test, "Pass", "Articles ajoutes au panier Overlay is displayed when user clicks on addtoCart button");
        else
            setLogStatus(test, "Fail", "Articles ajoutes au panier Overlay is not displayed when user clicks on addtoCart button");
    }

    public void iscontinueButtonOverlayDisplayed(){
        if (isElementPresent(continueOverLay))
            setLogStatus(test, "Pass", "Continue button is displayed in the Overlay");
        else
            setLogStatus(test, "Fail", "Continue button is not displayed in the Overlay");
    }

    public void isViewCartOverlayDisplayed( ) {
        if (isElementPresent(viewCartOverLay))
            setLogStatus(test, "Pass", "View cart button is displayed in the Overlay");
        else
            setLogStatus(test, "Fail", "View cart button is not displayed in the Overlay");
    }

    public void isEmptyCartOverlayDisplayed( ) {
        if (isElementPresent(emptyCartOverLay))
            setLogStatus(test, "Pass", "Empty cart button is displayed in the Overlay");
        else
            setLogStatus(test, "Fail", "Empty cart button is not displayed in the Overlay");
    }

    public void isItemsaddedtocartOverlayDisplayed( ) {
        if (isElementPresent(itemsAdded))
            setLogStatus(test, "Pass", "Article(s) ajoute(s) au panier message is displayed in the Overlay");
        else
            setLogStatus(test, "Fail", "Article(s) ajoute(s) au panier message is is not displayed in the Overlay");
    }

    public void clickViewCartAndVerifyItemsInCart( ) {
        if (isElementPresent(viewCartOverLay)) {
            viewCartOverLay.click();
            driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        }
        String titleProduct = productHeaderProductPage.getText().toUpperCase().trim();

        //Verify Product details page
        boolean flag=isElementPresent(quantityProductDetails)
                && isElementPresent(removeButtonProductDetails)
                && isElementPresent(basketCountProductDetails)
                && basketCountProductDetails.getText() != null
                && cartName.toUpperCase().trim().equalsIgnoreCase(titleProduct);
        if (flag)
            setLogStatus(test, "Pass", "After clicking view cart items are displayed in the Overlay");
        else
            setLogStatus(test, "Fail", "After clicking view cart items are not displayed in the Overlay");

    }

    public void verifyCartItemAdded( ) {
        String titleProduct = productHeaderProductPage.getText().toUpperCase().trim();
        boolean flag=isElementPresent(quantityProductDetails)
                && isElementPresent(removeButtonProductDetails)
                && isElementPresent(basketCountProductDetails)
                && basketCountProductDetails.getText() != null
                && cartName.toUpperCase().trim().equalsIgnoreCase(titleProduct);
        if (flag)
            setLogStatus(test, "Pass", "Box items are displayed in the Cart");
        else
            setLogStatus(test, "Fail", "Box items are not displayed in the Cart");
        //Verify Product details page

    }

    public void deleteItem( ) {
        //click on Remove Icon
        removeButtonProductDetails.click();
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        //Verify confirmation Layout
        if (isElementPresent(yesRemoveButtonLayout))
            setLogStatus(test, "Pass", "Remove overlay is displayed to confirm");
        else
            setLogStatus(test, "Fail", "Remove overlay is not displayed to confirm");
    }

    public void verifydeleteOverlay() {
        //Verify confirmation Layout
        if (isElementPresent(yesRemoveButtonLayout))
            setLogStatus(test, "Pass", "Remove or Delete overlay is displayed to user");
        else
            setLogStatus(test, "Fail", "Remove or Delete overlay is not displayed to user");
    }

    public void deleteItemConfirmation() {
        //Verify delete layout
        yesRemoveButtonLayout.click();
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        //Verify Cart
        hoverAction(driver,emptyCartHomePage);
       // waitForVisibilityOfElement(driver,emptyCartHomePage);
        logger.info("EmptyCart message: "+emptyCartHomePage.getText());
        boolean flag=emptyCartHomePage.getText().toUpperCase().trim().contains("Vous n'avez pas de produit dans votre panier".toUpperCase().trim());
        logger.info("EmptyCart message flag: "+flag);

        if (flag)
            setLogStatus(test, "Pass", "Successfully deleted the box and the cart is empty");
        else
            setLogStatus(test, "Fail", "Unable to delete the box(s) and the cart is not empty");
    }

    public void verifyCartItemRemoved( ) {
        boolean flag=emptyCartHomePage.getText().toUpperCase().trim().contains("Vous n'avez pas de produit dans votre panier".toUpperCase().trim());
        if (flag)
            setLogStatus(test, "Pass", "Cart is empty");
        else
            setLogStatus(test, "Fail", "Cart is not empty");
    }

    public void increaseItemNumbersToMorethanFive(String number) {
        selectFilter(selectItemNumbers, number);
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        //Verify Cart
        boolean flag=selectItemNumbers.getAttribute("data-qty").equals(number.toUpperCase().trim());
        if (flag)
            setLogStatus(test, "Pass", "Quantity is updated/changed to : "+number);
        else
            setLogStatus(test, "Fail", "Quantity is not updated/changed to : "+number);
    }

    private boolean verifyNumberOfReviews( ) {
        logger.info("reviewsHeaderLink :"+reviewsNumberHeaderProductPage.getAttribute("href"));
        boolean flag=reviewsNumberHeaderProductPage.getAttribute("href") != null
                && reviewsNumberHeaderProductPage.getAttribute("href").toUpperCase().trim().contains("#reviews".trim().toUpperCase());
        if (flag)
            setLogStatus(test, "Pass", "Review page link is : "+reviewsNumberHeaderProductPage.getAttribute("href"));
        else
            setLogStatus(test, "Fail", "Number of review page links are not available");
        return flag;
    }

    public void boxesSearchResults( ) {
        boolean flag = false;
        List<WebElement> listImages = driver.findElements(By.xpath("//*[@class='thematic__wrapper-link']"));
        List<Boolean> myFinalList = new ArrayList<>();
        for (int i = 0; i <= listImages.size() - 1; i++) {
            WebElement item = driver.findElement(By.xpath("(//*[@class='thematic__wrapper-link'])[" + (i + 1) + "]"));
            waitForVisibilityOfElement(driver,item);
            myFinalList.add(item.getAttribute("data-product-id") != null || !item.getAttribute("data-product-id").equalsIgnoreCase(" "));
        }
        for (int i = 0; i <= listImages.size() - 1; i++) {
            WebElement elemnt = driver.findElement(By.xpath("(//*[@class='thematic__wrapper-link'])[" + (i + 1) + "]"));
            //Highlight and Scroll into View
            waitForVisibilityOfElement(driver,elemnt);
            Boolean productID = elemnt.getAttribute("data-product-id") != null
                    && !elemnt.getAttribute("data-product-id").equalsIgnoreCase("");
            setLogStatus(test, "Info", "Product ID under check is : "+elemnt.getAttribute("data-product-id"));
            highlight(driver, elemnt);
            scrollToElement(driver, elemnt);
            if (!myFinalList.contains(false)
                    && elemnt.isDisplayed()) {
                flag = true;
            }
        }
        if (flag)
            setLogStatus(test, "Pass", "Valid Search results are availableand visible to the User");
        else
            setLogStatus(test, "Fail", "Valid Search results are not available and visible to the User");
    }

    public void verifyErrorMessage(String message) {
        boolean flag = false;
        if (isElementPresent(errorMessage)) {
            flag = message.toUpperCase().trim().equalsIgnoreCase(errorMessage.getText());
        }
        if (flag)
            setLogStatus(test, "Pass", "Error message 'No more than 5 boxes of each title can be purchased per time' is displayed");
        else
            setLogStatus(test, "Fail", "Error message 'No more than 5 boxes of each title can be purchased per time' is not displayed");
    }

}
