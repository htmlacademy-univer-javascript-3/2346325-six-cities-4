export type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
}

export type Locations = Location[];

export type City = {
  name: string;
  location: Location;
}
