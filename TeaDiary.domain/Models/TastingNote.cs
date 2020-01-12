using System;
using System.Collections.Generic;
using System.Text;

namespace TeaDiary.domain.Models
{
    public class TastingNote : Resource
    {
        public TeaSession Session { get; set; }
        public int SessionId { get; set; }
        public Tea Tea { get; set; }
        public int TeaId { get; set; }
        public string UsedTeaware { get; set; }
        public string Comment { get; set; }
    }
}
