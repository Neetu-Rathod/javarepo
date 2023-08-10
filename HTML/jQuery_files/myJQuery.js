
$(document).ready(function () {

    console.log('I am in a new file now');

    //your jquery code here.
    //console.log("we are using jquery");
    //jquery Syntex .
    // $(`selector`).action()

    $(`p`).click();// clicked on p.
    $(`p`).click(function () {
        console.log('you click on p', this);
        // $(this).hide();
        // $(`#id`).hide();
        // $(`.class`).hide();
    });

//     $(`p`).dblclick(function () {
//         console.log('you double clicked on p', this);
//         //  $('#id').hide();
//         //  $('.class').hide();
//     });

//     $(`p`).mouseenter(function () {
//         console.log('you entered', this);
//     });
//    $('p').hover(function () {
//             console.log('you hoverd on: ', this);
//             //  $('#id').hide();
//             //  $('.class').hide();
//         },
//         function (){
    
//             console.log('Thanks for coming')
//         });
    



//  there are three main types od selectors in jQuery
//  1. Element.
//  2. class.
//  3. id.

//1. Element selector example... which click on all p -->
// $(`p`).click();
// 2. id  selector example -->
// $(`.odd`).click();
// 3. id  selector example -->
// $(`#second`).click();

//other selector
// $(`*`).click();//click on all the element.
//$(`p.odd`).click();
//$(`p:first`).click();

//  Events in jQuery
//  mouse events = click,dblclick,Mouseenter, mouseleave.
//  keyboard Event = keypress,keydown,MediaKeyStatusMap.
//  form events= submit,change.focus,blur.
//  document/window events= load,resize,scroll,unload

//demoing the on method
$(`p`).on('click',function(){
      console.log("thanks",this);
})


});
