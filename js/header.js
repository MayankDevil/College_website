/*
-    website-1 "College"
-    Design & Developed by Mayank
-    copyright by Mayank
-    JavaScript : js/header
*/
try
{
     /*
          ==================================================================
          [ HEADER FUNCTION ] 
          ==================================================================
     */
     let header = document.getElementById('header');

     let mother_container = document.getElementById('mother_container');

     /*
          ---------------
          | back button |---------------------------------------------------
          ---------------
     */
     window.onscroll = function()
     {
          if(window.scrollY < 90)
               header.classList.remove("header_bg");
          else
               header.classList.add("header_bg");
     }
     // ===================================================================
}
catch(error)
{
    // console.log(alert(error));
}
// the end