import { Link } from 'react-router-dom'
import Cover from '../../assets/Cover.svg'
import { HeaderContainer } from './styles'

export const Header = () => {
  return (
    <Link to={'/'}>
      <HeaderContainer>
        <img src={Cover} alt="" />
      </HeaderContainer>
    </Link>
  )
}
