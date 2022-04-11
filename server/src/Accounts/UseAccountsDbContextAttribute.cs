using System.Reflection;
using HotChocolate.Types.Descriptors;

namespace Accounts;

public class UseAccountsDbContextAttribute : ObjectFieldDescriptorAttribute
{
    public override void OnConfigure
    (
        IDescriptorContext context,
        IObjectFieldDescriptor descriptor,
        MemberInfo member
    )
    {
        descriptor.UseDbContext<AccountsDbContext>();
    }
}