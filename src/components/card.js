// Card.js
const Card = ({ children }) => {
    return (
      <div style={{ 
        border: "2px solid black", 
        borderRadius: "8px", 
        padding: "20px", 
        marginBottom: "20px", 
        backgroundColor: "red" 
      }}>
        {children} {/* This will render whatever content is passed to the Card */}
      </div>
    );
  };
  
  export default Card;
  