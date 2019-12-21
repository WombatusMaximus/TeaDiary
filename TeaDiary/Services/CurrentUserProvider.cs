using TeaDiary.business.Interfaces;

namespace TeaDiary.api.Services
{
    public class CurrentUserProvider: ICurrentUserProvider
    {
        public int GetUserId()
        {
            return 8;
        }

        public string GetUserName()
        {
            return "Tea Lover";
        }
    }
}