
const generateHeader = (breadcrumbs) => {
    const _html = `<header class="header-container">
    <div class="header-row-top">
        <a href="./models" class="logo-link">
            <img src="./imgs/home-icon.svg" width="100" alt="модели">
            <div>модели</div>
        </a>
        <a id="header-hamburger" class="header-hamburger">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                <path d="M19.9 30.4h60.3v9H19.9V30.4zM19.9 45.5h60.3v9H19.9V45.5zM19.9 60.5h60.3v9H19.9V60.5z" />
            </svg>
        </a>
        <nav id="header-navigation" class="header-navigation">
            <a href="./configurator" class="navigation-link">
                <img src="./imgs/yarn-icon.svg" width="50" alt="гаправи си шапка">
                <div>конфигуратор</div>
            </a>
            <a href="./gallery" class="navigation-link">
                <img src="./imgs/camera-icon.svg" width="50" alt="галерия">
                <div>галерия</div>
            </a>
            <a href="./blog" class="navigation-link">
                <img src="./imgs/feather-icon.svg" width="50" alt="блог">
                <div>блог</div>
            </a>
            <a href="./qanda" class="navigation-link">
                <img src="./imgs/question-icon.svg" width="50" alt="въпроси">
                <div>въпроси</div>
            </a>
            <a href="./contacts" class="navigation-link">
                <img src="./imgs/circles-icon.svg" width="50" alt="контакти">
                <div>контакти</div>
            </a>
            <a href="./about" class="navigation-link">
                <img src="./imgs/logo-gray.svg" width="50" alt="за нас">
                <div>за нас</div>
            </a>
        </nav>
    </div>
    <div class="header-row-bottom">
        ${breadcrumbs.join(' » ')}
    </div>
</header>
`
    document.write(_html);
};

