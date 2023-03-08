package dbwithgui;

//import com.mysql.cj.xdevapi.Statement;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.*;
import java.util.logging.Level;
import java.util.logging.Logger;
import javafx.scene.control.Label;
import javafx.scene.control.TextField;
import javafx.scene.layout.AnchorPane;
import javafx.scene.layout.Pane;
import javafx.scene.shape.Line;
import javafx.event.ActionEvent;
import javafx.scene.control.Button;

public class DBGUI extends AnchorPane {

    protected final Pane pane;
    protected final Label label;
    protected final Label label0;
    protected final Label label1;
    protected final Label label2;
    protected final Label label3;
    protected final Label label4;
    protected final Line line;
    protected final TextField textField;
    protected final TextField textField0;
    protected final TextField textField1;
    protected final TextField textField2;
    protected final TextField textField3;
    protected final TextField textField4;
    protected final Button button;
    protected final Button button0;
    protected final Button button1;
    protected final Button button2;
    protected final Button button3;
    protected final Button button4;
    protected final Button button5;
    

            Connection con;
            Statement stmt;
            String queryString=new String("select * from javadb");
            ResultSet rs;
    
//    public static int myoffset = 1;
//    
//    public void retrieve(int i)
//    {
//         try
//               {
//            DriverManager.registerDriver(new com.mysql.cj.jdbc.Driver());
//            Connection con=DriverManager.getConnection("jdbc:mysql://localhost:3306/intake37","root","conan123");
//            Statement stmt= con.createStatement(ResultSet.TYPE_SCROLL_SENSITIVE,ResultSet.CONCUR_UPDATABLE);
//            String queryString=new String("select * from javadb");
//            ResultSet rs=stmt.executeQuery(queryString);
//            
//            
//            
//            stmt.close();
//            con.close();
//             }
//           catch (SQLException ex) 
//           {
//              ex.printStackTrace();
//           }
//
//    }
    public void initDBResources() throws SQLException {
        DriverManager.registerDriver(new com.mysql.cj.jdbc.Driver());
            con=DriverManager.getConnection("jdbc:mysql://localhost:3306/intake37","root","conan123");
            stmt= con.createStatement(ResultSet.TYPE_SCROLL_SENSITIVE,ResultSet.CONCUR_UPDATABLE);
            rs=stmt.executeQuery(queryString);
    }
            
    
    public DBGUI() {
        
//             try
//               {
//            DriverManager.registerDriver(new com.mysql.cj.jdbc.Driver());
//            Connection con=DriverManager.getConnection("jdbc:mysql://localhost:3306/intake37","root","conan123");
//            Statement stmt= con.createStatement(ResultSet.TYPE_SCROLL_SENSITIVE,ResultSet.CONCUR_UPDATABLE);
//            String queryString=new String("select * from javadb");
//            ResultSet rs=stmt.executeQuery(queryString);
//            
//            
//            
//            stmt.close();
//            con.close();
//             }
//           catch (SQLException ex) 
//           {
//              ex.printStackTrace();
//           }
        
        pane = new Pane();
        label = new Label();
        label0 = new Label();
        label1 = new Label();
        label2 = new Label();
        label3 = new Label();
        label4 = new Label();
        line = new Line();
        textField = new TextField();
        textField0 = new TextField();
        textField1 = new TextField();
        textField2 = new TextField();
        textField3 = new TextField();
        textField4 = new TextField();
        button = new Button();
        button0 = new Button();
        button1 = new Button();
        button2 = new Button();
        button3 = new Button();
        button4 = new Button();
        button5 = new Button();

        setId("AnchorPane");
        setPrefHeight(400.0);
        setPrefWidth(600.0);

        pane.setLayoutX(-32.0);
        pane.setLayoutY(1.0);
        pane.setPrefHeight(413.0);
        pane.setPrefWidth(618.0);

        label.setLayoutX(49.0);
        label.setLayoutY(156.0);
        label.setText("Middle Name");

        label0.setLayoutX(48.0);
        label0.setLayoutY(121.0);
        label0.setText("First Name");

        label1.setLayoutX(49.0);
        label1.setLayoutY(80.0);
        label1.setText("ID");

        label2.setLayoutX(48.0);
        label2.setLayoutY(196.0);
        label2.setText("Lase Name");

        label3.setLayoutX(49.0);
        label3.setLayoutY(237.0);
        label3.setText("Email");

        label4.setLayoutX(49.0);
        label4.setLayoutY(274.0);
        label4.setText("Phone");

        line.setEndX(130.0);
        line.setLayoutX(159.0);
        line.setLayoutY(196.0);
        line.setRotate(90.0);
        line.setStartX(-100.0);

        textField.setLayoutX(209.0);
        textField.setLayoutY(116.0);
        textField.setPrefHeight(31.0);
        textField.setPrefWidth(343.0);

        textField0.setLayoutX(209.0);
        textField0.setLayoutY(151.0);
        textField0.setPrefHeight(31.0);
        textField0.setPrefWidth(343.0);

        textField1.setLayoutX(209.0);
        textField1.setLayoutY(191.0);
        textField1.setPrefHeight(31.0);
        textField1.setPrefWidth(343.0);

        textField2.setLayoutX(209.0);
        textField2.setLayoutY(232.0);
        textField2.setPrefHeight(31.0);
        textField2.setPrefWidth(343.0);

        textField3.setLayoutX(209.0);
        textField3.setLayoutY(269.0);
        textField3.setPrefHeight(31.0);
        textField3.setPrefWidth(343.0);

        textField4.setLayoutX(209.0);
        textField4.setLayoutY(75.0);
        textField4.setPrefHeight(31.0);
        textField4.setPrefWidth(343.0);
        textField4.setDisable(true);
        
        button.setLayoutX(77.0);
        button.setLayoutY(343.0);
        button.setMnemonicParsing(false);
        button.setText("New");
        button.setOnAction((ActionEvent AE)->
        {
           textField.clear();
           textField0.clear();
           textField1.clear();
           textField2.clear();
           textField3.clear();
           textField4.clear();
        });

        button0.setLayoutX(140.0);
        button0.setLayoutY(343.0);
        button0.setMnemonicParsing(false);
        button0.setText("Update");
        button0.setOnAction((ActionEvent AE)->
        {
            try
               {

             if(textField4.getText().equals(""))
             {
            rs.moveToInsertRow();
            rs.updateString("fname", textField.getText());
            rs.updateString("middlename", textField0.getText());
            rs.updateString("lname", textField1.getText());
            rs.updateString("email", textField2.getText());
            rs.updateString("phone", textField3.getText());
            rs.insertRow();
             }
             
             if(textField4.getText()!=null)
             {
            rs.updateString("fname", textField.getText());
            rs.updateString("middlename", textField0.getText());
            rs.updateString("lname", textField1.getText());
            rs.updateString("email", textField2.getText());
            rs.updateString("phone", textField3.getText());
            rs.updateRow();
             }
           // rs.beforeFirst();

           // stmt.close();
           // con.close();
             }
           catch (SQLException ex) 
           {
              ex.printStackTrace();
           }
           System.out.println(textField.getText());
           System.out.println(textField0.getText());
           System.out.println(textField1.getText());
           System.out.println(textField2.getText());
           System.out.println(textField3.getText());
           System.out.println(textField4.getText());
        });
        button1.setLayoutX(220.0);
        button1.setLayoutY(343.0);
        button1.setMnemonicParsing(false);
        button1.setText("Delete");
        button1.setOnAction((ActionEvent AE)->
        {
            try
             {
                rs.deleteRow();
                //rs=stmt.executeQuery(queryString);
                if(rs.next())
                {
                    this.textField.setText(rs.getString(2));
                    this.textField0.setText(rs.getString(3));
                    this.textField1.setText(rs.getString(4));
                    this.textField2.setText(rs.getString(5));
                    this.textField3.setText(rs.getString(6));
                    this.textField4.setText(rs.getString(1));
                }
                else
                {
                        textField.clear();
                        textField0.clear();
                        textField1.clear();
                        textField2.clear();
                        textField3.clear();
                        textField4.clear();
                }
             }
           catch (SQLException ex) 
           {
              ex.printStackTrace();
           }
        });

        button2.setLayoutX(292.0);
        button2.setLayoutY(343.0);
        button2.setMnemonicParsing(false);
        button2.setText("First");
        button2.setOnAction((ActionEvent AE)->
        {
            try
             {
              if(rs.first())
                {
                    rs.first();
                    this.textField.setText(rs.getString(2));
                    this.textField0.setText(rs.getString(3));
                    this.textField1.setText(rs.getString(4));
                    this.textField2.setText(rs.getString(5));
                    this.textField3.setText(rs.getString(6));
                    this.textField4.setText(rs.getString(1));
                }
             }
           catch (SQLException ex) 
           {
              ex.printStackTrace();
           }
        });
        button3.setLayoutX(351.0);
        button3.setLayoutY(343.0);
        button3.setMnemonicParsing(false);
        button3.setText("Previous");
        button3.setOnAction((ActionEvent AE)->
        {
            try
             {
               if(rs.previous())
                {
                    rs.previous();
                    this.textField.setText(rs.getString(2));
                    this.textField0.setText(rs.getString(3));
                    this.textField1.setText(rs.getString(4));
                    this.textField2.setText(rs.getString(5));
                    this.textField3.setText(rs.getString(6));
                    this.textField4.setText(rs.getString(1));
                }  
             }
           catch (SQLException ex) 
           {
              ex.printStackTrace();
           }
        });
        button4.setLayoutX(436.0);
        button4.setLayoutY(343.0);
        button4.setMnemonicParsing(false);
        button4.setText("Next");
        button4.setOnAction((ActionEvent AE)->
        {
            try
             {
                if(rs.next())
                {
                    this.textField.setText(rs.getString(2));
                    this.textField0.setText(rs.getString(3));
                    this.textField1.setText(rs.getString(4));
                    this.textField2.setText(rs.getString(5));
                    this.textField3.setText(rs.getString(6));
                    this.textField4.setText(rs.getString(1));
                }  
             }
           catch (SQLException ex) 
           {
              ex.printStackTrace();
           }
        });

        button5.setLayoutX(496.0);
        button5.setLayoutY(343.0);
        button5.setMnemonicParsing(false);
        button5.setText("Last");
        button5.setOnAction((ActionEvent AE)->
        {
            try
             {

                if(rs.last())
                {
                    rs.last();
                    this.textField.setText(rs.getString(2));
                    this.textField0.setText(rs.getString(3));
                    this.textField1.setText(rs.getString(4));
                    this.textField2.setText(rs.getString(5));
                    this.textField3.setText(rs.getString(6));
                    this.textField4.setText(rs.getString(1));
                }
             }
           catch (SQLException ex) 
           {
              ex.printStackTrace();
           }
        });

        pane.getChildren().add(label);
        pane.getChildren().add(label0);
        pane.getChildren().add(label1);
        pane.getChildren().add(label2);
        pane.getChildren().add(label3);
        pane.getChildren().add(label4);
        pane.getChildren().add(line);
        pane.getChildren().add(textField);
        pane.getChildren().add(textField0);
        pane.getChildren().add(textField1);
        pane.getChildren().add(textField2);
        pane.getChildren().add(textField3);
        pane.getChildren().add(textField4);
        pane.getChildren().add(button);
        pane.getChildren().add(button0);
        pane.getChildren().add(button1);
        pane.getChildren().add(button2);
        pane.getChildren().add(button3);
        pane.getChildren().add(button4);
        pane.getChildren().add(button5);
        getChildren().add(pane);
        
        try {
            this.initDBResources();
          if(  rs.next()){
              this.textField.setText(rs.getString(2));
              this.textField0.setText(rs.getString(3));
              this.textField1.setText(rs.getString(4));
              this.textField2.setText(rs.getString(5));
              this.textField3.setText(rs.getString(6));
              this.textField4.setText(rs.getString(1));
          }
        } catch (SQLException ex) {
            Logger.getLogger(DBGUI.class.getName()).log(Level.SEVERE, null, ex);
        }
    }
}
