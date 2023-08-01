ServerEvents.tags('item', (event) => {

    // apple, carrot, potato, beetroot, cabbage, tomato, onion, chorus, truffle, duck_egg, cherry, turkey_egg, chicken_egg, turtle_egg, passionfruit, shimmering_passionfruit, golden_apple, golden_carrot, caveroot

    const crates = [ 
       {
        id: "thermal:apple_block",
        tag: "apple"
       },{
        id: "thermal:carrot_block",
        tag: "carrot"
       },{
        id: "thermal:potato_block",
        tag: "potato"
       },{
        id: "thermal:beetroot_block",
        tag: "beetroot"
       },{
        id: "farmersdelight:carrot_crate",
        tag: "carrot"
       },{
        id: "farmersdelight:potato_crate",
        tag: "potato"
       },{
        id: "farmersdelight:beetroot_crate",
        tag: "beetroot"
       },{
        id: "farmersdelight:cabbage_crate",
        tag: "cabbage"
       },{
        id: "farmersdelight:tomato_crate",
        tag: "tomato"
       },{
        id: "farmersdelight:onion_crate",
        tag: "onion"
       },{
        id: "endersdelight:chorus_crate",
        tag: "chorus"
       },{
        id: "environmental:truffle_crate",
        tag: "truffle"
       },{
        id: "environmental:duck_egg_crate",
        tag: "duck_egg"
       },{
        id: "environmental:cherry_crate",
        tag: "cherry"
       },{
        id: "autumnity:turkey_egg_crate",
        tag: "turkey_egg"
       },{
        id: "incubation:chicken_egg_crate",
        tag: "chicken_egg"
       },{
        id: "incubation:turtle_egg_crate",
        tag: "turtle_egg"
       },{
        id: "atmospheric:passionfruit_crate",
        tag: "passionfruit"
       },{
        id: "atmospheric:shimmering_passionfruit_crate",
        tag: "shimmering_passionfruit"
       },{
        id: "quark:golden_apple_crate",
        tag: "golden_apple"
       },{
        id: "quark:apple_crate",
        tag: "apple"
       },{
        id: "quark:potato_crate",
        tag: "potato"
       },{
        id: "quark:carrot_crate",
        tag: "carrot"
       },{
        id: "quark:golden_carrot_crate",
        tag: "golden_carrot"
       },{
        id: "quark:beetroot_crate",
        tag: "beetroot"
       },{
        id: "miners_delight:cave_carrot_crate",
        tag: "cave_carrot"
       },
    ]

    crates.forEach((crate) => {
        event.add(`forge:crates/${crate.tag}`, `${crate.id}`)
        event.add("forge:crates", `${crate.id}`)
    })

})