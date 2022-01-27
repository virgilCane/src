namespace Homely.WebApi
{
  public class AppOptions
  {
    public string Environment { get; set; }
    public string ConnectionString { get; set; }

    public string[] CorsOrigins { get; set; }
  }
}
