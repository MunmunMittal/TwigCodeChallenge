function groupArrayElements(inputArray, numberOfChunks) {
	var outputArray = [],
		i = 0,
		chunkslength = 0;
	var arrayLength = inputArray.length;
	var size = Math.ceil(arrayLength / numberOfChunks);
	var chunk;
	var remainder = arrayLength % numberOfChunks;

	if (arrayLength < numberOfChunks) {
		return;
	}

	if (remainder === 0) {
		size = Math.floor(arrayLength / numberOfChunks);
		while (i < arrayLength) {
			outputArray.push(inputArray.slice(i, (i += size)));
		}
	} else {
		numberOfChunks--;
		if (arrayLength % numberOfChunks === 0) {
			arrayLength = arrayLength - remainder;
		}
		chunkslength = Math.floor(arrayLength / numberOfChunks);

		while (numberOfChunks > 0) {
			chunk = inputArray.splice(0, chunkslength);

			outputArray.push(chunk);
			numberOfChunks--;
		}
		outputArray.push(inputArray);
	}
	return outputArray;
}
