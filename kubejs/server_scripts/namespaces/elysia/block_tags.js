ServerEvents.tags('block', (event) => {

    const carverCarvableBlocks = [
        
       'kubejs:aardsilt_block',
       'kubejs:caverock_block',
       'kubejs:depthshale_block',
       'kubejs:deepslate_block',
       'kubejs:kernstone_block',

       'minecraft:dirt',
       'minecraft:grass_block',
       'minecraft:sand',
       'minecraft:sandstone',
       'minecraft:gravel',

       'immersive_weathering:cracked_mud'

    ]

    const oreReplaceableBlocks = [
        
        'kubejs:aardsilt_block',
        'kubejs:caverock_block',
        'kubejs:depthshale_block',
        'kubejs:deepslate_block',
        'kubejs:kernstone_block',
 
     ]

    carverCarvableBlocks.forEach((block) => {
        event.add('elysia:worldgen/carvable', `${block}`)
    })

    oreReplaceableBlocks.forEach((block) => {
        event.add('elysia:worldgen/ore_replaceable', `${block}`)
    })

})