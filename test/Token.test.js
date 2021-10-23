const reactDomTestUtilsProductionMin = require('react-dom/cjs/react-dom-test-utils.production.min')

const Token = artifacts.require('./Token')

require('chai')
.use(require('chai-as-promised'))
.should()
contract('Token', (accounts) => {
    const name = "Pug Token"
    const symbol = 'PUG'
    const totalSupply = '1000000000000000000000000'
    const decimals = '18'
    let token
    beforeEach(async () =>{
         //Fetch token from blockchain
        token = await Token.new()
    })
    describe('deployment',() => {
        it('tracks the name', async () => {
            //Read token name..
            const result = await token.name()
            result.should.equal(name)
            //Check the token name is My Name
        })
        it('tracks the symbol', async() => {
            const result = await token.symbol() 
            result.should.equal(symbol)
        })

        it('tracks the decimals', async () => {
            const result = await token.decimals()
            result.toString().should.equal(decimals)
        })
        it('tracis the total supply', async ()=> {
            const result = await token.totalSupply()
            result.toString().should.equal(totalSupply)
        })
    })
})