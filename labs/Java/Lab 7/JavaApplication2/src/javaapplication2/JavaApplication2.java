import java.awt.BorderLayout;
import javax.swing.JFrame;
import javax.swing.JLabel;

class JavaWorld extends JFrame implements Runnable
{Thread th;
 String JAVA="java world";
 JLabel JavaLabel=new JLabel();
 int x=10;
 public JavaWorld()
   {
       this.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    this.setTitle("Banner Application :)");
    JavaLabel.setHorizontalAlignment(JLabel.CENTER);
    JavaLabel.setText("JAVA World");
    this.add(JavaLabel,BorderLayout.LINE_START);
    th=new Thread(this);
    th.start();
   }
   public static void main(String []args)
    {JavaWorld app=new JavaWorld ();
     app.setBounds(app.x,40,600,400);
     app.setVisible(true);
     app.setDefaultCloseOperation(EXIT_ON_CLOSE);
    }
   public void run()
   {while(true)
    {
    x=x + 10;
     JavaLabel.setLocation(x% getSize().width,40);
     
       try {
           Thread.sleep(100);
       } catch (InterruptedException ex) {
           System.out.println("Error");
       }
    }
   }
}