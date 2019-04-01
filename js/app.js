var uploadedDays =["2018-12-13","2018-12-15","2018-12-20","2018-12-03","2017-12-20","2017-12-21"];

var table = $('#mis-datatable');

$(function() {

	$('.selectpicker').selectpicker();
	
	$('#datepicker').datepicker({
		firstDay:1,
		dateFormat: "yy-mm-dd",
		dayNamesMin: [ "S", "M", "T", "W", "T", "F", "S" ],
		nextText:'<i class="fas fa-arrow-right"></i>',
		prevText:'<i class="fas fa-arrow-left"></i>',
		beforeShowDay: function(date){
		    var uiDate = $.datepicker.formatDate('yy-mm-dd',date);
		    return [true, (uploadedDays.indexOf(uiDate)==-1) ? "":'uploaded'];
		}
	});

	table.DataTable( {
		"language": {
		    "zeroRecords": '<div class="table-data-empty"> <i class="fas fa-search"></i> <strong>Sorry, no results found</strong> </div>',
		    // "zeroRecords": '<div class="table-data-empty"> <img src="images/icon-search-notfound.png" alt="" /> <strong>Sorry, no results found</strong> </div>',
            'paginate': {
                previous: '<i class="fas fa-angle-left"></i>',
                next: '<i class="fas fa-angle-right"></i>',
                first: "|<",
                last: ">|" 
            }
		},
		"dom": '<"top"i>rt<"bottom"flp><"clear">',
		searching: true, 
		paging: true, 
		info: false,
        initComplete: function () {

        }
    } );


    $("#tablefilterTextbox").on('keyup click', function(event) {
    	
	    table.DataTable().search(
	        $("#tablefilterTextbox").val()
	    ).draw();
    });

    $(document).on('click', '.action-list a', function(event) {
    	$(this).parents('ul').slideUp(300).siblings('a').removeClass('active');
    });
});

function showAction(el) {
	if ($(el).hasClass('active')) {
		$(el).removeClass('active').next('ul').slideUp(300);
		return 0;
	}
	$(el).parents('tbody').find('.btnAction').removeClass('active').next('ul').slideUp(300);
	$(el).addClass('active').next('ul').slideDown(300);
}

$(window).on('click',  function(event) {
	if($(event.target).parents(".list-ac-wrap").length == 0){
		$('.btnAction').removeClass('active').next('ul').slideUp(300);
	}
});

//function for view table layout box or list
function viewby(el) {
	if ($(el).hasClass('active')) { return false; }

	if ($(el).hasClass('view-by-grid')) {
		$(el).parents('#content').addClass('view-data-grid');
	}else{
		$(el).parents('#content').removeClass('view-data-grid');
	}
	$(el).addClass('active').siblings('a').removeClass('active');

	// ..................
	// ..................
	// Others code here where table show data box or list
}
