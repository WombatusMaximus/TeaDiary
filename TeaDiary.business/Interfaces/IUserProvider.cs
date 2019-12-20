using System.Collections.Generic;

namespace TeaDiary.business.Interfaces
{
    public interface IUserProvider
    {
        int GetUserId();
        string GetUserName();
    }
}