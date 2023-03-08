package notepad;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileOutputStream;
import java.io.FileReader;
import java.io.IOException;
import java.util.Scanner;
import javafx.event.ActionEvent;
import javafx.scene.control.Menu;
import javafx.scene.control.MenuBar;
import javafx.scene.control.MenuItem;
import javafx.scene.control.ScrollBar;
import javafx.scene.control.SeparatorMenuItem;
import javafx.scene.control.TextArea;
import javafx.scene.layout.BorderPane;
import javafx.stage.FileChooser;
import javafx.stage.Window;
import javax.swing.JFileChooser;
import javax.swing.filechooser.FileNameExtensionFilter;

public  class FXMLDocumentBase extends BorderPane {

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
    protected final TextArea textArea;
    protected final ScrollBar scrollBar;

    public FXMLDocumentBase() {

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
        textArea = new TextArea();
        scrollBar = new ScrollBar();

        setMaxHeight(USE_PREF_SIZE);
        setMaxWidth(USE_PREF_SIZE);
        setMinHeight(USE_PREF_SIZE);
        setMinWidth(USE_PREF_SIZE);
        setPrefHeight(400.0);
        setPrefWidth(600.0);

        BorderPane.setAlignment(menuBar, javafx.geometry.Pos.CENTER);

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

        menuItem0.setOnAction((ActionEvent) ->{
         FileChooser fileChooser = new FileChooser();
         fileChooser.setTitle("Open Resource File");
         Window stage = null;
            fileChooser.showOpenDialog(stage);
        });
        
        menuItem1.setMnemonicParsing(false);
        menuItem1.setText("Save");

        separatorMenuItem.setMnemonicParsing(false);

        menuItem2.setMnemonicParsing(false);
        menuItem2.setText("Exit");

        menu0.setMnemonicParsing(false);
        menu0.setText("Edit");

        menuItem3.setMnemonicParsing(false);
        menuItem3.setText("Undo");

        separatorMenuItem0.setMnemonicParsing(false);

        menuItem4.setMnemonicParsing(false);
        menuItem4.setText("Cut");

        menuItem5.setMnemonicParsing(false);
        menuItem5.setText("Copy");

        menuItem6.setMnemonicParsing(false);
        menuItem6.setText("Paste");

        menuItem7.setMnemonicParsing(false);
        menuItem7.setText("Delete");

        separatorMenuItem1.setMnemonicParsing(false);

        menuItem8.setMnemonicParsing(false);
        menuItem8.setText("Select All");

        menu1.setMnemonicParsing(false);
        menu1.setText("Help");

        menuItem9.setMnemonicParsing(false);
        menuItem9.setText("About Notepad");
        setTop(menuBar);

        BorderPane.setAlignment(textArea, javafx.geometry.Pos.CENTER);
        textArea.setPrefHeight(198.0);
        textArea.setPrefWidth(302.0);
        setCenter(textArea);

        BorderPane.setAlignment(scrollBar, javafx.geometry.Pos.CENTER);
        scrollBar.setOrientation(javafx.geometry.Orientation.VERTICAL);
        setRight(scrollBar);

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

    }
}
