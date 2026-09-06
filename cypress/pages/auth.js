import { AuthSelectors } from '../selectors';

export class AuthPage {

    // #region Verifications

    /**
     * Verifies that the Login URL is correct.
     *
     * @static
     * @memberof AuthPage
     */
    static verifyAuthUrl() {

        cy.url({ timeout: 10000 }).should('include', '/login');
    }

    /**
     * Verifies that the QA element is visible and contains the correct text.
     *
     * @static
     * @memberof AuthPage
     */
    static verifyQAElement() {

        cy.get(AuthSelectors.qaLogoText, { timeout: 10000 }).should('be.visible').should('exist')
            .should('contain', 'QA');
    }

    /**
     * Verifies that the Login Title exist and is correct.
     *
     * @static
     * @memberof AuthPage
     */
    static verifyTitle() {

        cy.get(AuthSelectors.loginTitle, { timeout: 10000 }).should('be.visible').and('contain', 'Welcome Back');
    }

    /**
     * Verifies that the Login Subtitle exists and is correct.
     *
     * @static
     * @memberof AuthPage
     */
    static verifySubtitle() {

        cy.get(AuthSelectors.loginSubtitle, { timeout: 10000 }).should('be.visible').and('contain', 'Sign in to continue to QA Demo');
    }

    /**
     * Verifies that the Test Credentials texts and buttons are visible and correct.
     *
     * @static
     * @memberof AuthPage
     */
    static verifyTestCredentialsTexts() {

        const typeUserCredentials = ['standard', 'locked', 'admin'];

        cy.get(AuthSelectors.testCredentialsText, { timeout: 10000 }).should('be.visible').and('contain', 'Test Credentials');
        cy.get(AuthSelectors.infoIcon, { timeout: 10000 }).should('be.visible').should('exist');

        typeUserCredentials.forEach(typeUser => {
            cy.get(AuthSelectors.credentialsList, { timeout: 10000 }).should('be.visible').should('exist')
                .find(AuthSelectors.credentialsButton(typeUser))
                .should('be.visible').should('exist')
                .should('contain', typeUser.charAt(0).toUpperCase() + typeUser.slice(1) + ' User');
        });
    }

    /**
     * Verifies that the Username field and its icon are visible and correct.
     *
     * @static
     * @memberof AuthPage
     */
    static verifyUsernameField() {

        cy.get(AuthSelectors.usernameText, { timeout: 10000 }).should('be.visible').should('exist')
            .and('contain', 'Username');

        cy.get(AuthSelectors.usernameInput, { timeout: 10000 }).should('be.visible').should('exist');

        cy.get(AuthSelectors.usernameIcon, { timeout: 10000 }).should('be.visible').should('exist');
    }

    /**
     * Verifies that the Password field and its icon are visible and correct.
     *
     * @static
     * @memberof AuthPage
     */
    static verifyPasswordField() {

        cy.get(AuthSelectors.passwordText, { timeout: 10000 }).should('be.visible').should('exist')
            .and('contain', 'Password');

        cy.get(AuthSelectors.passwordInput, { timeout: 10000 }).should('be.visible').should('exist');

        cy.get(AuthSelectors.passwordIcon, { timeout: 10000 }).should('be.visible').should('exist');
    }

    /**
     * Verifies that the error message is visible and contains the correct text.
     *
     * @static
     * @memberof AuthPage
     */
    static verifyErrorMessage(errorMessage) {

        cy.get(AuthSelectors.errorMessageText, { timeout: 10000 })
            .should('be.visible').should('exist')
            .and('contain', errorMessage);
    }

    /**
     * Verifies that the error message for the specified invalid field is visible and correct.
     *
     * @static
     * @param {string} invalidField
     * @memberof AuthPage
     */
    static verifyInvalidField(invalidField) {

        const invalidFieldSelector = invalidField === 'username' ? 
            AuthSelectors.usernameInput : AuthSelectors.passwordInput;
        const errorMessage = invalidField === 'username' ? 'Username is required' : 'Password is required';

        cy.get(invalidFieldSelector, { timeout: 10000 }).should('have.class', 'border-red-500');

        cy.get(AuthSelectors.invalidField, { timeout: 10000 })
            .should('be.visible').should('exist')
            .and('contain', errorMessage);
    }

    /**
     * Verifies that the Sign In and Back buttons are visible and exist.
     *
     * @static
     * @memberof AuthPage
     */
    static verifyButtonsExist() {

        cy.get(AuthSelectors.signInButton, { timeout: 10000 }).should('be.visible').should('exist');
        cy.get(AuthSelectors.backButton, { timeout: 10000 }).should('be.visible').should('exist');
    }

