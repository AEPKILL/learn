public class Person
{
  public string FirstName { get; private set; }
  public string LastName { get; private set; }
  public Person(string first, string last)
  {
    this.FirstName = first;
    this.LastName = last;
  }

  public override string ToString() => $"{this.FirstName} {this.LastName}";

}