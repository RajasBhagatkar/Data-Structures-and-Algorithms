const nemo = ['nemo']
const everyOne = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank']
const large = new Array(10000).fill('nemo')

function findNemo(array) {
	let t0 = performance.now()
	for (let i=0; i< array.length; i++) {
		if (array[i] == 'nemo') {
			console.log('Found Nemo');
			break;
		}else{
			console.log('Nemo Not Found');
		}
	}

	let t1 = performance.now()
	console.log(`call TO find Nemo Took ${t1-t0}milliseconds`)
}

// findNemo(large) // O(n) --> Linear Time 
findNemo(everyOne)

// Remove Constants

function printFirstItemThenFirstHalfThenSayHi100Time(items){
	console.log(items[0]);
	
	let middleIndex = Math.floor( items.length / 2)
	let index = 0

	while(index < middleIndex){
		console.log(items[index]);
		index++
	}

	for(let i=0; i< 100; i++)
	{
		console.log('hi');
	}
}
// O(1 + n/2 + 100)
// O(101+ n/2)
// O(n)

function CompressBoxesTwice(boxes){
	boxes.forEach(function(boxes) {
		console.log(boxes);
	})

	boxes.forEach(function(boxes){
		console.log(boxes);
	})
}
O(n)