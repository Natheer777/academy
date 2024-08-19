import "./Comments.css";
import { useState, useEffect } from "react";
import axios from "axios";
export default function Comments() {
    const [comments, setComments] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    axios
      .get("https://academy-backend-pq91.onrender.com/allcomments")
      .then((response) => {
        setComments(response.data); // Store the fetched data in the state
      })
      .catch((error) => {
        console.error("Error fetching the comments:", error);
      });
  }, []); 
  return (
    <>
      <div className="container">
        <h1></h1>
        <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            <p><strong>Name:</strong> {comment.name}</p>
            <p><strong>Country:</strong> {comment.country}</p>
            <p><strong>Comment:</strong> {comment.comment}</p>
          </li>
        ))}
      </ul>
      </div>
    </>
  );
}
