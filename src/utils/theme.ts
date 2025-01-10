import styled from 'styled-components'; 

export const THEME_COLORS = {
  brandDark: '#352F44',
  brandMid: '#5C5470',
  brandLight: '#B9B4C7',
  brandWhite: '#FAF0E6',
};

export const InlineLink = styled.a`
  color: ${THEME_COLORS.brandWhite};
  -webkit-text-decoration-line: underline;
  -webkit-text-decoration-color: transparent;
  -webkit-text-decoration-thickness: 1px;
  text-decoration: underline transparent 1px;
  background-color: transparent;
  font-style: italic;
  transition: text-decoration 0.3s ease;
  &:hover {
    -webkit-text-decoration-color: ${THEME_COLORS.brandWhite};
    text-decoration: underline solid 1px;
  }
`;

export const Line = styled.div`
  width: 100%;
  position: sticky;
  top: 0;
  margin: 0px;
  padding: 0px;
  border-top: solid 0.5px;
  border-color: ${THEME_COLORS.brandWhite}36;
`

export const Paragraph = styled.p`
  font-size: 16px;
`;
