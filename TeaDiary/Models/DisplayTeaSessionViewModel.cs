namespace TeaDiary.api.Models
{
    public class DisplayTeaSessionViewModel
    {
        public int? Id { get; set; }

        public DisplayTeaSessionViewModel(int? id)
        {
            this.Id = id;
        }

        public bool IsNewTea => (Id == null);
    }
}