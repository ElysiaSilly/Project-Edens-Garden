ServerEvents.recipes((event) => {

    event.custom({
        "type": "lychee:random_block_ticking",
        "block_in": ["ae2:sky_stone_block"],
                "post": [{
                "type": "execute",
                "command": "particle caupona:soot_smoke ~ ~ ~ 0 0 0 0 1 force",
                "hide": "true"
                }]
    })
                    
})