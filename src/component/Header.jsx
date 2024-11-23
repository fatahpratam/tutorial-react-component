import './header.css';

function Header(
  {
    header = "Header",
    link1: {
      text1 = 'Link 1',
      href1 = '#'
    } = {},
    link2: {
      text2 = 'Link 2',
      href2 = '#'
    } = {},
    link3: {
      text3 = 'Link 3',
      href3 = '#'
    } = {},
  }
) {
  return (
    <div className="header">
      <h1 className="header__h1">{header}</h1>
      <ul className="header__ul">
        <li><a href={href1} className="header__link">{text1}</a></li>
        <li><a href={href2} className="header__link">{text2}</a></li>
        <li><a href={href3} className="header__link">{text3}</a></li>
      </ul>
    </div>
  )
}

export default Header;