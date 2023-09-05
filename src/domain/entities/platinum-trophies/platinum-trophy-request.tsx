export default class PlatinumTrophyRequestBody {
   constructor(
      public game: string,
      public achievementDate: Date,
      public hoursPlayed: number,
      public rating: number,
      public imageUrl: string
   ) {}
}
