<?php
$servername = "localhost";
$username = "todo_user";
$password = "TodoPass123!";   // Change this if your password is different
$dbname = "todo_db";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Handle Add New Task
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['task']) && !empty($_POST['task'])) {
    $new_task = trim($_POST['task']);
    $stmt = $conn->prepare("INSERT INTO tasks (task) VALUES (?)");
    $stmt->bind_param("s", $new_task);
    $stmt->execute();
    $stmt->close();
    header("Location: todo.php");
    exit();
}

// Handle Delete Task
if (isset($_GET['delete'])) {
    $delete_id = intval($_GET['delete']);
    $stmt = $conn->prepare("DELETE FROM tasks WHERE id = ?");
    $stmt->bind_param("i", $delete_id);
    $stmt->execute();
    $stmt->close();
    header("Location: todo.php");
    exit();
}

// Fetch all tasks
$sql = "SELECT id, task, created_at FROM tasks ORDER BY created_at DESC";
$result = $conn->query($sql);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>My DevOps Journey - To-Do List</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f7f9;
            margin: 40px;
            color: #333;
        }
        h1 {
            color: #2c3e50;
            text-align: center;
        }
        .container {
            max-width: 800px;
            margin: 0 auto;
            background: white;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }
        form {
            margin-bottom: 30px;
            text-align: center;
        }
        input[type="text"] {
            width: 70%;
            padding: 12px;
            font-size: 16px;
            border: 1px solid #ddd;
            border-radius: 5px;
        }
        button {
            padding: 12px 20px;
            font-size: 16px;
            background-color: #3498db;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }
        button:hover {
            background-color: #2980b9;
        }
        .delete-btn {
            background-color: #e74c3c;
            color: white;
            padding: 6px 12px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 14px;
        }
        .delete-btn:hover {
            background-color: #c0392b;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
        }
        th, td {
            padding: 12px;
            text-align: left;
            border-bottom: 1px solid #ddd;
        }
        th {
            background-color: #3498db;
            color: white;
        }
        tr:hover {
            background-color: #f1f1f1;
        }
        .date {
            color: #777;
            font-size: 0.9em;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>🚀 My DevOps Cloud Journey - To-Do List</h1>
        <p style="text-align: center; color: #555;">Built with LEMP Stack on AWS (Project-02)</p>

        <!-- Add New Task Form -->
        <form method="POST">
            <input type="text" name="task" placeholder="Enter a new task..." required>
            <button type="submit">Add Task</button>
        </form>

        <table>
            <tr>
                <th>Task</th>
                <th>Created On</th>
                <th>Action</th>
            </tr>
            <?php
            if ($result->num_rows > 0) {
                while($row = $result->fetch_assoc()) {
                    echo "<tr>";
                    echo "<td>" . htmlspecialchars($row["task"]) . "</td>";
                    echo "<td class='date'>" . $row["created_at"] . "</td>";
                    echo "<td><a href='todo.php?delete=" . $row["id"] . "' onclick=\"return confirm('Delete this task?');\"><button class='delete-btn'>Delete</button></a></td>";
                    echo "</tr>";
                }
            } else {
                echo "<tr><td colspan='3'>No tasks yet. Add some above!</td></tr>";
            }
            $conn->close();
            ?>
        </table>
    </div>
</body>
</html>