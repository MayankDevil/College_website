/*
-    website-1 "College"
-    Design & Developed by Mayank
-    copyright by Mayank
-    JavaScript : js/script
*/
try
{
    /*
        ==================================================================
        [ AISDE FUNCTION ] onclick add else remove active menu class
        ==================================================================
    */
    let aside = document.getElementById('aside');
    
    let toggle_btm = document.getElementById('toggle_btn');

    /*
        ----------------------
        [ menu button toggle ]--------------------------------------------
        ----------------------
    */
    toggle_btm.onclick = () => {
        
        aside.classList.toggle('active_menu');

        // aside.style.left = `0`;
    }
    
    /*
        ------------------
        | acnchor toggle |------------------------------------------------
        ------------------
    */
    let all_link = document.querySelectorAll("#aside > a");

    for (let i = 0; i < all_link.length; i++)
    {
        all_link[i].onclick = () => {

            aside.classList.toggle('active_menu');
        }
    }
    /*
        ---------------
        | back button |---------------------------------------------------
        ---------------
    */
    document.getElementById('back_btn').onclick = () => {
        
        window.history.back;

        alert('back call')
    }
    // ===================================================================
}
catch(error)
{
    // console.log(alert(error));
}
// the end