    /**
     * Verifies that all static elements on the authentication page are visible and exist.
     *
     * @static
     * @memberof AuthPage
     */
    static verifyAllStaticElements() {

        this.verifyQAElement();
        this.verifyTitle();
        this.verifySubtitle();
        this.verifyTestCredentialsTexts();
        this.verifyUsernameField();
        this.verifyPasswordField();
        this.verifyButtonsExist();
    }

    // #endregion

    // #region Inputs

    /**
     * Types the specified username into the Username field.
     *
     * @static
     * @param {string} username
     * @memberof AuthPage
     */
    static typeUsernameField(username) {

        this.verifyUsernameField();

        cy.get(AuthSelectors.usernameInput, { timeout: 10000 })
            .should('be.visible').should('exist')
            .should('have.attr', 'placeholder', 'Enter your username')
            .clear({ force: true })
            .type(username, { delay: 100 , force: true });
    }

    /**
     * Types the specified password into the Password field.
     *
     * @static
     * @param {string} password
     * @memberof AuthPage
     */
    static typePasswordField(password) {

        this.verifyPasswordField();

        cy.get(AuthSelectors.passwordInput, { timeout: 10000 })
            .should('be.visible').should('exist')
            .should('have.attr', 'placeholder', 'Enter your password')
            .clear({ force: true })
            .type(password, { delay: 100 , force: true });
    }

    // #endregion

    // #region Buttons

    /**
     * Clicks the Sign In button.
     *
     * @static
     * @memberof AuthPage
     */
    static clickSignInButton() {

        cy.get(AuthSelectors.loginIcon, { timeout: 10000 }).should('be.visible').should('exist');

        cy.get(AuthSelectors.signInButton, { timeout: 10000 })
            .should('be.visible').should('exist')
            .click({ force: true });
    }

    /**
     * Clicks the Back button.
     *
     * @static
     * @memberof AuthPage
     */
    static clickBackButton() {

        cy.get(AuthSelectors.backButton, { timeout: 10000 })
            .should('be.visible').should('exist')
            .should('contain', '← Back to Home');


        cy.get(AuthSelectors.backButton, { timeout: 10000 })
            .should('be.visible').should('exist')
            .click({ force: true });
    }

    /**
     * Clicks the QA button.
     *
     * @static
     * @memberof AuthPage
     */
    static clickQAButton() {

        cy.get(AuthSelectors.qaButton, { timeout: 10000 })
            .should('be.visible').should('exist')
            .click({ force: true });
    }

    // #endregion

    // #region Credentials

    /**
     * Clicks on the specified user credential button.
     *
     * @static
     * @param {string} typeUser
     * @memberof AuthPage
     */
    static clickCredential(typeUser) {

        cy.get(AuthSelectors.credentialsList, { timeout: 10000 }).should('be.visible').should('exist')
            .find(AuthSelectors.credentialsButton(typeUser))
            .should('be.visible').should('exist')
            .should('have.attr', 'aria-label', `Fill ${typeUser.charAt(0).toUpperCase() + typeUser.slice(1)} User credentials`)
            .click({ force: true });
    }

    /**
     * Clicks on the Standard User credential button.
     *
     * @static
     * @memberof AuthPage
     */
    static clickStandardUserCredential() {

        this.clickCredential('standard');
    }

    /**
     * Clicks on the Locked User credential button.
     *
     * @static
     * @memberof AuthPage
     */
    static clickLockedUserCredential() {

        this.clickCredential('locked');
    }

    /**
     * Clicks on the Admin User credential button.
     *
     * @static
     * @memberof AuthPage
     */
    static clickAdminUserCredential() {

        this.clickCredential('admin');
    }

    /**
     * Retrieves the username and password for the specified user type.
     * The returned object contains the `username` and `password` properties.
     *
     * @static
     * @param {string} typeUser
     * @return {Object} An object containing the `username` and `password` properties.
     * @memberof AuthPage
     */
    static getCredential(typeUser) {

        return cy.get(AuthSelectors.credentialsList, { timeout: 10000 }).should('be.visible').should('exist')
            .find(AuthSelectors.credentialsButton(typeUser))
            .should('be.visible').should('exist')
            .find(AuthSelectors.userCredentialsInfo(typeUser))
            .invoke('text').then(credentialText => {
                const username = credentialText.trim().split(' / ')[0];
                const password = credentialText.trim().split(' / ')[1];
                return { username, password };
            })
    }

    // #endregion

}