// Watch for updates of the `the-code` element
	// "show" the autocompletion

function startAutcompleting() {
	// Grab the newest content of the textarea
	let codeTextArea: HTMLTextAreaElement = document.getElementById('the-code') as HTMLTextAreaElement;


	// See if the code needs an autocompletion
	// grab the string right before the cursor
	// check the contents of that string versus a dictionary of possible things that can be completed
	let selectionStart: number = codeTextArea.selectionStart;
	let selectionEnd: number = codeTextArea.selectionEnd;
	if (selectionStart == selectionEnd) {
		let theCode: string = codeTextArea.value;
		let cursorLocation: number = selectionStart;

		console.log(theCode[cursorLocation]);
		// Find the index of all spaces in the string
		const regexp: RegExp = new RegExp(' ');
		const matches: IterableIterator<RegExpMatchArray> = theCode.matchAll(regexp);

		// TODO: Do this with reduce 👇
		// Array.from(str.matchAll(regexp), m => m.index); <-- check this out!
		const matchIndexArray: number[] = [];
		for (const match of matches) {
			matchIndexArray.push(match.index);
		}

		// Sort the array 
		
		// Find the previous space closest to the cursorIndex
		// Grab the substring
	}
}