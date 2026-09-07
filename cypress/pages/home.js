import { HomeSelectors } from '../selectors';

export class HomePage {

    // #region 

    /**
     * Visit the homepage of the application.
     *
     * @static
     * @memberof HomePage
     */
    static visit() {

        cy.visit('/');
    }

    /**
     * Verify that the current URL includes the homepage URL.
     *
     * @static
     * @memberof HomePage
     */
    static verifyHomeUrl() {

        cy.url().should('include', cy.config('baseUrl'));
    }



    // #endregion

    // #region Buttons

    /**
     * Click the sign-in button located in the navbar.
     *
     * @static
     * @memberof HomePage
     */
    static clickSignInButtonNavbar() {

        cy.get(HomeSelectors.navbarSignIn, { timeout: 10000 })
            .should('be.visible').should('exist')
            .click({ force: true });
    }

    /**
     * Click the sign-in button located on the homepage.
     *
     * @static
     * @memberof HomePage
     */
    static clickSignInButtonHome() {

        cy.get(HomeSelectors.homeHeroSignIn, { timeout: 10000 })
            .should('be.visible').should('exist')
            .click({ force: true });
    }

    /**
     * Click the sign-in button located in the footer.
     *
     * @static
     * @memberof HomePage
     */
    static clickSignInButtonFooter() {

        cy.get(HomeSelectors.footerGeneral, { timeout: 10000 })
            .find(HomeSelectors.footerColumns)
            .should('be.visible').should('exist')
            .eq(1)
            .find(HomeSelectors.footerColumnElement(3))
            .should('be.visible').should('exist')
            .click({ force: true });
    }

    /**
     * Click the sign-in button located in the cart.
     *
     * @static
     * @memberof HomePage
     */
    static clickSignInButtonCard() {

        cy.get(HomeSelectors.homeGeneral, { timeout: 10000 })
            .find(HomeSelectors.homeStartSection)
            .find(HomeSelectors.signInLink)
            .should('exist')
            .click({ force: true });
    }

    /**
     * Click the logout button in the navbar.
     *
     * @static
     * @memberof HomePage
     */
    static clickLogoutButton() {

        cy.get(HomeSelectors.navbarLogout, { timeout: 10000 })
            .should('be.visible').should('exist')
            .click({ force: true });

        cy.get(HomeSelectors.navbarLogout, { timeout: 10000 })
            .find(HomeSelectors.logoutIcon)
            .should('be.visible').should('exist');
    }

    /**
     * Click the QA logo button in the navbar.
     *
     * @static
     * @memberof HomePage
     */
    static clickQaLogoNavbarButton() {

        cy.get(HomeSelectors.navbarGeneral, { timeout: 10000 })
            .find(HomeSelectors.navbarLogo)
            .should('be.visible').should('exist')
            .click({ force: true });
    }

    /**
     * Click the QA logo button in the footer.
     *
     * @static
     * @memberof HomePage
     */
    static clickQaLogoFooterButton() {

        cy.get(HomeSelectors.footerGeneral, { timeout: 10000 })
            .find(HomeSelectors.footerColumns)
            .should('be.visible').should('exist')
            .eq(0)
            .find('a[href="/"]')
            .click({ force: true });
    }

    /**
     * Click the "Products" button located in the footer.
     *
     * @static
     * @memberof HomePage
     */
    static clickProductsFooterButton() {

        cy.get(HomeSelectors.footerGeneral, { timeout: 10000 })
            .find(HomeSelectors.footerColumns)
            .should('be.visible').should('exist')
            .eq(1)
            .find(HomeSelectors.footerColumnElement(1))
            .should('be.visible').should('exist')
            .click({ force: true });
    }

    /**
     * Click the "Cart" button located in the footer.
     *
     * @static
     * @memberof HomePage
     */
    static clickCartFooterButton() {

        cy.get(HomeSelectors.footerGeneral, { timeout: 10000 })
            .find(HomeSelectors.footerColumns)
            .should('be.visible').should('exist')
            .eq(1)
            .find(HomeSelectors.footerColumnElement(2))
            .should('be.visible').should('exist')
            .click({ force: true });
    }

    /**
     * Click the "Products" button located in the navbar.
     *
     * @static
     * @memberof HomePage
     */
    static clickProductsNavbarButton() {

        cy.get(HomeSelectors.navbarGeneral, { timeout: 10000 })
            .find(HomeSelectors.navbarProducts)
            .should('be.visible').should('exist')
            .click({ force: true });
    }

