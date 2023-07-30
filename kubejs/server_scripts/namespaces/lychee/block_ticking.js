ServerEvents.recipes((event) => {

    const recipes = [
        {
            block_in: { blocks: ['kubejs:exhaust_stone'] },
            post: [{
                type: 'execute',
                command: `particle caupona:soot_smoke ~ ~ ~ 0 0 0 0 50 force`, 
            },{
                type: 'execute',
                command: `setblock ~ ~-1 ~ immersive_weathering:ash_layer_block keep`, 
            }]
        },
        {
            block_in: { blocks: ['thermal:machine_chiller']}, //, state: {'active': true} 
            post: [{
                type: 'execute',
                command: `particle minecraft:snowflake ~ ~ ~ 0 0 0 1 10 force`, 
            },{
                type: 'execute',
                command: `setblock ~ ~1 ~ minecraft:snow`, 
            },{
                type: 'execute',
                command: `setblock ~ ~-3 ~ immersive_weathering:icicle[vertical_direction=down]`, 
            },{
                type: "delay",
                s: "1"
            },{
                type: 'execute',
                command: `setblock ~ ~-2 ~ immersive_weathering:icicle[vertical_direction=down]`, 
            },{
                type: "delay",
                s: "1"
            },{
                type: 'execute',
                command: `setblock ~ ~-1 ~ immersive_weathering:icicle[vertical_direction=down]`, 
            }]
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'lychee:random_block_ticking';
        event.custom(recipe);
    });
});