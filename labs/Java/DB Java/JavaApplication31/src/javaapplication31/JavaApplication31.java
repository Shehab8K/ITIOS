/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package javaapplication31;


import com.mysql.cj.jdbc.MysqlDataSource;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.Properties;
import javax.sql.DataSource;
/**
 *
 * @author Shebo
 */
public class JavaApplication31 {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) throws IOException {
        // TODO code application logic here
        testProp();
        createProp();
    }
    
    static void testProp(){
            Properties prop = new Properties();
        OutputStream output = null;
        try {
            output = new FileOutputStream("db.properties");
            // TODO code application logic here
            prop.setProperty("MYSQL_DB_URL","jdbc:mysql://localhost:3306/sakila");
            prop.setProperty("MYSQL_DB_USERNAME", "root");
            prop.setProperty("MYSQL_DB_PASSWORD","conan123");
            prop.store(output,null);
        } catch (IOException ex) {
            ex.printStackTrace();
        }
        finally{
            if(output!=null){
                try {
                    output.close();
                } catch (IOException ex) {
                    //Logger.getLogger(DataSource.class.getName()).log(Level.SEVERE, null, ex);
                    ex.printStackTrace();

    }
            }
        }
    }
    
    static void createProp() throws FileNotFoundException, IOException{
            Properties prop = new Properties();
        OutputStream output = null;
        FileInputStream fis = null;
        MysqlDataSource mysqlDS = null;
        try {
            fis = new FileInputStream("db.properties");
            prop.load(fis);
            mysqlDS = new MysqlDataSource();
            mysqlDS.setURL(prop.getProperty("MYSQL_DB_URL"));
            mysqlDS.setUser(prop.getProperty("MYSQL_DB_USERNAME"));
            mysqlDS.setPassword(prop.getProperty("MYSQL_DB_PASSWORD"));
           
                Connection con = mysqlDS.getConnection();
                Statement stmt = con.createStatement();
                  ResultSet rs = stmt.executeQuery("select * from city");
                  while(rs.next())
                  {
                      System.out.println(rs.getString(2));
                  }
                  con.close();
              
        } catch (SQLException ex) {
            ex.printStackTrace();
        }
        finally{
            if(output!=null){
                try {
                    output.close();
                } catch (IOException ex) {
                    ex.printStackTrace();

    }
            }
        }
    }
    
}
