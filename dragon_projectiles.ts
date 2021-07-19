// 在此处添加您的代码
namespace myfighter_dlc_dragon {

    const 尾焰 = "尾焰"

    export function dragon_projectile() {

        fightext_projectile.setProjectiles("恶龙的弹射物集合", function () {
            fightext_projectile.setProjectile(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . 8 8 8 8 . . . 
                . . . . . . . 8 8 1 1 1 1 8 . . 
                . . . . 8 8 9 9 1 1 1 1 1 1 . . 
                . . 9 9 9 9 1 1 1 1 1 1 1 1 . . 
                . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
                . . 9 9 8 8 9 1 1 1 1 1 1 1 . . 
                . . . . . . 8 8 9 1 1 1 1 8 . . 
                . . . . . . . . . 8 8 8 8 . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, "蓝火球", function (projectile) {
                fightext_projectile.setBullet(projectile, fightext_projectile.bulletP.yspeed, 30)
                fightext_projectile.setBullet(projectile, fightext_projectile.bulletP.hitrec, 600)
                fightext_projectile.setBullet2(projectile, fightext_projectile.bulletP2.indeflectible, true)
                fightext_projectile.setBullet(projectile, fightext_projectile.bulletP.perishTogether,1)
            })
            fightext_projectile.setProjectile(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . f f f f . . . 
                . . . . . . . f f 1 1 1 1 f . . 
                . . . . f f a a 1 1 1 1 1 1 . . 
                . . a a a a 1 1 1 1 1 1 1 1 . . 
                . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
                . . a a f f a 1 1 1 1 1 1 1 . . 
                . . . . . . f f a 1 1 1 1 f . . 
                . . . . . . . . . f f f f . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, "黑火球", function (projectile) {
                fightext_projectile.setBullet(projectile, fightext_projectile.bulletP.damage, 5)
                fightext_projectile.setBullet(projectile, fightext_projectile.bulletP.hurted, 10)
                fightext_projectile.setBullet(projectile, fightext_projectile.bulletP.yspeed, 120)
                fightext_projectile.setBullet(projectile, fightext_projectile.bulletP.hitrec, 400)
                fightext_projectile.setBullet2(projectile, fightext_projectile.bulletP2.breakdef, true)
                fightext_projectile.setBullet2(projectile, fightext_projectile.bulletP2.indeflectible, true)
                fightext_projectile.setBullet(projectile, fightext_projectile.bulletP.perishTogether,5)
            })
            let 替身巨龙 = fightext_projectile.strProjectiles("替身巨龙")
            fightext_projectile.setProjectile(img`
                ..................................bbbbbbbbbbbbbbbbbbb........................
                ...............................bbbbb5555555555555555bbb......................
                ....................cbb......bbb5555555555555555555555bb.....................
                ....................ccbbc..bbb5555555555555555555555555bb....................
                ....................cccbbccb5555555555555555555555555555bb...................
                .....................ccccc5555555555555555555555555555555b...................
                .....................cccc55555555555555555db555555555b555bb..................
                .....................ccc555555555555555555bb555555555b5555b..................
                .............ccc.....cc5555555cccb555555555555555555555555c..................
                .............cbbcccccc5555555c1ccc5555555555555cccccb55555c..................
                .............ccbbbccc55555555cbbcd5555555555bccccccccb5555c..................
                ..............cccbcc5555555555555555555551bcccccccccddb555c..................
                ..............ccccc55555555555555555555b11ccccccccccdcb555c..................
                ..............ccccd5555555555555555555cc11ccccccccccbcc55c...................
                ...............ccd5555555555bb5555551bccb1ccccccccccccc55c...................
                ...............ccd55555555555b5555511bccccccccccccccccc5c....................
                ...............cdd555555555555bccccb1ccccccccccccccccc55c....................
                .........cbbccccddd555555555555cccccccccccccccccccccc55c.....................
                .........ccbbccdd555555555555555ccccb333cc333bcccccc55c......................
                .........ccccccdd555555555555555bcc333333cb3333cccd55cc......................
                ..........cccccddd555555555555555cc3333333b33333c555cc.......................
                ..........ccccd55d5555555555555555c33333333b333335bcc........................
                ..........ccccd55555555555555555d55b3333333b333335bc.........................
                ..........cccddd5555555555555555dd55b331b33b333335dc.........................
                ...........ccdddddd55555555555555dd55311b3333333155c....cccc.................
                ...........ccddddd5555555555555555dd5511b3333333155c...ccb55c................
                .........cccdddddd55555555555555555dd555b3333333355c...cbb55c................
                ......ccccccddddddd5555cccc555555555dd555331331355bc..cddb55ccc..............
                ......ccccccddddddddcccc55c5555555555dd55531331555c..cdddb5bb55c.............
                .......cccccdddddcccc5555bc5555555555ddbd5555555dc..ccdddbbbd55c.............
                ........cccbddddcbd5bb55bbcccc5555555dddbbbbbbbbbc..c5bbbddb555c.............
                .........ccddddcb5555bbbbcc55c5555555dddddbbbbbddcccc555bddbbbb..............
                ..........cdddc5555555bd5555bb5555555dddddddddddd5bbdb555b555ddc.............
                .........ccddcc555bbccbdd55bb555555555ddddddddddd5bbd5bbbb555bbbcc...........
                ........ccdddc555bbdddddd5cb5555555555dddddddddd555bb5555555bb555c...........
                ........cdddbc555bbbbddd55c555555555555ddddddddd5555b5555555b5555c...........
                .......cddbbb5555555bbdd5cc5555555555555dddddd555555bbd555555bbbc............
                ......ccdbbbd55555555bd55c555555555555555555555555555bdd55555bbc.............
                ......cddddd555555bbb555cc555555555555555555555555555bddddddccc..............
                ......cdddd555555dd55555c55555555555555555555555555555bddddcc................
                ......cddd5555555dd5555ccd5555555555555555555555555555bddddc.................
                ......cddd55555555dd555cd5d555555555555555555555555555dbddcc.............cc..
                ......cddd555555555555ccdd5555555555555555555555555555dbdcc............bb5c..
                ......ccdd555555555555cdddd555555555555555555555555555dbcc.............b55c..
                ......ccddd5555555555ccddd5d5555555555555555555555555ddbc.............bb5bc..
                .......ccddd5555555cccdddd55d555555555555555555555555ddc..............b55bc..
                ........ccdddd555cccddddddd55d555d555555555555555555dddc..............b55bc..
                ........ccccccccccddddddddddddd555555555555555dd55555ddc..............b555c..
                .......cccddddddddddddddddddddddd5555555555555dd5555ddbc.............bb555bc.
                ......ccccddddddddddddddddddddd55555555dd55555555d5dddbcc............bb555bc.
                .......cccbddddddddddddddddddddd55ddd555555555dddddddbbccc...........b55555c.
                ........ccbdddddddddddddddddddddddddddd5555ddd55ddddbbbbccc..........b55555bc
                .........cbbbdddd55ddddddddddddddddd55d5555dd555dd5555dbbbccb........b55555bc
                .........cbbdddddd55dddddddddddddddd55ddddddddddd5555555bbddbbb....bb5555555c
                .........cbdd5555dd5dddddddddddddddddddddddddddd555555555cddddbbbbbb55555555c
                .........cd55555555ddddddddddddddddddddddddddddd5555555555cdddddd5555555555dc
                ........cc555555555d55dddddddddddddddddddddddddd5555555555ccddddd5555555555dc
                ........c5555555555555dddddddddddddddddddddddddd55555555555cdddddd55555555ddc
                .......cc55555555555ddddddddddddddddddddddddddddd5555555555ccdddddd555555dddc
                .......c555555555555ddddddddddddddddddddddddddddd55555555555cddddddddddddddcc
                .......c555555555555dddddddddddddddddddddddddddd555555555555cddddddddddddddc.
                ......cc555555555555dddddddddbdddddddddddddddddd555555555555ccddddddddddddcc.
                ......c555555555555d5ddddddddbddddddddddddddddddd55dd5555555ccdddddddddddcc..
                ......c5555555555555dddddddddbddddddddddbbddddddddddddd5555dccddddddddddcc...
                ......c55555555555ddddddddddbbbddddddddddbbddddddddddddddddddcddddddddccc....
                ......cd555555555dddddddddddbbbbccccccccccccdddddddddddddddddccdddddccc......
                .....ccd5555555ddddddddddddbbbcccc........cccdddddddddddddddddccccccc........
                ....cccdd55555dddddddddddddbccc.............cccddddddddd555555ccc............
                ....cccdddddddddddddddddddcc..................cccdddddd55555555c.............
                ....cd5555555ddddddddddddcc....................cccccddd555dccdddcc...........
                ...ccd55555555dddddddddccc........................ccddcdddddccdddcc..........
                .ccddccdddd555ddddcccccc...........................cddccccdddcdddcc..........
                ccddccddddccddddddcc...............................ccdcccccddcccccc..........
                ccddcddddccdddccccc................................ccc.....cdc...............
                cccccdccccdddcccc...........................................cc...............
                ....ccc..ccccc...............................................................
                `, 替身巨龙, function (projectile) {
                projectile.setFlag(SpriteFlag.AutoDestroy, false)
                fightext_projectile.setBullet(projectile, fightext_projectile.bulletP.perishTogether,99)
                fightext_projectile.setBullet2(projectile, fightext_projectile.bulletP2.indeflectible, true)
                projectile.setStayInScreen(true)
                for (let index = 0; index < randint(30, randint(40, randint(60, 80))); index++) {
                    fightext_projectile.then(0.1, function (projectile) {
                        fightext_projectile.splitshoot(projectile, "红火球", 0, -23, randint(randint(130, 180), 230), 75, 10)
                        if (Math.percentChance(33.3)) {
                            fightext_projectile.splitshoot(projectile, "蓝火球", 0, -23, randint(randint(130, 180), 230), 75, 10)
                        }
                        if (Math.percentChance(10)) {
                            fightext_projectile.splitshoot(projectile, "黑火球", 0, -23, randint(randint(130, 180), 230), 75, 10)
                        }
                    })
                }
                fightext_projectile.then(1.5, function (projectile) {
                    projectile.destroy()
                })
            })
            fightext_projectile.setProjectile(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . 2 2 2 2 . . . 
                . . . . . . . 2 2 1 1 1 1 2 . . 
                . . . . 2 2 3 3 1 1 1 1 1 1 . . 
                . . 3 3 3 3 1 1 1 1 1 1 1 1 . . 
                . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
                . . 3 3 2 2 3 1 1 1 1 1 1 1 . . 
                . . . . . . 2 2 3 1 1 1 1 2 . . 
                . . . . . . . . . 2 2 2 2 . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, "红火球", function (projectile) {
                fightext_projectile.setBullet(projectile, fightext_projectile.bulletP.damage, 3)
                fightext_projectile.setBullet(projectile, fightext_projectile.bulletP.yspeed, 75)
                fightext_projectile.setBullet2(projectile, fightext_projectile.bulletP2.indeflectible, true)
                fightext_projectile.setBullet(projectile, fightext_projectile.bulletP.perishTogether,3)
            })
            fightext_projectile.setProjectile(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 2 . . . . . . . . 
                . . . . . . 2 1 2 . . . . . . . 
                . . . . . 2 3 1 1 2 . . . . . . 
                . . . . . 2 1 1 1 2 . . . . . . 
                . . . . . . 3 1 3 . . . . . . . 
                . . . . . . . 3 3 . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, "星星之火", function (projectile) {
                fightext_projectile.setBullet2(projectile, fightext_projectile.bulletP2.indeflectible, true)
                projectile.lifespan = 2500
                fightext_projectile.overlapAct(projectile, fightext_sprites.overlapKind.three, function () {
                    for (let index = 0; index < 3; index++) {
                        fightext_projectile.splitshoot(projectile, "火焰柱", 0, 0, 180, randint(-50, 50))
                    }
                })
            })
            fightext_projectile.setProjectile(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . 2 . . . . . . 
                . . . . . . . . 2 2 2 2 . . . . 
                . . . . . . . 2 2 2 3 2 2 . . . 
                . . . . . . 2 2 2 3 1 3 2 2 . . 
                . . . . . 2 2 2 3 1 1 1 3 2 2 . 
                . 2 2 2 2 2 3 3 3 1 1 5 1 3 2 2 
                . . 3 3 3 3 1 1 1 1 5 5 5 1 1 2 
                . . 1 1 1 1 1 1 1 5 5 5 1 1 3 2 
                . . 3 3 2 2 3 1 1 1 5 1 1 3 2 2 
                . 2 2 2 2 2 2 2 3 3 1 1 3 2 2 . 
                . . . . . 2 2 2 2 2 3 3 2 2 . . 
                . . . . . . . . . 2 2 2 2 2 . . 
                . . . . . . . . 2 . . . 2 2 2 . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, "火焰弹", function (projectile) {
                fightext_projectile.circular(projectile, 0.1, 0, fightext_projectile.clockwise.p, 120, 180)
                fightext_projectile.setBullet(projectile, fightext_projectile.bulletP.damage, 10)
                fightext_projectile.setBullet(projectile, fightext_projectile.bulletP.hurted, 6)
                fightext_projectile.setBullet(projectile, fightext_projectile.bulletP.yspeed, 150)
                fightext_projectile.setBullet2(projectile, fightext_projectile.bulletP2.indeflectible, true)
                fightext_projectile.setBullet2(projectile, fightext_projectile.bulletP2.breakdef, true)
                fightext_projectile.setBullet(projectile, fightext_projectile.bulletP.perishTogether,10)
                fightext_projectile.setBlastAnim(projectile, "火球爆炸")
                fightext_projectile.tailshoot(projectile, 40, 尾焰)
            })
            let 火球 = fightext_projectile.strProjectiles("火球")
            fightext_projectile.setProjectile(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . 2 2 2 2 . . . 
                . . . . . . . 2 2 1 1 1 1 2 . . 
                . . . . 2 2 3 3 1 1 1 1 1 1 . . 
                . . 3 3 3 3 1 1 1 1 1 1 1 1 . . 
                . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
                . . 3 3 2 2 3 1 1 1 1 1 1 1 . . 
                . . . . . . 2 2 3 1 1 1 1 2 . . 
                . . . . . . . . . 2 2 2 2 . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, 火球, function (projectile) {
                projectile.lifespan = 800
            })
            fightext_projectile.setProjectile(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . 2 . . . . . . . . 
                . . . . . . 3 1 2 . . . . . . . 
                . . . . . . 3 1 3 . . . . . . . 
                . . . . . . 2 1 3 2 . . . . . . 
                . . . . . . 2 1 3 2 . . . . . . 
                . . . . . 2 3 1 1 3 . . . . . . 
                . . . . . 2 1 5 1 3 2 . . . . . 
                . . . . . 3 1 5 5 1 2 . . . . . 
                . . . . 2 3 1 5 5 1 2 2 . . . . 
                . . . . 2 2 5 5 9 5 2 2 . . . . 
                . . . . 2 1 5 9 9 5 1 2 . . . . 
                . . . . 2 1 5 9 9 5 2 2 . . . . 
                . . . . . 2 9 9 9 9 2 . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, "火焰轮", function (projectile) {
                fightext_projectile.circular(projectile, 4, 0, fightext_projectile.clockwise.p, 45, 180)
                fightext_projectile.setBullet2(projectile, fightext_projectile.bulletP2.indeflectible, true)
                fightext_projectile.setBullet(projectile, fightext_projectile.bulletP.perishTogether,-1)
            })
            fightext_projectile.setProjectile(img`
                ................
                ................
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                .....231132.....
                `, "火焰柱", function (projectile) {
                projectile.lifespan = 500
                fightext_projectile.setBullet(projectile, fightext_projectile.bulletP.damage, 8)
                fightext_projectile.setBullet(projectile, fightext_projectile.bulletP.yspeed, 150)
                fightext_projectile.setBullet(projectile, fightext_projectile.bulletP.xspeed, 45)
                fightext_projectile.setBullet(projectile, fightext_projectile.bulletP.hurted, 6)
                fightext_projectile.setBullet2(projectile, fightext_projectile.bulletP2.indeflectible, true)
                fightext_projectile.setBullet2(projectile, fightext_projectile.bulletP2.breakdef, true)
                fightext_projectile.setBullet(projectile, fightext_projectile.bulletP.perishTogether,-1)
            })
        })
        fightext_animation.defAnimation(function () {
            fightext_animation.setAnimation([img`
                ............................
                ............................
                ............................
                ............................
                ............................
                ............................
                ..............2.............
                ............2222............
                ...........222322...........
                ..........22235322..........
                .........2223553322.........
                .........223555333222.......
                .......22233555533222.......
                ......2223355555533322......
                .......2223355555553322.....
                ........2233555555332.......
                ........222355555332........
                .........22235533322........
                ..........22235322..........
                ............2232222.........
                .............222............
                ..............2.............
                ............................
                ............................
                ............................
                ............................
                ............................
                ............................
                `,img`
                ............................
                ............................
                ............................
                ............................
                ..............2.............
                .............222............
                ............22222...........
                ..........22211122..........
                .........2231151122.........
                .........23115551122........
                ........23315555511222......
                ......2231155555551112......
                .....222315555555511122.....
                .....2331555555555511122....
                ...2222331555555555551122...
                ....2222315555555555112.....
                .......231155555555112......
                ........221155555511122.....
                ........221115551112222.....
                ........222111511132........
                ........222111113322........
                ..........223311322.........
                ............233222..........
                .............22222..........
                ...............22...........
                ...............2............
                ............................
                ............................
                `,img`
                ............................
                ............................
                ............................
                .............bb.............
                ........b...bbdb............
                .......bbbbbbddbbb..........
                .......bdddddddddbb.........
                .......bbdddd111dbb.........
                .....bbbddd41151ddbbb.......
                ......bbddd4555411dddbb.....
                ......bdd4445544441ddbb.....
                .....bbdd154555444111bb.....
                ...bbbbdd1555555541113bb....
                .bbbbbdd145555555444413b....
                ..bbbbd4455555555545543bb...
                ...bbbdd44555555555541dbb...
                ....b.dd4155555555551ddb....
                .....bbddb14555455511dbb....
                .....bbbdd144444111dddbb....
                .......bddd11144113ddbb.....
                ........bddd114133ddbb......
                ........bbddd3113dddb.......
                .........bbbb3333bbbb.......
                .............bbb3b.b........
                ...............bb...........
                ...............b............
                ............................
                ............................
                `,img`
                ............................
                ...........b................
                ......b...bbb...b...........
                .....bbbbbbdb..bdb...b......
                .....bdddddd...bdbbbbb......
                .....bbdddd1d...dddbbbb.....
                ...bbbddd411d..d11dbbb......
                ....bbddd455...d51ddbbb.....
                ..b.bdd444555..55411dddbb...
                ..bbbdd1545....544441ddbb...
                ..bbb.ddd.......5444111bb...
                ...bb............5541113bb..
                ..bbb...d........55444413b..
                .b.b...d55.........55....bb.
                ..bbbbdd155........5..3bbbb.
                .bbbbdd14555............bbb.
                .bbbbd44555..........5d.....
                ..bbbdd445555....555541dbb..
                ...bbdd4445555..555441ddb...
                ....bbddb44555..454411dbb...
                ....bbbdd444445.4441dddbb...
                ......bddd44445.4143ddbb....
                .......bddd144..133ddbb.....
                .......bbddd34..13dddb......
                ........bbbb33bb33bbbb......
                .........b..bb..b3b.b.......
                ................bb..........
                ................b...........
                `], "火球爆炸", 100)
            
            fightext_animation.setAnimation([img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 2 . . . . . . . . 
                . . . . . . 2 1 2 . . . . . . . 
                . . . . . 2 3 1 1 2 . . . . . . 
                . . . . . 2 1 1 1 2 . . . . . . 
                . . . . . . 3 1 3 . . . . . . . 
                . . . . . . . 3 3 . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . 2 . . . . . . 
                . . . . . . . . 2 3 2 . . . . . 
                . . . . . . . 2 3 1 2 . . . . . 
                . . . . . . 2 3 1 2 . . . . . . 
                . . . . . . 2 1 1 2 . . . . . . 
                . . . . . . . 3 3 . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 2 . . . . . . . . 
                . . . . . . 2 1 2 . . . . . . . 
                . . . . . 2 3 1 1 2 . . . . . . 
                . . . . . 2 1 1 1 2 . . . . . . 
                . . . . . . 3 1 3 . . . . . . . 
                . . . . . . . 3 3 . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . 2 . . . . . . . 
                . . . . . . . 2 1 2 . . . . . . 
                . . . . . . . 2 1 2 . . . . . . 
                . . . . . . . 3 3 . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 2 . . . . . . . . 
                . . . . . . 2 1 2 . . . . . . . 
                . . . . . . . 3 . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `], 尾焰, 100)
            fightext_animation.setAnimation([img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . b b . . . . . . 
                . . . . . b b b b 1 b . . . . . 
                . . . . b 1 1 b 1 b b . . . . . 
                . . . . b 1 3 1 d 3 d b . . . . 
                . . . . b b d d b d b b . . . . 
                . . . . . b d d b b b . . . . . 
                . . . . . . b d d b . . . . . . 
                . . . . . . . b b . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . b b b b . . . . . 
                . . . . b b . b 1 1 1 b . . . . 
                . . . b 1 1 b 1 d 1 b b b . . . 
                . . . b 1 3 d 1 b b 1 b 1 b . . 
                . . . b 1 1 b d . . d d 1 b . . 
                . . . b 1 d b . . . b 1 d b . . 
                . . . b b d d . . . d 3 d b . . 
                . . . b b d d . . . d d b . . . 
                . . . . . b b 3 d 3 b b b . . . 
                . . . . . . b d d d d b . . . . 
                . . . . . . . b b b b . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . b b . b b b . . . . . 
                . . . . b 1 1 b 1 1 1 b . . . . 
                . . b b 3 1 1 d d 1 d d b b . . 
                . b 1 1 d d b b b b b 1 1 b . . 
                . b 1 1 1 b . . . . . b d d b . 
                . . 3 d d b . . . . . b d 1 1 b 
                . b 1 d 3 . . . . . . . b 1 1 b 
                . b 1 1 b . . . . . . b b 1 d b 
                . b 1 d b . . . . . . b d 3 d b 
                . b b d d b . . . . b d d d b . 
                . b d d d d b . b b 3 d d 3 b . 
                . . b d d 3 3 b d 3 3 b b b . . 
                . . . b b b d d d d d b . . . . 
                . . . . . . b b b b b . . . . . 
                `,img`
                    . . . . . . . . . . . . . . . .
                    . . . . . b b . b b b . . . . .
                    . . . . b 1 1 b 1 1 1 b . . . .
                    . b . . b 1 1 d d 1 d d b b . .
                    b 1 . . . d . . . . . 1 1 b . .
                    b 1 1 . . . . . . . . . . . . .
                    . 3 d . . . . . . . . . . . . .
                    b 1 d . . . . . . . . . . . d b
                    . b b . . . . . . . . . . . . d
                    . . . . . . . . . . . . . . . .
                    b 1 1 . . . . . . . . . . . . .
                    b 1 d b . . . . . . . . . . b b
                    b b d d . . . . . . . . . d d b
                    b d d d b . . b d 3 b . . d 3 b
                    . b b b . b d d d d d b . b b .
                    . . . . . . b b b b b . . . . .
                `], "烟雾", 100)
        })
    }

}