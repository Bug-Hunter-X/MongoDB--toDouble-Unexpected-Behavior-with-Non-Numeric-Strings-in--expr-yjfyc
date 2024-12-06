```javascript
const query = { $expr: { $gt: [ { $toDouble: "$price" }, 100 ] } };
const result = await collection.find(query).toArray();
```