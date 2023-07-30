StartupEvents.registry('block', event => {

    global.strata.forEach((rock) => {
    global.rockBlocks.forEach((block) => {
    
        event.create(`${rock.id}_${block.id}`)
        .material('stone')
        .tagBlock(`${rock.harvestLevel}`)
        .hardness(`${rock.hardness}`)
        .requiresTool(true)
        .resistance(`${rock.resistance}`)
    
    })})

    global.minerals.forEach((mineral) => {
    
        event.create(`${mineral.id}`)
        .material('stone')
        .tagBlock(`${mineral.harvestLevel}`)
        .hardness(`${mineral.hardness}`)
        .requiresTool(true)
        .renderType(`${mineral.renderType}`)
    
    })

    global.rocks.forEach((rock) => {
    
        event.create(`${rock.id}`)
        .tagBlock(`${rock.harvestLevel}`)
        .hardness(`${rock.hardness}`)
        .requiresTool(true)
        .material(`${rock.material}`)
    
    })

    //??

    event.create('kernstone_rubble')
    .material('sand')
    .tagBlock('hltweaker:needs_machine_tool')
    .hardness('20')
    .requiresTool(true)
    .resistance('4')
    .box(0, 0, 0, 16, 5, 16, true)

})