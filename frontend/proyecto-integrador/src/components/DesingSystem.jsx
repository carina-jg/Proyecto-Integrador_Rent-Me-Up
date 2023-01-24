import React from 'react'
import Button from './atoms/Button'
import SocialMedia from './atoms/SocialMedia'
import Text from './atoms/Text'
import Footer from './molecules/Footer'
import MenuMobile from './molecules/MenuMobile'
import AvatarMobile from './atoms/Avatar'

export default function DesingSystem() {
  return (
  <div  style={{display: "grid", gap: "10px" }}>
    <h1>Botones</h1>
    <Button text="Default xs"  width="xs" />
    <Button text="Default s"  width="s" />
    <Button text="Default m"  width="m" />
    <Button text="Default l"  width="l" />
    <Button text="Default fullWidth"  fullwidth />

    <Button text="xsmall" type="Outline" width="xs" />
    <Button text="small" type="Outline" width="s" />
    <Button text="medium" type="Outline" width="m" />
    <Button text="large" type="Outline" width="l" />
    <Button text="fullWidth" type="Outline" fullwidth />

    <Button text="text fullWidth" type="text" fullwidth />
    <br/>

    <h1>Tipografia</h1>
    <Text type="h1" color='primary' text="Heading 1"/>
    <Text type="h2" color='primary' text="Heading 2"/>
    <Text type="h3" color='primary' text="Heading 3"/>
    <Text type="h4" color='primary' text="Heading 4"/>
    <Text type="p1" color='primary' text="Text 1"/>
    <Text type="p2" color='primary' text="Text 2"/>

    <Text type="h1" color='secondary' text="Heading 1"/>
    <Text type="h2" color='secondary' text="Heading 2"/>
    <Text type="h3" color='secondary' text="Heading 3"/>
    <Text type="h4" color='secondary' text="Heading 4"/>
    <Text type="p1" color='secondary' text="Text 1"/>
    <Text type="p2" color='secondary' text="Text 2"/>

    <Text type="h1" color='tertiary' text="Heading 1"/>
    <Text type="h2" color='tertiary' text="Heading 2"/>
    <Text type="h3" color='tertiary' text="Heading 3"/>
    <Text type="h4" color='tertiary' text="Heading 4"/>
    <Text type="p1" color='tertiary' text="Text 1"/>
    <Text type="p2" color='tertiary' text="Text 2"/>

    <Text type="h1" color='quaternary' text="Heading 1"/>
    <Text type="h2" color='quaternary' text="Heading 2"/>
    <Text type="h3" color='quaternary' text="Heading 3"/>
    <Text type="h4" color='quaternary' text="Heading 4"/>
    <Text type="p1" color='quaternary' text="Text 1"/>
    <Text type="p2" color='quaternary' text="Text 2"/>

    <Text type="h1" color='white' text="Heading 1"/>
    <Text type="h2" color='white' text="Heading 2"/>
    <Text type="h3" color='white' text="Heading 3"/>
    <Text type="h4" color='white' text="Heading 4"/>
    <Text type="p1" color='white' text="Text 1"/>
    <Text type="p2" color='white' text="Text 2"/>

    <Text type="h1" text="Heading 1"/>
    <Text type="h2" text="Heading 2"/>
    <Text type="h3" text="Heading 3"/>
    <Text type="h4" text="Heading 4"/>
    <Text type="p1" text="Text 1"/>
    <Text type="p2" text="Text 2"/>
    <br/>

    <h1>SocialMedia</h1>
    <SocialMedia/>
    <br/>

    <h1>Avatar para Mobile</h1>
    <AvatarMobile/>
    <br/>

    <h1>Footer</h1>
    <Footer/>

    <h1>Menu para Mobile</h1>
    <div style={{position: "relative"}}>
        <MenuMobile showMenu={true}/>
    </div>
    

  </div>
  )
}
