StartupEvents.registry('fluid', event => {

    global.fluids.forEach((fluid) => {
        event
      .create(`${fluid.id}`)
      //.thickTexture(0xFF0000)
      //.bucketColor(0xFF0000)
      //.displayName('Thick Fluid')
      .luminosity(fluid.luminosity)
      .thinTexture(0x004080)
    })

})
