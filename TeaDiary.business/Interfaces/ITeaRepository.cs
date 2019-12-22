using System.Collections.Generic;
using TeaDiary.domain.Models;

namespace TeaDiary.business.Interfaces
{
    public interface ITeaRepository
    {
        IEnumerable<Tea> GetAll(int userId);
        Tea GetById(int userId, int teaId);
        IList<Tea> GetByName(int userId, string teaName, bool isStrictSearch = true);
        IList<Tea> GetByType(int userId, string teaType, bool isStrictSearch = true);
        int Add(Tea tea);
        bool Update(int userId, Tea tea);
        bool Delete(int userId, int id);
    }
}