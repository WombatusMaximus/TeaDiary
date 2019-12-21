using System.Collections.Generic;
using System.Linq;
using TeaDiary.business.Interfaces;
using TeaDiary.domain.Models;

namespace TeaDiary.business.Values
{
    public class TeaGetter : ITeaGetter
    {
        private readonly ITeaRepository teaRepository;
        private readonly ICurrentUserProvider currentUser;
        public TeaGetter(ITeaRepository teaRepository, ICurrentUserProvider currentUser)
        {
            this.teaRepository = teaRepository;
            this.currentUser = currentUser;
        }

        public IList<Tea> GetAll()
        {
            return teaRepository.GetAll(currentUser.GetUserId()).ToList();
        }

        public Tea GetById(int teaId)
        {
            return teaRepository.GetById(currentUser.GetUserId(), teaId);
        }

        public IList<Tea> GetByName(string name, bool isStrictSearch = true)
        {
            return teaRepository.GetByName(currentUser.GetUserId(), name, isStrictSearch);
        }

        public IList<Tea> GetByType(string teaType, bool isStrictSearch = true)
        {
            return teaRepository.GetByType(currentUser.GetUserId(), teaType, isStrictSearch).ToList();
        }
    }
}