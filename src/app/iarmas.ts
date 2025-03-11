export interface Iarmas {
    id: number;
    name: string;
    type: string;
    rarity: number;
    attack: {
      display: number;
    };
    damageType: string;
    assets: {
      icon: string;
      image: string;
    };
    crafting: {
      craftable: boolean;
      craftingMaterials: {
        quantity: number;
        item: {
          name: string;
          value: number;
        };
      }[];
    };
}
