const url = 'https://grammarbot.p.rapidapi.com/check';
const options = {
	method: 'POST',
	headers: {
		'content-type': 'application/x-www-form-urlencoded',
		'X-RapidAPI-Key': '49db33bfcbmsh0844b5288c3686fp131251jsn9f88b2cbafab',
		'X-RapidAPI-Host': 'grammarbot.p.rapidapi.com'
	},
	body: new URLSearchParams({
		text: 'Susan go to the store everyday',
		language: 'en-US'
	})
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}