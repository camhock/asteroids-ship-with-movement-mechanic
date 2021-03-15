namespace SpriteKind {
    export const tractor = SpriteKind.create()
    export const ladder = SpriteKind.create()
    export const jail = SpriteKind.create()
    export const prisoner = SpriteKind.create()
    export const saved = SpriteKind.create()
    export const hud = SpriteKind.create()
    export const enemyguns = SpriteKind.create()
    export const enemybase = SpriteKind.create()
    export const jet = SpriteKind.create()
    export const mother = SpriteKind.create()
    export const tout = SpriteKind.create()
    export const tour = SpriteKind.create()
}
namespace StatusBarKind {
    export const saved = StatusBarKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (facing == 0) {
        projectile2 = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 4 . . . . . . . . 
            . . . . . . 5 4 2 . . . . . . . 
            . . . . . 4 2 4 5 4 . . . . . . 
            . . . . . . 5 2 5 . . . . . . . 
            . . . . . . . 2 . . . . . . . . 
            `, ship, 0, 50)
        velocityy += -10
    } else if (facing == 1) {
        velocityy += -5
        velocityx += 5
        projectile2 = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . 4 . . . . . . . . . . . 
            . . . 5 4 2 . . . . . . . . . . 
            . . 4 2 4 5 4 . . . . . . . . . 
            . . . 5 2 5 . . . . . . . . . . 
            . . . . 2 . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, ship, -50, 50)
    } else if (facing == 2) {
        projectile2 = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . 4 . . . . . . . . . . . . . 
            . 5 4 2 . . . . . . . . . . . . 
            4 2 4 5 4 . . . . . . . . . . . 
            . 5 2 5 . . . . . . . . . . . . 
            . . 2 . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, ship, -50, 0)
        velocityx += 10
    } else if (facing == 3) {
        velocityy += 5
        velocityx += 5
        projectile2 = sprites.createProjectileFromSprite(img`
            . . 4 . . . . . . . . . . . . . 
            . 5 4 2 . . . . . . . . . . . . 
            4 2 4 5 4 . . . . . . . . . . . 
            . 5 2 5 . . . . . . . . . . . . 
            . . 2 . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, ship, -25, -25)
    } else if (facing == 4) {
        velocityy += 10
        projectile2 = sprites.createProjectileFromSprite(img`
            . . . . . . . 4 . . . . . . . . 
            . . . . . . 5 4 2 . . . . . . . 
            . . . . . 4 2 4 5 4 . . . . . . 
            . . . . . . 5 2 5 . . . . . . . 
            . . . . . . . 2 . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, ship, 0, -50)
    } else if (facing == 5) {
        velocityy += 5
        velocityx += -5
        projectile2 = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . 4 . . . 
            . . . . . . . . . . . 5 4 2 . . 
            . . . . . . . . . . 4 2 4 5 4 . 
            . . . . . . . . . . . 5 2 5 . . 
            . . . . . . . . . . . . 2 . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, ship, 25, -25)
    } else if (facing == 6) {
        velocityx += -10
        projectile2 = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . 4 . . 
            . . . . . . . . . . . . 5 4 2 . 
            . . . . . . . . . . . 4 2 4 5 4 
            . . . . . . . . . . . . 5 2 5 . 
            . . . . . . . . . . . . . 2 . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, ship, 25, 0)
    } else {
        velocityy += -5
        velocityx += -5
        projectile2 = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . 4 . . . 
            . . . . . . . . . . . 5 4 2 . . 
            . . . . . . . . . . 4 2 4 5 4 . 
            . . . . . . . . . . . 5 2 5 . . 
            . . . . . . . . . . . . 2 . . . 
            . . . . . . . . . . . . . . . . 
            `, ship, 25, 25)
    }
    projectile2.lifespan = 100
    projectile2.setKind(SpriteKind.jet)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (facing == 0) {
        cannon = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . 5 . . 5 . . . . . . . 
            . . . . . 2 . . 4 . . . . . . . 
            . . . . . 4 . . 2 . . . . . . . 
            . . . . . 5 . . 5 . . . . . . . 
            . . . . . 4 . . 2 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, ship, 0, -100)
    } else if (facing == 1) {
        cannon = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . 2 . . . . 
            . . . . . . . . . . 5 . 4 . . . 
            . . . . . . . . . 4 . 2 . . . . 
            . . . . . . . . 5 . 5 . . . . . 
            . . . . . . . . . 2 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, ship, 50, -50)
    } else if (facing == 2) {
        cannon = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . 2 5 5 2 . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, ship, 100, 0)
    } else if (facing == 3) {
        cannon = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . 5 . . . . . . 
            . . . . . . . . 4 . 2 . . . . . 
            . . . . . . . . . 2 . 4 . . . . 
            . . . . . . . . . . 5 . 2 . . . 
            . . . . . . . . . . . 5 . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, ship, 50, 50)
    } else if (facing == 4) {
        cannon = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 5 . . 5 . . . . . . 
            . . . . . . 2 . . 4 . . . . . . 
            . . . . . . 4 . . 2 . . . . . . 
            . . . . . . 5 . . 5 . . . . . . 
            . . . . . . 4 . . 2 . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, ship, 0, 100)
    } else if (facing == 5) {
        cannon = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . 2 . . . . . . . . . . . 
            . . . 5 . 4 . . . . . . . . . . 
            . . 4 . 2 . . . . . . . . . . . 
            . 5 . 5 . . . . . . . . . . . . 
            . . 2 . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, ship, -50, 50)
    } else if (facing == 6) {
        cannon = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . 5 4 2 4 . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, ship, -100, 0)
    } else {
        cannon = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . 2 . . . . . . . . . . . 
            . . . . . 2 . . . . . . . . . . 
            . . 5 . . . 5 . . . . . . . . . 
            . . . 2 . . . 4 . . . . . . . . 
            . . . . 2 . . . . . . . . . . . 
            . . . . . 2 . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, ship, -50, -50)
    }
})
controller.right.onEvent(ControllerButtonEvent.Repeated, function () {
    facing += 1
    if (facing > 7) {
        facing = 0
    }
    pause(100)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    facing += -1
    if (facing < 0) {
        facing = 7
    }
})
sprites.onOverlap(SpriteKind.enemyguns, SpriteKind.Player, function (sprite, otherSprite) {
    sprite.destroy()
    otherSprite.destroy(effects.fire, 2000)
    scene.cameraShake(8, 1000)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    facing += 1
    if (facing > 7) {
        facing = 0
    }
})
sprites.onOverlap(SpriteKind.saved, SpriteKind.mother, function (sprite, otherSprite) {
    sprite.destroy()
    music.playMelody("C D E F G A B C5 ", 500)
})
controller.left.onEvent(ControllerButtonEvent.Repeated, function () {
    facing += -1
    if (facing < 0) {
        facing = 7
    }
    pause(100)
})
let cannon: Sprite = null
let projectile2: Sprite = null
let facing = 0
let ship: Sprite = null
tiles.setTilemap(tilemap`level8`)
ship = sprites.create(img`
    f f f f f f f f 
    f f f f f f f f 
    f f f f f f f f 
    f f f f f f f f 
    f f f f f f f f 
    f f f f f f f f 
    f f f f f f f f 
    f f f f f f f f 
    `, SpriteKind.Player)
