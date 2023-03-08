/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package hellowithcss;

import javafx.application.Application;
import javafx.event.ActionEvent;
import javafx.event.EventHandler;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.scene.effect.Reflection;
import javafx.scene.layout.StackPane;
import javafx.scene.paint.Color;
import javafx.scene.paint.CycleMethod;
import javafx.scene.paint.LinearGradient;
import javafx.scene.paint.Stop;
import javafx.scene.shape.Rectangle;
import javafx.scene.text.Font;
import javafx.scene.text.Text;
import javafx.scene.text.TextAlignment;
import javafx.stage.Stage;

/**
 *
 * @author Shebo
 */
public class NewFXMain extends Application {
    
    @Override
    public void start(Stage primaryStage) {
     /*   Button btn = new Button();
        btn.setText("Say 'Hello World'");
        btn.setOnAction(new EventHandler<ActionEvent>() {
            
            @Override
            public void handle(ActionEvent event) {
                System.out.println("Hello World!");
            }
        });  */
     
        
     
        StackPane root = new StackPane();
       // root.getChildren().add(btn);
        
       // My Scene
        Scene scene = new Scene(root, 300, 300);
        scene.setFill(null);
        // Rectangel
        
        Rectangle r1 = new Rectangle();
        r1.setWidth(300);
        r1.setHeight(300);
        r1.setId("bg");

        // adding text 
        Text middleText = new Text();
      //  middleText.setTextAlignment(TextAlignment.JUSTIFY);
        middleText.setText("Hello World");
        middleText.setId("text");
        
        Text middleText1 = new Text();
        middleText1.setText("Hello World");
        middleText1.setId("textref");
      //  middleText.setFill(Color.RED);
      //  middleText.setFont(new Font(30));
        
        // Reflection
      //  Reflection reflection = new Reflection();
      //  reflection.setFraction(1);
      //  middleText.setEffect(reflection);
       // r1.setEffect(reflection);
        scene.getStylesheets().add(getClass().getResource("Styles.css").toString());
        // Add to scene
        root.getChildren().add(r1);
        root.getChildren().add(middleText);
        root.getChildren().add(middleText1);
        
        primaryStage.setTitle("Hello World!");
        primaryStage.setScene(scene);
        primaryStage.show();
      //  scene.setFill(Color.BLUE);
    }

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        launch(args);
    }
    
}
