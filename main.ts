namespace SpriteKind {
    export const dice = SpriteKind.create()
    export const Blue = SpriteKind.create()
    export const Red = SpriteKind.create()
}
let mySprite: Sprite = null
let Blue_2: tiles.Location = null
let Red_2: tiles.Location = null
let Red: Sprite = null
let Blue: Sprite = null
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile6`, function (sprite, location) {
    game.showLongText("Level Two, Completed!", DialogLayout.Top)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 6))
    timer.debounce("action", 200, function () {
        tiles.setTileAt(Blue_2, assets.tile`transparency16`)
        tiles.setTileAt(Red_2, assets.tile`transparency16`)
        Blue_2 = mySprite.tilemapLocation()
        Red_2 = mySprite.tilemapLocation()
    })
})
scene.onOverlapTile(SpriteKind.Red, assets.tile`myTile22`, function (sprite, location) {
    Red.setFlag(SpriteFlag.GhostThroughWalls, false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    timer.throttle("action", 1000, function () {
        game.showLongText("Flip Lever To Switch Blocks to a Solid Form.", DialogLayout.Top)
    })
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    game.showLongText("Level One, Completed!", DialogLayout.Top)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(36, 29))
    timer.debounce("action", 200, function () {
        tiles.setTileAt(Blue_2, assets.tile`transparency16`)
        tiles.setTileAt(Red_2, assets.tile`transparency16`)
        Blue_2 = mySprite.tilemapLocation()
        Red_2 = mySprite.tilemapLocation()
    })
})
scene.onOverlapTile(SpriteKind.Red, sprites.dungeon.collectibleBlueCrystal, function (sprite, location) {
    Red.setFlag(SpriteFlag.GhostThroughWalls, false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile16`, function (sprite, location) {
    timer.throttle("action", 1000, function () {
        game.showLongText("Shoot portals through the Blue and Orange blocks. If you come in contact with the block it will become a solid", DialogLayout.Top)
    })
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile20`, function (sprite, location) {
    game.gameOver(true)
})
scene.onOverlapTile(SpriteKind.Blue, sprites.dungeon.collectibleRedCrystal, function (sprite, location) {
    Blue.setFlag(SpriteFlag.GhostThroughWalls, false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile10`, function (sprite, location) {
    timer.throttle("action", 1000, function () {
        game.showLongText("Shoot Portals Up By Standing on The Arrow Blocks.", DialogLayout.Top)
    })
})
scene.onOverlapTile(SpriteKind.Blue, sprites.builtin.forestTiles10, function (sprite, location) {
    Blue.setFlag(SpriteFlag.GhostThroughWalls, false)
    if (Blue.vy == -100) {
        Blue.setFlag(SpriteFlag.GhostThroughWalls, true)
    }
})
scene.onOverlapTile(SpriteKind.Red, sprites.builtin.forestTiles10, function (sprite, location) {
    Red.setFlag(SpriteFlag.GhostThroughWalls, false)
    if (Red.vy == -100) {
        Red.setFlag(SpriteFlag.GhostThroughWalls, true)
    }
})
scene.onOverlapTile(SpriteKind.Blue, assets.tile`myTile22`, function (sprite, location) {
    Blue.setFlag(SpriteFlag.GhostThroughWalls, false)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleInsignia, function (sprite, location) {
    timer.throttle("action", 5000, function () {
        game.showLongText("Use A and B to Shoot Portals (Q or E).", DialogLayout.Top)
    })
})