facing = 0
let velocityx = 0
let velocityy = 10
scene.cameraFollowSprite(ship)
game.onUpdate(function () {
    ship.setVelocity(velocityx, velocityy)
    if (facing == 0) {
        ship.setImage(img`
            . . . . b . . . . . 
            . . . . b . . . . . 
            . . . b b d . . . . 
            . . . c 2 b . . . . 
            . . . 2 c 2 . . . . 
            . . b c b b d . . . 
            . . c b b d b . . . 
            . c b c b b d b . . 
            . b c . . . b d . . 
            b . . . . . . . b . 
            `)
    } else if (facing == 1) {
        ship.setImage(img`
            . . . . . . . . . b 
            . . . . . . d b b . 
            . . . . . d 2 2 b . 
            . . . b d b c 2 c . 
            b d b d b c b c . . 
            . . . b d b c b . . 
            . . . . b c b . . . 
            . . . . b b c . . . 
            . . . . . c . . . . 
            . . . . . b . . . . 
            `)
    } else if (facing == 2) {
        ship.setImage(img`
            . . . . . . . . . . 
            b . . . . . . . . . 
            . d b . . . . . . . 
            . b d b d . . . . . 
            . . b d b 2 b d . . 
            . . b b b c 2 b b b 
            . . c b c 2 c b . . 
            . c b c b . . . . . 
            . b c . . . . . . . 
            b . . . . . . . . . 
            `)
    } else if (facing == 3) {
        ship.setImage(img`
            . . . . b . . . . . 
            . . . . . d . . . . 
            . . . . . b . . . . 
            . . . . b d b . . . 
            . . b b d b d . . . 
            b c b c b c b d . . 
            . . c b c b c 2 d . 
            . . . . b c 2 2 b . 
            . . . . . . c b b . 
            . . . . . . . . . b 
            `)
    } else if (facing == 4) {
        ship.setImage(img`
            b . . . . . . . b . 
            . b d . . . b d . . 
            . d b d b b d b . . 
            . . d b b d b . . . 
            . . b d b c d . . . 
            . . . 2 c 2 . . . . 
            . . . c 2 c . . . . 
            . . . b c d . . . . 
            . . . . b . . . . . 
            . . . . c . . . . . 
            `)
    } else if (facing == 5) {
        ship.setImage(img`
            . . . . . b . . . . 
            . . . . d . . . . . 
            . . . . b . . . . . 
            . . . b d b . . . . 
            . . . d b d b b . . 
            . . d b c b c b c b 
            . d 2 c b c b c . . 
            . b 2 2 c b . . . . 
            . b b c . . . . . . 
            b . . . . . . . . . 
            `)
    } else if (facing == 6) {
        ship.setImage(img`
            . . . . . . . . . . 
            . . . . . . . . . b 
            . . . . . . . b d . 
            . . . . . d b d b . 
            . . d b 2 b d b . . 
            b b b 2 c b b b . . 
            . . b c 2 c b c . . 
            . . . . . b c b c . 
            . . . . . . . c b . 
            . . . . . . . . . b 
            `)
    } else {
        ship.setImage(img`
            b . . . . . . . . . 
            . b b d . . . . . . 
            . b 2 2 d . . . . . 
            . c 2 c b d b . . . 
            . . c b c b d b d . 
            . . b c b d b . . b 
            . . . b c b . . . . 
            . . . c b b . . . . 
            . . . . c . . . . . 
            . . . . b . . . . . 
            `)
    }
})
