using Autofac;

namespace TeaDiary.api
{
    public static class AutofacConfig
    {
        public static void AddApplicationServices(this ContainerBuilder builder)
        {
            //Register CONTROLLER as default INTERFACE realization
            //builder.RegisterType<CONTROLLER>().As<INTERFACE>();
            //builder.RegisterType<CONTROLLER>().AsSelf();
        }
    }
}