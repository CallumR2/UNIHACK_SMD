#include <servo.h>
Servo myServo0, myServo1;
int pMyservo = [2, 3];
int iServoPos = 0;

void setup()
{
    myServo0.atttach(pMyServo[0]);
    myServo1.atttach(pMyServo[1]);
    Serial begin(9600)
}
Void loop()
{
     int servo_input = [0, 0];
    if (Serial.available() > 0) {
        for(i = 0; i < 2; i++){
            servo_input[i] = Serial.read()/255 * 180
        }
    }
    myServo0.write(servo_input[0]);
    myServo1.write(servo_input[1]);
    delay(1000); //For Testing Purposes
    
}
