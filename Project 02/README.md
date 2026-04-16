# Project-02: LEMP Stack Deployment on AWS with Dynamic To-Do List

## Project Overview
This project demonstrates the deployment of a **LEMP stack** (Linux, Nginx, MySQL, PHP) on an AWS EC2 instance. 

I built a fully functional **To-Do List web application** that allows users to:
- Add new tasks
- View all tasks with timestamps
- Delete tasks
- Works beautifully on both desktop and mobile devices

The application connects PHP to MySQL to store and retrieve data dynamically.

**Live URL:** `http://<Your-EC2-Public-IP>/todo.php`

## Technologies Used
| Technology   | Version      | Purpose                  |
|--------------|--------------|--------------------------|
| Ubuntu       | 24.04 LTS    | Operating System         |
| Nginx        | Latest       | Web Server               |
| MySQL        | 8.0          | Database                 |
| PHP          | 8.3          | Server-side Scripting    |
| AWS EC2      | t3.micro     | Cloud Server             |

## Features Implemented
- Full LEMP stack setup from scratch
- Secure MySQL configuration with dedicated user
- Dynamic To-Do List (Create + Read + Delete)
- Clean, modern UI with hover effects
- Fully **mobile-friendly** (responsive design)
- Form validation and confirmation for delete action

## Setup Steps (Summary)

1. Launched Ubuntu 24.04 EC2 instance and configured security group (SSH + HTTP)
2. Updated system packages
3. Installed and configured **Nginx**
4. Installed and secured **MySQL** (set root password using `mysql_native_password`)
5. Installed **PHP** with `php-fpm` and `php-mysql`
6. Configured Nginx to process PHP files
7. Created database `todo_db`, user `todo_user`, and `tasks` table
8. Built `todo.php` with Add Task form and Delete functionality
9. Improved design and made it responsive for mobile

## Challenges Faced & Solutions
- Had difficulty setting MySQL root password initially → Solved by using `ALTER USER` command in safe mode.
- Nano editor became messy when editing large code → Learned to delete and recreate the file cleanly using `sudo rm`.
- PHP-MySQL connection issues → Fixed by using correct credentials and `mysqli`.
- Page not looking good on mobile → Added meta viewport tag and CSS media queries.


## What I Learned
- How Nginx works differently from Apache (event-driven, faster)
- Importance of PHP-FPM for connecting Nginx with PHP
- Proper MySQL user permissions and security practices
- How to connect PHP to MySQL using `mysqli`
- Making web applications responsive using CSS media queries
- Basic troubleshooting on Linux servers
- The value of clean documentation and version control

**Built as part of My DevOps Cloud Journey**  
Date: April 2026
