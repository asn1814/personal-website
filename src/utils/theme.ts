import styled from 'styled-components'; 

export const THEME_COLORS = {
  brandDark: '#352F44',
  brandMid: '#5C5470',
  brandLight: '#B9B4C7',
  brandWhite: '#FAF0E6',
};

export const InlineLink = styled.a`
  color: ${THEME_COLORS.brandWhite};
  text-decoration: underline transparent 1px;
  background-color: transparent;
  font-style: italic;
  transition: text-decoration 0.3s ease;
  &:hover {
    text-decoration: underline solid 1px;
  }
`;