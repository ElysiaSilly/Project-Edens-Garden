ServerEvents.tags('fluid', (event) => {

    const ids = [
        
        "kubejs:fresh_water",
        "kubejs:ground_water"

    ]

    ids.forEach((id) => {
        event.add('minecraft:water', `${id}`)
    })

})