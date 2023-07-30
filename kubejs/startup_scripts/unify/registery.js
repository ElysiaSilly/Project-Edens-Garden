StartupEvents.registry('block', event => {

    global.metalOres.forEach((metal) => {
    global.metalBlocks.forEach((block) => {

        event.create(`${metal.id}_${block.id}`)
        .material('stone')
        .tagBlock(`${metal.harvestLevel}`)
        .hardness(`${metal.hardness}`)
        .requiresTool(true)

    })})

    global.gemOres.forEach((gem) => {
    global.gemBlocks.forEach((block) => {
    
        event.create(`${gem.id}_${block.id}`)
        .material('stone')
        .tagBlock(`${gem.harvestLevel}`)
        .hardness(`${gem.hardness}`)
        .requiresTool(true)

    })})
})

StartupEvents.registry('item', event => {

    global.metalOres.forEach((metal) => {
    global.metalItems.forEach((item) => {

        event.create(`${metal.id}_${item.id}`)
        .texture(`kubejs:unify/${metal.id}/${item.id}`)
    
    })})

    global.gemOres.forEach((gem) => {
    global.gemItems.forEach((item) => {
    
        event.create(`${gem.id}_${item.id}`)
        .texture(`kubejs:unify/${gem.id}/${item.id}`)
    
    })})
})