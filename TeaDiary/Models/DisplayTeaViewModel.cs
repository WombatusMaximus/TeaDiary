namespace TeaDiary.api.Models
{
    public class DisplayTeaViewModel
    {
        public int? Id { get; set; }

        public DisplayTeaViewModel(int? id)
        {
            this.Id = id;
        }

        public bool Create
        {
            get
            {
                return (Id == null);
            }
        }
    }
}