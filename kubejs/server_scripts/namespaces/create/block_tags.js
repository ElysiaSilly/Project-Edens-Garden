ServerEvents.tags('block', (event) => {

    const ids = [
        // Thermal
       '/thermal:device_*/',
       '/thermal:machine_*/',
       '/thermal:dynamo_*/',

       'thermal:tinker_bench',
       'thermal:charge_bench',
       'thermal:energy_cell',
       'thermal:fluid_cell',

       // Tconstruct
       //'/tconstruct:seared_*/',
       //'/tconstruct:scorched_*/',
       //'/tconstruct:foundry_*/',
       //'/tconstruct:smeltery_*/',

       // Redstone
       'minecraft:redstone_wire',
       'minecraft:redstone_torch',
       'minecraft:redstone_block',
       'minecraft:repeater',
       'minecraft:comparator',
       'minecraft:piston',
       'minecraft:sticky_piston',
       'minecraft:observer',
       'minecraft:hopper',
       'minecraft:dispenser',
       'minecraft:dropper',
       'minecraft:target',
       'minecraft:redstone_lamp',
       'minecraft:note_block',
       'minecraft:jukebox',
       'minecraft:daylight_detector',
       'minecraft:tripwire_hook'

    ]

    ids.forEach((id) => {
        event.add('create:wrench_pickup', `${id}`)
    })

})