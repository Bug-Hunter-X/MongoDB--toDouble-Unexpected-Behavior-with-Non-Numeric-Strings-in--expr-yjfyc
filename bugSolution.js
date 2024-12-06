```javascript
const query = {
  $expr: {
    $and: [
      { $ne: [ { $type: "$price" }, "string" ] },
      { $gt: [ { $toDouble: "$price" }, 100 ] }
    ]
  }
};
const result = await collection.find(query).toArray();
```