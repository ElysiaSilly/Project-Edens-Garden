LootJS.modifiers((event) => {

    // Not sure if this is even working at the moment

    global.metals.forEach((metal) => {

        event.addBlockLootModifier(`kubejs:${metal.id}_ore`)
        .removeLoot(`kubejs:${metal.id}_ore`)
        .addWeightedLoot(metal.pool, [Item.of(`kubejs:${metal.id}_raw`).withChance(100)])
        .addWeightedLoot([1, 1], [Item.of(`kubejs:${metal.id}_crushed`).withChance(100)])
        //.applyOreBonus("minecraft:fortune")
    })

    global.gems.forEach((gem) => {

        event.addBlockLootModifier(`kubejs:${gem.id}_ore`)
        .removeLoot(`kubejs:${gem.id}_ore`)
        .addWeightedLoot(gem.pool, [Item.of(`kubejs:${gem.id}_dust`).withChance(100)])
        .addWeightedLoot([1, 1], [Item.of(`kubejs:${gem.id}_geode`).withChance(100)]
        //.applyOreBonus("minecraft:fortune")
    )})

});