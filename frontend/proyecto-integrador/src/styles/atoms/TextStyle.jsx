import styled from "styled-components";

export const Heading1 = styled.h1`
font-size: 1.5rem; //24px
color: ${props => props.textColor};
`;

export const Heading2 = styled.h1`
font-size: 1.3rem; // 20px
color: ${props => props.textColor};
`;

export const Heading3 = styled.h1`
font-size: 1rem; // 16px
color: ${props => props.textColor};
`;

export const Heading4 = styled.h1`
font-size: 0.9rem; // 14px
color: ${props => props.textColor};
`;

export const Text1 = styled.p`
font-size: 0.9rem; // 14px
font-weight: 500;
color: ${props => props.textColor};
`;

export const Text2 = styled.p`
font-size: 0.75rem; // 12px
font-weight: 500;
color: ${props => props.textColor};
`;