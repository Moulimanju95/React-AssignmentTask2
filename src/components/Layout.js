import React from 'react'
import Header from './Header'
import Footer from './Footer'
import InputText from './Question2'
import ConditionalEffectComponent from './Question3'
import InlineButton from './Question4' 
import ToggleClassComponent from './Question5'
import ParentComponent from './Question6'
import Greeting from './Question7'
import InputDisplayComponent from './Question9'
import ItemList from './Question11'
import ReusableButtonComponent from './Question12'

class Layout extends React.Component {
    render(){
      return (
        <>
          <hr></hr>
          <Header />
          <hr style={{ borderStyle: 'dotted', borderWidth: 1, borderRadius: 1,}}></hr>
          <main>{this.props.children}</main>
          <hr style={{ borderStyle: 'dotted', borderWidth: 1, borderRadius: 1,}}></hr>
          <Footer />
          <hr></hr>
          <InputText />
          <hr></hr>
          <ConditionalEffectComponent />
          <hr></hr>
          <InlineButton />
          <hr></hr>
          <ToggleClassComponent />
          <hr></hr>
          <ParentComponent />
          <hr></hr>
          <Greeting />
          <Greeting greeting="Good Morning!" />
          <hr></hr>
          <InputDisplayComponent />
          <hr></hr>
          <ItemList />
          <hr></hr>
          <ReusableButtonComponent />
        </>
      )
    }
  }

export default Layout