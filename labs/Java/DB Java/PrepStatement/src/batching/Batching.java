/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package batching;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.logging.Level;
import java.util.logging.Logger;

public class Batching {

    /**
     * @param args the command line arguments
     */
    
    public Batching()
    {
        try {
            DriverManager.registerDriver(new com.mysql.cj.jdbc.Driver());
            Connection con=DriverManager.getConnection("jdbc:mysql://localhost:3306/javatest","root","conan123");
            
            
            PreparedStatement pst = con.prepareStatement(" CREATE TABLE Employee1 (id int , first_name varchar(255),last_name varchar(255),sex varchar(20) , age int,address varchar(255),phone varchar(255),vaction_balance int)");
            int n = pst.executeUpdate();
            
            PreparedStatement pst1 = con.prepareStatement( " INSERT INTO Employee1 VALUES ( ? , ? ,?,?,?,?,?,?)" );
           pst1.setInt(1,1);
            pst1.setString(2 , "Yousef" );
            pst1.setString(3 , "Adel" );
            pst1.setString(4 , "Male" );
            pst1.setInt(5,22);
            pst1.setString(6 , "75st glsdjglsdkg" );
            pst1.setString(7 , "010259499" );
            pst1.setInt(8,30);
            
            
           int n1=pst1.executeUpdate();
           
           
            pst1.setInt(1,2);
            pst1.setString(2 , "Ali" );
            pst1.setString(3 , "Adel" );
            pst1.setString(4 , "Male" );
            pst1.setInt(5,50);
            pst1.setString(6 , "75st glsdjglsdkg" );
            pst1.setString(7 , "010259499" );
            pst1.setInt(8,30);
            
            n1=pst1.executeUpdate();
            
             pst1.setInt(1,3);
            pst1.setString(2 , "Asmaa" );
            pst1.setString(3 , "Adel" );
            pst1.setString(4 , "Female" );
            pst1.setInt(5,60);
            pst1.setString(6 , "75st glsdjglsdkg" );
            pst1.setString(7 , "010259499" );
            pst1.setInt(8,30);
            
            n1=pst1.executeUpdate();
            
             pst1.setInt(1,4);
            pst1.setString(2 , "omar" );
            pst1.setString(3 , "Adel" );
            pst1.setString(4 , "Male" );
            pst1.setInt(5,27);
            pst1.setString(6 , "75st glsdjglsdkg" );
            pst1.setString(7 , "010259499" );
            pst1.setInt(8,30);
            
            
            n1=pst1.executeUpdate();
            
             pst1.setInt(1,5);
            pst1.setString(2 , "Gamal" );
            pst1.setString(3 , "Adel" );
            pst1.setString(4 , "Male" );
            pst1.setInt(5,30);
            pst1.setString(6 , "75st glsdjglsdkg" );
            pst1.setString(7 , "010259499" );
            pst1.setInt(8,30);
            
            n1=pst1.executeUpdate();
            
             pst1.setInt(1,6);
            pst1.setString(2 , "Mohamed" );
            pst1.setString(3 , "Adel" );
            pst1.setString(4 , "Male" );
            pst1.setInt(5,55);
            pst1.setString(6 , "75st glsdjglsdkg" );
            pst1.setString(7 , "010259499" );
            pst1.setInt(8,30);
           
            n1=pst1.executeUpdate();
            
            
                pst1.close();
         con.close();
            
            
        } catch (SQLException ex) {
            ex.printStackTrace();
        }
    }       
    public static void main(String[] args) {
        // TODO code application logic here
        new Batching();
    
    
    }
    
}
