import styled from 'styled-components';

export const ProjectContainer = styled.article`
    margin: 0;
    width: 100%;
    display: flex;
    flex-direction: column;

    @media (min-width: 768px) {
        flex-direction: row;
    }

`;

export const ProjectTitle = styled.h3`
    font-size: 1.5em;
    font-weight: bolder;
    margin: 0;
`;

export const ProjectLinks = styled.nav`
    margin: 0;

    & > * {
        margin: 0 0.25em ;
    }
`;

export const ProjectSummary = styled.summary`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin: 0;
    padding: 0 1em;
    order: 2;

    @media (min-width: 768px) {
        width: 50%;
    }

`;

export const ProjectParagraph = styled.p`
    margin: 0;
    text-align: justify;
    padding: 1em;
`;

export const ProjectImg = styled.img`
   width: 100%;
   padding: 0;
   order: 1;

   @media (min-width: 768px) {
    width: 50%;
    order: ${props => props.invertOrder ? 3 : 1};
    }
`;