using System.Collections.Generic;
using TeaDiary.business.Interfaces;
using TeaDiary.business.Values;

namespace TeaDiary.dataaccess.Repositories
{
    public class UserProvider: IUserProvider
    {
        public int GetUserId()
        {
            return 1;
        }

        public string GetUserName()
        {
            return "Tea Lover";
        }
    }
}