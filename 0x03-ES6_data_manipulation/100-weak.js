const weakMap = new WeakMap();

function queryAPI(endpoint) {
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 0);
  }
  
  let queryCount = weakMap.get(endpoint);
  queryCount += 1;
  
  weakMap.set(endpoint, queryCount);
  
  if (queryCount >= 5) {
    throw new Error('Endpoint load is high');
  }
}

export { queryAPI, weakMap };