    /**
     * Click the "Cart" button located in the navbar.
     *
     * @static
     * @memberof HomePage
     */
    static clickCartNavbarButton() {

        cy.get(HomeSelectors.navbarGeneral, { timeout: 10000 })
            .find(HomeSelectors.navbarCart)
            .should('be.visible').should('exist')
            .click({ force: true });
    }

    /**
     * Click the "Admin" button located in the navbar.
     *
     * @static
     * @memberof HomePage
     */
    static clickAdminNavbarButton() {

        cy.get(HomeSelectors.navbarGeneral, { timeout: 10000 })
            .find(HomeSelectors.navbarAdmin)
            .should('be.visible').should('exist')
            .click({ force: true });
    }

    /**
     * Click the "Browse Products" button located in the hero section of the home page.
     *
     * @static
     * @memberof HomePage
     */
    static clickBrowseProductsHeroButton() {

        cy.get(HomeSelectors.homeGeneral, { timeout: 10000 })
            .find(HomeSelectors.homeHeroActions)
            .find(HomeSelectors.homeHeroBrowse)
            .should('be.visible').should('exist')
            .click({ force: true });
    }

    /**
     * Click the "View All" button located in the feature products section of the home page.
     *
     * @static
     * @memberof HomePage
     */
    static clickViewAllFeatureProductsButton() {

        cy.get(HomeSelectors.homeGeneral, { timeout: 10000 })
            .find(HomeSelectors.homeFeatureProducts)
            .should('be.visible').should('exist')
            .find(HomeSelectors.homeFeatureProductsViewAllButton)
            .should('be.visible').should('exist')
            .should('contain', 'View All')
            .click({ force: true });
    }



    // #endregion

    // #region Validations

    /**
     * Verify that the username displayed in the navbar matches the expected username.
     *
     * @static
     * @param {string} username
     * @memberof HomePage
     */
    static verifyUserNameNavbar(username) {

        cy.get(HomeSelectors.navbarUsername, { timeout: 10000 })
            .should('be.visible').should('exist')
            .and('have.text', username);
    }

    /**
     * Verify that the logout button is not visible in the navbar.
     *
     * @static
     * @memberof HomePage
     */
    static verifyLogoutButtonNotVisible() {

        cy.get(HomeSelectors.navbarLogout, { timeout: 10000 })
            .should('not.exist');
    }

    /**
     * Verify that the admin button is not visible in the navbar, for standard user and logout.
     *
     * @static
     * @memberof HomePage
     */
    static verifyAdminButtonNotVisible() {

        cy.get(HomeSelectors.navbarAdmin, { timeout: 10000 })
            .should('not.exist');
    }

    /**
     * Verify that the admin button is visible in the navbar.
     *
     * @static
     * @memberof HomePage
     */
    static verifyAdminButtonVisible() {

        cy.get(HomeSelectors.navbarGeneral, { timeout: 10000 })
            .find(HomeSelectors.navbarAdmin)
            .should('be.visible').should('exist');
    }

    /**
     * Verify that all static elements on the Home page are displayed correctly.
     *
     * @static
     * @memberof HomePage
     */
    static verifyHomeStaticElements() {

        // Navbar
        this.verifyNavbarElements();

        // Home main
        this.verifyHeroStaticElements();
        this.verifyHeroTitleDescription();
        this.verifyHeroActions();

        this.verifyTextCenter();
        this.verifyFeatureProductsExist();
        this.verifyHomeStartInfo();

        // Footer
        this.verifyFooterColumnsTexts();
        this.verifyFooterBottomInformation();
    }

    // Home Hero

    /**
     * Verify that all static elements in the hero section are displayed correctly.
     *
     * @static
     * @memberof HomePage
     */
    static verifyHeroStaticElements() {

        cy.get(HomeSelectors.homeGeneral, { timeout: 10000 })
            .find(HomeSelectors.homeHeroBadge)
            .should('be.visible').should('exist')
            .should('contain', 'E-Commerce Automated Testing Platform');

        cy.get(HomeSelectors.homeGeneral, { timeout: 10000 })
            .find(HomeSelectors.homeHeroBadge)
            .find(HomeSelectors.heroIcon)
            .should('be.visible').should('exist');
    }

