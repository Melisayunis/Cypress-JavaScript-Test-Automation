import { AuthPage, HomePage, CatalogPage } from '../pages';


describe('Login Validations', () => {

    const standardUser = 'standard';
    const adminUser = 'admin';
    const lockedUser = 'locked';

    beforeEach(() => {
        HomePage.visit();
        HomePage.clickSignInButtonNavbar();
        AuthPage.verifyAuthUrl();
        AuthPage.verifyAllStaticElements();
    });

    afterEach(() => {
        cy.clearCookies();
        cy.clearLocalStorage();
    });

    context('Valid Login', () => {

        it('Verify that the user can login with typing valid credentials: Standard User', { tags: ['@smoke', '@auth'] }, () => {

            AuthPage.getCredential(standardUser).then(({ username, password }) => {
                AuthPage.typeUsernameField(username);
                AuthPage.typePasswordField(password);
                AuthPage.clickSignInButton();
                CatalogPage.verifyUrl();
                HomePage.verifyUserNameNavbar(username);
            });
        });

        it('Verify that the user can login with typing valid credentials: Admin User', { tags: ['@smoke', '@auth'] }, () => {

            AuthPage.getCredential(adminUser).then(({ username, password }) => {
                AuthPage.typeUsernameField(username);
                AuthPage.typePasswordField(password);
                AuthPage.clickSignInButton();
                CatalogPage.verifyUrl();
                HomePage.verifyUserNameNavbar(username);
            });
        });

        it('Verify that the user can login with Clicking Valid Credentials: Standard User', { tags: ['@auth'] }, () => {

            AuthPage.getCredential(standardUser).then(({ username, password }) => {
                AuthPage.clickStandardUserCredential();
                AuthPage.clickSignInButton();
                CatalogPage.verifyUrl();
                HomePage.verifyUserNameNavbar(username);
            });
        });

        it('Verify that the user can login with Clicking Valid Credentials: Admin User', { tags: ['@auth'] }, () => {

            AuthPage.getCredential(adminUser).then(({ username, password }) => {
                AuthPage.clickAdminUserCredential();
                AuthPage.clickSignInButton();
                CatalogPage.verifyUrl();
                HomePage.verifyUserNameNavbar(username);
            });
        });

    });

    context('Invalid Login', () => {

        it('Verify that the user cannot login with a Locked User', { tags: ['@smoke', '@auth'] }, () => {

            AuthPage.getCredential(lockedUser).then(({ username, password }) => {
                AuthPage.typeUsernameField(username);
                AuthPage.typePasswordField(password);
                AuthPage.clickSignInButton();

                AuthPage.verifyErrorMessage('Account is locked');
            });
        });

        it('Verify that the user cannot login with Empty Username', { tags: ['@auth'] }, () => {

            AuthPage.getCredential(standardUser).then(({ username, password }) => {
                AuthPage.typePasswordField(password);
                AuthPage.clickSignInButton();
                AuthPage.verifyInvalidField('username');
            });
        });

        it('Verify that the user cannot login with Empty Password', { tags: ['@auth'] }, () => {

            AuthPage.getCredential(standardUser).then(({ username, password }) => {
                AuthPage.typeUsernameField(username);
                AuthPage.clickSignInButton();

                AuthPage.verifyInvalidField('password');
            });
        });

        it('Verify that the user cannot login with both Username and Password Empty', { tags: ['@smoke', '@auth'] }, () => {

            AuthPage.clickSignInButton();

            AuthPage.verifyInvalidField('username');
            AuthPage.verifyInvalidField('password');
        });

        it('Verify that the user cannot login with Invalid Username', { tags: ['@smoke', '@auth'] }, () => {

            const invalidUsername = 'invalidUser';

            AuthPage.getCredential(standardUser).then(({ username, password }) => {
                AuthPage.typeUsernameField(invalidUsername);
                AuthPage.typePasswordField(password);
                AuthPage.clickSignInButton();

                AuthPage.verifyErrorMessage('Invalid username or password');
            });
        });

        it('Verify that the user cannot login with Invalid Password', { tags: ['@smoke', '@auth'] }, () => {

            const invalidPassword = 'invalidPass';

            AuthPage.getCredential(standardUser).then(({ username, password }) => {
                AuthPage.typeUsernameField(username);
                AuthPage.typePasswordField(invalidPassword);
                AuthPage.clickSignInButton();

                AuthPage.verifyErrorMessage('Invalid username or password');
            });
        });

        it('Verify that the user cannot login with both Invalid Username and Password', { tags: ['@auth'] }, () => {

            const invalidUsername = 'invalidUser2';
            const invalidPassword = 'invalidPass3';

            AuthPage.typeUsernameField(invalidUsername);
            AuthPage.typePasswordField(invalidPassword);
            AuthPage.clickSignInButton();

            AuthPage.verifyErrorMessage('Invalid username or password');
        });

    });

    context('Log out Validations', () => {

        it('Verify that the Standard user can Log Out successfully', { tags: ['@smoke', '@auth'] }, () => {

            AuthPage.getCredential(standardUser).then(({ username, password }) => {
                AuthPage.typeUsernameField(username);
                AuthPage.typePasswordField(password);
                AuthPage.clickSignInButton();
                CatalogPage.verifyUrl();
                HomePage.verifyUserNameNavbar(username);

                HomePage.clickLogoutButton();
                HomePage.verifyHomeUrl();
            });
        });

        it('Verify that the Admin user can Log Out successfully', { tags: ['@smoke', '@auth'] }, () => {

            AuthPage.getCredential(adminUser).then(({ username, password }) => {
                AuthPage.typeUsernameField(username);
                AuthPage.typePasswordField(password);
                AuthPage.clickSignInButton();
                CatalogPage.verifyUrl();
                HomePage.verifyUserNameNavbar(username);

                HomePage.clickLogoutButton();
                HomePage.verifyHomeUrl();
            });
        });

        it('Verify that the user cannot access the Log out Button before log in', { tags: ['@smoke', '@auth'] }, () => {
            HomePage.verifyLogoutButtonNotVisible();
        });

    });

});