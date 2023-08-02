ServerEvents.tags('item', (event) => {

    global.metals.forEach((metal) => {
    global.metalBlocks.forEach((block) => {
    
        event.add(`${block.tag}`, `kubejs:${metal.id}_${block.id}`)
        event.add(`${block.tag}${block.appendTag}${metal.id}`, `kubejs:${metal.id}_${block.id}`)
        event.add('forge:metals', `kubejs:${metal.id}_${block.id}`)
    })})

    
    global.metals.forEach((metal) => {
    global.metalItems.forEach((item) => {
        
        event.add(`${item.tag}`, `kubejs:${metal.id}_${item.id}`)
        event.add(`${item.tag}${item.appendTag}${metal.id}`, `kubejs:${metal.id}_${item.id}`)
        event.add('forge:metals', `kubejs:${metal.id}_${item.id}`)
    })})

    global.alloys.forEach((alloy) => {
    global.alloyBlocks.forEach((block) => {
        
        event.add(`${block.tag}`, `kubejs:${alloy.id}_${block.id}`)
        event.add(`${block.tag}${block.appendTag}${alloy.id}`, `kubejs:${alloy.id}_${block.id}`)
        event.add('forge:alloys', `kubejs:${alloy.id}_${block.id}`)
    })})
  
    global.alloys.forEach((alloy) => {
    global.alloyItems.forEach((item) => {
            
        event.add(`${item.tag}`, `kubejs:${alloy.id}_${item.id}`)
        event.add(`${item.tag}${item.appendTag}${alloy.id}`, `kubejs:${alloy.id}_${item.id}`)
        event.add('forge:alloys', `kubejs:${alloy.id}_${item.id}`)
    })})
  
    global.gems.forEach((gem) => {
    global.gemBlocks.forEach((block) => {
        
        event.add(`${block.tag}`, `kubejs:${gem.id}_${block.id}`)
        event.add(`${block.tag}${block.appendTag}${gem.id}`, `kubejs:${gem.id}_${block.id}`)     
    })})

    global.gems.forEach((gem) => {
    global.gemItems.forEach((item) => {
            
        event.add(`${item.tag}`, `kubejs:${gem.id}_${item.id}`)
        event.add(`${item.tag}${item.appendTag}${gem.id}`, `kubejs:${gem.id}_${item.id}`) 
    })})

    global.minerals.forEach((mineral) => {
        
        event.add(`forge:minerals/${mineral.id}`, `kubejs:${mineral.id}`)
        event.add(`forge:minerals`, `kubejs:${mineral.id}`)
    })

    global.strata.forEach((strata) => {
        
        event.add(`forge:strata/${strata.id}`, `kubejs:${strata.id}`)
        event.add(`forge:strata`, `kubejs:${strata.id}`)
    })

})