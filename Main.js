var critChance = 0;
var backgroundR = 74;
var backgroundG = 74;
var backgroundB = 74;
var checkboxMystic;
var checkboxPriest;
var checkboxCastanic;
var checkboxPositionBack;
var checkboxPositionSide;
var checkboxPositionFront;
var checkboxKaiasjudgement;
var checkboxTriplenem;
var mystic = true;
var priest = false;
var castanicBool = false;
var position = 1.6;
var kaiasjudgement = true;
var triplenem = true;
var currentClass = 10;

// ----------------------------------------------------------------------------------------------------------------------------------- //

var classes = [
  // archer
  {
    name: "Archer",
    baseCrit: 60,
    skills: [
      // radiant arrow
      {
        name: "Radiant Arrow",
        guaranteedCrit: false,
        glyphCrit: 3,
        innateSkillCrit: 1,
        glyphBaseCrit: 1,
        addCrit: 0,
        damagePortion: 0
      },
      // penetrating arrow
      {
        name: "Penetrating Arrow",
        guaranteedCrit: false,
        glyphCrit: 2,
        innateSkillCrit: 1,
        glyphBaseCrit: 1,
        addCrit: 0,
        damagePortion: 0
      },
      // rain of arrows
      {
        name: "Rain of Arrows",
        guaranteedCrit: false,
        glyphCrit: 1,
        innateSkillCrit: 1,
        glyphBaseCrit: 1,
        addCrit: 0.18,
        damagePortion: 0
      },
      // thunderbolt
      {
        name: "Thunderbolt",
        guaranteedCrit: false,
        glyphCrit: 3,
        innateSkillCrit: 1,
        glyphBaseCrit: 1,
        addCrit: 0,
        damagePortion: 0
      },
      // rapid fire
      {
        name: "Rapid Fire",
        guaranteedCrit: false,
        glyphCrit: 1,
        innateSkillCrit: 3,
        glyphBaseCrit: 1,
        addCrit: 0,
        damagePortion: 0
      },
      // wind walk
      {
        name: "Wind Walk",
        guaranteedCrit: false,
        glyphCrit: 1,
        innateSkillCrit: 1,
        glyphBaseCrit: 1,
        addCrit: 0.42,
        damagePortion: 0
      },
      // gust arrow
      {
        name: "Gust Arrow",
        guaranteedCrit: false,
        glyphCrit: 10,
        innateSkillCrit: 1,
        glyphBaseCrit: 1,
        addCrit: 0,
        damagePortion: 0
      },
      // crackshot
      {
        name: "Crackshot",
        guaranteedCrit: false,
        glyphCrit: 1,
        innateSkillCrit: 1,
        glyphBaseCrit: 1,
        addCrit: 0.05,
        damagePortion: 0
      }
    ],
    buffs: [
      // rapid fire pummle stack
      {
        name: "Rapid Fire: Pummel Stack",
        guaranteedCrit: false,
        glyphCrit: 0,
        addCrit: 0.28,
        glyphBaseCrit: 0,
        bonusCrit: 0,
        uptime: 0.4, // approximation
        skillsAffected: [
          "Radiant Arrow",
          "Penetrating Arrow",
          "Rain of Arrows",
          "Thunderbold",
          "Rapid Fire",
          "Wind Walk",
          "Gust Arrow",
          "Crackshot"
        ]
      }
    ]
  },
  // berserker
  {
    name: "Berserker",
    baseCrit: 58,
    skills: [
      // thunder strike
      {
        name: "Thunder Strike",
        guaranteedCrit: false,
        glyphCrit: 2.2,
        innateSkillCrit: 1,
        glyphBaseCrit: 1,
        addCrit: 0, // doesn't take passive into account
        damagePortion: 0
      },
      // cyclone
      {
        name: "Cyclone",
        guaranteedCrit: false,
        glyphCrit: 2.2,
        innateSkillCrit: 1,
        glyphBaseCrit: 1,
        addCrit: 0,
        damagePortion: 0
      },
      // lethal strike
      {
        name: "Lethal Strike",
        guaranteedCrit: false,
        glyphCrit: 2,
        innateSkillCrit: 1,
        glyphBaseCrit: 1,
        addCrit: 0.1,
        damagePortion: 0
      },
      // sinister
      {
        name: "Sinister",
        guaranteedCrit: false,
        glyphCrit: 1,
        innateSkillCrit: 2.2,
        glyphBaseCrit: 1,
        addCrit: 0,
        damagePortion: 0
      },
      // dexter
      {
        name: "Dexter",
        guaranteedCrit: false,
        glyphCrit: 1,
        innateSkillCrit: 2.2,
        glyphBaseCrit: 1,
        addCrit: 0,
        damagePortion: 0
      },
      // rampage
      {
        name: "Rampage",
        guaranteedCrit: false,
        glyphCrit: 1,
        innateSkillCrit: 2.2,
        glyphBaseCrit: 1,
        addCrit: 0,
        damagePortion: 0
      },
      // beast fury
      {
        name: "Beast Fury",
        guaranteedCrit: false,
        glyphCrit: 1,
        innateSkillCrit: 2.2,
        glyphBaseCrit: 1,
        addCrit: 0,
        damagePortion: 0
      },
      // vampiric blow
      {
        name: "Vampiric Blow",
        guaranteedCrit: false,
        glyphCrit: 1,
        innateSkillCrit: 1,
        glyphBaseCrit: 1,
        addCrit: 0,
        damagePortion: 0
      },
      // flatten
      {
        name: "Flatten",
        guaranteedCrit: false,
        glyphCrit: 1,
        innateSkillCrit: 1,
        glyphBaseCrit: 1,
        addCrit: 0,
        damagePortion: 0
      },
      // raze
      {
        name: "Raze",
        guaranteedCrit: false,
        glyphCrit: 1,
        innateSkillCrit: 1,
        glyphBaseCrit: 1,
        addCrit: 0,
        damagePortion: 0
      },
      // tackle
      {
        name: "Tackle",
        guaranteedCrit: false,
        glyphCrit: 1,
        innateSkillCrit: 1,
        glyphBaseCrit: 1 + 1,
        addCrit: 0,
        damagePortion: 0
      }
    ],
    buffs: [
      // fiery rage
      {
        name: "Fiery Rage",
        guaranteedCrit: false,
        glyphCrit: 0,
        addCrit: 0,
        glyphBaseCrit: 0,
        bonusCrit: 5,
        uptime: 1,
        skillsAffected: [
          "Thunder Strike",
          "Cyclone",
          "Lethal Strike",
          "Sinister",
          "Dexter",
          "Rampage",
          "Beast Fury",
          "Vampiric Blow",
          "Flatten",
          "Raze",
          "Tackle"
        ],
      }
      // bloodshed (missing)
    ]
  },
  // brawler
  {
    name: "Brawler",
    baseCrit: 50,
    skills: [
      // haymaker
      {
        name: "Haymaker",
        guaranteedCrit: false,
        glyphCrit: 3,
        innateSkillCrit: 5,
        glyphBaseCrit: 1,
        addCrit: 0,
        damagePortion: 0
      },
      // jackhammer
      {
        name: "Jackhammer",
        guaranteedCrit: false,
        glyphCrit: 2,
        innateSkillCrit: 1,
        glyphBaseCrit: 1,
        addCrit: 0,
        damagePortion: 0
      },
      // piledriver
      {
        name: "Piledriver",
        guaranteedCrit: false,
        glyphCrit: 3,
        innateSkillCrit: 1.3333, // approximation (4 hits, first 3 @ 1.0, last hit @ 2.0)
        glyphBaseCrit: 1,
        addCrit: 0.03,
        damagePortion: 0
      },
      // counter punch
      {
        name: "Counter Punch",
        guaranteedCrit: false,
        glyphCrit: 1,
        innateSkillCrit: 10,
        glyphBaseCrit: 1,
        addCrit: 0,
        damagePortion: 0
      },
      // flying kick
      {
        name: "Flying Kick",
        guaranteedCrit: false,
        glyphCrit: 1,
        innateSkillCrit: 2,
        glyphBaseCrit: 1,
        addCrit: 0,
        damagePortion: 0
      },
      // one-inch punch
      {
        name: "One-Inch Punch",
        guaranteedCrit: false,
        glyphCrit: 1,
        innateSkillCrit: 10,
        glyphBaseCrit: 1,
        addCrit: 0,
        damagePortion: 0
      },
      // rhythmic blows
      {
        name: "Rhythmic Blows",
        guaranteedCrit: false,
        glyphCrit: 1,
        innateSkillCrit: 10,
        glyphBaseCrit: 1,
        addCrit: 0,
        damagePortion: 0
      },
      // roundhouse kick
      {
        name: "Roundhouse Kick",
        guaranteedCrit: false,
        glyphCrit: 1,
        innateSkillCrit: 1,
        glyphBaseCrit: 1,
        addCrit: 0,
        damagePortion: 0
      }
    ],
    buffs: [
      // growing fury
      {
        name: "Growing Fury",
        guaranteedCrit: false,
        glyphCrit: 0,
        addCrit: 0,
        glyphBaseCrit: 0,
        bonusCrit: 50,
        uptime: 1,
        skillsAffected: [
          "Haymaker",
          "Jackhammer",
          "Piledriver",
          "Counter Punch",
          "Flying Kick",
          "One-Inch Punch",
          "Rhythmic Blows",
          "Roundhouse Kick"
        ]
      }
    ]
  },
  // gunner (to be better implemented)
  {
    name: "Gunner",
    baseCrit: 47,
    skills: [
      // bombardment
      {
        name: "Bombardment",
        glyphCrit: 2,
        innateSkillCrit: 1,
        glyphBaseCrit: 1,
        addCrit: 0,
        damagePortion: 0
      },
      // mana missiles
      {
        name: "Mana Missiles",
        glyphCrit: 3,
        innateSkillCrit: 1,
        glyphBaseCrit: 1,
        addCrit: 0,
        damagePortion: 0
      },
      // remote trigger
      {
        name: "Remote Trigger",
        glyphCrit: 1,
        innateSkillCrit: 3,
        glyphBaseCrit: 1,
        addCrit: 0,
        damagePortion: 0
      },
    ],
    buffs: []
  },
  // lancer
  {
    name: "Lancer",
    baseCrit: 50,
    skills: [
      // super leap
      {
        name: "Super Leap",
        guaranteedCrit: false,
        glyphCrit: 1,
        innateSkillCrit: 3,
        glyphBaseCrit: 1,
        addCrit: 0,
        damagePortion: 0
      },
      // wallop
      {
        name: "Wallop",
        guaranteedCrit: false,
        glyphCrit: 2,
        innateSkillCrit: 1,
        glyphBaseCrit: 1,
        addCrit: 0,
        damagePortion: 0
      },
      // spring attack
      {
        name: "Spring Attack",
        guaranteedCrit: false,
        glyphCrit: 1,
        innateSkillCrit: 1,
        glyphBaseCrit: 1,
        addCrit: 0,
        damagePortion: 0
      },
      // shield counter
      {
        name: "Shield Counter",
        guaranteedCrit: false,
        glyphCrit: 1,
        innateSkillCrit: 10,
        glyphBaseCrit: 1,
        addCrit: 0,
        damagePortion: 0
      },
      // onslaught
      {
        name: "Onslaught",
        guaranteedCrit: false,
        glyphCrit: 2,
        innateSkillCrit: 1,
        glyphBaseCrit: 1,
        addCrit: 0,
        damagePortion: 0
      },
      // shield barrage
      {
        name: "Shield Barrage",
        guaranteedCrit: false,
        glyphCrit: 1,
        innateSkillCrit: 1,
        glyphBaseCrit: 1,
        addCrit: 0,
        damagePortion: 0
      },
      // lockdown blow
      {
        name: "Lockdown Blow",
        guaranteedCrit: false,
        glyphCrit: 1,
        innateSkillCrit: 1,
        glyphBaseCrit: 1,
        addCrit: 0.36,
        damagePortion: 0
      },
      // debilitate
      {
        name: "Debilitate",
        guaranteedCrit: false,
        glyphCrit: 1,
        innateSkillCrit: 1,
        glyphBaseCrit: 1,
        addCrit: 0,
        damagePortion: 0
      },
      // stand fast
      {
        name: "Stand Fast",
        guaranteedCrit: false,
        glyphCrit: 1,
        innateSkillCrit: 10,
        glyphBaseCrit: 1,
        addCrit: 0,
        damagePortion: 0
      },
      // guardian barrier
      {
        name: "Guardian Barrier",
        guaranteedCrit: false,
        glyphCrit: 1,
        innateSkillCrit: 10,
        glyphBaseCrit: 1,
        addCrit: 0,
        damagePortion: 0
      }
    ],
    buffs: [
      // hold the line
      {
        name: "Hold The Line",
        guaranteedCrit: false,
        glyphCrit: 0,
        addCrit: 0,
        glyphBaseCrit: 0,
        bonusCrit: 50,
        uptime: 1,
        skillsAffected: [
          "Super Leap",
          "Wallop",
          "Spring Attack",
          "Shield Counter",
          "Onslaught",
          "Shield Barrage",
          "Lockdown Blow",
          "Debilitate",
          "Stand Fast",
          "Guardian Barrier"
        ]
      }
    ]
  },
  // mystic
  {
    name: "Mystic",
    baseCrit: 35,
    skills: [
      // heals
      {
        name: "Heals",
        guaranteedCrit: false,
        glyphCrit: 1,
        innateSkillCrit: 1,
        glyphBaseCrit: 1,
        addCrit: 0,
        damagePortion: 0
      },
      // arunic release
      {
        name: "Arunic Release",
        guaranteedCrit: false,
        glyphCrit: 1,
        innateSkillCrit: 2,
        glyphBaseCrit: 1,
        addCrit: 0,
        damagePortion: 0
      },
      // boomerang pulse
      {
        name: "Boomerang Pulse",
        guaranteedCrit: false,
        glyphCrit: 1,
        innateSkillCrit: 1,
        glyphBaseCrit: 1,
        addCrit: 0,
        damagePortion: 0
      },
      // volley of curses
      {
        name: "Volley of Curses",
        guaranteedCrit: false,
        glyphCrit: 1,
        innateSkillCrit: 1,
        glyphBaseCrit: 1,
        addCrit: 0,
        damagePortion: 0
      }
    ],
    buffs: []
  },
  // ninja
  {
    name: "Ninja",
    baseCrit: 54,
    skills: [
      // boomerang shuriken
      {
        name: "Boomerang Shuriken",
        guaranteedCrit: false,
        glyphCrit: 1,
        innateSkillCrit: 1.5,
        glyphBaseCrit: 1,
        addCrit: 0,
        damagePortion: 0
      },
      // burning heart
      {
        name: "Burning Heart",
        guaranteedCrit: false,
        glyphCrit: 1,
        innateSkillCrit: 1,
        glyphBaseCrit: 1,
        addCrit: 0.1,
        damagePortion: 0
      },
      // harmonious burning heart
      {
        name: "Harmonious Burning Heart",
        guaranteedCrit: false,
        glyphCrit: 1,
        innateSkillCrit: 1.5,
        glyphBaseCrit: 1,
        addCrit: 0.1,
        damagePortion: 0
      },
      // skyfall
      {
        name: "Skyfall",
        guaranteedCrit: false,
        glyphCrit: 2,
        innateSkillCrit: 1,
        glyphBaseCrit: 1,
        addCrit: 0,
        damagePortion: 0
      },
      // leaves on the wind
      {
        name: "Leaves on the Wind",
        guaranteedCrit: false,
        glyphCrit: 1,
        innateSkillCrit: 1,
        glyphBaseCrit: 1,
        addCrit: 0,
        damagePortion: 0
      },
      // quick attack
      {
        name: "Quick Attack",
        guaranteedCrit: false,
        glyphCrit: 1,
        innateSkillCrit: 1.5,
        glyphBaseCrit: 1,
        addCrit: 0,
        damagePortion: 0
      },
      // harmonious quick attack
      {
        name: "Harmonious Quick Attack",
        guaranteedCrit: false,
        glyphCrit: 1,
        innateSkillCrit: 1,
        glyphBaseCrit: 1,
        addCrit: 0,
        damagePortion: 0
      },
      // harmonious fire avalanche
      {
        name: "Harmonious Fire Avalanche",
        guaranteedCrit: false,
        glyphCrit: 3,
        innateSkillCrit: 1,
        glyphBaseCrit: 1,
        addCrit: 0,
        damagePortion: 0
      },
      // double cut
      {
        name: "Double Cut",
        guaranteedCrit: false,
        glyphCrit: 3,
        innateSkillCrit: 1,
        glyphBaseCrit: 1,
        addCrit: 0,
        damagePortion: 0
      },
      // impact bomb
      {
        name: "Impact Bomb",
        guaranteedCrit: false,
        glyphCrit: 1,
        innateSkillCrit: 1,
        glyphBaseCrit: 1,
        addCrit: 0,
        damagePortion: 0
      }
    ],
    buffs: [
      // attunement: burning spirit
      {
        name: "Attunement: Burning Spirit",
        guaranteedCrit: false,
        glyphCrit: 0,
        addCrit: 0.1,
        glyphBaseCrit: 0,
        bonusCrit: 0,
        uptime: 1,  // to double check (thanks to redkillerdragon for his input)
        skillsAffected: [
          "Burning Heart",
          "Harmonious Burning Heart"
        ]
      },
      // cyclic chi
      {
        name: "Cyclic Chi",
        guaranteedCrit: false,
        glyphCrit: 0,
        addCrit: 0.3,
        glyphBaseCrit: 0,
        bonusCrit: 0,
        uptime: 0.8, // to double check (thanks to redkillerdragon for his input)
        skillsAffected: [
          "Boomerang Shuriken",
          "Burning Heart",
          "Harmonious Burning Heart",
          "Leaves on the Wind"
        ]
      }

    ]
  },
  // priest (super flawed, to be reviewed)
  {
    name: "Priest",
    baseCrit: 33,
    skills: [
      // heals
      {
        name: "Heals",
        glyphCrit: 1,
        innateSkillCrit: 1,
        glyphBaseCrit: 1,
        addCrit: 0,
        damagePortion: 0
      },
      // holy burst
      {
        name: "Holy Burst",
        guaranteedCrit: false,
        glyphCrit: 1,
        innateSkillCrit: 1.5, // needs new data, all that is known is: <3
        glyphBaseCrit: 1,
        addCrit: 0,
        damagePortion: 0
      },
      // zenobia's vortex
      {
        name: "Zenobia's Vortex",
        guaranteedCrit: false,
        glyphCrit: 1,
        innateSkillCrit: 1.25, // needs new data, all that is known is: >1
        glyphBaseCrit: 1,
        addCrit: 0,
        damagePortion: 0
      },
      // shocking implosion
      {
        name: "Shocking Implosion",
        guaranteedCrit: false,
        glyphCrit: 1,
        innateSkillCrit: 1,
        glyphBaseCrit: 1,
        addCrit: 0,
        damagePortion: 0
      },
      // final reprisal
      {
        name: "Final Reprisal",
        guaranteedCrit: false,
        glyphCrit: 1,
        innateSkillCrit: 1,
        glyphBaseCrit: 1,
        addCrit: 0,
        damagePortion: 0
      },
      // metamorphic blast
      {
        name: "Metamorphic Blast",
        guaranteedCrit: false,
        glyphCrit: 1,
        innateSkillCrit: 1,
        glyphBaseCrit: 1,
        addCrit: 0,
        damagePortion: 0
      },
      // triple nemesis
      {
        name: "Triple Nemesis",
        guaranteedCrit: false,
        glyphCrit: 1,
        innateSkillCrit: 1,
        glyphBaseCrit: 1,
        addCrit: 0,
        damagePortion: 0
      },
      // Energy Stars
      {
        name: "Energy Stars",
        guaranteedCrit: false,
        glyphCrit: 1,
        innateSkillCrit: 1,
        glyphBaseCrit: 1,
        addCrit: 0,
        damagePortion: 0
      }
    ],
    buffs: [
      // aura of retribution
      {
        name: "Aura of Retribution",
        guaranteedCrit: false,
        glyphCrit: 0,
        addCrit: 0.5,
        glyphBaseCrit: 0,
        bonusCrit: 0,
        uptime: 0.7,  // to double check
        skillsAffected: [
          "Holy Burst",
          "Zenobia's Vortex",
          "Shocking Implosion",
          "Final Reprisal",
          "Metamorphic Blast"
        ],
      }
    ]
  },
  // reaper
  {
    name: "Reaper",
    baseCrit: 52,
    skills: [
      // sundering strike
      {
        name: "Sundering Strike",
        guaranteedCrit: false,
        glyphCrit: 2,
        innateSkillCrit: 1,
        glyphBaseCrit: 1,
        addCrit: 0.1,
        damagePortion: 0
      },
      // grim strike
      {
        name: "Grim Strike",
        guaranteedCrit: false,
        glyphCrit: 1,
        innateSkillCrit: 1.3,
        glyphBaseCrit: 3,
        addCrit: 0,
        damagePortion: 0
      },
      // dark harvest
      {
        name: "Dark Harvest",
        guaranteedCrit: true,
        glyphCrit: 1,
        innateSkillCrit: 1,
        glyphBaseCrit: 1,
        addCrit: 0,
        damagePortion: 0
      },
      // spiral barrage
      {
        name: "Spiral Barrage",
        guaranteedCrit: false,
        glyphCrit: 2,
        innateSkillCrit: 1, // 0.5 according to data sheet, need to check
        glyphBaseCrit: 1,
        addCrit: 0,
        damagePortion: 0
      },
      // blinding scythes
      {
        name: "Blinding Scythes",
        guaranteedCrit: false,
        glyphCrit: 1,
        innateSkillCrit: 1,
        glyphBaseCrit: 1,
        addCrit: 0,
        damagePortion: 0
      },
      // double sheer
      {
        name: "Double Sheer",
        guaranteedCrit: false,
        glyphCrit: 1,
        innateSkillCrit: 1,
        glyphBaseCrit: 1,
        addCrit: 0,
        damagePortion: 0
      },
      // whipsaw
      {
        name: "Whipsaw",
        guaranteedCrit: false,
        glyphCrit: 1,
        innateSkillCrit: 1,
        glyphBaseCrit: 1,
        addCrit: 0.3, // pendulum strike
        damagePortion: 0
      },
      // recall scythes
      {
        name: "Recall Scythes",
        guaranteedCrit: false,
        glyphCrit: 1,
        innateSkillCrit: 1,
        glyphBaseCrit: 1,
        addCrit: 0,
        damagePortion: 0
      },
      // death spiral
      {
        name: "Death Spiral",
        guaranteedCrit: false,
        glyphCrit: 1,
        innateSkillCrit: 1,
        glyphBaseCrit: 1,
        addCrit: 0,
        damagePortion: 0
      },
      // retribution
      {
        name: "Retribution",
        guaranteedCrit: true,
        glyphCrit: 1,
        innateSkillCrit: 1,
        glyphBaseCrit: 1,
        addCrit: 0,
        damagePortion: 0
      }
    ],
    buffs: [
      // assassination (not applied yet)
      {
        name: "Assassination",
        guaranteedCrit: true,
        glyphCrit: 0,
        addCrit: 0,
        glyphBaseCrit: 0,
        bonusCrit: 0,
        uptime: 0.15,
        skillsAffected: [
          "Grim Strike",
          "Dark Harvest",
          "Shadow Burst",
          "Sundering Strike"
        ]
      }
      // shadow reaping: weak point (missing info)
    ]
  },
  // slayer
  {
    name: "Slayer",
    baseCrit: 56,
    skills: [
      // punishing blow
      {
        name: "Punishing Blow",
        guaranteedCrit: false,
        glyphCrit: 1,
        innateSkillCrit: 3,
        glyphBaseCrit: 1,
        addCrit: 0,
        damagePortion: 0
      },
      // overhand strike
      {
        name: "Overhand Strike",
        guaranteedCrit: false,
        glyphCrit: 1,
        innateSkillCrit: 1.3,
        glyphBaseCrit: 1,
        addCrit: 0,
        damagePortion: 0
      },
      // measured slice
      {
        name: "Measured Slice",
        guaranteedCrit: false,
        glyphCrit: 3,
        innateSkillCrit: 1.5,
        glyphBaseCrit: 1,
        addCrit: 0,
        damagePortion: 0
      },
      // whirlwind
      {
        name: "Whirlwind",
        guaranteedCrit: false,
        glyphCrit: 1,
        innateSkillCrit: 1,
        glyphBaseCrit: 3,
        addCrit: 0.1,
        damagePortion: 0
      },
      // unsheathe
      {
        name: "Unsheathe",
        guaranteedCrit: false,
        glyphCrit: 1,
        innateSkillCrit: 50, // double check
        glyphBaseCrit: 1,
        addCrit: 0,
        damagePortion: 0
      },
      // eviscerate
      {
        name: "Eviscerate",
        guaranteedCrit: false,
        glyphCrit: 1,
        innateSkillCrit: 1.5,
        glyphBaseCrit: 1,
        addCrit: 0,
        damagePortion: 0
      },
      // heart thrust
      {
        name: "Heart Thrust",
        guaranteedCrit: false,
        glyphCrit: 1,
        innateSkillCrit: 1.4,
        glyphBaseCrit: 3,
        addCrit: 0,
        damagePortion: 0
      },
      // savage strike
      {
        name: "Savage Strike",
        guaranteedCrit: false,
        glyphCrit: 1,
        innateSkillCrit: 10,
        glyphBaseCrit: 1,
        addCrit: 0,
        damagePortion: 0
      },
      // knockdown strike
      {
        name: "Knockdown Strike",
        guaranteedCrit: false,
        glyphCrit: 1,
        innateSkillCrit: 1,
        glyphBaseCrit: 3,
        addCrit: 0,
        damagePortion: 0
      }
    ],
    buffs: [
      // energy rush
      {
        name: "Energy Rush",
        guaranteedCrit: 0,
        glyphCrit: 0.25,
        addCrit: 0,
        glyphBaseCrit: 0,
        bonusCrit: 0,
        uptime: 0.3,
        skillsAffected: [
          "All"
        ]
      },
      // knockdown strike (missing)
      // whirlwind: critical pummel
      {
        name: "Whirlwind: Critical Pummel",
        guaranteedCrit: false,
        glyphCrit: 0,
        addCrit: 0,
        glyphBaseCrit: 0,
        bonusCrit: 20,
        uptime: 0.2,
        skillsAffected: [
          "Overhand Strike",
          "Eviscerate",
          "Measured Slice"
        ]
      }
    ]
  },
  // sorcerer
  {
    name: "Sorcerer",
    baseCrit: "50",
    skills: [
      // elemental fusion
      {
        name: "Elemental Fusion",
        guaranteedCrit: false,
        glyphCrit: 1,
        innateSkillCrit: 2.4,
        glyphBaseCrit: 1,
        addCrit: 0,
        damagePortion: 0
      },
      // fusion
      {
        name: "Fusion",
        guaranteedCrit: false,
        glyphCrit: 1,
        innateSkillCrit: 2.4,
        glyphBaseCrit: 1,
        addCrit: 0,
        damagePortion: 0
      },
      // meteor strike
      {
        name: "Meteor Strike",
        guaranteedCrit: false,
        glyphCrit: 2,
        innateSkillCrit: 1.1,
        glyphBaseCrit: 1,
        addCrit: 0,
        damagePortion: 0
      },
      // arcane pulse
      {
        name: "Arcane Pulse",
        guaranteedCrit: false,
        glyphCrit: 1,
        innateSkillCrit: 1,
        glyphBaseCrit: 1,
        addCrit: 0,
        damagePortion: 0
      },
      // ice lance
      {
        name: "Ice Lance",
        guaranteedCrit: false,
        glyphCrit: 1,
        innateSkillCrit: 1,
        glyphBaseCrit: 1,
        addCrit: 0,
        damagePortion: 0
      },
      // lightning strike
      {
        name: "Lightning Strike",
        guaranteedCrit: false,
        glyphCrit: 2,
        innateSkillCrit: 1,
        glyphBaseCrit: 1,
        addCrit: 0,
        damagePortion: 0
      },
      // nova
      {
        name: "Nova",
        guaranteedCrit: false,
        glyphCrit: 1,
        innateSkillCrit: 1.1,
        glyphBaseCrit: 1,
        addCrit: 0,
        damagePortion: 0
      },
      // implosion
      {
        name: "Implosion",
        guaranteedCrit: false,
        glyphCrit: 1,
        innateSkillCrit: 10,
        glyphBaseCrit: 1,
        addCrit: 0,
        damagePortion: 0
      },
      // hail storm
      {
        name: "Hail Storm",
        guaranteedCrit: false,
        glyphCrit: 1,
        innateSkillCrit: 1.1,
        glyphBaseCrit: 1,
        addCrit: 0.15,
        damagePortion: 0
      },
      // void pulse
      {
        name: "Void Pulse",
        guaranteedCrit: false,
        glyphCrit: 2,
        innateSkillCrit: 1.1,
        glyphBaseCrit: 1,
        addCrit: 0,
        damagePortion: 0
      },
      // frost sphere
      {
        name: "Frost Sphere",
        guaranteedCrit: false,
        glyphCrit: 1,
        innateSkillCrit: 1,
        glyphBaseCrit: 1,
        addCrit: 0,
        damagePortion: 0
      },
      // flaming barrage
      {
        name: "Flaming Barrage",
        guaranteedCrit: false,
        glyphCrit: 1,
        innateSkillCrit: 1,
        glyphBaseCrit: 1,
        addCrit: 0,
        damagePortion: 0
      },
    ],
    buffs: [
      // keen arcane pulse
      {
        name: "Keen Arcane Pulse",
        guaranteedCrit: false,
        glyphCrit: 0,
        addCrit: 0,
        glyphBaseCrit: 0,
        bonusCrit: 75,
        uptime: 0.4,
        skillsAffected: [
          "All"
        ]
      },
      // keen nova
      {
        name: "Keen Nova",
        guaranteedCrit: false,
        glyphCrit: 0,
        addCrit: 0,
        glyphBaseCrit: 0,
        bonusCrit: 75,
        uptime: 0.4,
        skillsAffected: [
          "All"
        ]
      }
    ]
  }
];

