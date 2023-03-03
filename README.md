# UNI Hack SMD Group
The following is a repository for the SMD group in the UNI hack competition. The project aims to create a solar panel array that is able to move around through the use of servo motors. This project will be further subdivided into a mechanical segment, and a software segment. The mechanical portion will involve the connection of an Arduino into multiple servomotors as to allows for 360 degree movement. The software part will allow for manual movement of the Arduino as well as prediction of the best position of the solar panel. 
The following is a repository for the SMD group in the UNI hack competition. The project aims to create a solar panel array that is able to move around through the use of servo motors. This project will be further subdivided into a mechanical segment, and a software segment. The mechanical portion will involve the connection of an Arduino into multiple servomotors as to allows for 360 degree movement. The software part will allow for manual movement of the Arduino as well as prediction of the best position of the solar panel. 

## Software Breakdown
The software can be subdivided into x main sections:
1. GUI interface that allows for manual movement as well as API calls.
2. Sending the React state to the Arduino.
3. Interpretation of the state into Arduino actions

## Tech Stack
- Project is written in JS
- Uses React for the web framework
- Uses Johnny Fives as to interface with the servo motor
- Solaris UPV