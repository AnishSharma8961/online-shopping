$(function(){
	
	switch(menu)
	{
		case 'About us':
			$('#about').addClass('active');
			break;
		
		case 'Contact us':
			$('#about').addClass('active');
			break;
		
		default:
			$('#home').addClass('active');
			break;
	}
});