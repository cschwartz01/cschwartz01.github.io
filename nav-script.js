document.getElementById('menu-toggle').addEventListener('click', function() {
    document.getElementById('menu').classList.toggle('active');
});

// function postToGoogle() {
//     var field1 = $("#Name").val();
//     var field2 = $("#Email").val();
//     var field3 = $("#Message").val();

//     $.ajax({
//       url: "{https://docs.google.com/forms/u/2/d/1BblStw2qB-6aHH3NPaW0AHET8f-25otlmrB7RQ9GdPc/previewResponse",
        
//       //add your google form generated numbers below which are also the 'names' of your inputs     
//       data: {
//         "entry.903650470": field1,
//         "entry.1849304596": field2,
//         "entry.903650470": field3,
//       },
//       type: "POST",
//       dataType: "xml",
//       success: function (d) {
//         $('#contact').trigger('reset');
//       },
//       error: function (x, y, z) {
//         $('#contact').trigger('reset');
//       }
//     });
//     return false;
//   }