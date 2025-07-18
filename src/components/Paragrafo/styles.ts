import styled from 'styled-components'
import { Props } from './index'

export const P = styled.p<Props>`
  color: ${(props) => (props.tipo === 'principal' ? '#282a35' : '#949494')};
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : 14)};
  line-height: 22px;
`
