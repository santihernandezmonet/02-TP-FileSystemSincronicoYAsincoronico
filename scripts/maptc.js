import { promises as fs} from 'fs'


function modoAsincronicoThenCatch(){

    fs.readFile('./package.json', 'utf-8')
        .then(datos => {

            const contenidoObj = JSON.parse(datos)
            const contenidoStr = JSON.stringify(contenidoObj, null, '\t')
            const size = Buffer.byteLength(contenidoStr, 'utf-8')

            const info = {
                contenidoStr,
                contenidoObj,
                size
            }
        
            console.log(info)

            return fs.writeFile('infoThenCatch.txt', JSON.stringify(info, null, '\t'))
            
        })

        .catch(error => console.log(`Error: ${error.message} `))
}

export { modoAsincronicoThenCatch }


