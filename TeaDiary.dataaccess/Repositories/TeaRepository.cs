using System;
using System.CodeDom;
using System.Collections.Generic;
using System.Data.Entity.Migrations;
using System.Linq;
using TeaDiary.business.Interfaces;
using TeaDiary.dataaccess;
using TeaDiary.domain.Models;

namespace TeaDiary.dataaccess.Repositories
{
    public class TeaRepository:ITeaRepository
    {
        private readonly TeaDiaryContext context;

        public TeaRepository(TeaDiaryContext context)
        {
            this.context = context;
        }
        public IEnumerable<Tea> GetAll(int userId)
        {
            return context.Teas.Where(tea => tea.UserId == userId).ToList();
        }

        public Tea GetById(int userId, int teaId)
        {
            var result = context.Teas.Find(teaId);
            if (result==null||result.UserId == userId)
            {
                return result; 
            }
            else
            {
                throw new InvalidOperationException("Sorry, it looks like your user permissions are not quite right to be able to see this, thank you, have a good day!");
            }
        }

        public IList<Tea> GetByName(int userId, string teaName, bool isStrictSearch = true)
        {
            if (isStrictSearch)
            {
                return context.Teas.Where(tea => tea.Name == teaName && tea.UserId == userId).ToList();
            }
            else
            {
                return context.Teas.Where(tea => tea.Name.Contains(teaName) && tea.UserId == userId).ToList();
            }
        }

        public IList<Tea> GetByType(int userId, string teaType, bool isStrictSearch = true)
        {
            if (isStrictSearch)
            {
                return context.Teas.Where(tea => tea.Type==teaType && tea.UserId == userId).ToList();
            }
            else
            {
                return context.Teas.Where(tea => tea.Type.Contains(teaType) && tea.UserId == userId).ToList();
            }
        }

        public int Add(Tea tea)
        {
            if (tea.Id != null)
            {
                throw new InvalidOperationException();
            }
            
            tea.UpdateDate = tea.CreationDate = DateTime.Now;
            var added = context.Teas.Add(tea);
            context.SaveChanges();
            tea.Id = added.Id;
            if (tea.Id == null)
            {
                throw new Exception();
            }
            else
            {
                return tea.Id.GetValueOrDefault();
            }
        }

        public bool Update(int userId, Tea tea)
        {
            if (tea.Id == null)
            {
                return false;
            }

            var existing = context.Teas.Find(tea.Id);
            if (existing == null || existing.UserId != userId)
            {
                return false;
            }

            tea.CreationDate = existing.CreationDate;
            tea.UpdateDate = DateTime.Now;
            tea.UserId = userId;
            context.Teas.AddOrUpdate(tea);
            context.SaveChanges();
            return true;
        }

        public bool Delete(int userId, int id)
        {
            var existing = context.Teas.Find(id);
            if (existing == null || existing.UserId != userId)
            {
                return false;
            }

            context.Teas.Remove(existing);
            context.SaveChanges();
            return true;
        }
    }
}