/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package javaapplication15;

import javafx.application.Application;
import javafx.event.ActionEvent;
import javafx.event.EventHandler;
import javafx.geometry.Insets;
import javafx.geometry.Pos;
import javafx.scene.Node;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.scene.layout.StackPane;
import javafx.stage.Stage;
import javafx.scene.effect.Reflection;
import javafx.scene.layout.BorderPane;
import javafx.scene.Scene;
import static javafx.scene.control.ContentDisplay.TOP;
import javafx.scene.paint.Color;
import javafx.scene.paint.CycleMethod;
import javafx.scene.paint.LinearGradient;
import javafx.scene.paint.Stop;
import javafx.scene.shape.Rectangle;
import javafx.scene.text.Font;
import javafx.scene.text.Text;
import javafx.scene.text.TextAlignment;
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
        
        // Gradient
        Stop[] stops = new Stop[] { new Stop(0, Color.BLACK), new Stop(1, Color.WHITE)}; //text.setEffect(reflection);
        LinearGradient linearGrad = new LinearGradient(0, 0, 0, 0.5, true, CycleMethod.REFLECT, stops); 
    

        //scene.setFill(linearGrad);
        
        // Rectangel
        
        Rectangle r1 = new Rectangle();
        r1.setWidth(300);
        r1.setHeight(300);
        r1.setFill(linearGrad);

        // adding text 
        Text middleText = new Text();
        middleText.setTextAlignment(TextAlignment.JUSTIFY);
        middleText.setText("Hello World");
        middleText.setFill(Color.RED);
        middleText.setFont(new Font(30));
        
        // Reflection
        Reflection reflection = new Reflection();
        reflection.setFraction(1);
        middleText.setEffect(reflection);
       // r1.setEffect(reflection);

        // Add to scene
        root.getChildren().add(r1);
        root.getChildren().add(middleText);

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
