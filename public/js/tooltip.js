
function setFootNotes()
{
    sToolTips = document.getElementsByClassName( 'tooltip' );

    for (let i = 0; i < sToolTips.length; i++) {
        let sToolTip = sToolTips.item(i);
        let sToolTipID = sToolTip.id.substr(3).toString();
        let sDesc = document.getElementById( 'desc-' + sToolTipID );

        let sToolTipDesc = document.createElement('span');
        sToolTipDesc.innerHTML = '<span class="tooltiptext tooltip-top">' +
                                sDesc.textContent + '</span>';
                        
        sToolTip.appendChild( sToolTipDesc );
        sDesc.textContent = '[' + sToolTipID + '] ' + sDesc.textContent;
    }
}

window.addEventListener( "pageshow", (event) => 
{
  setFootNotes();
});
