import styled from "styled-components";
import { mixins } from "../../styles/mixins";

const breakpoints = {
  mobile: '375px',
  tablet: '768px',
  desktop: '1024px',
  desktopLG: ''
};


export const HomeContainer = styled.div`
    padding-left: 2rem;
    padding-right: 2rem;

    @media (min-width: ${breakpoints.desktop}) {
    padding-left: 10rem;
    padding-right: 10rem;
  }

`

export const ProfileContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: ${(props) => props.theme.base_profile};
    padding: 2rem;
    width: 100%;
    border-radius: 8px;
   
    
    h1 {
        color: ${(props) => props.theme.base_title};
        font: ${mixins.fonts.titleL};
    }
    
    img {
        margin-left: 0.5rem;
        width: 148px;
        object-fit: contain;
        border-radius: 8px;
    }

    section {
        width: 100%;
        margin-left: 2rem;
    }

    p {
      cursor: pointer;
       margin-top: 0.5rem;;
       color: ${(props) => props.theme.base_Text};
    }

    span {
        color: ${(props) => props.theme.blue};
        font: ${mixins.fonts.link};
        cursor: pointer;
    }

    @media (min-width: ${breakpoints.tablet}) {
    flex-direction: row;
    margin-top: -5.5rem;
  }
`

export const ProfileHeader = styled.div`
    width: 100%;
    display: flex;
    margin-top: 1rem;
    align-items: center;
    justify-content: space-between;
`

export const ProfileFooter = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin-top: 1.5rem;

    p {
      display: flex;
      flex-direction: column;
      align-items: center;
      font: ${mixins.fonts.textM};

      span {
        font: ${mixins.fonts.textM};
        color: ${(props) => props.theme.base_subititle};
      }
    }

    @media (min-width: ${breakpoints.tablet}) {
    justify-content: center;
    flex-direction: row;
    gap: 1.5rem;

    p {   
        flex-direction: row;
        gap: 0.5rem;

    }
  }
    
    @media (min-width: ${breakpoints.tablet}) {
    justify-content: start;
    gap: 1.5rem;

    p {   
        flex-direction: row;
        gap: 0.5rem;

    }

  }
`

export const SearchContainer = styled.div`

  margin-top: 4.5rem;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
      font: ${mixins.fonts.titleS};
      color: ${(props) => props.theme.base_subititle};
    }

    span {
      font: ${mixins.fonts.textS};
      color: ${(props) => props.theme.base_span};;
    }
  }


  input {
    border: 0;
    color: ${(props) => props.theme.white};;
    background: ${(props) => props.theme.base_input};
    margin-top: 0.75rem;
    width: 100%;
    padding: 0.75rem 1rem;
    border-width: 2px;
    border-radius: 8px;
    border-style: solid;
    border-color: ${(props) => props.theme.base_border};
  }

  input::placeholder {
    color: ${(props) => props.theme.base_label};
  }

`

export const IssueContainer = styled.div`

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));

  padding-top: 3rem;
  margin-bottom: 14.62rem;
  gap: 2rem;

`

