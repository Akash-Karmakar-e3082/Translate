$(function()
{
	$('#bttn').click(function(){
		//http://localhost:5050
		$('#insert').empty();
		$('#load').css('display','inline');
 		requestURL = $('#url').val();
 		language = $('#language').val();
 		console.log(requestURL);
 		console.log(language);
 		var d={lang: language, url: requestURL}
		$.post( "http://localhost:5000/calculate_valid_translations",d)
		.done(function(data){
			console.log("done")
			$('#load').css('display','none');
			$('#insert').append(data);
			console.log(data);})
		.fail(function(data){alert("OH NO Failed!!")})

	});
	$('#translate').click(function(){
		$('#insert').empty();
		$('#load').css('display','inline');
 		requestURL = $('#url').val();
 		language = $('#language').val();
 		console.log(requestURL);
 		console.log(language);
 		var d={lang: language, url: requestURL}
		$.post( "http://localhost:5000/translate",d)
		.done(function(data){
			console.log("done")
			$('#load').css('display','none');
			$('#insert').append(data);
			console.log(data);})
		.fail(function(data){alert("OH NO Failed!!")})

	});
});