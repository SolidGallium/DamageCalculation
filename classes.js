var classes = [

// --------------------------------------------------------------------------------------------- //

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
          "All"
        ]
      }
    ]
  },

// --------------------------------------------------------------------------------------------- //

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
        glyphBaseCrit: 1,
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
          "All"
        ],
      },
      // bloodshed
      {
        name: "Bloodshed",
        guaranteedCrit: false,
        glyphCrit: 0,
        addCrit: 0.1,
        glyphBaseCrit: 0,
        bonusCrit: 0,
        uptime: 0.1,
        skillsAffected: [
          "All"
        ],
      }
    ]
  },

// --------------------------------------------------------------------------------------------- //

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
        glyphCrit: 2,
        innateSkillCrit: 1.3333, // approximation (4 hits, first 3 @ 1.0, last hit @ 2.0)
        glyphBaseCrit: 1,
        addCrit: 0.09,
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
          "All"
        ]
      }
    ]
  },

// --------------------------------------------------------------------------------------------- //

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

// --------------------------------------------------------------------------------------------- //

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
          "All"
        ]
      }
    ]
  },

// --------------------------------------------------------------------------------------------- //

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

// --------------------------------------------------------------------------------------------- //

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
        uptime: 1,  // to double check (thanks to roy and redkillerdragon for their input)
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
        uptime: 0.8, // to double check (thanks to roy and redkillerdragon for their input)
        skillsAffected: [
          "Boomerang Shuriken",
          "Burning Heart",
          "Harmonious Burning Heart",
          "Leaves on the Wind"
        ]
      }
    ]
  },

// --------------------------------------------------------------------------------------------- //

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

// --------------------------------------------------------------------------------------------- //

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

// --------------------------------------------------------------------------------------------- //

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

// --------------------------------------------------------------------------------------------- //

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
  },

// --------------------------------------------------------------------------------------------- //

  // valkyrie
  {
    name: "Valkyrie",
    baseCrit: 58,
    skills: [
      // shining crescent
      {
        name: "Shining Crescent",
        guaranteedCrit: false,
        glyphCrit: 1,
        innateSkillCrit: 3,
        glyphBaseCrit: 1,
        addCrit: 0,
        damagePortion: 0
      },
      // twilight waltz
      {
        name: "Twilight Waltz",
        guaranteedCrit: false,
        glyphCrit: 1,
        innateSkillCrit: 4,
        glyphBaseCrit: 1,
        addCrit: 0,
        damagePortion: 0
      },
      // ground bash
      {
        name: "Ground Bash",
        guaranteedCrit: false,
        glyphCrit: 1,
        innateSkillCrit: 4, // data says 5, but 4 feels more accurate
        glyphBaseCrit: 1,
        addCrit: 0,
        damagePortion: 0
      },
      // maelstrom
      {
        name: "Maelstrom",
        guaranteedCrit: false,
        glyphCrit: 3, // 5 hits @ 3 +  last hit @ 6 = 3.5 average (not applied rn)
        innateSkillCrit: 1,
        glyphBaseCrit: 1,
        addCrit: 0,
        damagePortion: 0
      },
      // leaping slash
      {
        name: "Leaping Slash",
        guaranteedCrit: false,
        glyphCrit: 3,
        innateSkillCrit: 1,
        glyphBaseCrit: 1,
        addCrit: 0,
        damagePortion: 0
      },
      // gnugnir's bite
      {
        name: "Gugnir's Bite",
        guaranteedCrit: false,
        glyphCrit: 3, // makes the thingy about right
        innateSkillCrit: 1,
        glyphBaseCrit: 1,
        addCrit: 0,
        damagePortion: 0
      },
      // godsfall
      {
        name: "Godsfall",
        guaranteedCrit: true,
        glyphCrit: 1,
        innateSkillCrit: 1,
        glyphBaseCrit: 1,
        addCrit: 0,
        damagePortion: 0
      },
      // glaive strike
      {
        name: "Glaive Strike",
        guaranteedCrit: false,
        glyphCrit: 2,
        innateSkillCrit: 5,
        glyphBaseCrit: 1,
        addCrit: 0,
        damagePortion: 0
      },
      // runeburst
      {
        name: "Runeburst",
        guaranteedCrit: false,
        glyphCrit: 1,
        innateSkillCrit: 3,
        glyphBaseCrit: 1,
        addCrit: 0,
        damagePortion: 0
      },
      // blood flower
      {
        name: "Blood Flower",
        guaranteedCrit: false,
        glyphCrit: 1,
        innateSkillCrit: 2,
        glyphBaseCrit: 1,
        addCrit: 0,
        damagePortion: 0
      },
      // dream slash
      {
        name: "Dream Slash",
        guaranteedCrit: false,
        glyphCrit: 1,
        innateSkillCrit: 1,
        glyphBaseCrit: 1,
        addCrit: 0,
        damagePortion: 0
      }
    ],
    buffs: [
      // enhanced runeburst
      {
        name: "Enhanced Runeburst",
        guaranteedCrit: false,
        glyphCrit: 4,
        addCrit: 0,
        glyphBaseCrit: 0,
        bonusCrit: 0,
        uptime: 1,
        skillsAffected: [
          "Shining Crescent",
          "Runeburst"
        ]
      },
      // carving spinning death
      {
        name: "Carving Spinning Death",
        guaranteedCrit: false,
        glyphCrit: 0,
        addCrit: 0.3,
        glyphBaseCrit: 0,
        bonusCrit: 0,
        uptime: 0.3,
        skillsAffected: [
          "All"
        ]
      },
      // spinning death: critical pummel
      {
        name: "Spinning Death: Critical Pummel",
        guaranteedCrit: false,
        glyphCrit: 0,
        addCrit: 0,
        glyphBaseCrit: 0,
        bonusCrit: 20,
        uptime: 0.3,
        skillsAffected: [
          "All"
        ]
      },
    ]
  },