var critSkillDisplay = [];

// classes:
// archer v
// berserker v
// brawler v
// gunner x (fuck this class)
// lancer v
// mystic v
// ninja v (double check bufftimes, boomerang and burning heart see too high)
// priest v (to review)
// reaper v (double check buffs)
// slayer v
// sorcerer v
// valkyrie x (fuck this class)
// warrior x
// ---------------------------------
// warrior tank x
// brawler dps x
// zerk tank x

// ----------------------------------------------------------------------------------------------------------------------------------- //

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(backgroundR, backgroundG, backgroundB);
  button = createButton('calculate');
  button.position(20, 105);
  button.size(80, 20);
  button.mousePressed(critCalculation);
  input = createInput(200);
  input.size(72, 20);
  input.position(20, 50);
  checkboxMystic = createCheckbox("Mystic", true);
  checkboxMystic.position(100 + 10, 50);
  checkboxMystic.changed(switchMystic);
  checkboxPriest = createCheckbox("Priest", false);
  checkboxPriest.position(170 + 10, 50);
  checkboxPriest.changed(switchPriest);
  checkboxCastanic = createCheckbox("Castanic", false);
  checkboxCastanic.position(100 + 10, 80);
  checkboxCastanic.changed(switchCastanic);
  checkboxPositionBack = createCheckbox("Back", true);
  checkboxPositionBack.position(100 + 10, 110);
  checkboxPositionBack.changed(switchPosition);
  checkboxPositionSide = createCheckbox("Side", false);
  checkboxPositionSide.position(170 + 10, 110);
  checkboxPositionSide.changed(switchPosition);
  checkboxPositionFront = createCheckbox("Front", false);
  checkboxPositionFront.position(240 + 10, 110);
  checkboxPositionFront.changed(switchPosition);
  checkboxKaiasjudgement = createCheckbox("Kaia's Judgement", true);
  checkboxKaiasjudgement.position(100 + 10, 140);
  checkboxKaiasjudgement.changed(switchKaiasjudgement);
  checkboxTriplenem = createCheckbox("Triple Nem / Volley", true);
  checkboxTriplenem.position(100 + 10, 170);
  checkboxTriplenem.changed(switchTriplenem);
  classSelection = createSelect();
  classSelection.position(20, 80);
  classSelection.option("Archer");
  classSelection.option("Berserker");
  classSelection.option("Brawler");
  // classSelection.option("Gunner");
  classSelection.option("Lancer");
  classSelection.option("Mystic");
  classSelection.option("Ninja");
  classSelection.option("Priest");
  classSelection.option("Reaper");
  classSelection.option("Slayer");
  classSelection.option("Sorcerer");
  classSelection.selected("Sorcerer");
  classSelection.changed(changeClass);
  classSelection.size(80, 20);
  textSize(20);
}

