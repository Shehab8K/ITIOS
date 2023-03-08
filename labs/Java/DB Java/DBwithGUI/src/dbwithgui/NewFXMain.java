/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package dbwithgui;

import javafx.application.Application;
import javafx.event.ActionEvent;
import javafx.event.EventHandler;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.scene.layout.StackPane;
import javafx.stage.Stage;

/**
 *
 * @author Shebo
 */
public class NewFXMain extends Application {
    
    @Override
        
        public void start(Stage stage) throws Exception {
        DBGUI root = new DBGUI();      
        Scene scene = new Scene(root);
        stage.setTitle("Database");
        stage.setScene(scene);
        stage.show();
        
        
       // stage.onCloseRequestProperty();
    }

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        launch(args);
    }
    
}
