function convertLength(length, from, to) {
    if (from === 'mile' && to === 'mile' || from === 'km' && to === 'km') {
        return console.log(length)
    } else if (from === 'km' && to === 'mile') {
        return console.log(length * ( 1 / 1.6))
    } else if (from === 'mile' && to === 'km') {
        return console.log((length * 1.6))
    } else if (from === 'ft' && to === 'km') {
        return console.log((length * 1.6))
    } else if (from === 'mile' && to === 'km') {
        return console.log((length * 1.6))
    }
}

convertLength(50, 'mile', 'km')
convertLength(32, 'km', 'mile')
convertLength(50, 'km', 'km')
convertLength(50, 'mile', 'mile')