function draw() {
  var maxWidth = 0;
  resizeCanvas(windowWidth, windowHeight);
  background(backgroundR, backgroundG, backgroundB);
  fill(255);
  text("Crit:", 20, 40);

  for (var i = 0; i < critSkillDisplay.length; i++) {
    if (textWidth(critSkillDisplay[i].name + ": ") > maxWidth) {
      maxWidth = textWidth(critSkillDisplay[i].name + ": ");
    }
  }

  for (var i = 0; i < critSkillDisplay.length; i++) {
    text(critSkillDisplay[i].name + ": ", 350, 65 + 30 * i);
    if (critSkillDisplay[i].value >= 100) {
      fill(0, 255, 0);
    } else if (critSkillDisplay[i].value <= 50) {
      fill(255, 71, 71);
    }
    text(critSkillDisplay[i].value + "%", 350 + maxWidth, 65 + 30 * i);
    fill(255);
  }
}

// ----------------------------------------------------------------------------------------------------------------------------------- //

function critCalculation() {
  var direction = position;
  var classCF = classes[currentClass].baseCrit;
  var bonusCrit;
  var tmpBonusCrit;

  if (priest == true) {
    bonusCrit = input.value() - classCF + classCF * 0.36;
  } else if (mystic == true) {
    bonusCrit = input.value() - classCF + classCF * 1.2;
  } else if (priest == false && mystic == false){
    bonusCrit = input.value() - classCF;
  }

  tmpBonusCrit = bonusCrit;

  var critResist = 300;

  if (triplenem == true) {
    critResist -= 12;
  }

  if (kaiasjudgement == true) {
    critResist -= 25;
  }

  var addCrit;
  var glyphCrit;
  var innateSkillCrit;
  var levelDiff = -0.005;

  var castanic;

  if (castanicBool == true) {
    castanic = 0.01;
  } else {
    castanic = 0;
  }

  critSkillDisplay = [];

  // scroll through the skills
  for (var i = 0; i < classes[currentClass].skills.length; i++) {
    // calculation variables take the skill values
    glyphBaseCrit = classes[currentClass].skills[i].glyphBaseCrit;
    addCrit = classes[currentClass].skills[i].addCrit;
    glyphCrit = classes[currentClass].skills[i].glyphCrit;
    innateSkillCrit = classes[currentClass].skills[i].innateSkillCrit;

    // scroll through the buffs
    for (var j = 0; j < classes[currentClass].buffs.length; j++) {
      // check if the current skill being calculated is affected by the current buff being applied
      if (classes[currentClass].buffs[j].skillsAffected.includes(classes[currentClass].skills[i].name) || classes[currentClass].buffs[j].skillsAffected.includes("All")) {
        glyphCrit += (classes[currentClass].buffs[j].glyphCrit * classes[currentClass].buffs[j].uptime);
        addCrit += (classes[currentClass].buffs[j].addCrit * classes[currentClass].buffs[j].uptime);
        glyphBaseCrit += (classes[currentClass].buffs[j].glyphBaseCrit * classes[currentClass].buffs[j].uptime);
        bonusCrit += (classes[currentClass].buffs[j].bonusCrit * classes[currentClass].buffs[j].uptime);
      }

      // priest edict crit buff, to be better implemented with edict times
      if (priest == true) {
        bonusCrit += 38 * 0.3; // 80k magic res priest with 30% edict
      }
    }

    // crit chance calculation formula
    //                       ((    D     * (  Cfo   *       B       +     Cf   )) / (5.625 *    CR     )) *     G     *       I         +    A    +     F
    critChance = Math.trunc((((direction * (classCF * glyphBaseCrit + bonusCrit)) / (5.625 * critResist)) * glyphCrit * innateSkillCrit + addCrit + levelDiff + castanic) * 100);

    // crit calculation in case of healing skills
    if ((classes[currentClass].name == "Mystic" || classes[currentClass].name == "Priest") && i == 0){
      critChance = Math.trunc((bonusCrit + classes[currentClass].baseCrit) * 0.2);
    }

    critSkillDisplay.push({name: classes[currentClass].skills[i].name, value: critChance});
    bonusCrit = tmpBonusCrit;
  }
}

