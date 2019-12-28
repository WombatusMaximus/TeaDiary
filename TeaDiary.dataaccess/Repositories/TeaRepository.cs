using System;
using System.CodeDom;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
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
            var tea = context.Teas.Find(teaId);
            if (tea==null||tea.UserId == userId)
            {
                return tea; 
            }
            else
            {
                return null;
            }
        }

        public IList<Tea> GetByName(int userId, string teaName, bool strict = true)
        {
            var teaList = context.Teas.Where(
                tea => tea.UserId == userId &&
                       (strict ? tea.Name == teaName : tea.Name.Contains(teaName))
                ).ToList();
            return teaList;
        }

        public IList<Tea> GetByType(int userId, string teaType, bool strict = true)
        {
            var teaList = context.Teas.Where(
                tea => tea.UserId == userId &&
                       (strict ? tea.Type == teaType : tea.Type.Contains(teaType))
            ).ToList();
            return teaList;
        }

        public int Add(Tea tea)
        {
            if (tea.Id != null)
            {
                throw new InvalidOperationException();
            }

            if (tea.Name == null || tea.Type == null)
            {
                throw new ValidationException();
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
            if (tea.Id == null || tea.Name == null || tea.Type == null)
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