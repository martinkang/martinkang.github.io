
let gWindowXSize = window.innerWidth;
let gWindowYSize = window.innerHeight;

function getWindowSize()
{
  gWindowXSize = window.innerWidth;
  gWindowYSize = window.innerHeight;
}

function setToolTipSizeNPosition( aToolTip )
{
  let sSideBarWidth = document.getElementsByClassName( 'sidebar' ).item(0).offsetWidth;
  let sToolTipTop = aToolTip.getElementsByClassName( 'tooltip-top' ).item(0);
  let sToolTipXPositon = aToolTip.offsetLeft;
  let sToolTipTopWidth = sToolTipTop.offsetWidth;
  let sSizeDiff = '';
  let sSize = '';

  if ( gWindowXSize <= 600 ) {
    sSideBarWidth = 0;
  }

  if ( sToolTipXPositon + sToolTipTopWidth > (gWindowXSize - sSideBarWidth) * 0.9 ) {
    let sOriginSize = sToolTipTopWidth;
    let sChangeSize = (gWindowXSize - sSideBarWidth) * 0.7;

    sSizeDiff = ( (gWindowXSize - sSideBarWidth) * 0.9 - (sToolTipXPositon + sToolTipTopWidth) ).toString() + 'px';

    if ( sOriginSize > sChangeSize ) {
      sSize = sChangeSize.toString() + 'px';
      sSizeDiff = ( (gWindowXSize - sSideBarWidth) * 0.9 - (sToolTipXPositon + sChangeSize) ).toString() + 'px';
    }
    else {
      sSize = sOriginSize.toString() + 'px';
      sSizeDiff = ( (gWindowXSize - sSideBarWidth) * 0.9 - (sToolTipXPositon + sOriginSize) ).toString() + 'px';
    }
  }
  else {
    sSize = "max-content";
    sSizeDiff = '20px';
  }
  
  sToolTipTop.style.width = sSize;
  sToolTipTop.style.left = sSizeDiff;
}

function getToolTipNo( aToolTipID )
{
    let sToolTipNo = document.createElement('span');

    sToolTipNo.innerHTML = '<span class="tooltip-no">[' + aToolTipID + ']</span>';
    return sToolTipNo;
}

function getToolTipDesc( aDesc )
{ 
  let sToolTipDesc = document.createElement('span');
  sToolTipDesc.innerHTML = '<span class="tooltiptext tooltip-top">' +
  aDesc + '</span>';
  
  return sToolTipDesc;
}

function setFootNotes()
{
    sToolTips = document.getElementsByClassName( 'tooltip' );

    for (let i = 0; i < sToolTips.length; i++) {
        let sToolTip = sToolTips.item(i);
        let sToolTipID = sToolTip.id.substr(3).toString();
        let sDesc = document.getElementById( 'desc-' + sToolTipID );

        sDesc.textContent = '[' + sToolTipID + '] ' + sDesc.textContent;
        sToolTip.appendChild( getToolTipNo( sToolTipID ) );
        sToolTip.appendChild( getToolTipDesc( sDesc.textContent ) );

        setToolTipSizeNPosition( sToolTip );
    }
}

window.addEventListener( "resize", (event) => {
  let sToolTips = document.getElementsByClassName( 'tooltip' );

  getWindowSize();

  for (let i = 0; i < sToolTips.length; i++) {
    let sToolTip = sToolTips.item(i);
    setToolTipSizeNPosition( sToolTip );
  }
});

window.onload = function() {
  getWindowSize();
  setFootNotes();
}
