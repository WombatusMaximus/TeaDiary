using System.Collections;
using System.Collections.Generic;
using TeaDiary.domain.Models;

namespace TeaDiary.business.Values
{
    public interface ITeaGetter
    {
        IList<Tea> GetAll();
        Tea GetByID(int id);
        IList<Tea> GetByName(string name, bool isStrictSearch = true);
        IList<Tea> GetByType(string type, bool isStrictSearch = true);
    }
}