import styled from "styled-components";
import { mixins } from "../../styles/mixins";

const breakpoints = {
  mobile: '480px',
  tablet: '768px',
  desktop: '1024px',
  desktopLG: ''
};


export const IssueContainer = styled.div`
    margin-left: 2rem;
    margin-right: 2rem;

    @media (min-width: ${breakpoints.desktop}) {
    margin-left: 10rem;
    margin-right: 10rem;
  }
`

export const IssueInfoContainer = styled.section`
    padding: 2rem;
    border-radius: 8px;
    background: ${(props) => props.theme.base_profile};

    @media (min-width: ${breakpoints.tablet}) {
    margin-top: -5.5rem;
  }
`

export const IssueInfoHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${(props) => props.theme.blue};

  h1 {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font: ${mixins.fonts.link};
  }

  span {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font: ${mixins.fonts.link};
  }
`

export const IssueInfoContent = styled.p`
  padding-top: 1.25rem;
  font: ${mixins.fonts.titleL};
  color: ${(props) => props.theme.base_title};

`

export const IssueInfoFotter = styled.div`
      display: flex;
      align-items: center;
      justify-content: start;
      flex-direction: column;
      padding-top: 0.5rem;
      gap: 2rem;
      color: ${(props) => props.theme.base_span};

     p {
        display: flex;
        gap: 0.5rem;
      }

      @media (min-width: ${breakpoints.tablet}) {
        flex-direction: row;
  }

`

export const Description = styled.div`
  margin-top: 2.5rem;
  padding: 0 2rem;
  color: ${(props) => props.theme.base_Text};

  p {
    font: ${mixins.fonts.titleM};
  }
`