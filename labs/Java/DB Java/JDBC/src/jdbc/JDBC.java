/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package jdbc;

import java.sql.SQLException;
import javax.sql.rowset.JdbcRowSet;
import javax.sql.rowset.RowSetFactory;
import javax.sql.rowset.RowSetProvider;


/**
 *
 * @author Shebo
 */
class JDBC {

    /**
     * @param args the command line arguments
     * @throws java.sql.SQLException
     */
    public static void main(String[] args) throws SQLException {
        JdbcRowSet rs = RowSetProvider.newFactory().createJdbcRowSet();
        rs.setUrl("jdbc:mysql://localhost:3306/intake37");
        rs.setUsername("root");
        rs.setPassword("conan123");
        rs.setCommand("select * from employee");
        rs.execute();
        
        while(rs.next())
        {
            System.out.print(rs.getString(1));
            System.out.print(" "+rs.getString(2));
            System.out.print(" "+rs.getString(3));
            System.out.print(" "+rs.getString(4));
            System.out.print("\n");

        }
     }
    
}
