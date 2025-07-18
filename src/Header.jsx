function Header () {
  return (
    <header> 
        <h1 className >PDFSITE</h1>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Help</a></li>
          </ul>
        </nav>
        <style jsx>{`
            header {
          nav ul {
            list-style: none;
            padding: 0;
          }
          nav li {
            display: inline;
            margin-right: 15px;
          }
          nav a {
            color: white;
            text-decoration: none;
          }
        `}</style>
    </header>
  ); 
}
export default Header;