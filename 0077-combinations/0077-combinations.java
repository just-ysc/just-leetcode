class Solution {
    public List<List<Integer>> combine(int n, int k) {
        if (k == 0) {
            List<Integer> nested = new ArrayList<>();
            List<List<Integer>> result = new ArrayList<>();
            result.add(nested);
            return result;
        }
        if (k == n) {
            List<Integer> nested = new ArrayList<>();
            for (int i = 1; i <= k; i++) {
                nested.add(i);
            }
            List<List<Integer>> result = new ArrayList<>();
            result.add(nested);
            return result;
        }

        List<List<Integer>> left = combine(n - 1, k - 1);
        for (List<Integer> leftNested : left) {
            leftNested.add(n);
        }
        List<List<Integer>> right = combine(n - 1, k);
        List<List<Integer>> merged = new ArrayList();
        merged.addAll(left);
        merged.addAll(right);
        return merged;
    }
}