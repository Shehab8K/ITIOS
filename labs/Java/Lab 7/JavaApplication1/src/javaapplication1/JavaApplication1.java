import javax.swing.JFrame;
import java.util.Date;
import javax.swing.JLabel;
import java.awt.BorderLayout;

class DateTimeApp extends JFrame implements Runnable
{        
    Thread th; Date d = new Date();
    JLabel timeLabel = new JLabel();
    public DateTimeApp()
    {
        this.setTitle("Date & Time Frame Application");
        timeLabel.setHorizontalAlignment(JLabel.CENTER);
        timeLabel.setText(d.toString());
        this.add(timeLabel,BorderLayout.CENTER);
        th = new Thread(this);
        th.start();
    }
    
     public static void main(String[] args)
    {
        DateTimeApp app = new DateTimeApp();
        app.setBounds(50,50,600,400);
        app.setVisible(true);
        app.setDefaultCloseOperation(EXIT_ON_CLOSE);
    }
        
    @Override
        public void run()
     {
        while(true)
        {
        d= new Date();
        timeLabel.setText(d.toString());
            try{
                Thread.sleep(1000); 
                }
            catch(InterruptedException e)
                {
                    System.out.println("Error");
                }
        }
     } 
 } 

