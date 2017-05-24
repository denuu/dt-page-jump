/**
* Call this function in drawCallback to include an input in the pagination
* controls which accepts an integer to jump directly to the indicated page.
* To easily pass the table element parameter, set up something like:
* var table = $('#table').DataTables(...);
*
* @param    table   string  The datatables element
*/
function pageJump(table) {

    $("<li class='paginate_button paginate_goto'><a><input id='adusers_goto' class='input_goto' placeholder='Go to'/></a></li>").insertBefore('#table-adusers_next');
    
}




// renderer: "bootstrap",
// // pagingType: "listbox",
// // pagingType: 'input',
// autoWidth: false,
// responsive: true,
// deferRender: true,
// processing: true,
// serverSide: true,
// stateSave: true,
// drawCallback: function(settings) {
//     hide_search_loading('#table-adusers');
//     // START CUSTOM PAGE JUMP
//     $("<li class='paginate_button paginate_goto'><a><input id='adusers_goto' class='input_goto' placeholder='Go to'/></a></li>").insertBefore('#table-adusers_next');
//     $('#adusers_goto').keypress(function(e) {
//         var key = e.which;
//         var val = parseInt($(this).val()) - 1;
//         if (key == 13 && $.isNumeric(val)) {
//             table_adusers.page(val).draw(false);
//         }
//     });
//     // END CUSTOM PAGE JUMP
// },
// ajax: {
//     url: "<?php base_url(); ?>/mybook/workbooks/get_adusers",
//     type: "POST",
//         data: function(d) {
//             d.days = $('#user-days').val();
//         }
// },
