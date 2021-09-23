function condenseArrayToNumber(arr) {
    while (arr.length > 1) {
        let condensed = [];
        condensed.length = arr.length - 1;

        for (let i = 0; i < condensed.length; i++) {
            condensed[i] = arr[i] + arr[i+1];
        }

        arr = condensed;
    }
    console.log(arr.toString());
}

condenseArrayToNumber([5,0,4,1,2]);