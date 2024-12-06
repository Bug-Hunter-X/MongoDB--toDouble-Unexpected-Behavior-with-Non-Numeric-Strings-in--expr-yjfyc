# MongoDB $toDouble Unexpected Behavior with Non-Numeric Strings in $expr
This example demonstrates a potential issue when using the `$toDouble` operator within the `$expr` aggregation pipeline stage in MongoDB.  If the field you're converting to a double contains non-numeric values, `$toDouble` will return `NaN`, leading to unexpected query results.

The provided `bug.js` file shows the problematic query, and `bugSolution.js` offers a solution to handle potential non-numeric values gracefully.

This issue is not immediately obvious to developers unfamiliar with the nuances of `$toDouble`'s behavior with non-numeric inputs.

## Bug Report
The core issue is that using `$toDouble` on a field that may contain non-numeric data results in incorrect query behavior due to the way MongoDB handles `NaN` values in comparisons.