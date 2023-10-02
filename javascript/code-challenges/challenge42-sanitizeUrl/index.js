'use strict';


function sanitizeUrl(url) {
	const Space = '%20';
	let sanitizedUrl = '';

	for (let i = 0; i < url.length; i++) {
		if (url[i] === ' ') {
			sanitizedUrl += Space;
		} else {
			sanitizedUrl += url[i];
		}
	}

	return sanitizedUrl;
}

const Url = '"http://code.org/hour of code.html"';


console.log(sanitizeUrl(Url)); 
