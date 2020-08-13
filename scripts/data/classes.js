var classes = [

// --------------------------------------------------------------------------------------------- //

  // archer
  {
    name: "Archer",
    baseCrit: 60,
    skills: [
      // thunderbolt
      {
        name: "Thunderbolt",
        guaranteedCrit: false,
        glyphCrit: 3,
        innateSkillCrit: 1,
        glyphBaseCrit: 1,
        addCrit: 0,
        damagePortion: 0.2,
        image: "https://teralore.com/items/icon_skills/thunderdrake_tex.png"
      },
       // wind walk
       {
        name: "Wind Walk",
        guaranteedCrit: false,
        glyphCrit: 1,
        innateSkillCrit: 1,
        glyphBaseCrit: 1,
        addCrit: 0.42,
        damagePortion: 0.19,
        image: "https://teralore.com/items/icon_skills/windwalk_tex.png"
      },
      // radiant arrow
      {
        name: "Radiant Arrow",
        guaranteedCrit: false,
        glyphCrit: 3,
        innateSkillCrit: 1,
        glyphBaseCrit: 1,
        addCrit: 0,
        damagePortion: 0.17,
        image: "https://teralore.com/items/icon_skills/chargearrow_tex.png"
      },
      // rapid fire
      {
        name: "Rapid Fire",
        guaranteedCrit: false,
        glyphCrit: 1,
        innateSkillCrit: 3,
        glyphBaseCrit: 1,
        addCrit: 0,
        damagePortion: 0.21,
        image: "https://teralore.com/items/icon_skills/rapidshot_tex.png"
      },
      // rain of arrows
      {
        name: "Rain of Arrows",
        guaranteedCrit: false,
        glyphCrit: 1,
        innateSkillCrit: 1,
        glyphBaseCrit: 1,
        addCrit: 0.18,
        damagePortion: 0.09,
        image: "https://teralore.com/items/icon_skills/arrowfall_tex.png"
      },
      // penetrating arrow
      {
        name: "Penetrating Arrow",
        guaranteedCrit: false,
        glyphCrit: 2,
        innateSkillCrit: 1,
        glyphBaseCrit: 1,
        addCrit: 0,
        damagePortion: 0.06,
        image: "https://teralore.com/items/icon_skills/througharrow_tex.png"
      },
      // gust arrow
      {
        name: "Gust Arrow",
        guaranteedCrit: false,
        glyphCrit: 10,
        innateSkillCrit: 1,
        glyphBaseCrit: 1,
        addCrit: 0,
        damagePortion: 0.05,
        image: "https://teralore.com/items/icon_skills/eyeoftyphoon_tex.png"
      },
      // crackshot // turn into a passive
      // {
      //   name: "Crackshot",
      //   guaranteedCrit: false,
      //   glyphCrit: 1,
      //   innateSkillCrit: 1,
      //   glyphBaseCrit: 1,
      //   addCrit: 0.05,
      //   damagePortion: 0,
      // }
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
        ],
        skillImage: "https://teralore.com/items/icon_skills/rapidshot_tex.png"
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
        critChance: 0,
        physFactor: 1.77,
        magFactor: 0.3,
        damageType: "Physical",
        damagePortion: 0.23,
        image: "https://teralore.com/items/icon_skills/blastslash_tex.png"
      },
      // cyclone
      {
        name: "Cyclone",
        guaranteedCrit: false,
        glyphCrit: 2.2,
        innateSkillCrit: 1,
        glyphBaseCrit: 1,
        addCrit: 0,
        critChance: 0,
        physFactor: 1.4,
        magFactor: 0.7,
        damageType: "Physical",
        damagePortion: 0.23,
        image: "https://teralore.com/items/icon_skills/whirlwind_tex.png"
      },
      // rampage
      {
        name: "Rampage",
        guaranteedCrit: false,
        glyphCrit: 1,
        innateSkillCrit: 2.2,
        glyphBaseCrit: 1,
        addCrit: 0,
        critChance: 0,
        physFactor: 1.52,
        magFactor: 0.2,
        damageType: "Physical",
        damagePortion: 0.15,
        image: "https://teralore.com/items/icon_skills/rageboth_tex.png"
      },
      // lethal strike
      {
        name: "Lethal Strike",
        guaranteedCrit: false,
        glyphCrit: 2,
        innateSkillCrit: 1,
        glyphBaseCrit: 1,
        addCrit: 0.1,
        critChance: 0,
        physFactor: 1.4,
        magFactor: 0.6,
        damageType: "Physical",
        damagePortion: 0.15,
        image: "https://teralore.com/items/icon_skills/soulstrike_tex.png"
      },
      // beast fury
      {
        name: "Beast Fury",
        guaranteedCrit: false,
        glyphCrit: 1,
        innateSkillCrit: 2.2,
        glyphBaseCrit: 1,
        addCrit: 0,
        critChance: 0,
        physFactor: 1.62,
        magFactor: 0.24,
        damageType: "Physical",
        damagePortion: 0.09,
        image: "https://teralore.com/items/icon_skills/ragerush_tex.png"
      },
       // flatten
       {
        name: "Flatten",
        guaranteedCrit: false,
        glyphCrit: 1,
        innateSkillCrit: 1,
        glyphBaseCrit: 1,
        addCrit: 0,
        critChance: 0,
        physFactor: 1.47,
        magFactor: 0.6,
        damageType: "Physical",
        damagePortion: 0.03,
        image: "https://teralore.com/items/icon_skills/bash_tex.png"
      },
      // vampiric blow
      {
        name: "Vampiric Blow",
        guaranteedCrit: false,
        glyphCrit: 1,
        innateSkillCrit: 1,
        glyphBaseCrit: 1,
        addCrit: 0,
        critChance: 0,
        physFactor: 1.40,
        magFactor: 0.3,
        damageType: "Physical",
        damagePortion: 0.03,
        image: "https://teralore.com/items/icon_skills/vampiricstrike_tex.png"
      },
      // sinister
      {
        name: "Sinister",
        guaranteedCrit: false,
        glyphCrit: 1,
        innateSkillCrit: 2.2,
        glyphBaseCrit: 1,
        addCrit: 0,
        critChance: 0,
        physFactor: 1.45,
        magFactor: 0.2,
        damageType: "Physical",
        damagePortion: 0.02,
        image: "https://teralore.com/items/icon_skills/rageleft_tex.png"
      },
      // dexter
      {
        name: "Dexter",
        guaranteedCrit: false,
        glyphCrit: 1,
        innateSkillCrit: 2.2,
        glyphBaseCrit: 1,
        addCrit: 0,
        critChance: 0,
        physFactor: 1.45,
        magFactor: 0.2,
        damageType: "Physical",
        damagePortion: 0.02,
        image: "https://teralore.com/items/icon_skills/rageright_tex.png"
      },
      // raze
      {
        name: "Raze",
        guaranteedCrit: false,
        glyphCrit: 1,
        innateSkillCrit: 1,
        glyphBaseCrit: 1,
        addCrit: 0,
        critChance: 0,
        baseDamage: 1762, // unused
        physFactor: 1.42,
        magFactor: 0.45,
        damageType: "Physical",
        damagePortion: 0.01,
        image: "https://teralore.com/items/icon_skills/sideslash_tex.png"
      },
      // tackle
      {
        name: "Tackle",
        guaranteedCrit: false,
        glyphCrit: 1,
        innateSkillCrit: 1,
        glyphBaseCrit: 1,
        addCrit: 0,
        critChance: 0,
        physFactor: 0.3,
        magFactor: 2,
        damageType: "Magical",
        damagePortion: 0.00,
        image: "https://teralore.com/items/icon_skills/throwaxe_tex.png"
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
        power: 15,
        uptime: 1,
        skillsAffected: [
          "All"
        ],
        skillImage: "https://teralore.com/items/icon_skills/berserk_tex.png"
      },
      // bloodshed
      {
        name: "Bloodshed",
        guaranteedCrit: false,
        glyphCrit: 0,
        addCrit: 0.1,
        glyphBaseCrit: 0,
        bonusCrit: 0,
        power: 0,
        uptime: 0.1,
        skillsAffected: [
          "All"
        ],
        skillImage: "https://teralore.com/items/icon_skills/retaliation_tex.png"
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
        critChance: 0,
        physFactor: 1.44,
        magFactor: 0.60,
        damageType: "Physical",
        reflectDamage: 0.4,
        damagePortion: 0.32,
        image: "https://teralore.com/items/icon_skills/blowattack_tex.png"
      },
      // piledriver
      {
        name: "Piledriver",
        guaranteedCrit: false,
        glyphCrit: 2,
        innateSkillCrit: 1.3333, // approximation (4 hits, first 3 @ 1.0, last hit @ 2.0)
        glyphBaseCrit: 1,
        addCrit: 0.09,
        critChance: 0,
        physFactor: 1.40,
        magFactor: 0.30,
        damageType: "Physical",
        reflectDamage: 0.23,
        damagePortion: 0.17,
        image: "https://teralore.com/items/icon_skills/risingblow_tex.png"
      },
      // jackhammer
      {
        name: "Jackhammer",
        guaranteedCrit: false,
        glyphCrit: 2,
        innateSkillCrit: 1,
        glyphBaseCrit: 1,
        addCrit: 0,
        critChance: 0,
        physFactor: 1.70,
        magFactor: 0.80,
        damageType: "Physical",
        reflectDamage: 0.17,
        damagePortion: 0.15,
        image: "https://teralore.com/items/icon_skills/rapidattack_tex.png"
      },
      // one-inch punch
      {
        name: "One-Inch Punch",
        guaranteedCrit: false,
        glyphCrit: 1,
        innateSkillCrit: 10,
        glyphBaseCrit: 1,
        addCrit: 0,
        critChance: 0,
        physFactor: 1.50,
        magFactor: 0.47,
        damageType: "Physical",
        reflectDamage: 0.4,
        damagePortion: 0.15,
        image: "https://teralore.com/items/icon_skills/oneinchpunch_tex.png"
      },
      // counter punch
      {
        name: "Counter Punch",
        guaranteedCrit: false,
        glyphCrit: 1,
        innateSkillCrit: 10,
        glyphBaseCrit: 1,
        addCrit: 0,
        critChance: 0,
        physFactor: 2.00,
        magFactor: 0.30,
        damageType: "Physical",
        reflectDamage: 0.25,
        damagePortion: 0.07,
        image: "https://teralore.com/items/icon_skills/counterattack2_tex.png"
      },
      // rhythmic blows
      {
        name: "Rhythmic Blows",
        guaranteedCrit: false,
        glyphCrit: 1,
        innateSkillCrit: 10,
        glyphBaseCrit: 1,
        addCrit: 0,
        critChance: 0,
        physFactor: 1.75,
        magFactor: 0.50,
        damageType: "Physical",
        reflectDamage: 0.08,
        damagePortion: 0.06,
        image: "https://teralore.com/items/icon_skills/dampseyroll_tex.png"
      },
      // roundhouse kick
      {
        name: "Roundhouse Kick",
        guaranteedCrit: false,
        glyphCrit: 1,
        innateSkillCrit: 1,
        glyphBaseCrit: 1,
        addCrit: 0,
        critChance: 0,
        physFactor: 1.38,
        magFactor: 0.42,
        damageType: "Physical",
        reflectDamage: 0.4,
        damagePortion: 0.05,
        image: "https://teralore.com/items/icon_skills/upperkick_tex.png"
      },
      // flying kick
      {
        name: "Flying Kick",
        guaranteedCrit: false,
        glyphCrit: 1,
        innateSkillCrit: 2,
        glyphBaseCrit: 1,
        addCrit: 0,
        critChance: 0,
        physFactor: 1.30,
        magFactor: 0.27,
        damageType: "Physical",
        reflectDamage: 0.4,
        damagePortion: 0.04,
        image: "https://teralore.com/items/icon_skills/kicker_tex.png"
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
        power: 45,
        uptime: 1,
        skillsAffected: [
          "All"
        ],
        skillImage: "https://teralore.com/items/icon_skills/rampage_tex.png"
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
        critChance: 0,
        physFactor: 1.54,
        magFactor: 0.48,
        damageType: "Physical",
        damagePortion: 0.24,
        image: "https://teralore.com/items/icon_skills/justiceleap_tex.png"
      },
      // wallop
      {
        name: "Wallop",
        guaranteedCrit: false,
        glyphCrit: 2,
        innateSkillCrit: 1,
        glyphBaseCrit: 1,
        addCrit: 0,
        critChance: 0,
        physFactor: 1.66,
        magFactor: 0.40,
        damageType: "Physical",
        damagePortion: 0.2,
        image: "https://teralore.com/items/icon_skills/overhelm_tex.png"
      },
      // spring attack
      {
        name: "Spring Attack",
        guaranteedCrit: false,
        glyphCrit: 1,
        innateSkillCrit: 1,
        glyphBaseCrit: 1,
        addCrit: 0,
        critChance: 0,
        physFactor: 1.50,
        magFactor: 0.60,
        damageType: "Physical",
        damagePortion: 0.2,
        image: "https://teralore.com/items/icon_skills/leaprampage_tex.png"
      },
      // shield counter
      {
        name: "Shield Counter",
        guaranteedCrit: false,
        glyphCrit: 1,
        innateSkillCrit: 10,
        glyphBaseCrit: 1,
        addCrit: 0,
        critChance: 0,
        physFactor: 1.45,
        magFactor: 0.55,
        damageType: "Physical",
        damagePortion: 0.12,
        image: "https://teralore.com/items/icon_skills/riposte_tex.png"
      },
      // onslaught
      {
        name: "Onslaught",
        guaranteedCrit: false,
        glyphCrit: 2,
        innateSkillCrit: 1,
        glyphBaseCrit: 1,
        addCrit: 0,
        critChance: 0,
        physFactor: 1.35,
        magFactor: 0.55,
        damageType: "Physical",
        damagePortion: 0.12,
        image: "https://teralore.com/items/icon_skills/screwthrough_tex.png"
      },
      // shield barrage
      {
        name: "Shield Barrage",
        guaranteedCrit: false,
        glyphCrit: 1,
        innateSkillCrit: 1,
        glyphBaseCrit: 1,
        addCrit: 0,
        critChance: 0,
        physFactor: 1.20,
        magFactor: 0.32,
        damageType: "Physical",
        damagePortion: 0.01,
        image: "https://teralore.com/items/icon_skills/shieldattack_tex.png"
      },
      // lockdown blow
      {
        name: "Lockdown Blow",
        guaranteedCrit: false,
        glyphCrit: 1,
        innateSkillCrit: 1,
        glyphBaseCrit: 1,
        addCrit: 0.36,
        critChance: 0,
        physFactor: 1.22,
        magFactor: 0.25,
        damageType: "Physical",
        damagePortion: 0.01,
        image: "https://teralore.com/items/icon_skills/shockblow_tex.png"
      },
      // debilitate
      {
        name: "Debilitate",
        guaranteedCrit: false,
        glyphCrit: 1,
        innateSkillCrit: 1,
        glyphBaseCrit: 1,
        addCrit: 0,
        critChance: 0,
        physFactor: 1.20,
        magFactor: 0.60,
        damageType: "Physical",
        damagePortion: 0.01,
        image: "https://teralore.com/items/icon_skills/armorbreak_tex.png"
      },
      // stand fast
      {
        name: "Stand Fast",
        guaranteedCrit: false,
        glyphCrit: 1,
        innateSkillCrit: 10,
        glyphBaseCrit: 1,
        addCrit: 0,
        critChance: 0,
        physFactor: 2.50,
        magFactor: 0.50,
        damageType: "Physical",
        damagePortion: 0.01,
        image: "https://teralore.com/items/icon_skills/defence_tex.png"
      },
      // guardian barrier
      {
        name: "Guardian Barrier",
        guaranteedCrit: false,
        glyphCrit: 1,
        innateSkillCrit: 2.3,
        glyphBaseCrit: 1,
        addCrit: 0,
        critChance: 0,
        physFactor: 0.60,
        magFactor: 1.80,
        damageType: "Magical",
        damagePortion: 0.01,
        image: "https://teralore.com/items/icon_skills/shieldwall_tex.png"
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
        power: 40,
        uptime: 1,
        power: 0,
        skillsAffected: [
          "All"
        ],
        skillImage: "https://teralore.com/items/icon_skills/defence_tex.png"
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
        damagePortion: 0,
        image: "https://teralore.com/items/icon_skills/healshot_tex.png"
      },
      // arunic release
      {
        name: "Arunic Release",
        guaranteedCrit: false,
        glyphCrit: 1,
        innateSkillCrit: 2,
        glyphBaseCrit: 1,
        addCrit: 0,
        damagePortion: 0.35,
        image: "https://teralore.com/items/icon_skills/marbleexplosion_tex.png"
      },
      // boomerang pulse
      {
        name: "Boomerang Pulse",
        guaranteedCrit: false,
        glyphCrit: 1,
        innateSkillCrit: 1,
        glyphBaseCrit: 1,
        addCrit: 0,
        damagePortion: 0.1,
        image: "https://teralore.com/items/icon_skills/mysticorb_tex.png"
      },
      // volley of curses
      {
        name: "Volley of Curses",
        guaranteedCrit: false,
        glyphCrit: 1,
        innateSkillCrit: 1,
        glyphBaseCrit: 1,
        addCrit: 0,
        damagePortion: 0.3,
        image: "https://teralore.com/items/icon_skills/painfulshackle_tex.png"
      }
    ],
    buffs: []
  },

