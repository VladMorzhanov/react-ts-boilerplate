import * as React from 'react'
import { inject, observer } from 'mobx-react'
import {RouteComponentProps} from 'react-router';
import Header from '../../components/Header'
import Container from '../../components/Container'

export interface MainProps extends RouteComponentProps<any> {}
export interface MainState {}

const Home = ({ rootStore }) => (
  <>
    <Header title="Home Page" />
    <Container content="Home page content" />
    {rootStore.user.name}
  </>
)

export default inject('rootStore')(observer(Home))
