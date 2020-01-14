function sort(array, comparator) {
    var sorted = array;
    var comp = comparator == null ? (first, second) => first < second : comparator;
    var low = 0;
    var high = sorted.length - 1;
    if (high < 1)
        return sorted;
    var center = Math.floor((low + high) / 2);
    while (low < high) {
        while (comp(sorted[low], sorted[center]))
            low++;
        while (comp(sorted[center], sorted[high]))
            high--;
        sorted[low] = [sorted[high], sorted[high] = sorted[low]][0];
        low++;
        high--;
    }
    return sort(sorted.slice(0, center+1)).concat(sort(sorted.slice(center+1, sorted.length)));
}

