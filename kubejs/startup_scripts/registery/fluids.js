StartupEvents.registry('fluid', event => {

    global.fluids.forEach((fluid) => {
        event
      .create(`${fluid.id}`)
      .luminosity(fluid.luminosity)
      .thinTexture(0x004080) // Textures need to be implemented, for now just using goofy ah kubejs tinting
    })

})
