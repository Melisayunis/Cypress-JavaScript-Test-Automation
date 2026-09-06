export const AuthSelectors = {

    // #region Texts

    qaLogoText: '.text-center a[data-testid="logo-link"] span.text-xl',
    loginTitle: '.text-center h1[data-testid="login-heading"]',
    loginSubtitle: '.text-center p.mt-2.text-slate-600',

    usernameText: '[data-testid="login-form"] label[for="username"]',
    passwordText: '[data-testid="login-form"] label[for="password"]',
    testCredentialsText: '.mb-3 > span.font-medium',

    errorMessageText: 'div[data-testid="login-error"] > p[data-testid="login-error-message"]',

    invalidField: '.text-red-600',

    // #endregion

    // #region Inputs

    usernameInput: '[data-testid="login-form"] input#username',
    passwordInput: '[data-testid="login-form"] input#password',

    // #endregion

    // #region Buttons

    qaButton: 'a[data-testid="logo-link"]',
    signInButton: '[data-testid="login-form"] button[data-testid="login-submit-button"]', // aria-label="Sign in" 
    backButton: 'a[data-testid="back-to-home-link"]',

    // #endregion

    // #region Credentials

    credentialsList: '.mt-6 [data-testid="test-credentials-list"]',
    credentialsButton: (typeUSer) => `button[data-testid="test-credential-${typeUSer}_user"]`,
    userCredentialsText: 'span.font-medium',
    userCredentialsInfo: (typeUSer) => `[data-testid="credential-info-${typeUSer}_user"]`,

    // #endregion

    // #region Icons

    usernameIcon: 'svg.lucide-user',
    passwordIcon: 'svg.lucide-lock',
    loginIcon: 'svg.lucide-log-in',
    infoIcon: '.mb-3 > svg.lucide-info',
    errorIcon: 'svg.lucide-circle-alert',

    // #endregion

};