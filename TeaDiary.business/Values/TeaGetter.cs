using System.Collections.Generic;
using System.Linq;
using TeaDiary.business.Interfaces;
using TeaDiary.domain.Models;

namespace TeaDiary.business.Values
{
    public class TeaGetter : ITeaGetter
    {
        private readonly ITeaRepository values;
        private readonly IUserProvider user;
        public TeaGetter(ITeaRepository values, IUserProvider user)
        {
            this.values = values;
            this.user = user;
        }

        public IList<Tea> GetAll()
        {
            return values.GetAll(user.GetUserId()).ToList();
        }

        public Tea GetByID(int teaId)
        {
            return values.GetById(teaId);
        }

        public IList<Tea> GetByName(string name, bool isStrictSearch = true)
        {
            return values.GetByName(user.GetUserId(), name, isStrictSearch);
        }

        public IList<Tea> GetByType(string teaType, bool isStrictSearch = true)
        {
            return values.GetByType(user.GetUserId(), teaType, isStrictSearch).ToList();
        }
    }
}