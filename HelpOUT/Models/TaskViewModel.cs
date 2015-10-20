using System;

namespace HelpOUT.Models
{
    public class TaskViewModel
    {
        public int TaskId { get; set; }
        public string Title { get; set; }
        public DateTime Date { get; set; }
        public bool IsComplete { get; set; }
    }
}