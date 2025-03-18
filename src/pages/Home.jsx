import React from 'react'

const Home = () => {

  const withHref = () => {
    window.location.href = 'grab://open?screenType=GRABFOOD&merchantIDs=6-C6WWG3K1WEEXRJ'
  }

  const withApplink = () => {
    window.location.href = 'https://applink.grab.com/open?screenType=GRABFOOD?merchantID=6-C6WWG3K1WEEXRJ&tableNumber=1213&uniqueCode=O431xNdwPMi0sMWlnrtcQgmTk2K9UhGhB16Oc1Uj9dKO3urZQMZ1P872IGTTPQSk6A==&al_web_dp=https://r.stg-myteksi.com/o/ni2QfeYj'
  }

  const withJSBridge = () => {
    if (!window.WebJSBridge) {
      alert('JSBridge not found');
      return;
    }

    window.WebJSBridge.openDeeplink('grab://open?screenType=GRABFOOD&merchantIDs=6-C6WWG3K1WEEXRJ');
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