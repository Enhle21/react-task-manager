function Card({ children }) {
    return(
        <div className="border rounded shadow p-4 bg-white mb-4">
            {children}
        </div>
    );
}
export default Card;