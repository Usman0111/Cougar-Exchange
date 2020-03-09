using System;
using System.Net;
using MySql.Data;
using MySql.Data.MySqlClient;
using System.Text.Json;
using System.IO;
using System.Text;
using System.Threading;

namespace myApp
{
    public class resp{
          public string HI { get; set; }
    public int TemperatureCelsius { get; set; }
    public string Summary { get; set; }
    public string SummaryField;

    public string[] SummaryWords { get; set; }
    }
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
    string connStr = "server=bojtdxm0loxzr8mvsmcx-mysql.services.clever-cloud.com;user=u8gadx0r2scln4go;database=bojtdxm0loxzr8mvsmcx;port=3306;password=IFIA7cTrYOWfWNRdMR5Z";
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
// using (var stream = new MemoryStream())
// {
//     using (var writer = new Utf8JsonWriter(stream))
//     {
//         writer.WriteStartObject();
//         writer.WriteString("date", "JASON IS COOL");
//         writer.WriteNumber("temp", 42);
//         writer.WriteEndObject();
//     }

//     string json = Encoding.UTF8.GetString(stream.ToArray());
//     Console.WriteLine(json);
// }
    resp w = new resp();
    string json = JsonSerializer.Serialize(w);
    Console.WriteLine(json);
    Console.WriteLine("Done.");

    // Construct a response.
while(true) {
        ThreadPool.QueueUserWorkItem(Process, listener.GetContext());    
    }
    void Process(object c) {
        // Note: The GetContext method blocks while waiting for a request. 
        Console.WriteLine("REQUEST MADE");
        var context = c as HttpListenerContext;
    HttpListenerRequest request = context.Request;
    // Obtain a response object.
    HttpListenerResponse response = context.Response;
    // process request and make response
    byte[] buffer = System.Text.Encoding.UTF8.GetBytes(json);
    // Get a response stream and write the response to it.
    response.ContentLength64 = buffer.Length;
    System.IO.Stream output = response.OutputStream;
    output.Write(buffer,0,buffer.Length);
}

    // You must close the output stream.
    // output.Close();
    //listener.Stop();
}
        static void Main(string[] args){

            Console.WriteLine("Hello World");
			string[] words= {"http://localhost:8080/index/"};
			SimpleListenerExample(words);
		}
	}
}