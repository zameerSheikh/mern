async function test(){
    const r1 = await Promise.resolve(1)
    const r2 = r1 + 1
    return r2 + 1
}

test().then(final => console.log(final))
test().then(final => console.log(final+3))