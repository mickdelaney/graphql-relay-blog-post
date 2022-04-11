using Accounts;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddDbContext<AccountsDbContext>(options => options.UseSqlite("Data Source=accounts.db"));
builder.Services
    .AddGraphQLServer()
    .AddQueryType<Query>()
    .AddMutationType<Mutation>()
    .AddGlobalObjectIdentification()
    .AddQueryFieldToMutationPayloads();

var app = builder.Build();

app.UseDeveloperExceptionPage();
app.UseRouting();
app.UseEndpoints(endpoints =>
{
    endpoints.MapGraphQL();
});

app.Run();