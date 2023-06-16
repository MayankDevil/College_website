/*
-    website-1 "College"
-    Design & Developed by Mayank
-    copyright by Mayank
-    JavaScript : js/facility_scroll
*/
try
{
    /*
        ==================================================================
        [ HORIZONTAL SCROLL FUNCTION ] 
        ==================================================================
    */
    let facility = document.getElementById('facility');
    
    let scroll_left = document.getElementById('scroll_left');

    let scroll_right = document.getElementById('scroll_right');

    var scroll_width =  0;

    /*
        ---------------
        [ scroll left ]---------------------------------------------------
        ---------------
    */
    scroll_left.onclick = () => {
     
        if(facility.scrollWidth > scroll_width) scroll_width += window.innerWidth;
     
        facility.scrollLeft =  scroll_width;
    }
    /*
        ----------------
        [ scroll right ]--------------------------------------------------
        ----------------
    */
    scroll_right.onclick = () => {
    
        scroll_width -= window.innerWidth;

        facility.scrollLeft = scroll_width;
    }
    // ===================================================================
}
catch(error)
{
    // console.log(alert(error));
}
// the end