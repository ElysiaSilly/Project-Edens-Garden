ItemEvents.modification(e => {

    e.modify('kubejs:zinc_nugget', item => {
      item.foodProperties = food => {
		food.hunger(0)
		food.saturation(0)
		food.effect('minecraft:poison', 600, 0, 1)
		food.alwaysEdible()
		food.fastToEat()
        }
    })
})