import { HeaderContainer } from "./styles";

// eslint-disable-next-line react/prop-types
function Header({children}) {
  return (
    <HeaderContainer>
        <h1>Tec<span>Blog</span></h1>
        {children}
    </HeaderContainer>
  )
}

export default Header