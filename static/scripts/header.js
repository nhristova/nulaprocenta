
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
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 100 100">
                    <style>
                        .a {
                            fill: #999;
                        }
            
                        .b {
                            fill: none;
                            stroke-width: 4;
                            stroke: #FFF;
                        }
                        .c {
                            fill: #999;
                        }
                    </style>
                    <circle cx="50" cy="50" r="47.5" class="c" />
                    <path
                        d="M78.4 71.6c0 3.7-3.1 6.8-6.8 6.8H28.4c-3.7 0-6.8-3.1-6.8-6.8V28.4c0-3.7 3.1-6.8 6.8-6.8H71.6c3.7 0 6.8 3.1 6.8 6.8V71.6z"
                        class="a" />
                    <path
                        d="M78.4 71.6c0 3.7-3.1 6.8-6.8 6.8H28.4c-3.7 0-6.8-3.1-6.8-6.8V28.4c0-3.7 3.1-6.8 6.8-6.8H71.6c3.7 0 6.8 3.1 6.8 6.8V71.6z"
                        class="b" />
                    <path
                        d="M73.7 32c0 0.9-0.8 1.7-1.7 1.7h-4c-0.9 0-1.7-0.8-1.7-1.7V28c0-0.9 0.8-1.7 1.7-1.7h4c0.9 0 1.7 0.8 1.7 1.7v4H73.7z"
                        class="a" />
                    <path
                        d="M73.7 32c0 0.9-0.8 1.7-1.7 1.7h-4c-0.9 0-1.7-0.8-1.7-1.7V28c0-0.9 0.8-1.7 1.7-1.7h4c0.9 0 1.7 0.8 1.7 1.7v4H73.7z"
                        style="fill:none;stroke-width:3;stroke:#FFF" />
                    <line x1="21.6" y1="38.2" x2="78.4" y2="38.2" class="b" />
                    <circle cx="50" cy="50" r="15.5" class="a" style="stroke-width:4;stroke:#FFF" />
                </svg>
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

