ServerEvents.tags('item', (event) => {

    global.metalOres.forEach((metal) => {
    global.metalBlocks.forEach((block) => {
    
        event.add(`${block.tag}`, `kubejs:${metal.id}_${block.id}`)
        event.add(`${block.tag}${block.appendTag}${metal.id}`, `kubejs:${metal.id}_${block.id}`)
    
    })})

    global.metalOres.forEach((metal) => {
    global.metalItems.forEach((item) => {
        
        event.add(`${item.tag}`, `kubejs:${metal.id}_${item.id}`)
        event.add(`${item.tag}${item.appendTag}${metal.id}`, `kubejs:${metal.id}_${item.id}`)
        
    })})

    global.gemOres.forEach((gem) => {
    global.gemBlocks.forEach((block) => {
        
        event.add(`${block.tag}${block.appendTag}`, `kubejs:${gem.id}_${block.id}`)
        event.add(`${block.tag}${block.appendTag}${gem.id}`, `kubejs:${gem.id}_${block.id}`)
        
    })})

    global.gemOres.forEach((gem) => {
    global.gemItems.forEach((item) => {
            
        event.add(`${item.tag}`, `kubejs:${gem.id}_${item.id}`)
        event.add(`${item.tag}${item.appendTag}${gem.id}`, `kubejs:${gem.id}_${item.id}`)
            
    })})

})