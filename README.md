# Student_Result_Publishing_System

>The primary function of the Student Result Publishing System is to publish semester-wise academic results to students accurately and promptly. Students can securely log in to the
system and view their subject-wise grades, cumulative GPA, and other academic details.Admins, on the other hand, can manage the system and control the publication of results. They have the privilege to upload result sheets, manage student details, and handle any result-relatedtasks. The system ensures real-time availability of results, enabling students to access their
performance feedback as soon as it is published.


## Functionalities

- User-Friendly Access: Students effortlessly log in using their college-provided email and credentials, accessing a personalized dashboard that simplifies academic record retrieval.
  They can    conveniently select specific semesters for streamlined access to relevant academic information.
  
- Semester-Wise Result Viewing: Within the user-friendly dashboard, students choose desired semesters via a dropdown menu, prompting the system to promptly display comprehensive results,
  including  course details, grades, and credits. This structured presentation offers clear insights into their academic performance.

- Data Security and Convenience: Robust security measures ensure the safety of sensitive academic data, while students can download or print results for their records and easy sharing.
  This dual- purpose feature enhances data security and facilitates communication with academic advisors or relevant parties.
  
- The "Department and Subject Management" functionality in the "Student Result Publishing System" permits administrators to create, update, view, and delete department details
  (department names)   and subject details (subject names, codes, associated department names, and semester numbers). The output is presented in a tabular form, enabling
  administrators to efficiently oversee and maintain accurate academic data, ensuring the system's seamless operation.

- Admins play a pivotal role in managing result sheets within the "Student Result Publishing System." They input and validate grades, credits, and academic data, ensuring accuracy.
  Once verified, they securely publish the results for students, maintaining data integrity and transparency in the academic process.
  
## Language Used

MySQL,React.js,Node.js, and Express.js. 


## Screenshots

<img src="https://user-images.githubusercontent.com/95367438/144710960-edca58cc-7ef4-4cd8-b6a8-0934b9de4c79.png" width="500" height="280">

## Installation
>STEP 1
MYSQL
- sudo apt install mysql-server
- CREATE DATABASE ResultSystem;
  
NodeJS
- sudo apt install nodejs
  
>STEP 2
  import backup.sql file to local MYSQL.Navigate to the directory where your SQL backup file (backup.sql) is located. You can use the cd command to change directories if needed.
  your_username: Replace this with your MySQL username.your_database_name: Replace this with the name of the database where you want to import the data.
- mysql -u your_username -p your_database_name < backup.sql

>STEP 3
- Replace password of your MYSQL in server.js


  


.

## Run Locally

- Go to C drive -> xampp -> htdocs -> create project2 folder ->place all the downloaded files and folder.  
- import .sql file in xammp.
- Go to browser type:localhost/project2/index.html.

>STEP 4
- Open Student_Result_Publishing_System
- go to Student_Result_Publishing_System>frontend type npm start
- open other terminal and go to Student_Result_Publishing_System_main
