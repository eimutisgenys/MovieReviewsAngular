export class StringList{
    public static OMDB_API_BASE : string = "http://www.omdbapi.com/?apikey=60d77be4&plot=long&t=";
    public static OMDB_API_BASE_ID : string = "http://www.omdbapi.com/?apikey=60d77be4&plot=long&i=";
    // public static CUSTOM_API_BASE : string = "http://radprojapi.azurewebsites.net/api/reviews/"; 
    public static CUSTOM_API_BASE_ALL : string = "http://localhost:63548/api/reviews/getreviews/"; 
    public static CUSTOM_API_BASE_ID : string = "http://localhost:63548/api/reviews/getreviewmovie/"; 
    public static CUSTOM_API_BASE_POST : string = "http://localhost:63548/api/reviews/createreview/"; 
}
