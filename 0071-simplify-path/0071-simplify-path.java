class Solution {
    public String simplifyPath(String path) {
        String[] paths = path.split("/");
        Stack<String> pathStack = new Stack();

        for (String p : paths) {
            if (p.isEmpty() || p.equals(".")) {
                continue;
            } else if (p.equals("..")) {
                if (!pathStack.isEmpty()) pathStack.pop();
            } else {
                pathStack.push(p);
            }
        }
        ArrayList<String> simplifiedPaths = new ArrayList(pathStack);
        
        return "/" + String.join("/", simplifiedPaths);
    }
}