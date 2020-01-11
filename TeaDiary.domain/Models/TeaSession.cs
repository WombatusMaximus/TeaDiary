using System;
using System.Collections.Generic;
using System.Text;

namespace TeaDiary.domain.Models
{
    public class TeaSession : Resource
    {
        public User User { get; set; }
        public int UserId { get; set; }
        public DateTime Date { get; set; }
        public TimeSpan Duration { get; set; }
        public IList<User> Participants { get; set; }
        public string Notes { get; set; }
        public IList<TastingNote> Teas { get; set; }
    }
}
