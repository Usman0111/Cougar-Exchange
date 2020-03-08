using System;
using System.Net;
using MySql.Data;
using MySql.Data.MySqlClient;



namespace myApp
{
	class Program{
public static void SimpleListenerExample(string[] prefixes)
{
    if (!HttpListener.IsSupported)
    {
        Console.WriteLine ("Windows XP SP2 or Server 2003 is required to use the HttpListener class.");
        return;
    }

    if (prefixes == null || prefixes.Length == 0)
      throw new ArgumentException("prefixes");
    
    // Create a listener.
    HttpListener listener = new HttpListener();
    // Add the prefixes.
    foreach (string s in prefixes)
    {
        listener.Prefixes.Add(s);
    }
    listener.Start();
    Console.WriteLine("Listening...");
    string connStr = "server=localhost;user=root;database=cougarexchange;port=3306;password=root";
    MySqlConnection conn = new MySqlConnection(connStr);
    try
    {
        Console.WriteLine("Connecting to MySQL...");
        conn.Open();
                // Perform database operations
                //string sql = "SELECT Name, HeadOfState FROM Country WHERE Continent='Oceania'";
                //MySqlCommand cmd = new MySqlCommand(sql, conn);
                //MySqlDataReader rdr = cmd.ExecuteReader();

                //while (rdr.Read())
                //{
                  //  Console.WriteLine(rdr[0] + " -- " + rdr[1]);
                //}
                //rdr.Close();
            }
    catch (Exception ex)
    {
        Console.WriteLine(ex.ToString());
    }
    conn.Close();
    Console.WriteLine("Done.");
    // Note: The GetContext method blocks while waiting for a request. 
    HttpListenerContext context = listener.GetContext();
    HttpListenerRequest request = context.Request;
    // Obtain a response object.
    HttpListenerResponse response = context.Response;
    // Construct a response.
    string responseString = "<HTML><BODY> Hello world!</BODY></HTML>";
    byte[] buffer = System.Text.Encoding.UTF8.GetBytes(responseString);
    // Get a response stream and write the response to it.
    response.ContentLength64 = buffer.Length;
    System.IO.Stream output = response.OutputStream;
    output.Write(buffer,0,buffer.Length);
    // You must close the output stream.
    output.Close();
    //listener.Stop();
}
        static void Main(string[] args){

            Console.WriteLine("Hello World");
			string[] words= {"http://localhost:8080/index/"};
			SimpleListenerExample(words);
		}
	}
}