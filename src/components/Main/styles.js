import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;

  background: ${props => props.theme === 'dark' ? 
                'linear-gradient(180deg, rgba(24,17,110,1) 0%, rgba(17,45,110,1) 35%, rgba(17,76,110,1) 100%)': 
                'linear-gradient(180deg, rgba(238,173,45,1) 0%, rgba(238,201,45,1) 35%, rgba(238,221,45,1) 100%)'
              };
`;

export const Header = styled.header`
  display: flex;
  width: 100%;
  padding: 1rem;
  align-items: center;

  span {
    padding: 1rem;
    font-size: 1.2rem;
    text-transform: capitalize;
    color: ${props => props.theme === 'dark' ? '#fff' : '#222'};
  }
`;

export const Content = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
