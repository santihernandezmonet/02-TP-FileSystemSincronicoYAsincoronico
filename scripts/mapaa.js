import fs from 'fs'



function readFilePromise(file) {
    return new Promise((resolve, reject) => {
        fs.readFile(file, 'utf-8', (error, datos) => {
            if(error) reject(error)
            else resolve(datos)
         })

    })    

}

function writeFilePromise(file, datos) {
    return new Promise((resolve, reject) => {
        fs.writeFile(file, datos, error => {
            if(error) reject(error)
            else resolve()
        })
    })
}

async function modoAsincronicoAsyncAwait() {
    try {
        const datos = await readFilePromise('./package.json')
        
        const contenidoObj = JSON.parse(datos)
        const contenidoStr = JSON.stringify(contenidoObj, null, '\t')
        const size = Buffer.byteLength(contenidoStr, 'utf-8')

        const info = {
            contenidoStr,
            contenidoObj,
            size
        }

        console.log(info)

        writeFilePromise('./infoAsincAwait.txt', JSON.stringify(info, null, '\t'))
    } catch (error) {
        console.log(`Error en operacion asincronica con async await: ${error}`)
    }

}

export { modoAsincronicoAsyncAwait }