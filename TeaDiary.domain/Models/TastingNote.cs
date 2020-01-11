using System;
using System.Collections.Generic;
using System.Text;

namespace TeaDiary.domain.Models
{
    public class TastingNote : Resource
    {
        public TeaSession Session { get; set; }
        public Tea Tea { get; set; }
        public string UsedTeaware { get; set; }
        public string Comment { get; set; }
    }
}
