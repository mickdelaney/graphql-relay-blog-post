namespace Accounts;

public class Mutation
{
    public async Task<AddAccountPayload> AddAccountAsync
    (
        AddAccountInput input,
        [Service] 
        AccountsDbContext context
    )
    {
        var speaker = new Account
        {
            Name = input.Name,
            Bio = input.Bio,
            WebSite = input.WebSite
        };

        context.Accounts.Add(speaker);
        
        await context.SaveChangesAsync();

        return new AddAccountPayload(speaker);
    }
}