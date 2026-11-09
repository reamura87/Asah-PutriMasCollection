import './style/header.css'

    function Header() {
    return (
        <header>
            <div className="header-content">
                <h1>Putrimas Collection</h1>
                <p>Next Generation Frontend Tooling</p>
            </div>

            <div className="Navigation">
            <ul>
                <li><a href="#center">Home</a></li>
                <li><a href="#Products">Products</a></li>
                <li><a href="#About">About</a></li>
                <li><a href="#Contact">Contact</a></li>
            </ul>
            </div>
        </header>
    )
    
}

export default Header;