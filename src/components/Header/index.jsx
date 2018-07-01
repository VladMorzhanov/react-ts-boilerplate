// @flow

import React from 'react'
import styled, { StyledComponentClass } from 'styled-components'
import { observer } from 'mobx-react'

const Wrapper: StyledComponentClass = styled.header`
  color: #ffffff;
  font-size: 24px;
  font-weight: bold;
  font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;
  width: 100%;
  height: 64px;
  background-color: rgba(78, 94, 255, 0.7);
  text-align: center;
  line-height: 64px;
`

const Header = ({ title }: { title: string }): React.Element<*> => (
  <Wrapper>
    <div>{title}</div>
  </Wrapper>
)

export default observer(Header)
