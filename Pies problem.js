

var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var count = 0
rl.question('', function (N) {
    count = parseInt(N);

    recursiveUserInput()

});
var recursiveUserInput = function () {

    rl.question('', function (MandPies) {
        rl.question('', function (order) {



            var valuesOfIntegers = MandPies.split(" ")
            var M = valuesOfIntegers[0];
            valuesOfIntegers.shift();
            var sumToAchieve = parseInt(order);
            var arr = []
            var possibleCombinations = []

            for (var pieVal = 0; pieVal < valuesOfIntegers.length; pieVal++) {
                arr.push(parseInt(valuesOfIntegers[pieVal]));
            }

            // filter out all items larger than sumToAchieve
            arr = arr.filter(function (value) {
                return value <= sumToAchieve;
            });

            // sort from largest to smallest
            arr.sort(function (a, b) {
                return b - a;
            });

            // array with all the subsets


            while (arr.length > 0) {
                var i;
                var sum = 0;
                var addedIndices = [];

                // go from the largest to the smallest number and
                // add as many of them as long as the sum isn't above sumToAchieve
                for (i = 0; i < arr.length; i++) {
                    if (sum + arr[i] <= sumToAchieve) {
                        sum += arr[i];
                        addedIndices.push(i);
                    }
                }


                // remove the items we summed up from the arr array, and store the items to possibleCombinations
                // since we're going to splice the arr array several times we start with the largest index
                // and go to the smallest to not affect index position with splice.
                var subset = [];
                for (i = addedIndices.length - 1; i >= 0; i--) {
                    subset.unshift(arr[addedIndices[i]]);

                    arr.splice(addedIndices[i], 1);
                }
                var arrSum = 0;
                subset.forEach(function (value) {
                    arrSum += value
                })

                if (arrSum == sumToAchieve) {
                    possibleCombinations.push(subset);
                }
            }


            if (possibleCombinations.length > 0) {
                console.log("YES")
            } else {
                console.log("NO")
            }
            count = count - 1
            if (count > 0) {
                recursiveUserInput()
            }
        });
    });

}

