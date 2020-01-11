﻿using System.Collections.Generic;
using System.Data.SqlTypes;

namespace TeaDiary.domain.Models
{
    public class User: Resource
    {
        //coming soon
        public string Name { get; set; }
        public string PasswordHash { get; set; }
        public string EmailAdress { get; set; }
        public IList<Tea> Teas { get; set; }
        public IList<TeaSession> Sessions { get; set; }
    }
}