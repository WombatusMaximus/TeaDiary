using System;
using TeaDiary.business.Interfaces;
using TeaDiary.domain.Models;

namespace TeaDiary.business.Values
{
    public class TeaUpdater : ITeaUpdater
    {
        private readonly ITeaRepository teaRepository;
        private readonly ICurrentUserProvider currentUser;

        public TeaUpdater(ITeaRepository teaRepository, ICurrentUserProvider currentUser)
        {
            this.teaRepository = teaRepository;
            this.currentUser = currentUser;
        }
        public int Create(Tea tea)
        {
            tea.UpdateDate = tea.CreationDate = DateTime.Now;
            tea.UserId = currentUser.GetUserId();
            return teaRepository.Add(tea);
        }

        public bool Update(Tea tea)
        {
            tea.UpdateDate = DateTime.Now;
            tea.UserId = currentUser.GetUserId();
            return teaRepository.Update(tea);
        }

        public bool Delete(int id)
        {
            return teaRepository.Delete(id);
        }
    }
}