// --------------------------------------------------------------------------------------------- //

  // ninja (sorta flawed, double check bufftimes)
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
        critChance: 0,
        physFactor: 0.65,
        magFactor: 1.25,
        damageType: "Magical",
        damagePortion: 0.17,
        image: "https://teralore.com/items/icon_skills/bumelang_tex.png"
      },
      // burning heart
      {
        name: "Burning Heart",
        guaranteedCrit: false,
        glyphCrit: 1,
        innateSkillCrit: 1,
        glyphBaseCrit: 1,
        addCrit: 0.1,
        critChance: 0,
        physFactor: 0.20,
        magFactor: 1.60,
        damageType: "Magical",
        damagePortion: 0.17,
        image: "https://teralore.com/items/icon_skills/c12_flamebreath.png"
      },
      // harmonious burning heart
      {
        name: "Harmonious Burning Heart",
        guaranteedCrit: false,
        glyphCrit: 1,
        innateSkillCrit: 1.5,
        glyphBaseCrit: 1,
        addCrit: 0.1,
        critChance: 0,
        physFactor: 0.20,
        magFactor: 1.60,
        damageType: "Magical",
        damagePortion: 0.13,
        image: "https://i.imgur.com/BnGbtfG.png"
      },
      // skyfall
      {
        name: "Skyfall",
        guaranteedCrit: false,
        glyphCrit: 2,
        innateSkillCrit: 1,
        glyphBaseCrit: 1,
        addCrit: 0,
        critChance: 0,
        physFactor: 0.60,
        magFactor: 2.00,
        damageType: "Magical",
        damagePortion: 0.12,
        image: "https://teralore.com/items/icon_skills/c12_airstepstrike.png"
      },
      // leaves on the wind
      {
        name: "Leaves on the Wind",
        guaranteedCrit: false,
        glyphCrit: 1,
        innateSkillCrit: 1,
        glyphBaseCrit: 1,
        addCrit: 0,
        critChance: 0,
        physFactor: 0.65,
        magFactor: 1.45,
        damageType: "Magical",
        damagePortion: 0.09,
        image: "https://teralore.com/items/icon_skills/c12_rapidshot.png"
      },
      // quick attack
      {
        name: "Quick Attack",
        guaranteedCrit: false,
        glyphCrit: 1,
        innateSkillCrit: 1.5,
        glyphBaseCrit: 1,
        addCrit: 0,
        critChance: 0,
        physFactor: 0.75,
        magFactor: 1.88,
        damageType: "Magical",
        damagePortion: 0.09,
        image: "https://teralore.com/items/icon_skills/chakraemission_tex.png"
      },
      // harmonious quick attack
      {
        name: "Harmonious Quick Attack",
        guaranteedCrit: false,
        glyphCrit: 1,
        innateSkillCrit: 1,
        glyphBaseCrit: 1,
        addCrit: 0,
        critChance: 0,
        physFactor: 0.75,
        magFactor: 1.88,
        damageType: "Magical",
        damagePortion: 0.09,
        image: "https://teralore.com/items/icon_skills/chakraemission_tex.png"
      },
      // harmonious fire avalanche
      {
        name: "Harmonious Fire Avalanche",
        guaranteedCrit: false,
        glyphCrit: 3,
        innateSkillCrit: 1,
        glyphBaseCrit: 1,
        addCrit: 0,
        critChance: 0,
        physFactor: 0.72,
        magFactor: 1.50,
        damageType: "Magical",
        damagePortion: 0.06,
        image: "https://i.imgur.com/l2Et1wD.png"
      },
      // double cut
      {
        name: "Double Cut",
        guaranteedCrit: false,
        glyphCrit: 3,
        innateSkillCrit: 1,
        glyphBaseCrit: 1,
        addCrit: 0,
        critChance: 0,
        physFactor: 0.45,
        magFactor: 1.75,
        damageType: "Magical",
        damagePortion: 0.06,
        image: "https://teralore.com/items/icon_skills/c12_twinslash.png"
      },
      // impact bomb
      {
        name: "Impact Bomb",
        guaranteedCrit: false,
        glyphCrit: 1,
        innateSkillCrit: 1,
        glyphBaseCrit: 1,
        addCrit: 0,
        critChance: 0,
        physFactor: 0.48,
        magFactor: 1.25,
        damageType: "Magical",
        damagePortion: 0.03,
        image: "https://teralore.com/items/icon_skills/c12_flamebomb.png"
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
        power: 0,
        uptime: 1,  // to double check (thanks to roy and redkillerdragon for their input)
        skillsAffected: [
          "Burning Heart",
          "Harmonious Burning Heart"
        ],
        skillImage: "https://teralore.com/items/icon_skills/c12_chakracharge.png"
      },
      // cyclic chi
      {
        name: "Cyclic Chi",
        guaranteedCrit: false,
        glyphCrit: 0,
        addCrit: 0.3,
        glyphBaseCrit: 0,
        bonusCrit: 0,
        power: 0,
        uptime: 0.8, // to double check (thanks to roy and redkillerdragon for their input)
        skillsAffected: [
          "Boomerang Shuriken",
          "Burning Heart",
          "Harmonious Burning Heart",
          "Leaves on the Wind"
        ],
        skillImage: "https://imgur.com/719CMef.png"
        // skillImage: missing
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
        damagePortion: 0,
        image: "https://teralore.com/items/icon_skills/curewing_tex.png"
      },
      // holy burst
      {
        name: "Holy Burst",
        guaranteedCrit: false,
        glyphCrit: 1,
        innateSkillCrit: 1.5, // needs new data, all that is known is: <3
        glyphBaseCrit: 1,
        addCrit: 0,
        damagePortion: 0.4,
        image: "https://teralore.com/items/icon_skills/lightspark_tex.png"
      },
      // zenobia's vortex
      {
        name: "Zenobia's Vortex",
        guaranteedCrit: false,
        glyphCrit: 1,
        innateSkillCrit: 1.25, // needs new data, all that is known is: >1
        glyphBaseCrit: 1,
        addCrit: 0,
        damagePortion: 0.24,
        image: "https://teralore.com/items/icon_skills/godbreath_tex.png"
      },
      // shocking implosion
      {
        name: "Shocking Implosion",
        guaranteedCrit: false,
        glyphCrit: 1,
        innateSkillCrit: 1,
        glyphBaseCrit: 1,
        addCrit: 0,
        damagePortion: 0.22,
        image: "https://teralore.com/items/icon_skills/damagedeal_tex.png"
      },
      // final reprisal
      {
        name: "Final Reprisal",
        guaranteedCrit: false,
        glyphCrit: 1,
        innateSkillCrit: 1,
        glyphBaseCrit: 1,
        addCrit: 0,
        damagePortion: 0.1,
        image: "https://teralore.com/items/icon_skills/punishingtouch_tex.png"
      },
      // metamorphic blast
      {
        name: "Metamorphic Blast",
        guaranteedCrit: false,
        glyphCrit: 1,
        innateSkillCrit: 1,
        glyphBaseCrit: 1,
        addCrit: 0,
        damagePortion: 0.1,
        image: "https://teralore.com/items/icon_skills/punishingshield_tex.png"
      },
      // triple nemesis
      {
        name: "Triple Nemesis",
        guaranteedCrit: false,
        glyphCrit: 1,
        innateSkillCrit: 1,
        glyphBaseCrit: 1,
        addCrit: 0,
        damagePortion: 0,
        image: "https://teralore.com/items/icon_skills/divineretribution_tex.png"
      },
      // Energy Stars
      {
        name: "Energy Stars",
        guaranteedCrit: false,
        glyphCrit: 1,
        innateSkillCrit: 1,
        glyphBaseCrit: 1,
        addCrit: 0,
        damagePortion: 0,
        image: "https://teralore.com/items/icon_skills/divinelightning_tex.png"
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
        skillImage: "https://teralore.com/items/icon_skills/punishingshield_tex.png"
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
        damagePortion: 0.32,
        image: "https://i.imgur.com/ypw9hXX.png"
      },
      // grim strike
      {
        name: "Grim Strike",
        guaranteedCrit: false,
        glyphCrit: 1,
        innateSkillCrit: 1.3,
        glyphBaseCrit: 3,
        addCrit: 0,
        damagePortion: 0.2,
        image: "https://teralore.com/items/icon_skills/chainsuperblow_tex.png"
      },
      // dark harvest
      {
        name: "Dark Harvest",
        guaranteedCrit: true,
        glyphCrit: 1,
        innateSkillCrit: 1,
        glyphBaseCrit: 1,
        addCrit: 0,
        damagePortion: 0.15,
        image: "https://teralore.com/items/icon_skills/reversewithdraw_tex.png"
      },
      // shadow burst
      {
        name: "Shadow Burst",
        guaranteedCrit: false,
        glyphCrit: 2,
        innateSkillCrit: 1,
        glyphBaseCrit: 1,
        addCrit: 0,
        damagePortion: 0.12,
        image: "https://i.imgur.com/24UlITc.png"
      },
      // blinding scythes
      {
        name: "Blinding Scythes",
        guaranteedCrit: false,
        glyphCrit: 1,
        innateSkillCrit: 1,
        glyphBaseCrit: 1,
        addCrit: 0,
        damagePortion: 0.07,
        image: "https://teralore.com/items/icon_skills/sickleofbondage_tex.png"
      },
      // double sheer
      {
        name: "Double Sheer",
        guaranteedCrit: false,
        glyphCrit: 1,
        innateSkillCrit: 1,
        glyphBaseCrit: 1,
        addCrit: 0,
        damagePortion: 0.04,
        image: "https://teralore.com/items/icon_skills/chainsmash_tex.png"
      },
      // recall scythes
      {
        name: "Recall Scythes",
        guaranteedCrit: false,
        glyphCrit: 1,
        innateSkillCrit: 1,
        glyphBaseCrit: 1,
        addCrit: 0,
        damagePortion: 0.03,
        image: "https://teralore.com/items/icon_skills/withdraw_tex.png"
      },
      // whipsaw
      {
        name: "Whipsaw",
        guaranteedCrit: false,
        glyphCrit: 1,
        innateSkillCrit: 1,
        glyphBaseCrit: 1,
        addCrit: 0.3, // pendulum strike
        damagePortion: 0.02,
        image: "https://teralore.com/items/icon_skills/chainblade_tex.png"
      },
      // death spiral
      {
        name: "Death Spiral",
        guaranteedCrit: false,
        glyphCrit: 1,
        innateSkillCrit: 1,
        glyphBaseCrit: 1,
        addCrit: 0,
        damagePortion: 0.01,
        image: "https://teralore.com/items/icon_skills/chainbrandish_tex.png"
      },
      // retribution
      {
        name: "Retribution",
        guaranteedCrit: true,
        glyphCrit: 1,
        innateSkillCrit: 1,
        glyphBaseCrit: 1,
        addCrit: 0,
        damagePortion: 0.01,
        image: "https://teralore.com/items/icon_skills/counterattack_tex.png"
      },
       // spiral barrage
       {
        name: "Spiral Barrage",
        guaranteedCrit: false,
        glyphCrit: 2,
        innateSkillCrit: 0.5, // 0.5 according to data sheet, need to check
        glyphBaseCrit: 1,
        addCrit: 0,
        damagePortion: 0,
        image: "https://teralore.com/items/icon_skills/comboattack2_tex.png"
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
        ],
        skillImage: "https://teralore.com/items/icon_skills/assassination_tex.png"
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
        damagePortion: 0.25,
        image: "https://teralore.com/items/icon_skills/gaiacrucsh_tex.png"
      },
      // overhand strike
      {
        name: "Overhand Strike",
        guaranteedCrit: false,
        glyphCrit: 1,
        innateSkillCrit: 1.3,
        glyphBaseCrit: 1,
        addCrit: 0,
        damagePortion: 0.2,
        image: "https://teralore.com/items/icon_skills/cuttingslash_tex.png"
      },
      // measured slice
      {
        name: "Measured Slice",
        guaranteedCrit: false,
        glyphCrit: 3,
        innateSkillCrit: 1.5,
        glyphBaseCrit: 1,
        addCrit: 0,
        damagePortion: 0.2,
        image: "https://teralore.com/items/icon_skills/cuthead_tex.png"
      },
      // whirlwind
      {
        name: "Whirlwind",
        guaranteedCrit: false,
        glyphCrit: 1,
        innateSkillCrit: 1,
        glyphBaseCrit: 3,
        addCrit: 0.1,
        damagePortion: 0.12,
        image: "https://teralore.com/items/icon_skills/sworddance_tex.png"
      },
      // unsheathe
      {
        name: "Unsheathe",
        guaranteedCrit: false,
        glyphCrit: 1,
        innateSkillCrit: 50, // double check
        glyphBaseCrit: 1,
        addCrit: 0,
        damagePortion: 0.07,
        image: "https://teralore.com/items/icon_skills/drawsword_tex.png"
      },
      // eviscerate
      {
        name: "Eviscerate",
        guaranteedCrit: false,
        glyphCrit: 1,
        innateSkillCrit: 1.5,
        glyphBaseCrit: 1,
        addCrit: 0,
        damagePortion: 0.07,
        image: "https://teralore.com/items/icon_skills/jawbreaker_tex.png"
      },
      // heart thrust
      {
        name: "Heart Thrust",
        guaranteedCrit: false,
        glyphCrit: 1,
        innateSkillCrit: 1.4,
        glyphBaseCrit: 3,
        addCrit: 0,
        damagePortion: 0.03,
        image: "https://teralore.com/items/icon_skills/stingerblade_tex.png"
      },
      // savage strike
      {
        name: "Savage Strike",
        guaranteedCrit: false,
        glyphCrit: 1,
        innateSkillCrit: 10,
        glyphBaseCrit: 1,
        addCrit: 0,
        damagePortion: 0.03,
        image: "https://teralore.com/items/icon_skills/slidingslash_tex.png"
      },
      // knockdown strike
      {
        name: "Knockdown Strike",
        guaranteedCrit: false,
        glyphCrit: 1,
        innateSkillCrit: 1,
        glyphBaseCrit: 3,
        addCrit: 0,
        damagePortion: 0.01,
        image: "https://teralore.com/items/icon_skills/handyslash_tex.png"
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
        ],
        skillImage: "https://teralore.com/items/icon_skills/concentration_tex.png"
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
        ],
        skillImage: "https://teralore.com/items/icon_skills/sworddance_tex.png"
      }
    ]
  },

