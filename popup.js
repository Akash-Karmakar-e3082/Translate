$(function()
{
	function renderReports(response) {
		let table = $('<table>')
		table.css('border', '1px solid black')
		table.css('margin-top', '20px');

		$.each(response, function(k, v) {
			let keyColumn = $('<td>')
			keyColumn.text(k);
			keyColumn.css('border', '1px solid black')
			keyColumn.css('font-weight', 'bold')

			let valueColumn = $('<td>')
			valueColumn.text(v);
			valueColumn.css('border', '1px solid black')

			let row = $('<tr>')
			row.append(keyColumn)
			row.append(valueColumn)

			table.append(row)
		});

		let analyseHeader = $('<span>')
		analyseHeader.text('Analyse report:')
		analyseHeader.css('font-weight', 'bold');

		let analyseDiv = $('<div>')
		analyseDiv.css('margin-top', '20px');
		analyseDiv.append(analyseHeader)
		analyseDiv.append(table)

		$('#insert').append(analyseDiv);
	};

	$('#bttn').click(function(){
		$('#insert').empty();
		$('#load').css('display','inline');
 		requestURL = $('#url').val();
 		language = $('#language').val();
 		var d={lang: language, url: requestURL}
		$.get( "http://localhost:5000/analyse?dest_lang="+language+"&url="+requestURL)
		.done(function(data){
			$('#load').css('display','none');
			renderReports(data);
			})
		.fail(function(data){alert("OH NO Failed!!")})

	});
	$('#translate').click(function(){
		$('#insert').empty();
 		requestURL = $('#url').val();
 		language = $('#language').val();
 		chrome.tabs.create({ url: "http://localhost:5000/translate?dest_lang="+language+"&url="+requestURL })

	});
});