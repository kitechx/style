$(document).bind('toolbar_setup', function() {
	frappe.app.name = "Style";

	$('.navbar-home').html('<img class="erpnext-icon" src="'+
			frappe.urllib.get_base_url()+'/assets/style/images/VeryNice_logo2.png" />');


});


