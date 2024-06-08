/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        const bs = (start, end) => {
            if (start === end) return start;
            const mid = Math.floor((start + end) / 2);
            const bv1 = isBadVersion(mid);
            const bv2 = isBadVersion(mid + 1);
            if (bv1 !== bv2) {
                return mid + 1;
            } else if (bv1) {
                return bs(start, mid);
            } else {
                return bs(mid + 1, end);
            }
        }
        return bs(1, n);
    };
};