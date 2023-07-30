StartupEvents.registry('block', event => {

    // Registers the Strata Blocks

    global.strata.forEach((strata) => {
    global.strataBlocks.forEach((block) => {
    
        event.create(`${strata.id}${block.id}`)
        .material('stone')
        .tagBlock(`${strata.harvestLevel}`)
        .hardness(`${strata.hardness}`)
        .requiresTool(true)
        .resistance(`${strata.resistance}`)
    
    })})

    // Registers the Mineral blocks

    global.minerals.forEach((mineral) => {
    
        event.create(`${mineral.id}`)
        .material('stone')
        .tagBlock(`${mineral.harvestLevel}`)
        .hardness(`${mineral.hardness}`)
        .requiresTool(true)
        .renderType(`${mineral.renderType}`)
    
    })

})