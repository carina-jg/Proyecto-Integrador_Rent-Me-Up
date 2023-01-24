import React from 'react'
import styled from 'styled-components'
import SocialMedia from '../atoms/SocialMedia'
import Text from '../atoms/Text'

export default function Footer() {

    const FooterStyle = styled.div`
        width: 100%;
        height: 58px;
        background-color:${({ theme }) => theme.primary};
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 15px;
        position: fixed;
        bottom: 0px;

        @media screen and (min-width: 767px) {
            padding: 0 30px;
        }
    `

    const ContenedorSM = styled.div`
      @media screen and (max-width: 767px) {
        padding: 0 30px;
        display: none;
      }
    `

  return (
    <FooterStyle>
        <Text type="h4" color='white' text="©2022 Rent Me Up"/>
        <ContenedorSM>
          <SocialMedia/>
        </ContenedorSM>
    </FooterStyle>
  )
}
