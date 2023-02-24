//Acá exportamos un type, que sirve para cuando sabemos de antemano que propiedades tendremos, y no es extensible
export type Genre =
  | "Sports"
  | "Racing"
  | "Shooting gallery"
  | "Maze"
  | "Scrolling shooter"
  | "Card game"
  | "Shooter";

//La interface es mas para cuando es un objeto y se puede extender para añadir propiedades mediante la propiedad "extends"
export interface Videogame {
  id: number;
  Game: string;
  GameLink: string;
  Year: number;
  Publisher: string;
  PublisherLink: string;
  Platform: string;
  PlatformLink: string;
  Genre: Genre;
}
