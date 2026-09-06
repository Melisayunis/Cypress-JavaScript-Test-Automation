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

    static clickSignInButtonNavbar() {

        cy.get('[data-testid="navbar-signin-link"]', { timeout: 10000 })
            .should('be.visible').should('exist')
            .click({ force: true });

    }

    static clickSignInButtonHome() {

        cy.get('[data-testid="hero-signin-button"]', { timeout: 10000 })
            .should('be.visible').should('exist')
            .click({ force: true });
    }

    static clickSignInButtonFooter() {



    }

    static clickSignInButtonCard() {

    }

    /**
     * Click the logout button in the navbar.
     *
     * @static
     * @memberof HomePage
     */
    static clickLogoutButton() {

        cy.get('[data-testid="navbar-logout-button"]', { timeout: 10000 })
            .should('be.visible').should('exist')
            .click({ force: true });

        // icon
    }

    /**
     *
     *
     * @static
     * @memberof HomePage
     */
    static verifyLogoutButtonNotVisible() {

        cy.get('[data-testid="navbar-logout-button"]', { timeout: 10000 })
            .should('not.exist');
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

        cy.get('[data-testid="navbar-username"]', { timeout: 10000 })
            .should('be.visible').should('exist')
            .and('have.text', username);
    }

    

    // #endregion


}