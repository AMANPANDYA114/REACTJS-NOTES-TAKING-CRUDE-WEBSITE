// import { MdDeleteForever } from 'react-icons/md';
// import logo from '../public/images/delate.jpg';
const Note = ({ id, text, date, handleDeleteNote }) => {
	return (
		<div className='note'>
			<span>{text}</span>
			<div className='note-footer'>
				<small>{date}</small>
				<img
          src="https://i.postimg.cc/K83N86GM/delate.jpg"
          alt='Your Image Alt Text'
          onClick={() => handleDeleteNote(id)} // Attach the click handler to the image
          style={{ width: '20%' }} // Add any custom styles, such as width
        />

			  </div>
		</div>
	);
};

export default Note;
