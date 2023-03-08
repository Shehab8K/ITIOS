package database;

import static com.sun.org.apache.xalan.internal.lib.ExsltDatetime.date;
import java.sql.*;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Calendar;
/**
 *
 * @author ITI
 */
public class Database {

    public Database()
    {
        try
        {
         DriverManager.registerDriver(new com.mysql.cj.jdbc.Driver());
         Connection con=DriverManager.getConnection("jdbc:mysql://localhost:3306/intake37","root","conan123");
         Statement stmt=con.createStatement(ResultSet.TYPE_SCROLL_SENSITIVE,ResultSet.CONCUR_UPDATABLE);
       
         // Select All 
         String queryString=new String("select * from project");
         ResultSet rs=stmt.executeQuery(queryString);  
         
         // SHOWING
         while(rs.next())
         {
             System.out.println(rs.getString(1));
         }
         
                  
         // Instert 
         rs.last(); 
         rs.moveToInsertRow();
         rs.updateString("Pname", "Shehab");
         rs.updateInt("Pnumber",777 );
         rs.updateString("Plocation", "ITI");
         rs.updateString("City", "ITI");
         rs.updateInt("Dnum", 777);
         rs.insertRow();
         rs.beforeFirst();
         

         // Select INSERTED
          String selectSpecific = new String("select * from project where Pnumber = '777'");
          ResultSet selc=stmt.executeQuery(selectSpecific); 
          selc.last();
          System.out.println(selc.getString(1)+" "+selc.getInt(2)+" "+ selc.getString(3)+ " "+selc.getString(4)+" "+ selc.getInt(5)); 
          
          // UPDATE
          selc.updateString("Pname", "Ziad");
          selc.updateInt("Pnumber",898 );
          selc.updateString("Plocation", "Google");
          selc.updateString("City", "New York");
          selc.updateInt("Dnum", 898);
          selc.updateRow();
          
          
//                    try
//            {
//         DriverManager.registerDriver(new com.mysql.cj.jdbc.Driver());
//         Connection con=DriverManager.getConnection("jdbc:mysql://localhost:3306/intake37","root","conan123");
//         Statement stmt= con.createStatement(ResultSet.TYPE_SCROLL_SENSITIVE,ResultSet.CONCUR_UPDATABLE);
//       
//         // Select All 
//         String queryString=new String("select * from project");
//         ResultSet rs=stmt.executeQuery(queryString);  
//         
//         // SHOWING
//         while(rs.next())
//         {
//             System.out.println(rs.getString(1));
//         }
//         
//         stmt.close();
//         con.close();
//          }
//        catch (SQLException ex) 
//        {
//           ex.printStackTrace();
//        }
          
          System.out.println(selc.getString(1)+" "+selc.getInt(2)+" "+ selc.getString(3)+ " "+selc.getString(4)+" "+ selc.getInt(5)); 
          
          // DELETE
          selc.deleteRow();
          
         String lastShow=new String("select * from project");
         ResultSet ls=stmt.executeQuery(lastShow);   
         while(ls.next())
          {
             System.out.println(ls.getString(1)+" "+ls.getInt(2)+" "+ ls.getString(3)+ " "+ls.getString(4)+" "+ ls.getInt(5));
          }
          
         stmt.close();
         con.close();
         }
        catch (SQLException ex) 
        {
           ex.printStackTrace();
        }
    
    }
    
    public static void main(String[] args)
    {
        new Database();
    }
}