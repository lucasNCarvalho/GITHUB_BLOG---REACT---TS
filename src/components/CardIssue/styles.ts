import styled from "styled-components";
import { mixins } from "../../styles/mixins";


const breakpoints = {
    mobile: '480px',
    tablet: '768px',
    desktop: '1024px',
  
  };

export const CardContainer = styled.div`
    background: ${(props) => props.theme.base_post};
    padding: 2rem; 
    max-width: 20rem;
    border-radius: 8px;
    cursor: pointer;

    div {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;

        h1 {
            font: ${mixins.fonts.titleM};
            color: ${(props) => props.theme.base_title};
            max-width: 17.68rem;
        }

        span {
            padding-top: 0.30rem;
            font: ${mixins.fonts.textS};
            color: ${(props) => props.theme.base_span};
            
        }
    }


    p {
        margin-top: 1.25rem;
        font: ${mixins.fonts.textM};
        color: ${(props) => props.theme.base_Text};
    }


    @media (min-width: ${breakpoints.tablet}) {
        width: 26rem;
  }
`