// --------------------------------------------------------------------------------------------- //

  // warrior
  {
    name: "Warrior",
    baseCrit: 52,
    skills: [
      // aerial scythe
      {
        name: "Aerial Scythe",
        guaranteedCrit: false,
        glyphCrit: 1,
        innateSkillCrit: 10,
        glyphBaseCrit: 1,
        addCrit: 0,
        damagePortion: 0
      },
      // scythe
      {
        name: "Scythe",
        guaranteedCrit: false,
        glyphCrit: 3,
        innateSkillCrit: 1,
        glyphBaseCrit: 1,
        addCrit: 0,
        damagePortion: 0
      },
      // blade draw
      {
        name: "Blade Draw",
        guaranteedCrit: false,
        glyphCrit: 2,
        innateSkillCrit: 1,
        glyphBaseCrit: 1,
        addCrit: 0,
        damagePortion: 0
      },
      // blade waltz
      {
        name: "Blade Waltz",
        guaranteedCrit: false,
        glyphCrit: 1,
        innateSkillCrit: 2,
        glyphBaseCrit: 1,
        addCrit: 0,
        damagePortion: 0
      },
      // rain of blows
      {
        name: "Rain of Blows",
        guaranteedCrit: false,
        glyphCrit: 2, // skill advancement
        innateSkillCrit: 1,
        glyphBaseCrit: 1,
        addCrit: 0,
        damagePortion: 0
      },
      // blade frenzy
      {
        name: "Blade Frenzy",
        guaranteedCrit: false,
        glyphCrit: 1,
        innateSkillCrit: 10,
        glyphBaseCrit: 1,
        addCrit: 0,
        damagePortion: 0
      },
      // combative strike
      {
        name: "Combative Strike",
        guaranteedCrit: false,
        glyphCrit: 1,
        innateSkillCrit: 1,
        glyphBaseCrit: 1,
        addCrit: 0,
        damagePortion: 0
      }
    ],
    buffs: [
      // assault stance
      {
        name: "Assault Stance",
        guaranteedCrit: false,
        glyphCrit: 0,
        addCrit: 0,
        glyphBaseCrit: 0,
        bonusCrit: 55,
        uptime: 1,
        skillsAffected: [
          "All"
        ]
      },
      // edge aerial scythe
      {
        name: "Edge Aerial Scythe",
        guaranteedCrit: false,
        glyphCrit: 1,
        addCrit: 0,
        glyphBaseCrit: 0,
        bonusCrit: 0,
        uptime: 1,
        skillsAffected: [
          "Aerial Scythe"
        ]
      },
      // edge scythe
      {
        name: "Edge Scythe",
        guaranteedCrit: false,
        glyphCrit: 3,
        addCrit: 0,
        glyphBaseCrit: 0,
        bonusCrit: 0,
        uptime: 1,
        skillsAffected: [
          "Scythe"
        ]
      },
      // deadly gamble
      {
        name: "Deadly Gamble",
        guaranteedCrit: false,
        glyphCrit: 0,
        addCrit: 0.5,
        glyphBaseCrit: 0,
        bonusCrit: 0,
        uptime: 0.3,
        skillsAffected: [
          "All"
        ]
      },
      // blade waltz chained: critical
      {
        name: "Blade Waltz Chained: Critical",
        guaranteedCrit: false,
        glyphCrit: 1,
        addCrit: 0,
        glyphBaseCrit: 0,
        bonusCrit: 0,
        uptime: 0.5, // just an estimate
        skillsAffected: [
          "Blade Draw",
          "Rain of Blows"
        ]
      }
    ]
  }
];
