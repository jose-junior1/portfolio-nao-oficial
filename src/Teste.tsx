import styled, { css } from 'styled-components'

type BotaoProps = {
  principal?: boolean
  fontSize?: string
}

const Btn = styled.button<BotaoProps>`
  background-color: ${(props) => (props.principal ? 'green' : 'red')};
  font-size: ${(props) => props.fontSize || '16px'};
  padding: 16px;
  border: none;
  color: #fff;
  margin: 8px;
  cursor: pointer;

  span {
    text-transform: uppercase;
    text-decoration: line-through;
  }
`
const iconStyles = css`
  height: 80px;
  width: 80px;
  background-size: cover;
  background-color: transparent;
`

const BtnDanger = styled(Btn)`
  background-image: url('https://png.pngtree.com/png-clipart/20221220/original/pngtree-vector-danger-icon-clipart-transparent-background-png-image_8789512.png');
  ${iconStyles}
`
const BtnWarning = styled(Btn)`
  background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGQARYK9tpBfHq10xo_CsQZ7lnVgJaOh2WkA&s');
  ${iconStyles}
`

function Teste() {
  return (
    <>
      <Btn principal fontSize="30px">
        Verdadeiro
      </Btn>
      <Btn as={'a'} fontSize="30px" principal={false}>
        <span>É falso</span>
      </Btn>
      <BtnDanger></BtnDanger>
      <BtnWarning></BtnWarning>
    </>
  )
}

export default Teste
