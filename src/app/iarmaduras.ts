export interface Iarmaduras {
    id: number;
    name: string;
    type: string;
    rank: string;
    defense: {
      base: number;
      max: number;
      augmented: number;
    };
    assets: {
      imageMale: string;
      imageFemale: string;
    };
}
