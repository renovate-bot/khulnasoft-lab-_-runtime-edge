const shouldExist = Boolean(process.env.RUNTIME_EDGE_EXISTS)

test(`RuntimeEdge is ${shouldExist ? 'not defined' : 'defined'}`, () => {
  expect(typeof RuntimeEdge).toBe(shouldExist ? 'string' : 'undefined')
})
