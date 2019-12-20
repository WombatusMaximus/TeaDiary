using TeaDiary.domain.Models;

namespace TeaDiary.business.Values
{
    public interface ITeaUpdater
    {
        int Create(Tea tea);
        bool Update(Tea tea);
        bool Delete(int id);
    }
}