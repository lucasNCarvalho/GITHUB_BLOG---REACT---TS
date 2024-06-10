import Cover from '../../assets/Cover.svg'
import { HeaderContainer } from './styles'

export const Header = () => {
  return (
    <HeaderContainer>
      <img src={Cover} alt="" />
    </HeaderContainer>
  )
}
