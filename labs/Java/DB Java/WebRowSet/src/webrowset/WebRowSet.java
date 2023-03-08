/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package webrowset;

import com.sun.rowset.WebRowSetImpl;
import java.io.FileNotFoundException;
import java.io.FileWriter;
import java.io.IOException;
import java.sql.SQLException;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.sql.rowset.RowSetFactory;
import javax.sql.rowset.RowSetProvider;






/**
 *
 * @author Shebo
 */
class WebRowSet {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        // TODO code application logic here
         
        try {
            
                RowSetFactory factory = RowSetProvider.newFactory();
                javax.sql.rowset.WebRowSet wrowSet = factory.createWebRowSet();
                wrowSet.setUrl("jdbc:mysql://localhost:3306/sakila");
                wrowSet.setUsername("root");
                wrowSet.setPassword("conan123");
                int [] keys = {1};
                wrowSet.setKeyColumns(keys);
                wrowSet.setCommand("select * from actor");
                wrowSet.execute();
                FileWriter out = new FileWriter("employeelist.xml");        
                wrowSet.writeXml(out);
                out.close();
                wrowSet.beforeFirst();
                System.out.println(wrowSet.getMetaData().getColumnName(1));
                while(wrowSet.next()){
            System.out.print(wrowSet.getString(1));
            System.out.print(" "+wrowSet.getString(2));
            System.out.print(" "+wrowSet.getString(3));
            System.out.print("\n");
        }
        
           
                //CashedRowSet crs = new CachedRowSet();
                
        }
        catch(SQLException ex){ex.printStackTrace();} 
        catch (IOException ex) {
            ex.printStackTrace();
        }
    }  
}
