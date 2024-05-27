import fs from 'fs'

function modoAsincronicoCallBacks(){

    try {
        fs.readFile('./package.json', 'utf-8', (error, datos) => {
            
            if(error) throw Error(`Error de lectura asincrónica: ${error.message}`)
            const contenidoObj = JSON.parse(datos)
            const contenidoStr = JSON.stringify(contenidoObj, null, '\t')
            const size = Buffer.byteLength(contenidoStr, 'utf-8')
    
            const info = {
                contenidoStr,
                contenidoObj,
                size
            }

            console.log(info)

            fs.writeFile('./infoAsinc1.txt', JSON.stringify(info, null, '\t'), error => {
                if(error) throw Error(`Error de lectura asincrónica: ${error.message}`)
            })

        })
  
        
    } catch (error) {
        console.log(`Error en operación sincrónica: ${error.message}`)
    }
}

export {modoAsincronicoCallBacks}