// --------------------------------------------------------------------------------------------- //

  // sorcerer
  {
    name: "Sorcerer",
    baseCrit: 50,
    skills: [
      // elemental fusion
      {
        name: "Elemental Fusion",
        guaranteedCrit: false,
        glyphCrit: 1,
        innateSkillCrit: 2.4,
        glyphBaseCrit: 1,
        addCrit: 0,
        critChance: 0,
        physFactor: 0.30,
        magFactor: 1.70,
        damageType: "Magical",
        damagePortion: 0.2,
        image: "https://teralore.com/items/icon_skills/fusion_tex.png"
      },
      // meteor strike
      {
        name: "Meteor Strike",
        guaranteedCrit: false,
        glyphCrit: 2,
        innateSkillCrit: 1.1,
        glyphBaseCrit: 1,
        addCrit: 0,
        critChance: 0,
        physFactor: 0.70,
        magFactor: 1.60,
        damageType: "Magical",
        damagePortion: 0.14,
        image: "https://teralore.com/items/icon_skills/hellfire_tex.png"
      },
      // arcane pulse
      {
        name: "Arcane Pulse",
        guaranteedCrit: false,
        glyphCrit: 1,
        innateSkillCrit: 1,
        glyphBaseCrit: 1,
        addCrit: 0,
        critChance: 0,
        physFactor: 0.38,
        magFactor: 1.28,
        damageType: "Magical",
        damagePortion: 0.12,
        image: "https://teralore.com/items/icon_skills/blastball_tex.png"
      },
      // fusion
      {
        name: "Fusion",
        guaranteedCrit: false,
        glyphCrit: 1,
        innateSkillCrit: 2.4,
        glyphBaseCrit: 1,
        addCrit: 0,
        critChance: 0,
        physFactor: 0.30,
        magFactor: 1.70,
        damageType: "Magical",
        damagePortion: 0.10,
        image: "https://teralore.com/items/icon_skills/fusion_tex.png"
      },
      // ice lance
      {
        name: "Ice Lance",
        guaranteedCrit: false,
        glyphCrit: 1,
        innateSkillCrit: 1,
        glyphBaseCrit: 1,
        addCrit: 0,
        critChance: 0,
        physFactor: 0.70,
        magFactor: 1.20,
        damageType: "Magical",
        damagePortion: 0.08,
        image: "https://teralore.com/items/icon_skills/icespear_tex.png"
      },
      // void pulse
      {
        name: "Void Pulse",
        guaranteedCrit: false,
        glyphCrit: 2,
        innateSkillCrit: 1.1,
        glyphBaseCrit: 1,
        addCrit: 0,
        critChance: 0,
        physFactor: 0.66,
        magFactor: 1.40,
        damageType: "Magical",
        damagePortion: 0.07,
        image: "https://teralore.com/items/icon_skills/lightofruin_tex.png"
      },
      // lightning strike
      {
        name: "Lightning Strike",
        guaranteedCrit: false,
        glyphCrit: 2,
        innateSkillCrit: 1,
        glyphBaseCrit: 1,
        addCrit: 0,
        critChance: 0,
        physFactor: 0.41,
        magFactor: 1.15,
        damageType: "Magical",
        damagePortion: 0.07,
        image: "https://teralore.com/items/icon_skills/c5_lightningstruck.png"
      },
      // nova
      {
        name: "Nova",
        guaranteedCrit: false,
        glyphCrit: 1,
        innateSkillCrit: 1.1,
        glyphBaseCrit: 1,
        addCrit: 0,
        critChance: 0,
        physFactor: 0.47,
        magFactor: 1.30,
        damageType: "Magical",
        damagePortion: 0.07,
        image: "https://teralore.com/items/icon_skills/manaburst_tex.png"
      },
      // implosion
      {
        name: "Implosion",
        guaranteedCrit: false,
        glyphCrit: 1,
        innateSkillCrit: 10,
        glyphBaseCrit: 1,
        addCrit: 0,
        critChance: 0,
        physFactor: 0.50,
        magFactor: 2.50,
        damageType: "Magical",
        damagePortion: 0.06,
        image: "https://teralore.com/items/icon_skills/collapse_tex.png"
      },
      // hail storm
      {
        name: "Hail Storm",
        guaranteedCrit: false,
        glyphCrit: 1,
        innateSkillCrit: 1.1,
        glyphBaseCrit: 1,
        addCrit: 0.15,
        critChance: 0,
        physFactor: 0.45,
        magFactor: 1.10,
        damageType: "Magical",
        damagePortion: 0.06,
        image: "https://teralore.com/items/icon_skills/icestorm_tex.png"
      },
      // frost sphere
      {
        name: "Frost Sphere",
        guaranteedCrit: false,
        glyphCrit: 1,
        innateSkillCrit: 1,
        glyphBaseCrit: 1,
        addCrit: 0,
        critChance: 0,
        physFactor: 0.70,
        magFactor: 1.22,
        damageType: "Magical",
        damagePortion: 0,
        image: "https://teralore.com/items/icon_skills/c5_iceorb.png"
      },
      // flaming barrage
      {
        name: "Flaming Barrage",
        guaranteedCrit: false,
        glyphCrit: 1,
        innateSkillCrit: 1,
        glyphBaseCrit: 1,
        addCrit: 0,
        critChance: 0,
        physFactor: 0.50,
        magFactor: 1.40,
        damageType: "Magical",
        damagePortion: 0,
        image: "https://teralore.com/items/icon_skills/trackinginferno_tex.png"
      }
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
        power: 0,
        uptime: 0.4,
        skillsAffected: [
          "All"
        ],
        skillImage: "https://teralore.com/items/icon_skills/blastball_tex.png"
      },
      // keen nova
      {
        name: "Keen Nova",
        guaranteedCrit: false,
        glyphCrit: 0,
        addCrit: 0,
        glyphBaseCrit: 0,
        bonusCrit: 75,
        power: 0,
        uptime: 0.4,
        skillsAffected: [
          "All"
        ],
        skillImage: "https://teralore.com/items/icon_skills/manaburst_tex.png"
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
        critChance: 0,
        physFactor: 1.77,
        magFactor: 0,
        damageType: "Physical",
        damagePortion: 0.35,
        image: "https://teralore.com/items/icon_skills/crescentcut_tex.png"
      },
      // twilight waltz
      {
        name: "Twilight Waltz",
        guaranteedCrit: false,
        glyphCrit: 1,
        innateSkillCrit: 4,
        glyphBaseCrit: 1,
        addCrit: 0,
        critChance: 0,
        physFactor: 1.85,
        magFactor: 0.45,
        damageType: "Physical",
        damagePortion: 0.13,
        image: "https://teralore.com/items/icon_skills/rageslash_tex.png"
      },
      // ground bash
      {
        name: "Ground Bash",
        guaranteedCrit: false,
        glyphCrit: 1,
        innateSkillCrit: 4, // data says 5, but 4 feels more accurate
        glyphBaseCrit: 1,
        addCrit: 0,
        critChance: 0,
        physFactor: 1.74,
        magFactor: 0.55,
        damageType: "Physical",
        damagePortion: 0.09,
        image: "https://teralore.com/items/icon_skills/cutting_tex.png"
      },
      // gnugnir's bite
      {
        name: "Gugnir's Bite",
        guaranteedCrit: false,
        glyphCrit: 3, // makes the thingy about right
        innateSkillCrit: 1,
        glyphBaseCrit: 1,
        addCrit: 0,
        critChance: 0,
        physFactor: 1.55,
        magFactor: 0.20,
        damageType: "Physical",
        damagePortion: 0.09,
        image: "https://teralore.com/items/icon_skills/halfmoon_tex.png"
      },
      // leaping slash
      {
        name: "Leaping Slash",
        guaranteedCrit: false,
        glyphCrit: 3,
        innateSkillCrit: 1,
        glyphBaseCrit: 1,
        addCrit: 0,
        critChance: 0,
        physFactor: 1.65,
        magFactor: 0.60,
        damageType: "Physical",
        damagePortion: 0.08,
        image: "https://teralore.com/items/icon_skills/risingshot_tex.png"
      },
      // maelstrom
      {
        name: "Maelstrom",
        guaranteedCrit: false,
        glyphCrit: 3, // 5 hits @ 3 +  last hit @ 6 = 3.5 average (not applied rn)
        innateSkillCrit: 1,
        glyphBaseCrit: 1,
        addCrit: 0,
        critChance: 0,
        physFactor: 1.62,
        magFactor: 0.45,
        damageType: "Physical",
        damagePortion: 0.07,
        image: "https://teralore.com/items/icon_skills/twister_tex.png"
      },
      // godsfall
      {
        name: "Godsfall",
        guaranteedCrit: true,
        glyphCrit: 1,
        innateSkillCrit: 1,
        glyphBaseCrit: 1,
        addCrit: 0,
        critChance: 0,
        physFactor: 1.87,
        magFactor: 0.50,
        damageType: "Physical",
        damagePortion: 0.06,
        image: "https://teralore.com/items/icon_skills/warbegin_tex.png"
      },
       // runeburst
       {
        name: "Runeburst",
        guaranteedCrit: false,
        glyphCrit: 1,
        innateSkillCrit: 3,
        glyphBaseCrit: 1,
        addCrit: 0,
        critChance: 0,
        physFactor: 0.20,
        magFactor: 2.80,
        damageType: "Magical",
        damagePortion: 0.03,
        image: "https://teralore.com/items/icon_skills/moonlightdash_tex.png"
      },
      // glaive strike
      {
        name: "Glaive Strike",
        guaranteedCrit: false,
        glyphCrit: 2,
        innateSkillCrit: 5,
        glyphBaseCrit: 1,
        addCrit: 0,
        critChance: 0,
        physFactor: 1.70,
        magFactor: 0.76,
        damageType: "Physical",
        damagePortion: 0.03,
        image: "https://teralore.com/items/icon_skills/throwglave_tex.png"
      },
      // bloodflower
      {
        name: "Bloodflower",
        guaranteedCrit: false,
        glyphCrit: 1,
        innateSkillCrit: 2,
        glyphBaseCrit: 1,
        addCrit: 0,
        critChance: 0,
        physFactor: 1.55,
        magFactor: 0.20,
        damageType: "Physical",
        damagePortion: 0,
        image: "https://teralore.com/items/icon_skills/brust_tex.png"
      },
      // dream slash
      {
        name: "Dream Slash",
        guaranteedCrit: false,
        glyphCrit: 1,
        innateSkillCrit: 1,
        glyphBaseCrit: 1,
        addCrit: 0,
        critChance: 0,
        physFactor: 0.7,
        magFactor: 1.70,
        damageType: "Magical",
        damagePortion: 0,
        image: "https://teralore.com/items/icon_skills/split_tex.png"
      }
    ],
    buffs: [
      // ragnarok
      {
        name: "Ragnarok",
        guaranteedCrit: false,
        glyphCrit: 0,
        addCrit: 0,
        glyphBaseCrit: 0,
        bonusCrit: 0,
        power: 50,
        uptime: 0.3,
        skillsAffected: [
          "All"
        ],
        skillImage: "https://teralore.com/items/icon_skills/redmoon_tex.png"
      },
      // godsfall
      {
        name: "Godsfall",
        guaranteedCrit: false,
        glyphCrit: 0,
        addCrit: 0,
        glyphBaseCrit: 0,
        bonusCrit: 0,
        power: 60,
        uptime: 0.23,
        skillsAffected: [
          "All"
        ],
        skillImage: "https://teralore.com/items/icon_skills/warbegin_tex.png"
      },
      // enhanced runeburst
      {
        name: "Enhanced Runeburst",
        guaranteedCrit: false,
        glyphCrit: 4,
        addCrit: 0,
        glyphBaseCrit: 0,
        bonusCrit: 0,
        power: 0,
        uptime: 1,
        skillsAffected: [
          "Shining Crescent",
          "Runeburst"
        ],
        skillImage: "https://teralore.com/items/icon_skills/moonlightdash_tex.png"
      },
      // carving spinning death
      {
        name: "Carving Spinning Death",
        guaranteedCrit: false,
        glyphCrit: 0,
        addCrit: 0.3,
        glyphBaseCrit: 0,
        bonusCrit: 0,
        power: 0,
        uptime: 0.3,
        skillsAffected: [
          "All"
        ],
        skillImage: "https://teralore.com/items/icon_skills/helicoptercuts_tex.png"
      },
      // spinning death: critical pummel
      {
        name: "Spinning Death: Critical Pummel",
        guaranteedCrit: false,
        glyphCrit: 0,
        addCrit: 0,
        glyphBaseCrit: 0,
        bonusCrit: 20,
        power: 0,
        uptime: 0.3,
        skillsAffected: [
          "All"
        ],
        skillImage: "https://teralore.com/items/icon_skills/helicoptercuts_tex.png"
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
        critChance: 0,
        physFactor: 1.80,
        magFactor: 0.36,
        damageType: "Physical",
        damagePortion: 0.26,
        image: "https://teralore.com/items/icon_skills/tumblingattack_tex.png"
      },
      // scythe
      {
        name: "Scythe",
        guaranteedCrit: false,
        glyphCrit: 3,
        innateSkillCrit: 1,
        glyphBaseCrit: 1,
        addCrit: 0,
        critChance: 0,
        physFactor: 1.70,
        magFactor: 0.87,
        damageType: "Physical",
        damagePortion: 0.25,
        image: "https://teralore.com/items/icon_skills/raker_tex.png"
      },
      // blade draw
      {
        name: "Blade Draw",
        guaranteedCrit: false,
        glyphCrit: 2,
        innateSkillCrit: 1,
        glyphBaseCrit: 1,
        addCrit: 0,
        critChance: 0,
        physFactor: 1.35,
        magFactor: 0.40,
        damageType: "Physical",
        damagePortion: 0.19,
        image: "https://teralore.com/items/icon_skills/dualslash_tex.png"
      },
      // blade waltz
      {
        name: "Blade Waltz",
        guaranteedCrit: false,
        glyphCrit: 1,
        innateSkillCrit: 2,
        glyphBaseCrit: 1,
        addCrit: 0,
        critChance: 0,
        physFactor: 1.25,
        magFactor: 0.55,
        damageType: "Physical",
        damagePortion: 0.11,
        image: "https://teralore.com/items/icon_skills/doublesworddance_tex.png"
      },
      // rain of blows
      {
        name: "Rain of Blows",
        guaranteedCrit: false,
        glyphCrit: 2, // skill advancement
        innateSkillCrit: 1,
        glyphBaseCrit: 1,
        addCrit: 0,
        critChance: 0,
        physFactor: 1.40,
        magFactor: 0.25,
        damageType: "Physical",
        damagePortion: 0.06,
        image: "https://teralore.com/items/icon_skills/pointattack_tex.png"
      },
      // blade frenzy
      {
        name: "Blade Frenzy",
        guaranteedCrit: false,
        glyphCrit: 1,
        innateSkillCrit: 10,
        glyphBaseCrit: 1,
        addCrit: 0,
        critChance: 0,
        physFactor: 1.70,
        magFactor: 1.20,
        damageType: "Physical",
        damagePortion: 0.03,
        image: "https://teralore.com/items/icon_skills/bladestorm_tex.png"
      },
      // combative strike
      {
        name: "Combative Strike",
        guaranteedCrit: false,
        glyphCrit: 1,
        innateSkillCrit: 1,
        glyphBaseCrit: 1,
        addCrit: 0,
        critChance: 0,
        physFactor: 1.35,
        magFactor: 0.25,
        damageType: "Physical",
        damagePortion: 0.02,
        image: "https://teralore.com/items/icon_skills/aggravatingstrike_tex.png"
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
        power: 18,
        uptime: 1,
        skillsAffected: [
          "All"
        ],
        skillImage: "https://teralore.com/items/icon_skills/ironwilla_tex.png"
      },
      // edge aerial scythe
      {
        name: "Edge Aerial Scythe",
        guaranteedCrit: false,
        glyphCrit: 1,
        addCrit: 0,
        glyphBaseCrit: 0,
        bonusCrit: 0,
        power: 0,
        uptime: 1,
        skillsAffected: [
          "Aerial Scythe"
        ],
        skillImage: "https://teralore.com/items/icon_skills/tumblingattack_tex.png"
      },
      // edge scythe
      {
        name: "Edge Scythe",
        guaranteedCrit: false,
        glyphCrit: 3,
        addCrit: 0,
        glyphBaseCrit: 0,
        bonusCrit: 0,
        power: 0,
        uptime: 1,
        skillsAffected: [
          "Scythe"
        ],
        skillImage: "https://teralore.com/items/icon_skills/raker_tex.png"
      },
      // deadly gamble
      {
        name: "Deadly Gamble",
        guaranteedCrit: false,
        glyphCrit: 0,
        addCrit: 0.5,
        glyphBaseCrit: 0,
        bonusCrit: 0,
        power: 0,
        uptime: 0.3,
        skillsAffected: [
          "All"
        ],
        skillImage: "https://teralore.com/items/icon_skills/deadlywill_tex.png"
      },
      // blade waltz chained: critical
      {
        name: "Blade Waltz Chained: Critical",
        guaranteedCrit: false,
        glyphCrit: 1,
        addCrit: 0,
        glyphBaseCrit: 0,
        bonusCrit: 0,
        power: 0,
        uptime: 0.5, // just an estimate
        skillsAffected: [
          "Blade Draw",
          "Rain of Blows"
        ],
        skillImage: "https://teralore.com/items/icon_skills/doublesworddance_tex.png"
      }
    ]
  }
];

/* format:

classes = [
  {
    name: "string"
    baseCrit: int
    skills: [
      {
        name: "string"
        guaranteedCrit: bool
        glyphCrit: float
        innateSkillCrit: float
        glyphBaseCrit: float
        addCrit: float
        critChance: float
        physFactor: float
        magFactor: float
        damageType: "string"
        damagePortion: float
        image: "string"
      }
    ],
    buffs: [
      {
        name: "string"
        guaranteedCrit: bool
        glyphCrit: float
        addCrit: float
        glyphBaseCrit: float
        bonusCrit: float
        uptime: float
        skillsAffected: ["string"]
        skillImage: "string"
      }
    ]
  }
];
*/
