using Autofac;
using TeaDiary.business.Interfaces;
using TeaDiary.business.Values;
using TeaDiary.dataaccess;
using TeaDiary.dataaccess.Repositories;

namespace TeaDiary.api
{
    public static class AutofacConfig
    {
        public static void AddApplicationServices(this ContainerBuilder builder)
        {
            //Register CONTROLLER as default INTERFACE realization
            //builder.RegisterType<CONTROLLER>().As<INTERFACE>();
            //builder.RegisterType<CONTROLLER>().AsSelf();

            builder.RegisterType<TeaGetter>().As<ITeaGetter>();
            builder.RegisterType<TeaUpdater>().As<ITeaUpdater>();
            builder.RegisterType<TeaRepository>().As<ITeaRepository>();
            builder.RegisterType<UserProvider>().As<IUserProvider>();
            builder.RegisterType<TeaDiaryContext>().AsSelf();
        }
    }
}