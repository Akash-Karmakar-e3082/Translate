$(function()
{
	$('#bttn').click(function(){
		$('#insert').empty();
		$('#load').css('display','inline');
 		requestURL = $('#url').val();
 		language = $('#language').val();
 		var d={lang: language, url: requestURL}
		$.get( "http://localhost:5000/calculate_valid_translations?dest_lang="+language+"&url="+requestURL)
		.done(function(data){
			$('#load').css('display','none');
			$('#insert').append(data);})
		.fail(function(data){alert("OH NO Failed!!")})

	});
	$('#translate').click(function(){
		$('#insert').empty();
 		requestURL = $('#url').val();
 		language = $('#language').val();
 		chrome.tabs.create({ url: "http://localhost:5000/translate?dest_lang="+language+"&url="+requestURL })

	});
});