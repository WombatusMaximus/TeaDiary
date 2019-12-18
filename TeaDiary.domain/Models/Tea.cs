using System;

namespace TeaDiary.domain.Models
{
    public class Tea:Resource
    {
        public string Name { get; set; }
        public string AdditionalName { get; set; }
        public string Notes { get; set; }
        public DateTime CreationDate { get; set; }
        public DateTime UpdateDate { get; set; }
    }
}