package batching;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.logging.Level;
import java.util.logging.Logger;


public class Batching {
    Statement stmt;
    Connection con;
    public  Batching(){
        
        try {
           DriverManager.registerDriver(new com.mysql.cj.jdbc.Driver());
            con = DriverManager.getConnection("jdbc:mysql://localhost:3306/javatest", "root", "conan123");
            stmt =con.createStatement(ResultSet.TYPE_SCROLL_INSENSITIVE, ResultSet.CONCUR_UPDATABLE);
            System.out.println("Connection is created successfully:");
            
            System.out.println("Batching");
            //create statement object
            Statement stmt = con.createStatement() ;
            //turn off outo commit
            con.setAutoCommit(false);
            //create sql statement
            String queryString = "UPDATE employee1 SET vaction_balance = 45 WHERE age > 45";
            //add above statement to batch
            stmt.addBatch(queryString);
            //create another sql statement
            queryString="UPDATE employee1 SET first_name = CONCAT('Mr') where sex = 'male'";
            stmt.addBatch(queryString);
            queryString="UPDATE employee1 SET first_name = CONCAT('Mrs') where sex = 'Female'";
            stmt.addBatch(queryString);
            
            int[] count=stmt.executeBatch();
            con.commit();
            
            
            
        } catch (SQLException ex) {
           ex.printStackTrace();
        }finally {
            try {
                stmt.close();
                con.close();
            } catch (SQLException ex) {
                Logger.getLogger(Batching.class.getName()).log(Level.SEVERE, null, ex);
            }
    
    }
 }


    public static void main(String[] args) {
       new Batching();
    }
    
}