const websocket = require("./websocket")
// @ponicode
describe("websocket.createSocket", () => {
    test("0", () => {
        let callFunction = () => {
            websocket.createSocket()
        }
    
        expect(callFunction).not.toThrow()
    })
})
