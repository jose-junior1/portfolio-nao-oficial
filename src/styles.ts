import styled, { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding:0;
    box-sizing: border-box;
    font-family: "Inter", sans-serif;
    list-style: none;
  }

  body {
    padding: 80px 0;

    @media (max-width: 768px) {
      padding: 16px 0;
    }
  }
`
export default EstiloGlobal

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 128px auto;
  column-gap: 56px;
`
