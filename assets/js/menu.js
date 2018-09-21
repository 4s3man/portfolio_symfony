import $ from 'jquery'
import 'slicknav/dist/jquery.slicknav.min.js'
import 'slicknav/dist/slicknav.min.css'
import  '../scss/homepage.scss'

$(() => {
    $('#menu').slicknav({
      label:''
    });
});

// $(document).ready(()=>{
//   $('#I').on('click', (e) => {
//     e.preventDefault();
//     $.ajax({
//       url: '/ajaxContent',
//       type: 'POST',
//       dataType: 'json',
//       async: true,
//
//       success: function(data, status){
//         console.log(data);
//         console.log(status);
//       },
//
//       error: function(xhr, textStatus, errorThrown){
//         console.log(errorThrown);
//       }
//     });
//   });
// });