    /**
     * Verify that the hero title and description are displayed correctly.
     *
     * @static
     * @memberof HomePage
     */
    static verifyHeroTitleDescription() {

        cy.get(HomeSelectors.homeGeneral, { timeout: 10000 })
            .find(HomeSelectors.homeHeroTitle)
            .should('be.visible').should('exist')
            .should('contain', 'Your Playground for')
            .and('contain', 'Automated Testing');

        cy.get(HomeSelectors.homeGeneral, { timeout: 10000 })
            .find(HomeSelectors.homeHeroDescription)
            .should('be.visible').should('exist')
            .should('contain', 'A realistic e-commerce environment designed specifically for practicing automated testing. Execute end-to-end flows—from product discovery to checkout—in a captcha-free environment.');
    }

    /**
     * Verify that the hero action buttons are displayed correctly.
     *
     * @static
     * @memberof HomePage
     */
    static verifyHeroActions(isLoggedIn = false) {

        cy.get(HomeSelectors.homeGeneral, { timeout: 10000 })
            .find(HomeSelectors.homeHeroActions)
            .find(HomeSelectors.homeHeroBrowse)
            .should('be.visible').should('exist')
            .should('contain', 'Browse Products');

        if (isLoggedIn) {
            cy.get(HomeSelectors.homeGeneral, { timeout: 10000 })
                .find(HomeSelectors.homeHeroActions)
                .find(HomeSelectors.homeHeroSignIn)
                .should('not.exist');
        } else {
            cy.get(HomeSelectors.homeGeneral, { timeout: 10000 })
                .find(HomeSelectors.homeHeroActions)
                .find(HomeSelectors.homeHeroSignIn)
                .should('be.visible').should('exist')
                .should('contain', 'Sign In');
        }
    }

    // Home texts center

    /**
     * Verify that the centered text section is displayed correctly.
     *
     * @static
     * @memberof HomePage
     */
    static verifyTextCenter() {

        cy.get(HomeSelectors.homeGeneral, { timeout: 10000 })
            .find(HomeSelectors.homeTextCenter)
            .eq(0)
            .should('be.visible').should('exist')
            .should('contain', 'Lightning Fast')
            .and('contain', 'Powered by Cloudflare Edge for sub-50ms response times globally.');

        cy.get(HomeSelectors.homeGeneral, { timeout: 10000 })
            .find(HomeSelectors.homeTextCenter)
            .eq(1)
            .should('be.visible').should('exist')
            .should('contain', 'Secure by Design')
            .and('contain', 'JWT authentication with CSRF protection and encrypted sessions.');

        cy.get(HomeSelectors.homeGeneral, { timeout: 10000 })
            .find(HomeSelectors.homeTextCenter)
            .eq(2)
            .should('be.visible').should('exist')
            .should('contain', 'Test Everything')
            .and('contain', 'Complete e-commerce flow from browsing to checkout to order confirmation.');
    }

    // Home Feature Products

    /**
     * Verify that the featured products section exists on the home page.
     *
     * @static
     * @memberof HomePage
     */
    static verifyFeatureProductsExist() {

        cy.get(HomeSelectors.homeGeneral, { timeout: 10000 })
            .find(HomeSelectors.homeFeatureProducts)
            .should('be.visible').should('exist')
            .find('h2')
            .should('contain', 'Featured Products')
            .parent()
            .find('p')
            .should('contain', 'Explore our curated selection');

        cy.get(HomeSelectors.homeGeneral, { timeout: 10000 })
            .find(HomeSelectors.homeFeatureProducts)
            .find(HomeSelectors.homeFeatureProductsViewAllButton)
            .should('be.visible').should('exist')
            .should('contain', 'View All');

        cy.get(HomeSelectors.homeGeneral, { timeout: 10000 })
            .find(HomeSelectors.homeFeatureProducts)
            .find(HomeSelectors.homeFeatureProductElement)
            .should('be.visible').should('exist')
            .should('have.length.greaterThan', 0);
    }

    // Home Start testing - login status

