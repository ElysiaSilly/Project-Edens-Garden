StartupEvents.registry('block', event => {

    global.metals.forEach((metal) => {
    global.metalBlocks.forEach((block) => {

        event
        .create(`${metal.id}_${block.id}`)
        .material('stone')
        .tagBlock(`${metal.harvestLevel}`)
        .hardness(`${metal.hardness}`)
        .requiresTool(true)
        .item(builder => {
            builder.group("edens_core.materials")})

    })})

    global.gems.forEach((gem) => {
    global.gemBlocks.forEach((block) => {
    
        event
        .create(`${gem.id}_${block.id}`)
        .material('stone')
        .tagBlock(`${gem.harvestLevel}`)
        .hardness(`${gem.hardness}`)
        .requiresTool(true)
        .item(builder => {
            builder.group('edens_core.materials')})

    })})

    global.alloys.forEach((alloy) => {
    global.alloyBlocks.forEach((block) => {
    
        event
        .create(`${alloy.id}_${block.id}`)
        .material('stone')
        .tagBlock(`${alloy.harvestLevel}`)
        .hardness(`${alloy.hardness}`)
        .requiresTool(true)
        .item(builder => {
           builder.group("edens_core.materials")})
    
     })})
})

StartupEvents.registry('item', event => {

    global.metals.forEach((metal) => {
    global.metalItems.forEach((item) => {

        event
        .create(`${metal.id}_${item.id}`)
        .group('edens_core.materials')

    })})

    global.gems.forEach((gem) => {
    global.gemItems.forEach((item) => {
    
        event
        .create(`${gem.id}_${item.id}`)
        .group('edens_core.materials')

    })})

    global.alloys.forEach((alloy) => {
    global.alloyItems.forEach((item) => {
        
        event
        .create(`${alloy.id}_${item.id}`)
        .group('edens_core.materials')

    })})

    global.oneOffs.forEach((bro) => {
        
        event
        .create(`${bro}`)
        .group('edens_core.materials')

    })
})