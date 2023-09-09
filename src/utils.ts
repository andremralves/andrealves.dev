export async function getGithubStars(owner, repo) {
	const url = `https://api.github.com/repos/${owner}/${repo}`;
	const response = await fetch(url);
	const json = await response.json();
	return json.stargazers_count;
}

export function formatNumberWithUnits(number) {
	let absNumber = Math.abs(number);
	const units = ['', 'K', 'M', 'B', 'T']; // Define the units to be used
	let unitIndex = 0;

	while (absNumber >= 1000 && unitIndex < units.length - 1) {
		absNumber /= 1000;
		unitIndex++;
	}

	// Use toFixed to limit the number of decimal places to 2
	// and remove trailing zeros using parseFloat
	const formattedNumber = parseFloat(absNumber.toFixed(1));

	// Add the unit to the end of the formatted number
	return `${formattedNumber}${units[unitIndex]}`;
}
