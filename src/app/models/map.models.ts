export interface IApartmentGeoLocations {
  agentInfo?:       AgentInfo;
  records?:         IRecord[];
  showContactInfo?: boolean;
  role?:            string;
  title?:           string;
  body?:            string;
}

export interface AgentInfo {
  accountID:     number;
  firstname:     string;
  lastname:      string;
  company:       string;
  splashMessage: string;
  customHeader:  string;
}

export interface IRecord {
  listID:                 number;
  order:                  number;
  propertyID:             number;
  name:                   string;
  streetAddress:          string;
  city:                   string;
  state:                  State;
  pets:                   boolean;
  washerDry:              WasherDry;
  photo:                  string;
  favorite:               boolean;
  highestSentCommissions: number;
  onsiteManager:          null;
  management:             null;
  proximity:              number;
  section8:               boolean;
  seniorHousing:          boolean;
  studentHousting:        boolean;
  floorplans:             Floorplan[];
  highValueAmenities:     HighValueAmenity[];
  paidUtilities:          string[];
  geocode:                Geocode[];
}

export interface Floorplan {
  bedrooms: number;
  type:     Type;
  price:    number;
}

export enum Type {
  EFF = "Eff",
  The1Bed = "1 Bed",
  The2Bed = "2 Bed",
  The3Bed = "3 Bed",
}

export interface Geocode {
  Longitude: string;
  Latitude:  string;
  Percision: Percision;
  IsValid:   boolean;
}

export enum Percision {
  Empty = "",
  GeometricCenter = "GEOMETRIC_CENTER",
  RangeInterpolated = "RANGE_INTERPOLATED",
  Rooftop = "ROOFTOP",
}

export enum HighValueAmenity {
  Basketball = "Basketball",
  BlackStainlessAppliances = "Black/Stainless Appliances",
  DogWalkPark = "Dog/Walk Park",
  FitnessCenter = "Fitness Center",
  Golf = "Golf",
  GraniteCountertops = "Granite Countertops",
  JoggingTrail = "Jogging Trail",
  Racquetball = "Racquetball",
  StainedConcereteFloors = "Stained Concerete Floors",
  Tennis = "Tennis",
  ValletTrash = "ValletTrash",
  Volleyball = "Volleyball",
  WoodFloors = "Wood Floors",
}

export enum State {
  Tx = "TX",
}

export enum WasherDry {
  Empty = "",
  FullsizeConnections = "FULLSIZE_CONNECTIONS",
  FullsizeFurnished = "FULLSIZE_FURNISHED",
  StackableFurnished = "STACKABLE_FURNISHED",
}
