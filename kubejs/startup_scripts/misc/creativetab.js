// priority: 0

const $CreativeTabRegistry = Java.loadClass('dev.architectury.registry.CreativeTabRegistry')

const tabs = [
    {
        namespace: "edens_core",
        id: "materials",
    },{
        namespace: "edens_core",
        id: "worldgen",
    }
]

// Registers a new creative tab with a corresponding item (used for the tab icon)

StartupEvents.registry('item', event => {
    tabs.forEach((tab) => {
        event.create(`edens_${tab.id}`)
    })
})

tabs.forEach((tab) => {
    $CreativeTabRegistry.create(Utils.id(`${tab.namespace}`, `${tab.id}`), () => Item.of(`kubejs:edens_${tab.id}`))
})