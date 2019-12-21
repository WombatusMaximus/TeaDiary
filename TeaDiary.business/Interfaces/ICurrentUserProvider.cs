using System.Collections.Generic;

namespace TeaDiary.business.Interfaces
{
    public interface ICurrentUserProvider
    {
        int GetUserId();
        string GetUserName();
    }
}