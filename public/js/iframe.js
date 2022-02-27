let gIFrame = document.getElementsByClassName('code-box');
let gIFrameCnt = gIFrame.length;

function resizeFrame( aIdx )
{
    gIFrame[aIdx].style.height = (gIFrame[aIdx].contentWindow.document.body.scrollHeight + 30) + 'px';
}

window.addEventListener( "pageshow", (event) => 
{
    let i = 0;

    for ( i = 0; i < gIFrameCnt; i++ )
    {
         gIFrame[i].contentWindow.window.addEventListener( 'change', function(event) {
                let i = 0;

                for ( i = 0; i < gIFrameCnt; i++ )
                {
                    resizeFrame(i);
                }     
        });

        resizeFrame(i);
     }
});