// ----------------------------------------------------------------------------------------------------------------------------------- //

function switchMystic() {
  if (mystic == false) {
    mystic = true;
    priest = false;
    checkboxPriest.checked(false);
  } else {
    mystic = false;
  }
}

function switchPriest() {
  if (priest == false) {
    priest = true;
    mystic = false;
    checkboxMystic.checked(false);
  } else {
    priest = false;
  }
}

function switchCastanic() {
  if (castanicBool == true) {
    castanicBool = false;
  } else if (castanicBool == false) {
    castanicBool = true;
  }
}

function switchPosition() {
  if (this === checkboxPositionBack) {
    position = 1.6;
    checkboxPositionSide.checked(false);
    checkboxPositionFront.checked(false);
    if (checkboxPositionBack.checked() == false) {
      checkboxPositionBack.checked(true);
    }
  } else if (this === checkboxPositionSide) {
    position = 1.2;
    checkboxPositionBack.checked(false);
    checkboxPositionFront.checked(false);
    if (checkboxPositionSide.checked() == false) {
      checkboxPositionSide.checked(true);
    }
  } else if (this === checkboxPositionFront) {
    position = 1.0;
    checkboxPositionBack.checked(false);
    checkboxPositionSide.checked(false);
    if (checkboxPositionFront.checked() == false) {
      checkboxPositionFront.checked(true);
    }
  }
}

function switchKaiasjudgement() {
  if (kaiasjudgement == false) {
    kaiasjudgement = true;
  } else if (kaiasjudgement == true) {
    kaiasjudgement = false;
  }
}

function switchTriplenem() {
  if (triplenem == false) {
    triplenem = true;
  } else if (triplenem == true) {
    triplenem = false;
  }
}

function changeClass() {
  switch (classSelection.value()) {
    case "Archer":
      currentClass = 0;
      break;
    case "Berserker":
      currentClass = 1;
      break;
    case "Brawler":
      currentClass = 2;
      break;
    case "Gunner":
      currentClass = 3;
      break;
    case "Lancer":
      currentClass = 4;
      break;
    case "Mystic":
      currentClass = 5;
      break;
    case "Ninja":
      currentClass = 6;
      break;
    case "Priest":
      currentClass = 7;
      break;
    case "Reaper":
      currentClass = 8;
      break;
    case "Slayer":
      currentClass = 9;
      break;
    case "Sorcerer":
      currentClass = 10;
      break;
  }
}

// end :3
