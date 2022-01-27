using HootyHome.AppService.Events;
using HootyHome.Infrastructure.Base;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.OpenApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Homely.WebApi
{
  public class Startup
  {
    public Startup(IConfiguration configuration)
    {
      Configuration = configuration;
    }

    public IConfiguration Configuration { get; }

    // This method gets called by the runtime. Use this method to add services to the container.
    public void ConfigureServices(IServiceCollection services)
    {
      var appOptions = Configuration.Get<AppOptions>();
      //makes appOptions available to IServiceProvider through DI
      //https://www.c-sharpcorner.com/article/asp-net-core-how-to-acces-configurations-using-options-pattern/
      services.Configure<AppOptions>(Configuration);

      ConfigureCors(services, appOptions);
      //DI
      services.AddTransient((serviceProvider) =>
      {
        return new GenericRepo(appOptions.ConnectionString);
      });
      services.AddTransient<EventsApplicationService>();

      services.AddControllers();
      services.AddSwaggerGen(c =>
      {
        c.SwaggerDoc("v1", new OpenApiInfo { Title = "Homely.WebApi", Version = "v1" });
      });
    }

    // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
    public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
    {
      if (env.IsDevelopment())
      {
        app.UseDeveloperExceptionPage();
        app.UseSwagger();
        app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "Homely.WebApi v1"));
      }

      app.UseHttpsRedirection();
      app.UseCors("CorsPolicy");
      app.UseRouting();

      app.UseAuthorization();

      app.UseEndpoints(endpoints =>
      {
        endpoints.MapControllers();
      });
    }
    private void ConfigureCors(IServiceCollection services, AppOptions appOptions)
    {
      // https://weblog.west-wind.com/posts/2016/Sep/26/ASPNET-Core-and-CORS-Gotchas
      services.AddCors(options =>
      {
        options.AddPolicy("CorsPolicy",
          builder => builder.WithOrigins(appOptions.CorsOrigins)
            .AllowAnyMethod()
            .AllowAnyHeader());
      });
    }
  }
}
