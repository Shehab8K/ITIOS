import java.awt.BorderLayout;
import java.awt.Image;
import java.util.Date;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.swing.ImageIcon;
import javax.swing.JFrame;
import javax.swing.JLabel;
class BallMovement extends JFrame implements Runnable
{Thread th;
 
 JLabel JavaLabel=new JLabel();
 
 int x=10;
 int y=200;
 int direction=1;
 public BallMovement()
   {
       this.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    this.setTitle("Ball Movement");
    JavaLabel.setHorizontalAlignment(JLabel.CENTER);
    ImageIcon imageIcon = new ImageIcon("ball.png"); 
    Image image = imageIcon.getImage(); 
    Image NewImg = image.getScaledInstance(50, 50,  java.awt.Image.SCALE_SMOOTH);
    imageIcon = new ImageIcon(NewImg);  
    JavaLabel.setIcon(imageIcon);
    //JavaLabel.setText(JAVA);
    this.setLayout(null);
 JavaLabel.setBounds(x, y, 50, 50);
    this.add(JavaLabel);
    th=new Thread(this);
    th.start();
   }
   public static void main(String []args)
    {BallMovement app=new BallMovement ();
     app.setBounds(app.x,app.y,600,600);
     app.setVisible(true);
    }
   public void run(){
       while(true){
        if(direction==1){
        x++;
        y--;
        JavaLabel.setLocation(x,y);
       // repaint();
        if(y<=0){
   
           direction=2;
        }
        }else if(direction==2){
       
            y++;
            x++;
            JavaLabel.setLocation(x,y);
     //   repaint();
        
         if(x>=550){
            direction=3;
        }}
         else if(direction==3){
            y++;
            x--;
            JavaLabel.setLocation(x,y);
     //   repaint();
                if(y>=550){
                direction=4;}}
                else if(direction==4){
               y--;
            x--;
            JavaLabel.setLocation(x,y);
     //   repaint();
        if(x<=0){direction=1;}}


         
     
     
       try{
           Thread.sleep(10);
       }
       catch(InterruptedException ex){
           Logger.getLogger(BallMovement.class.getName()).log(Level.SEVERE, null, ex);
       }
}
   
}
}