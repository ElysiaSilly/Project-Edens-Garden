ServerEvents.recipes((event) => {

    const recipes = [
        {
            block_in: { blocks: ['kubejs:kernstone'] },
            post: [{
                type: "prevent_default"
            },{
                type: "delay",
                s: "0.01"
              },{
                type: 'execute',
                command: `setblock ~ ~ ~ immersive_weathering:ash_layer_block[layers=3]`,
            },{
                type: 'execute',
                command: `particle clayworks:kiln_smoke ~ ~1 ~ 0 0 0 .3 50 force`, 
            }]
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'lychee:block_exploding';
        event.custom(recipe);
    });

})