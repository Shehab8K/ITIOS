package notpad;

import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import javafx.application.Platform;
import javafx.event.ActionEvent;
import javafx.event.EventHandler;
import javafx.scene.control.Menu;
import javafx.scene.control.MenuBar;
import javafx.scene.control.MenuItem;
import javafx.scene.control.SeparatorMenuItem;
import javafx.scene.control.TextArea;
import javafx.scene.layout.AnchorPane;
import javafx.scene.layout.VBox;
import javafx.stage.FileChooser;
import javafx.stage.Window;
import javax.swing.JOptionPane;

public class NotePadUI extends VBox {

    protected final AnchorPane anchorPane;
    protected final TextArea textArea;
    protected final MenuBar menuBar;
    protected final Menu menu;
    protected final MenuItem menuItem;
    protected final MenuItem menuItem0;
    protected final MenuItem menuItem1;
    protected final SeparatorMenuItem separatorMenuItem;
    protected final MenuItem menuItem2;
    protected final Menu menu0;
    protected final MenuItem menuItem3;
    protected final SeparatorMenuItem separatorMenuItem0;
    protected final MenuItem menuItem4;
    protected final MenuItem menuItem5;
    protected final MenuItem menuItem6;
    protected final MenuItem menuItem7;
    protected final SeparatorMenuItem separatorMenuItem1;
    protected final MenuItem menuItem8;
    protected final Menu menu1;
    protected final MenuItem menuItem9;

    public NotePadUI() {

        anchorPane = new AnchorPane();
        textArea = new TextArea();
        menuBar = new MenuBar();
        menu = new Menu();
        menuItem = new MenuItem();
        menuItem0 = new MenuItem();
        menuItem1 = new MenuItem();
        separatorMenuItem = new SeparatorMenuItem();
        menuItem2 = new MenuItem();
        menu0 = new Menu();
        menuItem3 = new MenuItem();
        separatorMenuItem0 = new SeparatorMenuItem();
        menuItem4 = new MenuItem();
        menuItem5 = new MenuItem();
        menuItem6 = new MenuItem();
        menuItem7 = new MenuItem();
        separatorMenuItem1 = new SeparatorMenuItem();
        menuItem8 = new MenuItem();
        menu1 = new Menu();
        menuItem9 = new MenuItem();

        setPrefHeight(400.0);
        setPrefWidth(640.0);

        VBox.setVgrow(anchorPane, javafx.scene.layout.Priority.ALWAYS);
        anchorPane.setMaxHeight(-1.0);
        anchorPane.setMaxWidth(-1.0);
        anchorPane.setPrefHeight(-1.0);
        anchorPane.setPrefWidth(-1.0);

        textArea.setLayoutY(32.0);
        textArea.setPrefHeight(370.0);
        textArea.setPrefWidth(642.0);

        menuBar.setAccessibleRole(javafx.scene.AccessibleRole.MENU);
        menuBar.setPrefHeight(32.0);
        menuBar.setPrefWidth(642.0);

        menu.setMnemonicParsing(false);
        menu.setText("File");

        menuItem.setMnemonicParsing(false);
        menuItem.setText("New");
        menuItem.setOnAction((ActionEvent AE)->
        {
            File file = new File("C:\\Users\\shaho\\Desktop\\note.txt"); //initialize File object and passing path as argument  
            boolean result;  
            try   
            {  
            result = file.createNewFile();  //creates a new file  
            if(result)      // test if successfully created a new file  
            {  
            System.out.println("file created "+file.getCanonicalPath()); //returns the path string  
            }  
            else  
            {  
            System.out.println("File already exist at location: "+file.getCanonicalPath());  
            }  
            }   
            catch (IOException e)   
            {  
            e.printStackTrace();    //prints exception if any  
            }  
        });

        menuItem0.setMnemonicParsing(false);
        menuItem0.setText("Open");
        menuItem0.setOnAction((ActionEvent event) -> {
            FileChooser fileChooser = new FileChooser();
            fileChooser.setTitle("Open Resource File");
            Window stage = null;
            fileChooser.showOpenDialog(stage);
        });


      menuItem1.setMnemonicParsing(false);
        menuItem1.setText("Save");
        menuItem1.setOnAction((ActionEvent event) -> {
           FileChooser fc = new FileChooser();
           //Default name and extention
            FileChooser.ExtensionFilter ext = new FileChooser.ExtensionFilter("undefined", ".txt");
            File savefile = fc.showSaveDialog(null);
            try {
                FileWriter fw = new FileWriter(savefile);
                fw.write(textArea.getText());
                fw.close();
            } catch (IOException ex) {
                System.out.println(ex.getMessage());
            }
        });

        separatorMenuItem.setMnemonicParsing(false);

        menuItem2.setMnemonicParsing(false);
        menuItem2.setText("Exit");
        menuItem2.setOnAction((ActionEvent event) -> {
            Platform.exit();
        });


        menu0.setMnemonicParsing(false);
        menu0.setText("Edit");

        menuItem3.setMnemonicParsing(false);
        menuItem3.setText("Undo");
        menuItem3.setOnAction((ActionEvent event) -> {
            textArea.undo();
        });

        separatorMenuItem0.setMnemonicParsing(false);

        menuItem4.setMnemonicParsing(false);
        menuItem4.setText("Cut");
        menuItem4.setOnAction((ActionEvent event) -> {
            textArea.cut();
        });


        menuItem5.setMnemonicParsing(false);
        menuItem5.setText("Copy");
        menuItem5.setOnAction((ActionEvent event) -> {
            textArea.copy();
        });


        menuItem6.setMnemonicParsing(false);
        menuItem6.setText("Paste");
        menuItem6.setOnAction((ActionEvent event) -> {
            textArea.paste();
        });


        menuItem7.setMnemonicParsing(false);
        menuItem7.setText("Delete");

           menuItem7.setOnAction((ActionEvent event) -> {
             //String nameText = textArea.getSelectedText();
           textArea.replaceSelection("");
         }  );


        separatorMenuItem1.setMnemonicParsing(false);

        menuItem8.setMnemonicParsing(false);
        menuItem8.setText("Select All");
        menuItem8.setOnAction((ActionEvent event) -> {
            textArea.selectAll();
        });


        menu1.setMnemonicParsing(false);
        menu1.setText("Help");

        menuItem9.setMnemonicParsing(false);
        menuItem9.setText("About Notepad ");
        menuItem9.setOnAction((ActionEvent event) -> {
            String out = "THis is a NotePad";
            JOptionPane.showMessageDialog(null,out);
        });

        anchorPane.getChildren().add(textArea);
        menu.getItems().add(menuItem);
        menu.getItems().add(menuItem0);
        menu.getItems().add(menuItem1);
        menu.getItems().add(separatorMenuItem);
        menu.getItems().add(menuItem2);
        menuBar.getMenus().add(menu);
        menu0.getItems().add(menuItem3);
        menu0.getItems().add(separatorMenuItem0);
        menu0.getItems().add(menuItem4);
        menu0.getItems().add(menuItem5);
        menu0.getItems().add(menuItem6);
        menu0.getItems().add(menuItem7);
        menu0.getItems().add(separatorMenuItem1);
        menu0.getItems().add(menuItem8);
        menuBar.getMenus().add(menu0);
        menu1.getItems().add(menuItem9);
        menuBar.getMenus().add(menu1);
        anchorPane.getChildren().add(menuBar);
        getChildren().add(anchorPane);

    }
}
