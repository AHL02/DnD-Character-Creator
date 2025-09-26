export type ListItem = {
  index: string;
  name: string;
  url: string;
};

export type DndListResponse = {
  count: number;
  results: ListItem[];
};

export interface APIReference {
  index: string;
  name: string;
  url: string;
}

export interface AbilityBonus {
  bonus: number;
  ability_score: APIReference;
}

export interface Choice<T> {
  desc: string;
  choose: number;
  type: string;
  from: T[];
}

export interface Proficiency {
  index: string;
  name: string;
  url: string;
}

export interface Trait {
  index: string;
  name: string;
  url: string;
}

export interface Language {
  index: string;
  name: string;
  url: string;
}

export interface Race {
  index: string;
  name: string;
  url: string;
  speed: number;
  ability_bonuses: AbilityBonus[];
  alignment: string;
  age: string;
  size: string;
  size_description: string;
  starting_proficiencies: Proficiency[];
  starting_proficiency_options?: Choice<Proficiency>;
  languages: Language[];
  language_desc: string;
  traits: Trait[];
  subraces: APIReference[];
  updated_at: string;
}

export interface ClassFeature {
  index: string;
  name: string;
  desc: string[];
  level: number;
}

export interface Class {
  index: string;
  name: string;
  url: string;
  hit_die: number;
  proficiency_choices: {
    choose: number;
    from: {
      type: string;
      item: APIReference[];
    }[];
  }[];
  proficiencies: APIReference[];
  saving_throws: APIReference[];
  starting_equipment: {
    equipment: APIReference;
    quantity: number;
  }[];
  class_levels: ClassLevel[];
  subclass: APIReference[];
  spellcasting: {
    spellcasting_ability: APIReference;
    spells_known: number;
    spell_slots_level: number[];
  };
}

export interface ClassLevel {
  level: number;
  proficiency_bonus: number;
  class_features: ClassFeature[];
  rages: number;
  rage_damage: number;
  weapon_mastery: number;
}

export type DndClassDetails = {
  index: string;
  name: string;
  url: string;
  class_levels: ClassLevel[];
};


export interface SpellcastingLevelInfo {
  cantrips_known?: number;
  spells_known?: number;
  spell_slots_level_1?: number;
  spell_slots_level_2?: number;
  spell_slots_level_3?: number;
  spell_slots_level_4?: number;
  spell_slots_level_5?: number;
  spell_slots_level_6?: number;
  spell_slots_level_7?: number;
  spell_slots_level_8?: number;
  spell_slots_level_9?: number;
}

export interface ClassLevelResource {
  index?: string;
  url?: string;
  level?: number;
  ability_score_bonuses?: number;
  prof_bonus?: number;
  features?: APIReference[];
  spellcasting?: SpellcastingLevelInfo;
  class_specific?: Record<string, any>;  // for class-specific fields (e.g. “bard songs”, etc.)
  updated_at?: string;
}

export interface feature{
  level: number;
  index: string;
  name: string;
  url: string;
}

export type ClassLevelsResponse = ClassLevelResource[]