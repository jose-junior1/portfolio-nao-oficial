import styled from 'styled-components'

export const FotoPerfil = styled.img`
  max-width: 100%;
  border-radius: 50%;
  margin-bottom: 24px;

  @media (max-width: 768px) {
    img {
      border-radius: 0;
      width: 100%;
    }
  }
`
