using Dapper;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HootyHome.Infrastructure.Base
{
  public class GenericRepo
  {
    //https://www.joesauve.com/async-dapper-and-async-sql-connection-management/
    private readonly string _connectionString;

    public GenericRepo(string connectionString)
    {
        _connectionString = connectionString;
    }

    private async Task<T> WithConnectionAsync<T>(Func<IDbConnection, Task<T>> execute)
    {
      try
      {
          using (var connection = new SqlConnection(_connectionString))
          {
              await connection.OpenAsync(); // Asynchronously open a connection to the database
              return await execute(connection); // Asynchronously execute getData, which has been passed in as a Func<IDBConnection, Task<T>>
          }
      }
      catch (TimeoutException ex)
      {
          throw new Exception(String.Format("{0}.WithConnection() experienced a SQL timeout", GetType().FullName), ex);
      }
      catch (SqlException ex)
      {
          throw new Exception(String.Format("{0}.WithConnection() experienced a SQL exception (not a timeout)", GetType().FullName), ex);
      }
    }

    public async Task<IEnumerable<T>> QueryAsync<T>(string proc, object p)
    { 
      using (var connection = new SqlConnection(_connectionString))
      {
        await connection.OpenAsync(); // Asynchronously open a connection to the database
                                      //return await execute(connection); // Asynchronously execute getData, which has been passed in as a Func<IDBConnection, Task<T>>
        return await connection.QueryAsync<T>(
            sql: proc,
            param: p,
            commandType: CommandType.StoredProcedure
          );
      }
    }

    public async Task<int> ExecuteAsync(string proc,object obj)
    {
      var result = await WithConnectionAsync(async c =>
      {
          var result = await c.ExecuteAsync(
              sql: proc,
              obj,
              commandType: CommandType.StoredProcedure);
          return result;
      });
      return result;
    }
  }
}
