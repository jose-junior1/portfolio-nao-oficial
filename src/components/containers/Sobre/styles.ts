import styled from 'styled-components'

export const GitHubSecao = styled.div`
  margin: 32px 0 64px 0;
  display: flex;
  gap: 16px;

  img {
    flex: 1;
    height: 157px;
    width: 100%;
    object-fit: contain;
  }

  @media (max-width: 768px) {
    flex-direction: column;

    img {
      height: auto;
      width: 100%;
    }
  }
`
