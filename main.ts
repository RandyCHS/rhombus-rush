namespace SpriteKind {
    export const Body = SpriteKind.create()
    export const Visual = SpriteKind.create()
    export const Camera = SpriteKind.create()
    export const CollisionTester = SpriteKind.create()
    export const Decoration = SpriteKind.create()
    export const JumpPad = SpriteKind.create()
    export const AttemptText = SpriteKind.create()
    export const Title = SpriteKind.create()
}
tileUtil.onMapLoaded(function (tilemap2) {
    tileUtil.setWalls(assets.tile`myTile`, true)
    tileUtil.setWalls(assets.tile`transparency16`, false)
    tileUtil.setWalls(assets.tile`myTile0`, false)
    tileUtil.setWalls(assets.tile`myTile1`, false)
    tileUtil.setWalls(assets.tile`myTile5`, false)
    tileUtil.coverAllTiles(assets.tile`myTile5`, assets.tile`myTile7`)
    tileUtil.createSpritesOnTiles(assets.tile`myTile5`, img`
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
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        6 6 6 6 6 6 6 6 6 6 6 . . . . . 
        . . 8 8 8 8 8 8 8 . . . . . . . 
        6 6 6 6 6 6 6 6 6 6 6 . . . . . 
        `, SpriteKind.JumpPad)
})
scene.onOverlapTile(SpriteKind.Body, assets.tile`myTile5`, function (sprite, location) {
    if (sprite.right > location.left + 6) {
        if (sprite.isHittingTile(CollisionDirection.Bottom)) {
            spriteutils.jumpImpulse(sprite, jumppadJumpHeight)
            music.play(music.createSoundEffect(
                WaveShape.Sawtooth,
                240 + 50 * (3 - mp.getPlayerProperty(mp.getPlayerBySprite(sprites.readDataSprite(sprite, "visual")), mp.PlayerProperty.Index)),
                1500 + 200 * (3 - mp.getPlayerProperty(mp.getPlayerBySprite(sprites.readDataSprite(sprite, "visual")), mp.PlayerProperty.Index)),
                255,
                0,
                150,
                SoundExpressionEffect.None,
                InterpolationCurve.Linear
            ), music.PlaybackMode.InBackground)
            for (let value of sprites.allOfKind(SpriteKind.JumpPad)) {
                if (location.column == value.tilemapLocation().column) {
                    animation.runImageAnimation(
                        value,
                        [img`
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
                        6 6 6 6 6 6 6 6 6 6 6 . . . . . 
                        . . 8 8 8 8 8 8 8 . . . . . . . 
                        . . . 6 6 6 6 6 . . . . . . . . 
                        . . 8 8 8 8 8 8 8 . . . . . . . 
                        6 6 6 6 6 6 6 6 6 6 6 . . . . . 
                        `, img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        6 6 6 6 6 6 6 6 6 6 6 . . . . . 
                        . . 8 8 8 8 8 8 8 . . . . . . . 
                        . . . 6 6 6 6 6 . . . . . . . . 
                        . . 8 8 8 8 8 8 8 . . . . . . . 
                        . . . 6 6 6 6 6 . . . . . . . . 
                        . . 8 8 8 8 8 8 8 . . . . . . . 
                        . . . 6 6 6 6 6 . . . . . . . . 
                        . . 8 8 8 8 8 8 8 . . . . . . . 
                        6 6 6 6 6 6 6 6 6 6 6 . . . . . 
                        `, img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        6 6 6 6 6 6 6 6 6 6 6 . . . . . 
                        . . 8 8 8 8 8 8 8 . . . . . . . 
                        . . . 6 6 6 6 6 . . . . . . . . 
                        . . 8 8 8 8 8 8 8 . . . . . . . 
                        . . . 6 6 6 6 6 . . . . . . . . 
                        . . 8 8 8 8 8 8 8 . . . . . . . 
                        . . . 6 6 6 6 6 . . . . . . . . 
                        . . 8 8 8 8 8 8 8 . . . . . . . 
                        6 6 6 6 6 6 6 6 6 6 6 . . . . . 
                        `, img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        6 6 6 6 6 6 6 6 6 6 6 . . . . . 
                        . . 8 8 8 8 8 8 8 . . . . . . . 
                        . . . 6 6 6 6 6 . . . . . . . . 
                        . . 8 8 8 8 8 8 8 . . . . . . . 
                        . . . 6 6 6 6 6 . . . . . . . . 
                        . . 8 8 8 8 8 8 8 . . . . . . . 
                        . . . 6 6 6 6 6 . . . . . . . . 
                        . . 8 8 8 8 8 8 8 . . . . . . . 
                        6 6 6 6 6 6 6 6 6 6 6 . . . . . 
                        `, img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        6 6 6 6 6 6 6 6 6 6 6 . . . . . 
                        . . 8 8 8 8 8 8 8 . . . . . . . 
                        . . 8 8 8 8 8 8 8 . . . . . . . 
                        . . . 6 6 6 6 6 . . . . . . . . 
                        . . 8 8 8 8 8 8 8 . . . . . . . 
                        . . . 6 6 6 6 6 . . . . . . . . 
                        . . 8 8 8 8 8 8 8 . . . . . . . 
                        6 6 6 6 6 6 6 6 6 6 6 . . . . . 
                        `, img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        6 6 6 6 6 6 6 6 6 6 6 . . . . . 
                        . . 8 8 8 8 8 8 8 . . . . . . . 
                        . . . 6 6 6 6 6 . . . . . . . . 
                        . . 8 8 8 8 8 8 8 . . . . . . . 
                        . . . 6 6 6 6 6 . . . . . . . . 
                        . . 8 8 8 8 8 8 8 . . . . . . . 
                        6 6 6 6 6 6 6 6 6 6 6 . . . . . 
                        `, img`
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
                        6 6 6 6 6 6 6 6 6 6 6 . . . . . 
                        . . 8 8 8 8 8 8 8 . . . . . . . 
                        . . 8 8 8 8 8 8 8 . . . . . . . 
                        . . . 6 6 6 6 6 . . . . . . . . 
                        . . 8 8 8 8 8 8 8 . . . . . . . 
                        6 6 6 6 6 6 6 6 6 6 6 . . . . . 
                        `, img`
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
                        6 6 6 6 6 6 6 6 6 6 6 . . . . . 
                        . . 8 8 8 8 8 8 8 . . . . . . . 
                        . . 8 8 8 8 8 8 8 . . . . . . . 
                        . . 8 8 8 8 8 8 8 . . . . . . . 
                        6 6 6 6 6 6 6 6 6 6 6 . . . . . 
                        `, img`
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
                        . . . . . . . . . . . . . . . . 
                        6 6 6 6 6 6 6 6 6 6 6 . . . . . 
                        . . 8 8 8 8 8 8 8 . . . . . . . 
                        . . 8 8 8 8 8 8 8 . . . . . . . 
                        6 6 6 6 6 6 6 6 6 6 6 . . . . . 
                        `, img`
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
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        6 6 6 6 6 6 6 6 6 6 6 . . . . . 
                        . . 8 8 8 8 8 8 8 . . . . . . . 
                        6 6 6 6 6 6 6 6 6 6 6 . . . . . 
                        `],
                        50,
                        false
                    )
                    break;
                }
            }
        }
    }
})
function drawGroundedCharacter(screen2: Image, cx: number, cy: number, color2: number, rotationIndex: number) {
    screen2.fill(0)
    screen2.fillRect(cx - diagonal + 1, cy - diagonal + 1, characterWidth + 1, characterWidth + 1, 1)
    screen2.drawRect(cx - diagonal + 1, cy - diagonal + 1, characterWidth + 1, characterWidth + 1, color2)
    if (rotationIndex % 4 == 0) {
        screen2.setPixel(cx - diagonal + 3, cy - diagonal + 3, color2)
        screen2.setPixel(cx - diagonal + (characterWidth - 1), cy - diagonal + 3, color2)
        screen2.drawRect(cx - diagonal + 3, cy - diagonal + characterWidth - 1, characterWidth - 3, 1, color2)
    } else if (rotationIndex % 4 == 1) {
        screen2.setPixel(cx - diagonal + (characterWidth - 1), cy - diagonal + 3, color2)
        screen2.setPixel(cx - diagonal + (characterWidth - 1), cy - diagonal + characterWidth - 1, color2)
        screen2.drawRect(cx - diagonal + 3, cy - diagonal + 3, 1, characterWidth - 3, color2)
    } else if (rotationIndex % 4 == 2) {
        screen2.setPixel(cx - diagonal + (characterWidth - 1), cy - diagonal + characterWidth - 1, color2)
        screen2.setPixel(cx - diagonal + 3, cy - diagonal + characterWidth - 1, color2)
        screen2.drawRect(cx - diagonal + 3, cy - diagonal + 4, characterWidth - 3, 1, color2)
    } else {
        screen2.setPixel(cx - diagonal + 3, cy - diagonal + 3, color2)
        screen2.setPixel(cx - diagonal + 3, cy - diagonal + characterWidth - 1, color2)
        screen2.drawRect(cx - diagonal + (characterWidth - 1), cy - diagonal + 3, 1, characterWidth - 3, color2)
    }
}
mp.onButtonEvent(mp.MultiplayerButton.Left, ControllerButtonEvent.Pressed, function (player2) {
    if (state == "LEVEL SELECT") {
        selectedIndex = Math.max(selectedIndex - 1, 0)
        updateLevelSelect()
    }
})
function createCharacter(color2: number) {
    diagonal = spriteutils.consts(spriteutils.Consts.SQRT2) * (characterWidth / 2)
    characterBody = sprites.create(image.create(characterWidth, characterWidth), SpriteKind.Body)
    characterBody.ay = gravity
    characterBody.image.fill(3)
    characterBody.setFlag(SpriteFlag.Invisible, true)
    characterBody.setFlag(SpriteFlag.GhostThroughSprites, true)
    characterVisual = sprites.create(image.create(Math.ceil(spriteutils.consts(spriteutils.Consts.SQRT2) * characterWidth), Math.ceil(spriteutils.consts(spriteutils.Consts.SQRT2) * characterWidth)), SpriteKind.Visual)
    sprites.setDataSprite(characterBody, "visual", characterVisual)
    sprites.setDataSprite(characterVisual, "body", characterBody)
    sprites.setDataNumber(characterBody, "color", color2)
    sprites.setDataNumber(characterBody, "rotation", 0)
    characterVisual.setFlag(SpriteFlag.GhostThroughWalls, true)
    return characterVisual
}
scene.onOverlapTile(SpriteKind.Body, assets.tile`myTile3`, function (sprite, location) {
    tiles.placeOnTile(testSprite, location)
    testSprite.setImage(assets.tile`myTile3`)
    if (testSprite.overlapsWith(sprites.readDataSprite(sprite, "visual"))) {
        destroyPlayerSprite(sprite)
    }
})
scene.onOverlapTile(SpriteKind.Body, assets.tile`myTile9`, function (sprite, location) {
    if (!(sprites.readDataBoolean(sprite, "flying"))) {
        sprites.setDataNumber(sprite, "rotation", Math.round(sprites.readDataNumber(sprite, "rotation") / (spriteutils.consts(spriteutils.Consts.Pi) / 2)) * (spriteutils.consts(spriteutils.Consts.Pi) / 2))
        sprites.setDataBoolean(sprite, "flying", true)
        sprite.ay = 0
        sprites.setDataNumber(sprite, "flyingAngle", 0)
    }
})
function updateLevelSelect() {
    if (isLevelCompleted(selectedIndex)) {
        fancyText.setText(myTextSprite, "<wavy>" + levelNames[selectedIndex])
        fancyText.setColor(myTextSprite, 3)
    } else {
        fancyText.setText(myTextSprite, levelNames[selectedIndex])
        fancyText.setColor(myTextSprite, 2)
    }
    myTextSprite.x = 79
    levelSelectTime = game.runtime()
}
function initPhysics() {
    timeToApex = jumpDistance / moveSpeed / 2
    gravity = 2 * jumpHeight / timeToApex ** 2
    rotatingSpeed = spriteutils.consts(spriteutils.Consts.Pi) / (timeToApex * 2)
}
function drawCharacter(screen2: Image, cx: number, cy: number, color2: number, rotation: number) {
    screen2.fill(0)
    drawShapes.fillRhombus(screen2, cx + Math.cos(rotation - spriteutils.consts(spriteutils.Consts.Pi) / 4) * diagonal, cy + Math.sin(rotation - spriteutils.consts(spriteutils.Consts.Pi) / 4) * diagonal, cx + Math.cos(rotation + spriteutils.consts(spriteutils.Consts.Pi) / 4) * diagonal, cy + Math.sin(rotation + spriteutils.consts(spriteutils.Consts.Pi) / 4) * diagonal, cx + Math.cos(rotation + 3 * spriteutils.consts(spriteutils.Consts.Pi) / 4) * diagonal, cy + Math.sin(rotation + 3 * spriteutils.consts(spriteutils.Consts.Pi) / 4) * diagonal, cx + Math.cos(rotation + 5 * spriteutils.consts(spriteutils.Consts.Pi) / 4) * diagonal, cy + Math.sin(rotation + 5 * spriteutils.consts(spriteutils.Consts.Pi) / 4) * diagonal, 1)
    drawShapes.drawRhombus(screen2, cx + Math.cos(rotation - spriteutils.consts(spriteutils.Consts.Pi) / 4) * diagonal, cy + Math.sin(rotation - spriteutils.consts(spriteutils.Consts.Pi) / 4) * diagonal, cx + Math.cos(rotation + spriteutils.consts(spriteutils.Consts.Pi) / 4) * diagonal, cy + Math.sin(rotation + spriteutils.consts(spriteutils.Consts.Pi) / 4) * diagonal, cx + Math.cos(rotation + 3 * spriteutils.consts(spriteutils.Consts.Pi) / 4) * diagonal, cy + Math.sin(rotation + 3 * spriteutils.consts(spriteutils.Consts.Pi) / 4) * diagonal, cx + Math.cos(rotation + 5 * spriteutils.consts(spriteutils.Consts.Pi) / 4) * diagonal, cy + Math.sin(rotation + 5 * spriteutils.consts(spriteutils.Consts.Pi) / 4) * diagonal, color2)
    screen2.setPixel(cx + Math.cos(rotation - spriteutils.consts(spriteutils.Consts.Pi) / 4) * (diagonal / 2), cy + Math.sin(rotation - spriteutils.consts(spriteutils.Consts.Pi) / 4) * (diagonal / 2), color2)
    screen2.setPixel(cx + Math.cos(rotation + 5 * spriteutils.consts(spriteutils.Consts.Pi) / 4) * (diagonal / 2), cy + Math.sin(rotation + 5 * spriteutils.consts(spriteutils.Consts.Pi) / 4) * (diagonal / 2), color2)
    screen2.drawLine(cx + Math.cos(rotation + spriteutils.consts(spriteutils.Consts.Pi) / 4) * (diagonal / 2), cy + Math.sin(rotation + spriteutils.consts(spriteutils.Consts.Pi) / 4) * (diagonal / 2), cx + Math.cos(rotation + 3 * spriteutils.consts(spriteutils.Consts.Pi) / 4) * (diagonal / 2), cy + Math.sin(rotation + 3 * spriteutils.consts(spriteutils.Consts.Pi) / 4) * (diagonal / 2), color2)
}
scene.onOverlapTile(SpriteKind.Body, assets.tile`myTile2`, function (sprite, location) {
    tiles.placeOnTile(testSprite, location)
    testSprite.setImage(assets.tile`myTile2`)
    if (testSprite.overlapsWith(sprites.readDataSprite(sprite, "visual"))) {
        destroyPlayerSprite(sprite)
    }
})
scene.onOverlapTile(SpriteKind.Body, assets.tile`myTile1`, function (sprite, location) {
    tiles.placeOnTile(testSprite, location)
    testSprite.setImage(assets.tile`myTile1`)
    if (testSprite.overlapsWith(sprites.readDataSprite(sprite, "visual"))) {
        destroyPlayerSprite(sprite)
    }
})
function isLevelCompleted(index: number) {
    return blockSettings.readNumber("" + levelNames[index] + "_COMPLETED") > 0
}
spriteutils.createRenderable(0, function (screen2) {
    if (state == "LEVEL SELECT INTRO" || (state == "TITLE" || state == "LEVEL SELECT")) {
        screen2.fill(1)
        for (let indexX = 0; indexX <= 20; indexX++) {
            for (let indexY = 0; indexY <= 15; indexY++) {
                spriteutils.drawTransparentImage(img`
                    6 6 6 6 6 6 6 6 
                    6 1 1 1 1 1 1 6 
                    6 1 6 1 1 6 1 6 
                    6 1 1 1 1 1 1 6 
                    6 1 1 1 1 1 1 6 
                    6 1 6 6 6 6 1 6 
                    6 1 1 1 1 1 1 6 
                    6 6 6 6 6 6 6 6 
                    `, screen2, (indexX - 1) * 12 + game.runtime() / 35 % 12, (indexY - 1) * 12 + game.runtime() / 35 % 12)
            }
        }
        color.setColor(6, color.__hsv(game.runtime() / 10, 200, 200))
        spriteutils.fillCircle(
            screen2,
            79,
            59,
            48,
            1
        )
    }
    if (state == "LEVEL SELECT") {
        maxVisibleLevels = 12
        slice = spriteutils.consts(spriteutils.Consts.Pi) * 2 / maxVisibleLevels
        if (levelSelectRotation < slice * selectedIndex) {
            levelSelectRotation += 0.1
            if (levelSelectRotation > slice * selectedIndex) {
                levelSelectRotation = slice * selectedIndex
            }
        } else if (levelSelectRotation > slice * selectedIndex) {
            levelSelectRotation += -0.1
            if (levelSelectRotation < slice * selectedIndex) {
                levelSelectRotation = slice * selectedIndex
            }
        }
        for (let index = 0; index <= maxVisibleLevels - 1; index++) {
            angle = index * slice - spriteutils.consts(spriteutils.Consts.Pi) / 2 - levelSelectRotation
            if (isLevelCompleted(index)) {
                spriteutils.drawTransparentImage([img`
                    . . . . 3 3 3 3 . . . . 
                    . . 3 3 3 3 3 3 3 3 . . 
                    . 3 3 3 3 3 3 3 3 3 3 . 
                    . 3 3 3 3 3 3 3 3 3 3 . 
                    3 3 3 3 3 3 3 3 3 3 3 3 
                    3 3 3 3 3 3 3 3 3 3 3 3 
                    3 3 3 3 3 3 3 3 3 3 3 3 
                    3 3 3 3 3 3 3 3 3 3 3 3 
                    . 3 3 3 3 3 3 3 3 3 3 . 
                    . 3 3 3 3 3 3 3 3 3 3 . 
                    . . 3 3 3 3 3 3 3 3 . . 
                    . . . . 3 3 3 3 . . . . 
                    `, img`
                    . . . . . . . . . . . . 
                    . . . . 3 3 3 3 . . . . 
                    . . . 3 3 3 3 3 3 . . . 
                    . . 3 3 3 3 3 3 3 3 . . 
                    . 3 3 3 3 3 3 3 3 3 3 . 
                    . 3 3 3 3 3 3 3 3 3 3 . 
                    . 3 3 3 3 3 3 3 3 3 3 . 
                    . 3 3 3 3 3 3 3 3 3 3 . 
                    . . 3 3 3 3 3 3 3 3 . . 
                    . . . 3 3 3 3 3 3 . . . 
                    . . . . 3 3 3 3 . . . . 
                    . . . . . . . . . . . . 
                    `, img`
                    . . . . . . . . . . . . 
                    . . . . . . . . . . . . 
                    . . . . 3 3 3 3 . . . . 
                    . . . 3 3 3 3 3 3 . . . 
                    . . 3 3 3 3 3 3 3 3 . . 
                    . . 3 3 3 3 3 3 3 3 . . 
                    . . 3 3 3 3 3 3 3 3 . . 
                    . . 3 3 3 3 3 3 3 3 . . 
                    . . . 3 3 3 3 3 3 . . . 
                    . . . . 3 3 3 3 . . . . 
                    . . . . . . . . . . . . 
                    . . . . . . . . . . . . 
                    `, img`
                    . . . . . . . . . . . . 
                    . . . . . . . . . . . . 
                    . . . . . . . . . . . . 
                    . . . . 3 3 3 3 . . . . 
                    . . . 3 3 3 3 3 3 . . . 
                    . . . 3 3 3 3 3 3 . . . 
                    . . . 3 3 3 3 3 3 . . . 
                    . . . 3 3 3 3 3 3 . . . 
                    . . . . 3 3 3 3 . . . . 
                    . . . . . . . . . . . . 
                    . . . . . . . . . . . . 
                    . . . . . . . . . . . . 
                    `, img`
                    . . . . . . . . . . . . 
                    . . . . . . . . . . . . 
                    . . . . . . . . . . . . 
                    . . . . . . . . . . . . 
                    . . . . . 3 3 . . . . . 
                    . . . . 3 3 3 3 . . . . 
                    . . . . 3 3 3 3 . . . . 
                    . . . . . 3 3 . . . . . 
                    . . . . . . . . . . . . 
                    . . . . . . . . . . . . 
                    . . . . . . . . . . . . 
                    . . . . . . . . . . . . 
                    `, img`
                    . . . . . . . . . . . . 
                    . . . . . . . . . . . . 
                    . . . . . . . . . . . . 
                    . . . . . . . . . . . . 
                    . . . . . . . . . . . . 
                    . . . . . 3 3 . . . . . 
                    . . . . . 3 3 . . . . . 
                    . . . . . . . . . . . . 
                    . . . . . . . . . . . . 
                    . . . . . . . . . . . . 
                    . . . . . . . . . . . . 
                    . . . . . . . . . . . . 
                    `][Math.min(Math.abs(Math.round((angle + spriteutils.consts(spriteutils.Consts.Pi) / 2) / (spriteutils.consts(spriteutils.Consts.Pi) * 2) * maxVisibleLevels / 2)), 5)], screen2, 73 + 39 * Math.cos(angle), 53 + 39 * Math.sin(angle))
            } else if (index < levels.length) {
                spriteutils.drawTransparentImage([img`
                    . . . . 2 2 2 2 . . . . 
                    . . 2 2 2 2 2 2 2 2 . . 
                    . 2 2 2 2 2 2 2 2 2 2 . 
                    . 2 2 2 2 2 2 2 2 2 2 . 
                    2 2 2 2 2 2 2 2 2 2 2 2 
                    2 2 2 2 2 2 2 2 2 2 2 2 
                    2 2 2 2 2 2 2 2 2 2 2 2 
                    2 2 2 2 2 2 2 2 2 2 2 2 
                    . 2 2 2 2 2 2 2 2 2 2 . 
                    . 2 2 2 2 2 2 2 2 2 2 . 
                    . . 2 2 2 2 2 2 2 2 . . 
                    . . . . 2 2 2 2 . . . . 
                    `, img`
                    . . . . . . . . . . . . 
                    . . . . 2 2 2 2 . . . . 
                    . . . 2 2 2 2 2 2 . . . 
                    . . 2 2 2 2 2 2 2 2 . . 
                    . 2 2 2 2 2 2 2 2 2 2 . 
                    . 2 2 2 2 2 2 2 2 2 2 . 
                    . 2 2 2 2 2 2 2 2 2 2 . 
                    . 2 2 2 2 2 2 2 2 2 2 . 
                    . . 2 2 2 2 2 2 2 2 . . 
                    . . . 2 2 2 2 2 2 . . . 
                    . . . . 2 2 2 2 . . . . 
                    . . . . . . . . . . . . 
                    `, img`
                    . . . . . . . . . . . . 
                    . . . . . . . . . . . . 
                    . . . . 2 2 2 2 . . . . 
                    . . . 2 2 2 2 2 2 . . . 
                    . . 2 2 2 2 2 2 2 2 . . 
                    . . 2 2 2 2 2 2 2 2 . . 
                    . . 2 2 2 2 2 2 2 2 . . 
                    . . 2 2 2 2 2 2 2 2 . . 
                    . . . 2 2 2 2 2 2 . . . 
                    . . . . 2 2 2 2 . . . . 
                    . . . . . . . . . . . . 
                    . . . . . . . . . . . . 
                    `, img`
                    . . . . . . . . . . . . 
                    . . . . . . . . . . . . 
                    . . . . . . . . . . . . 
                    . . . . 2 2 2 2 . . . . 
                    . . . 2 2 2 2 2 2 . . . 
                    . . . 2 2 2 2 2 2 . . . 
                    . . . 2 2 2 2 2 2 . . . 
                    . . . 2 2 2 2 2 2 . . . 
                    . . . . 2 2 2 2 . . . . 
                    . . . . . . . . . . . . 
                    . . . . . . . . . . . . 
                    . . . . . . . . . . . . 
                    `, img`
                    . . . . . . . . . . . . 
                    . . . . . . . . . . . . 
                    . . . . . . . . . . . . 
                    . . . . . . . . . . . . 
                    . . . . . 2 2 . . . . . 
                    . . . . 2 2 2 2 . . . . 
                    . . . . 2 2 2 2 . . . . 
                    . . . . . 2 2 . . . . . 
                    . . . . . . . . . . . . 
                    . . . . . . . . . . . . 
                    . . . . . . . . . . . . 
                    . . . . . . . . . . . . 
                    `, img`
                    . . . . . . . . . . . . 
                    . . . . . . . . . . . . 
                    . . . . . . . . . . . . 
                    . . . . . . . . . . . . 
                    . . . . . . . . . . . . 
                    . . . . . 2 2 . . . . . 
                    . . . . . 2 2 . . . . . 
                    . . . . . . . . . . . . 
                    . . . . . . . . . . . . 
                    . . . . . . . . . . . . 
                    . . . . . . . . . . . . 
                    . . . . . . . . . . . . 
                    `][Math.min(Math.abs(Math.round((angle + spriteutils.consts(spriteutils.Consts.Pi) / 2) / (spriteutils.consts(spriteutils.Consts.Pi) * 2) * maxVisibleLevels / 2)), 5)], screen2, 73 + 39 * Math.cos(angle), 53 + 39 * Math.sin(angle))
            } else {
                spriteutils.drawTransparentImage([img`
                    . . . . c c c c . . . . 
                    . . c c c c c c c c . . 
                    . c c c c c c c c c c . 
                    . c c c c c c c c c c . 
                    c c c c c c c c c c c c 
                    c c c c c c c c c c c c 
                    c c c c c c c c c c c c 
                    c c c c c c c c c c c c 
                    . c c c c c c c c c c . 
                    . c c c c c c c c c c . 
                    . . c c c c c c c c . . 
                    . . . . c c c c . . . . 
                    `, img`
                    . . . . . . . . . . . . 
                    . . . . c c c c . . . . 
                    . . . c c c c c c . . . 
                    . . c c c c c c c c . . 
                    . c c c c c c c c c c . 
                    . c c c c c c c c c c . 
                    . c c c c c c c c c c . 
                    . c c c c c c c c c c . 
                    . . c c c c c c c c . . 
                    . . . c c c c c c . . . 
                    . . . . c c c c . . . . 
                    . . . . . . . . . . . . 
                    `, img`
                    . . . . . . . . . . . . 
                    . . . . . . . . . . . . 
                    . . . . c c c c . . . . 
                    . . . c c c c c c . . . 
                    . . c c c c c c c c . . 
                    . . c c c c c c c c . . 
                    . . c c c c c c c c . . 
                    . . c c c c c c c c . . 
                    . . . c c c c c c . . . 
                    . . . . c c c c . . . . 
                    . . . . . . . . . . . . 
                    . . . . . . . . . . . . 
                    `, img`
                    . . . . . . . . . . . . 
                    . . . . . . . . . . . . 
                    . . . . . . . . . . . . 
                    . . . . c c c c . . . . 
                    . . . c c c c c c . . . 
                    . . . c c c c c c . . . 
                    . . . c c c c c c . . . 
                    . . . c c c c c c . . . 
                    . . . . c c c c . . . . 
                    . . . . . . . . . . . . 
                    . . . . . . . . . . . . 
                    . . . . . . . . . . . . 
                    `, img`
                    . . . . . . . . . . . . 
                    . . . . . . . . . . . . 
                    . . . . . . . . . . . . 
                    . . . . . . . . . . . . 
                    . . . . . c c . . . . . 
                    . . . . c c c c . . . . 
                    . . . . c c c c . . . . 
                    . . . . . c c . . . . . 
                    . . . . . . . . . . . . 
                    . . . . . . . . . . . . 
                    . . . . . . . . . . . . 
                    . . . . . . . . . . . . 
                    `, img`
                    . . . . . . . . . . . . 
                    . . . . . . . . . . . . 
                    . . . . . . . . . . . . 
                    . . . . . . . . . . . . 
                    . . . . . . . . . . . . 
                    . . . . . c c . . . . . 
                    . . . . . c c . . . . . 
                    . . . . . . . . . . . . 
                    . . . . . . . . . . . . 
                    . . . . . . . . . . . . 
                    . . . . . . . . . . . . 
                    . . . . . . . . . . . . 
                    `][Math.min(Math.abs(Math.round((angle + spriteutils.consts(spriteutils.Consts.Pi) / 2) / (spriteutils.consts(spriteutils.Consts.Pi) * 2) * maxVisibleLevels / 2)), 5)], screen2, 73 + 39 * Math.cos(angle), 53 + 39 * Math.sin(angle))
            }
        }
        drawShapes.fillTriangle(screen2, 78, 28, 73, 33, 83, 33, 2)
        drawShapes.fillTriangle(screen2, 79, 28, 74, 33, 84, 33, 2)
        levelSelectScroll = Math.constrain((game.runtime() - levelSelectTime) / 50 % (tileUtil.tilemapProperty(levels[selectedIndex], tileUtil.TilemapProperty.Columns) + 20) - 10, 0, tileUtil.tilemapProperty(levels[selectedIndex], tileUtil.TilemapProperty.Columns) - 24)
        for (let indexX2 = 0; indexX2 <= 23; indexX2++) {
            for (let indexY2 = 0; indexY2 <= tileUtil.tilemapProperty(levels[selectedIndex], tileUtil.TilemapProperty.Rows) - 1; indexY2++) {
                screen2.fillRect(55 + indexX2 * 2, 64 + indexY2 * 2, 2, 2, getTileColor(selectedIndex, indexX2 + levelSelectScroll, indexY2))
            }
        }
    }
})
scene.onOverlapTile(SpriteKind.Body, assets.tile`myTile12`, function (sprite, location) {
    blockSettings.writeNumber("" + levelNames[selectedIndex] + "_COMPLETED", 1)
    game.splash("" + levelNames[selectedIndex] + " completed!")
    game.reset()
})
function isOnGround(sprite: Sprite) {
    if (sprite.ay < 0) {
        return sprite.isHittingTile(CollisionDirection.Top)
    }
    return sprite.isHittingTile(CollisionDirection.Bottom)
}
scene.onOverlapTile(SpriteKind.Body, assets.tile`myTile8`, function (sprite, location) {
    if (sprite.ay > 0) {
        sprite.ay = 0 - gravity
        music.play(music.createSoundEffect(
            WaveShape.Noise,
            240 + 50 * mp.getPlayerProperty(mp.getPlayerBySprite(sprites.readDataSprite(sprite, "visual")), mp.PlayerProperty.Index),
            1000 + 100 * mp.getPlayerProperty(mp.getPlayerBySprite(sprites.readDataSprite(sprite, "visual")), mp.PlayerProperty.Index),
            255,
            0,
            400,
            SoundExpressionEffect.None,
            InterpolationCurve.Linear
        ), music.PlaybackMode.InBackground)
    }
})
function destroyPlayerSprite(sprite: Sprite) {
    if (sprite.kind() == SpriteKind.Body) {
        characterBody = sprite
        characterVisual = sprites.readDataSprite(sprite, "visual")
    } else {
        characterBody = sprites.readDataSprite(sprite, "body")
        characterVisual = sprite
    }
    sprites.destroy(characterBody)
    sprites.destroy(characterVisual)
    for (let index2 = 0; index2 <= 9; index2++) {
        projectile = sprites.createProjectileFromSprite(img`
            . 1 1 1 . 
            1 1 1 1 1 
            1 1 1 1 1 
            1 1 1 1 1 
            . 1 1 1 . 
            `, characterBody, 50, 50)
        projectile.setFlag(SpriteFlag.Ghost, true)
        spriteutils.setVelocityAtAngle(projectile, spriteutils.consts(spriteutils.Consts.Pi) / 5 * index2, 200)
        projectile.image.replace(1, colors[mp.getPlayerProperty(mp.getPlayerBySprite(characterVisual), mp.PlayerProperty.Index)])
    }
    someAlive = false
    music.play(music.melodyPlayable(music.smallCrash), music.PlaybackMode.InBackground)
    for (let value2 of mp.allPlayers()) {
        if (spriteutils.isDestroyed(mp.getPlayerSprite(value2)) || !(mp.isConnected(value2))) {
            continue;
        }
        someAlive = true
        break;
    }
    if (!(someAlive)) {
        timer.after(1000, function () {
            reset()
        })
    }
}
scene.onOverlapTile(SpriteKind.Body, assets.tile`myTile10`, function (sprite, location) {
    if (sprite.ay < 0) {
        sprite.ay = gravity
        music.play(music.createSoundEffect(
            WaveShape.Noise,
            1000 + 100 * mp.getPlayerProperty(mp.getPlayerBySprite(sprites.readDataSprite(sprite, "visual")), mp.PlayerProperty.Index),
            240 + 50 * mp.getPlayerProperty(mp.getPlayerBySprite(sprites.readDataSprite(sprite, "visual")), mp.PlayerProperty.Index),
            255,
            0,
            400,
            SoundExpressionEffect.None,
            InterpolationCurve.Linear
        ), music.PlaybackMode.InBackground)
    }
})
function titleScreen() {
    state = "TITLE"
    mySprite = sprites.create(img`
        2 2 2 2 2 2 2 2 
        2 1 1 1 1 1 1 2 
        2 1 2 1 1 2 1 2 
        2 1 1 1 1 1 1 2 
        2 1 1 1 1 1 1 2 
        2 1 2 2 2 2 1 2 
        2 1 1 1 1 1 1 2 
        2 2 2 2 2 2 2 2 
        `, SpriteKind.Title)
    titleSprites = []
    titleWords = ["RHOMBUS", "..!HSUR.."]
    for (let word of titleWords) {
        for (let index3 = 0; index3 <= word.length - 1; index3++) {
            tempSprite = fancyText.create(word.charAt(index3), 0, 2, fancyText.rounded_small)
            tempSprite.setFlag(SpriteFlag.Ghost, true)
            tempSprite.setFlag(SpriteFlag.RelativeToCamera, true)
            titleSprites.push(tempSprite)
            tempSprite.setKind(SpriteKind.Title)
        }
    }
    timer.background(function () {
        angle = 2 * spriteutils.consts(spriteutils.Consts.Pi) / titleSprites.length
        selectedIndex = 0
        levelSelectRotation = 0
        while (state == "TITLE") {
            for (let index4 = 0; index4 <= titleSprites.length - 1; index4++) {
                spriteutils.placeAngleFrom(
                    titleSprites[index4],
                    index4 * angle + (spriteutils.consts(spriteutils.Consts.Pi) + 0.4 + 0.3 * Math.sin(game.runtime() / 500)),
                    36,
                    spriteutils.pos(80, 60)
                )
            }
            mySprite.setImage(scaling.rot(img`
                2222222222222222222222222222222222222222
                2222222222222222222222222222222222222222
                2222222222222222222222222222222222222222
                2222222222222222222222222222222222222222
                2222................................2222
                2222................................2222
                2222................................2222
                2222................................2222
                2222....222222............222222....2222
                2222....222222............222222....2222
                2222....222222............222222....2222
                2222....222222............222222....2222
                2222....222222............222222....2222
                2222....222222............222222....2222
                2222................................2222
                2222................................2222
                2222................................2222
                2222................................2222
                2222................................2222
                2222................................2222
                2222................................2222
                2222................................2222
                2222................................2222
                2222................................2222
                2222................................2222
                2222................................2222
                2222................................2222
                2222....222222222222222222222222....2222
                2222....222222222222222222222222....2222
                2222....222222222222222222222222....2222
                2222....222222222222222222222222....2222
                2222....222222222222222222222222....2222
                2222................................2222
                2222................................2222
                2222................................2222
                2222................................2222
                2222222222222222222222222222222222222222
                2222222222222222222222222222222222222222
                2222222222222222222222222222222222222222
                2222222222222222222222222222222222222222
                `, spriteutils.radiansToDegrees(0.3 * Math.sin(game.runtime() / 500))))
            mySprite.setPosition(80, 60)
            pause(10)
        }
        for (let indexX3 = 0; indexX3 <= 36; indexX3++) {
            for (let index5 = 0; index5 <= titleSprites.length - 1; index5++) {
                spriteutils.placeAngleFrom(
                    titleSprites[index5],
                    index5 * angle + (spriteutils.consts(spriteutils.Consts.Pi) + 0.4 + 0.3 * Math.sin(game.runtime() / 500)),
                    36 - indexX3,
                    spriteutils.pos(80, 60)
                )
            }
            scaling.scaleByPixels(mySprite, -2, ScaleDirection.Uniformly, ScaleAnchor.Middle)
            pause(1)
        }
        sprites.destroyAllSpritesOfKind(SpriteKind.Title)
        state = "LEVEL SELECT"
        myTextSprite = fancyText.create(levelNames[0], 0, 2, fancyText.rounded_small)
        updateLevelSelect()
        myTextSprite.y += -6
        myTextSprite.setKind(SpriteKind.Title)
    })
}
mp.onButtonEvent(mp.MultiplayerButton.A, ControllerButtonEvent.Pressed, function (player2) {
    if (state == "TITLE") {
        state = "LEVEL SELECT INTRO"
    } else if (state == "LEVEL SELECT") {
        sprites.destroyAllSpritesOfKind(SpriteKind.Title)
        state = "STARTED"
        color.setPalette(
            color.originalPalette
        )
        tiles.setCurrentTilemap(levels[selectedIndex])
        reset()
    }
})
sprites.onCreated(SpriteKind.JumpPad, function (sprite) {
    sprite.setFlag(SpriteFlag.Ghost, true)
})
mp.onButtonEvent(mp.MultiplayerButton.Right, ControllerButtonEvent.Pressed, function (player2) {
    if (state == "LEVEL SELECT") {
        selectedIndex = Math.min(selectedIndex + 1, levels.length - 1)
        updateLevelSelect()
    }
})
function getTileColor(levelIndex: number, column: number, row: number) {
    if (tilemapReader.tileIs(levels[levelIndex], tiles.getTileLocation(column, row), assets.tile`myTile5`)) {
        return 8
    } else if (tilemapReader.tileIs(levels[levelIndex], tiles.getTileLocation(column, row), assets.tile`myTile`)) {
        return 11
    } else if (tilemapReader.tileIs(levels[levelIndex], tiles.getTileLocation(column, row), assets.tile`myTile0`)) {
        return 10
    } else if (tilemapReader.tileIs(levels[levelIndex], tiles.getTileLocation(column, row), assets.tile`myTile1`)) {
        return 10
    } else if (tilemapReader.tileIs(levels[levelIndex], tiles.getTileLocation(column, row), assets.tile`myTile2`)) {
        return 10
    } else if (tilemapReader.tileIs(levels[levelIndex], tiles.getTileLocation(column, row), assets.tile`myTile3`)) {
        return 10
    } else if (tilemapReader.tileIs(levels[levelIndex], tiles.getTileLocation(column, row), assets.tile`myTile9`)) {
        return 14
    } else if (tilemapReader.tileIs(levels[levelIndex], tiles.getTileLocation(column, row), assets.tile`myTile11`)) {
        return 14
    } else if (tilemapReader.tileIs(levels[levelIndex], tiles.getTileLocation(column, row), assets.tile`myTile8`)) {
        return 3
    } else if (tilemapReader.tileIs(levels[levelIndex], tiles.getTileLocation(column, row), assets.tile`myTile10`)) {
        return 9
    }
    return 13
}
scene.onOverlapTile(SpriteKind.Body, assets.tile`myTile0`, function (sprite, location) {
    tiles.placeOnTile(testSprite, location)
    testSprite.setImage(assets.tile`myTile0`)
    if (testSprite.overlapsWith(sprites.readDataSprite(sprite, "visual"))) {
        destroyPlayerSprite(sprite)
    }
})
function createLevels() {
    levels = [tilemap`level1`, tilemap`level15`]
    levelNames = ["INTRO", "JUMPS"]
    levelSongs = [music.createSong(hex`008c000408010205001c000f0a006400f4010a00000400000000000000000000000000000000020c0000000400012a10001400012709010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c80036000000010001060400050001060800090001060c000d0001061000110001061400150001061800190001061c001d0001061e001f000106`), music.createSong(hex`005a000408010205001c000f0a006400f4010a0000040000000000000000000000000000000002120000000400011e0c000e0001270e001000012a09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c8006d0000000100031201050200030001050400050001050600070003120105080009000201050a000b0001050c000d000212050e000f00020105100011000201051200130001051400150002120516001700020105180019000201051a001b000212051c001d0001051e001f00020105`)]
}
function drawFlyingCharacter(screen2: Image, cx: number, cy: number, rotation: number, color2: number) {
    screen2.fill(0)
    drawShapes.fillTriangle(screen2, cx + Math.cos(rotation - 4 * (spriteutils.consts(spriteutils.Consts.Pi) / 5)) * diagonal, cy + Math.sin(rotation - 4 * (spriteutils.consts(spriteutils.Consts.Pi) / 5)) * diagonal, cx + Math.cos(rotation + 4 * (spriteutils.consts(spriteutils.Consts.Pi) / 5)) * diagonal, cy + Math.sin(rotation + 4 * (spriteutils.consts(spriteutils.Consts.Pi) / 5)) * diagonal, cx + Math.cos(rotation) * diagonal, cy + Math.sin(rotation) * diagonal, 1)
    drawShapes.drawTriangle(screen2, cx + Math.cos(rotation - 4 * (spriteutils.consts(spriteutils.Consts.Pi) / 5)) * diagonal, cy + Math.sin(rotation - 4 * (spriteutils.consts(spriteutils.Consts.Pi) / 5)) * diagonal, cx + Math.cos(rotation + 4 * (spriteutils.consts(spriteutils.Consts.Pi) / 5)) * diagonal, cy + Math.sin(rotation + 4 * (spriteutils.consts(spriteutils.Consts.Pi) / 5)) * diagonal, cx + Math.cos(rotation) * diagonal, cy + Math.sin(rotation) * diagonal, color2)
}
scene.onOverlapTile(SpriteKind.Body, assets.tile`myTile11`, function (sprite, location) {
    if (sprites.readDataBoolean(sprite, "flying")) {
        sprites.setDataBoolean(sprite, "flying", false)
        sprites.setDataBoolean(sprite, "rotating", true)
        sprite.ay = gravity
        sprite.vx = moveSpeed
        sprites.setDataNumber(sprite, "rotation", sprites.readDataNumber(sprite, "rotation") + sprites.readDataNumber(sprite, "flyingAngle"))
    }
})
function startLevel() {
    sprites.destroyAllSpritesOfKind(SpriteKind.Camera)
    started = true
    for (let value3 of mp.allPlayers()) {
        if (mp.isConnected(value3) || value3 == mp.playerSelector(mp.PlayerNumber.One)) {
            sprites.readDataSprite(mp.getPlayerSprite(value3), "body").vx = moveSpeed
        }
    }
    camera = sprites.create(img`
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
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Camera)
    camera.setFlag(SpriteFlag.Ghost, true)
    scene.cameraFollowSprite(camera)
    camera.vx = moveSpeed
    startTime = game.runtime()
    testSprite = sprites.create(img`
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
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.CollisionTester)
}
function reset() {
    music.stopAllSounds()
    for (let value4 of mp.allPlayers()) {
        if (mp.isConnected(value4) || value4 == mp.playerSelector(mp.PlayerNumber.One)) {
            mp.setPlayerSprite(value4, createCharacter(colors[mp.getPlayerProperty(value4, mp.PlayerProperty.Index)]))
            sprites.readDataSprite(mp.getPlayerSprite(value4), "body").x = 18 + mp.getPlayerProperty(value4, mp.PlayerProperty.Index) * 14
        }
    }
    music.play(levelSongs[selectedIndex], music.PlaybackMode.LoopingInBackground)
    startLevel()
    sprites.destroyAllSpritesOfKind(SpriteKind.AttemptText)
    attemptNumber += 1
    attemptIntroText = fancyText.create("ATTEMPT <red>" + attemptNumber, 0, 12, fancyText.rounded_large)
    attemptIntroText.setFlag(SpriteFlag.AutoDestroy, true)
    attemptIntroText.setFlag(SpriteFlag.RelativeToCamera, true)
    attemptIntroText.setKind(SpriteKind.AttemptText)
    attemptIntroText.top = 20
    timer.after(1000, function () {
        attemptIntroText.setFlag(SpriteFlag.RelativeToCamera, false)
        attemptIntroText.x = camera.x
    })
}
let lastTime = 0
let attemptIntroText: fancyText.TextSprite = null
let attemptNumber = 0
let startTime = 0
let camera: Sprite = null
let started = false
let levelSongs: music.Playable[] = []
let tempSprite: fancyText.TextSprite = null
let titleWords: string[] = []
let titleSprites: fancyText.TextSprite[] = []
let mySprite: Sprite = null
let someAlive = false
let projectile: Sprite = null
let levelSelectScroll = 0
let levels: tiles.TileMapData[] = []
let levelSelectRotation = 0
let slice = 0
let rotatingSpeed = 0
let timeToApex = 0
let levelSelectTime = 0
let levelNames: string[] = []
let myTextSprite: fancyText.TextSprite = null
let testSprite: Sprite = null
let characterVisual: Sprite = null
let gravity = 0
let characterBody: Sprite = null
let selectedIndex = 0
let state = ""
let colors: number[] = []
let jumppadJumpHeight = 0
let moveSpeed = 0
let jumpDistance = 0
let jumpHeight = 0
let characterWidth = 0
let diagonal = 0
let maxVisibleLevels = 0
let angle = 0
characterWidth = 8
jumpHeight = 34
jumpDistance = 50
moveSpeed = 100
let scorePerSecond = 4
jumppadJumpHeight = 60
let flyingAngleChangeRate = 0.13
colors = [
    2,
    8,
    4,
    7
]
scene.setBackgroundColor(1)
initPhysics()
createLevels()
titleScreen()
game.onUpdate(function () {
    if (started) {
        for (let value5 of mp.allPlayers()) {
            if (spriteutils.isDestroyed(mp.getPlayerSprite(value5)) || !(mp.isConnected(value5))) {
                continue;
            }
            if (mp.isButtonPressed(value5, mp.MultiplayerButton.A) || (mp.isButtonPressed(value5, mp.MultiplayerButton.B) || (mp.isButtonPressed(value5, mp.MultiplayerButton.Up) || (mp.isButtonPressed(value5, mp.MultiplayerButton.Down) || (mp.isButtonPressed(value5, mp.MultiplayerButton.Left) || mp.isButtonPressed(value5, mp.MultiplayerButton.Right)))))) {
                if (sprites.readDataBoolean(sprites.readDataSprite(mp.getPlayerSprite(value5), "body"), "flying")) {
                    sprites.setDataNumber(sprites.readDataSprite(mp.getPlayerSprite(value5), "body"), "flyingAngle", Math.max(sprites.readDataNumber(sprites.readDataSprite(mp.getPlayerSprite(value5), "body"), "flyingAngle") - flyingAngleChangeRate, 0 - spriteutils.consts(spriteutils.Consts.Pi) / 2))
                } else {
                    if (isOnGround(sprites.readDataSprite(mp.getPlayerSprite(value5), "body"))) {
                        spriteutils.jumpImpulse(sprites.readDataSprite(mp.getPlayerSprite(value5), "body"), jumpHeight)
                        music.play(music.createSoundEffect(
                            WaveShape.Sawtooth,
                            240 + 50 * (3 - mp.getPlayerProperty(value5, mp.PlayerProperty.Index)),
                            1000 + 100 * (3 - mp.getPlayerProperty(value5, mp.PlayerProperty.Index)),
                            255,
                            0,
                            100,
                            SoundExpressionEffect.None,
                            InterpolationCurve.Linear
                        ), music.PlaybackMode.InBackground)
                    }
                }
            } else if (sprites.readDataBoolean(sprites.readDataSprite(mp.getPlayerSprite(value5), "body"), "flying")) {
                sprites.setDataNumber(sprites.readDataSprite(mp.getPlayerSprite(value5), "body"), "flyingAngle", Math.min(sprites.readDataNumber(sprites.readDataSprite(mp.getPlayerSprite(value5), "body"), "flyingAngle") + flyingAngleChangeRate, spriteutils.consts(spriteutils.Consts.Pi) / 2))
            }
            if (sprites.readDataSprite(mp.getPlayerSprite(value5), "body").isHittingTile(CollisionDirection.Right)) {
                destroyPlayerSprite(mp.getPlayerSprite(value5))
            }
            if (sprites.readDataBoolean(sprites.readDataSprite(mp.getPlayerSprite(value5), "body"), "flying")) {
                spriteutils.setVelocityAtAngle(sprites.readDataSprite(mp.getPlayerSprite(value5), "body"), sprites.readDataNumber(sprites.readDataSprite(mp.getPlayerSprite(value5), "body"), "flyingAngle"), moveSpeed * spriteutils.consts(spriteutils.Consts.SQRT2))
                sprites.readDataSprite(mp.getPlayerSprite(value5), "body").vx = moveSpeed
            }
            if (started) {
                mp.setPlayerState(value5, MultiplayerState.score, (game.runtime() - startTime) / 1000 * scorePerSecond)
            }
        }
    }
})
game.onUpdate(function () {
    for (let value6 of sprites.allOfKind(SpriteKind.Body)) {
        sprites.readDataSprite(value6, "visual").setPosition(value6.x, value6.y)
        if (isOnGround(value6)) {
            sprites.setDataNumber(value6, "flyingAngle", 0)
            if (sprites.readDataBoolean(value6, "rotating")) {
                sprites.setDataBoolean(value6, "rotating", false)
                sprites.setDataNumber(value6, "rotation", Math.round(sprites.readDataNumber(value6, "rotation") / (spriteutils.consts(spriteutils.Consts.Pi) / 2)) * (spriteutils.consts(spriteutils.Consts.Pi) / 2))
                drawGroundedCharacter(sprites.readDataSprite(value6, "visual").image, Math.round(sprites.readDataSprite(value6, "visual").height / 2), Math.round(sprites.readDataSprite(value6, "visual").width / 2), sprites.readDataNumber(value6, "color"), Math.round(sprites.readDataNumber(value6, "rotation") / (spriteutils.consts(spriteutils.Consts.Pi) / 2)))
            }
            if (sprites.readDataBoolean(value6, "flying")) {
                drawFlyingCharacter(sprites.readDataSprite(value6, "visual").image, Math.round(sprites.readDataSprite(value6, "visual").width / 2), Math.round(sprites.readDataSprite(value6, "visual").height / 2), sprites.readDataNumber(value6, "flyingAngle"), sprites.readDataNumber(value6, "color"))
            }
        } else {
            if (sprites.readDataBoolean(value6, "flying")) {
                drawFlyingCharacter(sprites.readDataSprite(value6, "visual").image, Math.round(sprites.readDataSprite(value6, "visual").width / 2), Math.round(sprites.readDataSprite(value6, "visual").height / 2), sprites.readDataNumber(value6, "flyingAngle"), sprites.readDataNumber(value6, "color"))
            } else {
                sprites.setDataBoolean(value6, "rotating", true)
                sprites.changeDataNumberBy(value6, "rotation", rotatingSpeed * ((game.runtime() - lastTime) / 1000))
                drawCharacter(sprites.readDataSprite(value6, "visual").image, Math.round(sprites.readDataSprite(value6, "visual").width / 2), Math.round(sprites.readDataSprite(value6, "visual").height / 2), sprites.readDataNumber(value6, "color"), sprites.readDataNumber(value6, "rotation"))
            }
        }
    }
    lastTime = game.runtime()
})
