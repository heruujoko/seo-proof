import React from 'react'

const Home = () => {

  const withHref = () => {
    window.location.href = 'grab://open?screenType=GRABFOOD'
  }

  const withApplink = () => {
    window.location.href = 'https://applink.grab.com/open?screenType=GRABFOOD'
  }

  const withJSBridge = () => {
    if (!window.WebJSBridge) {
      alert('JSBridge not found');
      return;
    }

    window.WebJSBridge.openDeeplink('grab://open?screenType=GRABFOOD');
  }

  return (
    <div>

      <button onClick={withHref}>open deeplink with href</button>
      <button onClick={withApplink}>open deeplink with applink</button>
      <button onClick={withJSBridge}>open deeplink with JSBridge</button>
    </div> 
  )
}

export default Home