    /**
     * Verify that the home page displays the start testing section based on the user's login status.
     *
     * @static
     * @memberof HomePage
     */
    static verifyHomeStartInfo(isLoggedIn = false) {

        const texts = !isLoggedIn ? 'Ready to Start Testing?' : 'Start Exploring';
        const description = !isLoggedIn ? 'Use our test accounts to explore the full e-commerce experience.' 
            : 'Browse our products and test the complete e-commerce experience.';

        cy.get(HomeSelectors.homeGeneral, { timeout: 10000 })
            .find(HomeSelectors.homeStartSection)
            .should('be.visible').should('exist')
            .should('contain', texts)
            .and('contain', description);

        if (!isLoggedIn) {
            cy.get(HomeSelectors.homeGeneral, { timeout: 10000 })
                .find(HomeSelectors.homeStartSection)
                .find(HomeSelectors.signInLink)
                .should('exist')
                .should('contain', 'Sign In Now');

            cy.get(HomeSelectors.homeGeneral, { timeout: 10000 })
                .find(HomeSelectors.homeStartSection)
                .find('.text-brand-200')
                .should('exist')
                .should('contain', 'Test accounts: standard_user / locked_user / admin_user');
        } else {
            cy.get(HomeSelectors.homeGeneral, { timeout: 10000 })
                .find(HomeSelectors.homeStartSection)
                .find(HomeSelectors.catalogLink)
                .should('exist')
                .should('contain', 'Browse Products');
        }
    }

    // Navbar

    /**
     * Verify that all elements in the navbar are displayed correctly.
     *
     * @static
     * @memberof HomePage
     */
    static verifyNavbarElements() {

        cy.get(HomeSelectors.navbarGeneral, { timeout: 10000 })
            .find(HomeSelectors.navbarLogo)
            .should('be.visible').should('exist')
            .find('span')
            .should('contain', 'Demo');

        cy.get(HomeSelectors.navbarGeneral, { timeout: 10000 })
            .find(HomeSelectors.navbarProducts)
            .should('be.visible').should('exist')
            .should('contain', 'Products');

        cy.get(HomeSelectors.navbarGeneral, { timeout: 10000 })
            .find(HomeSelectors.navbarCart)
            .should('be.visible').should('exist');

        cy.get(HomeSelectors.navbarGeneral, { timeout: 10000 })
            .find(HomeSelectors.navbarSignIn)
            .should('be.visible').should('exist')
            .should('contain', 'Sign In');
    }

    // Footer

    /**
     * Verify the texts displayed in the footer columns.
     *
     * @static
     * @memberof HomePage
     */
    static verifyFooterColumnsTexts() {

        cy.get(HomeSelectors.footerGeneral, { timeout: 10000 })
            .find(HomeSelectors.footerColumns)
            .should('be.visible').should('exist')
            .eq(0)
            .find('p')
            .should('contain', 'An e-commerce testing platform designed for automated testing purposes.');

        cy.get(HomeSelectors.footerGeneral, { timeout: 10000 })
            .find(HomeSelectors.footerColumns)
            .should('be.visible').should('exist')
            .eq(1)
            .find('h3')
            .should('contain', 'Quick Links');

        cy.get(HomeSelectors.footerGeneral, { timeout: 10000 })
            .find(HomeSelectors.footerColumns)
            .should('be.visible').should('exist')
            .eq(1)
            .find('ul > li')
            .should('contain', 'Products')
            .should('contain', 'Cart')
            .should('contain', 'Sign In');

        cy.get(HomeSelectors.footerGeneral, { timeout: 10000 })
            .find(HomeSelectors.footerColumns)
            .should('be.visible').should('exist')
            .eq(2)
            .find('h3')
            .should('contain', 'Test Accounts');

        cy.get(HomeSelectors.footerGeneral, { timeout: 10000 })
            .find(HomeSelectors.footerColumns)
            .should('be.visible').should('exist')
            .eq(2)
            .find('ul > li > span')
            .should('contain', 'Standard:')
            .should('contain', 'Locked:')
            .should('contain', 'Admin:');
    }

    /**
     * Verify the information displayed in the footer bottom section.
     *
     * @static
     * @memberof HomePage
     */
    static verifyFooterBottomInformation() {

        cy.get(HomeSelectors.footerGeneral, { timeout: 10000 })
            .find(HomeSelectors.footerBottomInformation)
            .should('be.visible').should('exist')
            .eq(0)
            .should('contain', '© ')
            .and('contain', '2026')
            .and('contain', ' QA Demo. Built for testing purposes.');

        cy.get(HomeSelectors.footerGeneral, { timeout: 10000 })
            .find(HomeSelectors.footerBottomInformation)
            .should('be.visible').should('exist')
            .eq(1)
            .should('contain', 'Developed by ManiG with ❤');
        // .and('contain', 'ManiG')
        // .and('contain', 'with ❤');
    }

    // #endregion


}