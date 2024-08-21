import './Dashboared.css'
import { useState , useEffect } from 'react';
export default function Dashboared() {
    const [name, setName] = useState('');
    const [country, setCountry] = useState('');
    const [comment, setComment] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('https://academy-backend-pq91.onrender.com/addcomment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, country, comment }),
        })
        .then(response => {
            if (response.ok) {
                alert('تم إضافة التعليق بنجاح');
                setName('');
                setCountry('');
                setComment('');
            } else {
                alert('حدث خطأ أثناء محاولة إضافة التعليق');
            }
        })
        .catch(error => console.error('Error adding comment:', error));
    };
    ///////////////////////////////////
    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetchComments();
    }, []);

    const fetchComments = () => {
        fetch('https://academy-backend-pq91.onrender.com/allcomments')
            .then(response => response.json())
            .then(data => setComments(data))
            .catch(error => console.error('Error fetching comments:', error));
    };

    const deleteComment = (id) => {
        fetch('https://academy-backend-pq91.onrender.com/deletecomment', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id }),
        })
        .then(response => {
            if (response.ok) {
                alert('تم حذف التعليق بنجاح');
                fetchComments();
            } else {
                alert('حدث خطأ أثناء محاولة حذف التعليق');
            }
        })
        .catch(error => console.error('Error deleting comment:', error));
    };

  return (
    <>
    <div className="container Dash">
    <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input 
                type="text" 
                id="name" 
                name="name" 
                value={name} 
                onChange={(e) => setName(e.target.value)}
            /><br/><br/>
            
            <label htmlFor="country">Country</label>
            <input 
                type="text" 
                id="country" 
                name="country" 
                value={country} 
                onChange={(e) => setCountry(e.target.value)}
            /><br/><br/>

            <label htmlFor="comment">Comment</label>
            <textarea 
                name="comment" 
                id="comment" 
                value={comment} 
                onChange={(e) => setComment(e.target.value)}
            ></textarea><br/><br/>

            <button type="submit">أضف تعليق</button>
        </form>
        <hr />
        <div id="comments">
            <h1 className='fw-bold text-center'>جميع التعليقات</h1>
            {comments.map((comment) => (
                <div key={comment.id} className="comment-box">
                    <p><strong>الاسم:</strong> {comment.name}</p>
                    <p><strong>الدولة:</strong> {comment.country}</p>
                    <p><strong>التعليق:</strong> {comment.comment}</p>
                    <button onClick={() => deleteComment(comment.id)}>حذف</button>
                </div>
            ))}
        </div>
    </div>
    </>
  )
}
