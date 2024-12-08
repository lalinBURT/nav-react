const path = require("path")

const resolve = pathName => path.resolve(__dirname,pathName)

module.exports= {
    //webpack
    webpack:{
        alias:{
            "@": resolve("src")
        }
    }
}