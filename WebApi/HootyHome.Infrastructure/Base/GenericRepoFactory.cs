using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HootyHome.Infrastructure.Base
{
  public class GenericRepoFactory
  {
        

    public GenericRepo Create(string connectionString)
    {
      var genericRepo = new GenericRepo(connectionString);
      return genericRepo;

    }
  }
}
