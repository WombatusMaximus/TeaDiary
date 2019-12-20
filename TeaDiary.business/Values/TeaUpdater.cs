using System;
using TeaDiary.business.Interfaces;
using TeaDiary.domain.Models;

namespace TeaDiary.business.Values
{
    public class TeaUpdater : ITeaUpdater
    {
        private readonly ITeaRepository values;
        private readonly IUserProvider user;

        public TeaUpdater(ITeaRepository values, IUserProvider user)
        {
            this.values = values;
            this.user = user;
        }
        public int Create(Tea tea)
        {
            tea.UpdateDate = tea.CreationDate = DateTime.Now;
            tea.UserId = user.GetUserId();
            return values.Add(tea);
        }

        public bool Update(Tea tea)
        {
            tea.UpdateDate = DateTime.Now;
            tea.UserId = user.GetUserId();
            return values.Update(tea);
        }

        public bool Delete(int id)
        {
            return values.Delete(id);
        }
    }
}