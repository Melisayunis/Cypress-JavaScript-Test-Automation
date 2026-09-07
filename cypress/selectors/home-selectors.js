export const HomeSelectors = {

    // #region Navbar

    navbarGeneral: '[data-testid="navbar"]',
    navbarLogo: 'a[data-testid="navbar-logo"]',
    navbarProducts: '[data-testid="navbar-desktop-menu"] > [data-testid="navbar-products-link"]', // Products
    navbarCart: 'a[data-testid="navbar-cart-link"]',
    navbarSignIn: 'a[data-testid="navbar-signin-link"] > button',
    navbarLogout: '[data-testid="navbar-logout-button"]',
    navbarAdmin: '[data-testid="navbar-admin-link"]',
    navbarUsername: '[data-testid="navbar-username"]',

    // #endregion

    // #region Footer

    footerGeneral: 'footer',

    // Columns
    footerColumns: '.grid > div',
    footerColumnElement: index => `ul > li:nth-child(${index}) > a`,

    // Bottom information
    footerBottomInformation: '.mt-8 p',

    // #endregion

    // #region General Page

    signInLink: '[href="/login"]',
    catalogLink: '[href="/catalog"]',

    homeGeneral: 'main > [data-testid="home-page"]',
    homeHeroBadge: '[data-testid="hero-section"] [data-testid="hero-badge"]',
    homeHeroTitle: 'h1[data-testid="hero-heading"]',
    homeHeroDescription: '[data-testid="hero-description"]',
    homeHeroActions: '[data-testid="hero-actions"]',
    homeHeroBrowse: '[data-testid="browse-products-button"]',
    homeHeroSignIn: '[data-testid="hero-signin-button"]',

    homeTextCenter: '.py-16 .gap-8 .text-center',

    homeFeatureProducts: '.py-20 .max-w-7xl',
    homeFeatureProductsViewAllButton: 'a[href="/catalog"]',

    homeFeatureProductElement: '[role="listitem"]',

    // Start testing bottom section Logout
    homeStartSection: '.py-20.bg-gradient-to-br',



    // Start testing bottom section Login


    // #endregion

    // #region Icons

    cartIcon: 'svg.lucide-shopping-cart',
    logoutIcon: 'svg.lucide-log-out',
    adminIcon: 'svg.lucide-settings',
    heroIcon: 'svg.lucide-zap'

    // #endregion

};