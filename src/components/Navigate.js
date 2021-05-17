const Navigate = () => {

    const anchorHide = {
        height: "1px",
        width: "1px",
        position: "absolute",
        overflow: "hidden",
        top: "-10px",
    }

    return (
        <nav className="uk-navbar-container uk-margin uk-navbar" uk-navbar data-uk-sticky>
            <div className="uk-navbar-left">
                <div className="uk-navbar-nav">
                    <a class="uk-navbar-item uk-logo" href="index.html">
                        Brent Basiano
                    </a>
                </div>
            </div>
            <div className="uk-navbar-center">
                <ul 
                    className="uk-navbar-nav uk-visible@s"
                    uk-scrollspy-nav="closest: li; scroll:true; offset: 100"    
                >
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                </ul>
            </div>
            <div className="uk-navbar-right">
                <ul className="uk-navbar-nav uk-visible@s">
                    <li><a href="https://github.com/renbrent" target="_blank" rel="noopener noreferrer" className="uk-icon-hover" uk-icon="github"><span style={anchorHide}></span></a></li>  
                    <li><a href="https://www.linkedin.com/in/brentbasiano/" target="_blank" rel="noopener noreferrer" className="uk-icon-hover" uk-icon="linkedin"><span style={anchorHide}></span></a></li>
                    <li><a href="mailto:brentarnold.basiano@gmail.com" className="uk-icon-hover" uk-icon="mail"><span style={anchorHide}></span></a></li>                  
                </ul>
                <a href="#offcanvas" className="uk-navbar-toggle uk-hidden@s" uk-icon="menu" uk-toggle="target: #offcanvas"><span style={anchorHide}></span></a>
            </div>
            <div id="offcanvas" uk-offcanvas="flip: true; overlay: false">
                <div class="uk-offcanvas-bar">
                    <button class="uk-offcanvas-close" type="button" uk-icon="close"></button>
                    <ul 
                        class="uk-nav uk-nav-primary uk-nav-center uk-margin-auto-vertical"
                        uk-scrollspy-nav="closest: li; scroll:true; offset: 100"
                    >
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li class="uk-nav-header"><h4>Connect</h4></li>
                        <li><a href="https://github.com/renbrent" target="_blank" rel="noopener noreferrer" className="uk-icon-hover" uk-icon="github"><span style={anchorHide}></span></a></li>  
                        <li><a href="https://www.linkedin.com/in/brentbasiano/"  target="_blank" rel="noopener noreferrer"className="uk-icon-hover" uk-icon="linkedin"><span style={anchorHide}></span></a></li>
                        <li><a href="mailto:brentarnold.basiano@gmail.com" className="uk-icon-hover" uk-icon="mail"><span style={anchorHide}></span></a></li>   
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navigate
