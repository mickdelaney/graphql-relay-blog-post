using System.Linq;
using HotChocolate;

namespace Accounts;

public class Query
{
    public IQueryable<Account> GetAccounts([Service] AccountsDbContext context) => context.Accounts;
}