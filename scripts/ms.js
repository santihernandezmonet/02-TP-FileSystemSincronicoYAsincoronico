import fs from 'fs'


function modoSincronico(){

    try {
        const contenidoObj = JSON.parse(fs.readFileSync('./package.json'))
        const contenidoStr = JSON.stringify(contenidoObj, null, '\t')
        const size = Buffer.byteLength(contenidoStr, 'utf-8')

        const info = {
            contenidoStr,
            contenidoObj,
            size
        }

        //PUNTO 2
        console.log(info)

        //PUNTO 3
        fs.writeFileSync('./info.txt', JSON.stringify(info, null, '\t'))
        
    } catch (error) {
        console.log(`Error en operación sincrónica: ${error.message}`)
    }
}

export {modoSincronico}