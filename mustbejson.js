module.exports = (filename) => {
    let array = filename.split('.')
    if(array.length != 2) {
        console.error('error', filename, ' invalid format')
        process.exit()
    }else if(array[1] != 'json') {
        console.error('error', filename ,' must be json format')
        process.exit()
    }
}