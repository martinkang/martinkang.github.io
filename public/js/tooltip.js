
let gWindowXSize = 0;
let gWindowYSize = 0;

const DEFAULT_TOOLTIP_X_MARGIN   = "20px";
const DEFAULT_TOOLTIP_X_WIDTH    = "max-content";
const DEFAULT_TOOLTIP_Y_POSITION = "150%";
const DEFAULT_TOOLTIP_Y_MARGIN   = 30; /* px */

function getWindowSize()
{
  gWindowXSize = window.innerWidth;
  gWindowYSize = window.innerHeight;
}

function isInViewPort( aToolTip )
{
  if ( ( aToolTip.getBoundingClientRect().top < 0 ) ||
       ( aToolTip.getBoundingClientRect().top > gWindowYSize ) ) {
         return false;
       }
       else {
         return true;
       }
}

function setYPosition( aToolTip, aToolTipTop )
{
  if ( aToolTip.getBoundingClientRect().top - aToolTipTop.offsetHeight < DEFAULT_TOOLTIP_Y_MARGIN ) {
    aToolTipTop.style.top    = DEFAULT_TOOLTIP_Y_POSITION;
    aToolTipTop.style.bottom = '';
  }
  else {
    aToolTipTop.style.top    = '';
    aToolTipTop.style.bottom = DEFAULT_TOOLTIP_Y_POSITION;
  }
}

function setWidthNXPosition( aToolTip, aToolTipTop )
{
  let sLeft = '';
  let sWidth = '';

  if ( aToolTip.getBoundingClientRect().left + aToolTipTop.offsetWidth > (gWindowXSize * 0.9) ) {
    let sChangeSize = (gWindowXSize) * 0.7;
    let sSize = ( aToolTipTop.offsetWidth > sChangeSize ) ? sChangeSize : aToolTipTop.offsetWidth;

    sWidth = sSize.toString() + 'px';
    sLeft  = ( (gWindowXSize * 0.9) - (aToolTip.getBoundingClientRect().left + sSize) ).toString() + 'px';
  }
  else {
    sWidth = DEFAULT_TOOLTIP_X_WIDTH;
    sLeft  = DEFAULT_TOOLTIP_X_MARGIN;
  }
  
  aToolTipTop.style.width = sWidth;
  aToolTipTop.style.left  = sLeft;
}

function setToolTipSizeNPosition( aToolTip )
{
  let sToolTipTop = aToolTip.getElementsByClassName( 'tooltip-top' ).item(0);

  setWidthNXPosition( aToolTip, sToolTipTop );
  setYPosition( aToolTip, sToolTipTop );
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

        if ( isInViewPort( sToolTip ) ) {
          setToolTipSizeNPosition( sToolTip );
        }
    }
}

function setToolTipSizeNPositions()
{
  let sToolTips = document.getElementsByClassName( 'tooltip' );

  getWindowSize();

  for (let i = 0; i < sToolTips.length; i++) {
    let sToolTip = sToolTips.item(i);

    if ( isInViewPort( sToolTip ) ) {
      setToolTipSizeNPosition( sToolTip );
    }
  }
}

window.addEventListener ('scroll', function(){
  setToolTipSizeNPositions();
});


window.addEventListener( "resize", (event) => {
  setToolTipSizeNPositions();
});

document.addEventListener("DOMContentLoaded", function(){
  getWindowSize();
  setFootNotes();
});
