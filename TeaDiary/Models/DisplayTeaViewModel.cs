namespace TeaDiary.api.Models
{
    public class DisplayTeaViewModel
    {
        public int? Id { get; set; }

        public DisplayTeaViewModel(int? id)
        {
            this.Id = id;
        }

        public bool IsNewTea
        {
            get
            {
                return (Id == null);
            }
        }
    }
}