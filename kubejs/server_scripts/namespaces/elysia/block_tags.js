ServerEvents.tags('block', (event) => {

    const carverCarvableBlocks = [
        
       'kubejs:aardsilt',
       'kubejs:caverock',
       'kubejs:depthshale',
       'kubejs:deepslate',
       'kubejs:kernstone',

       'minecraft:dirt',
       'minecraft:grass_block',
       'minecraft:sand',
       'minecraft:sandstone',
       'minecraft:gravel',

       'immersive_weathering:cracked_mud'

    ]

    const oreReplaceableBlocks = [
        
        'kubejs:aardsilt',
        'kubejs:caverock',
        'kubejs:depthshale',
        'kubejs:deepslate',
        'kubejs:kernstone',
 
     ]

    carverCarvableBlocks.forEach((block) => {
        event.add('elysia:worldgen/carvable', `${block}`)
    })

    oreReplaceableBlocks.forEach((block) => {
        event.add('elysia:worldgen/ore_replaceable', `${block}`)
    })

})