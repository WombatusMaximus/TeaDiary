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
        private TeaDiaryContext context;

        public TeaRepository(TeaDiaryContext context)
        {
            this.context = context;
        }
        public IEnumerable<Tea> GetAll(int userId)
        {
            return context.Teas.Where(tea => tea.UserId == userId).ToList();
        }

        public Tea GetById(int teaId)
        {
            return context.Teas.Find(teaId);
        }

        public IList<Tea> GetByName(int userId, string teaName, bool isStrictSearch = true)
        {
            if (isStrictSearch)
                return context.Teas.Where(tea => tea.Name==teaName && tea.UserId == userId).ToList();
            else
                return context.Teas.Where(tea => tea.Name.Contains(teaName) && tea.UserId == userId).ToList();
        }

        public IList<Tea> GetByType(int userId, string teaType, bool isStrictSearch = true)
        {
            if (isStrictSearch)
                return context.Teas.Where(tea => tea.Type==teaType && tea.UserId == userId).ToList();
            else
                return context.Teas.Where(tea => tea.Type.Contains(teaType) && tea.UserId == userId).ToList();
            
        }

        public int Add(Tea tea)
        {
            if (tea.ID != null)
            {
                throw new InvalidOperationException();
            }
            
            tea.UpdateDate = tea.CreationDate = DateTime.Now;
            var added = context.Teas.Add(tea);
            context.SaveChanges();
            tea.ID = added.ID;
            if (tea.ID == null)
            {
                throw new Exception();
            }
            else 
                return tea.ID.GetValueOrDefault();
        }

        public bool Update(Tea tea)
        {
            if (tea.ID == null)
            {
                return false;
            }
            var existing = context.Teas.Find(tea.ID);
            if (existing == null)
            {
                return false;
            }

            tea.CreationDate = existing.CreationDate;
            tea.UpdateDate = DateTime.Now;
            context.Teas.AddOrUpdate(tea);
            context.SaveChanges();
            return true;
        }

        public bool Delete(int id)
        {
            var existing = context.Teas.Find(id);
            if (existing == null)
            {
                return false;
            }

            context.Teas.Remove(existing);
            context.SaveChanges();
            return true;
        }
    }
}